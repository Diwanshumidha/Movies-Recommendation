from fastapi import FastAPI, HTTPException, Depends, Request, status
from fastapi.security import APIKeyHeader
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field
from sentence_transformers import SentenceTransformer
from typing import List, Dict, Optional, Any, Union
import torch
import logging
import time
import os
import hashlib
import json
from functools import lru_cache
import numpy as np
from enum import Enum
import asyncio
from contextlib import asynccontextmanager
import prometheus_client
from prometheus_client import Counter, Histogram, Gauge
import uvicorn

# Logging Configuration
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
log = logging.getLogger("embed-api")

# Constants
DEFAULT_MODEL = "BAAI/bge-small-en-v1.5"
AVAILABLE_MODELS = {
    "bge-small": "BAAI/bge-small-en-v1.5",
    "bge-base": "BAAI/bge-base-en-v1.5",
    "all-MiniLM": "all-MiniLM-L6-v2",
    "mpnet-base": "all-mpnet-base-v2"
}
API_KEY = os.environ.get("API_KEY", "dev_key")  # Default key for development
MAX_BATCH_SIZE = 128
DEFAULT_CACHE_SIZE = 1024
ENABLE_METRICS = os.environ.get("ENABLE_METRICS", "true").lower() == "true"

# Metrics
if ENABLE_METRICS:
    REQUEST_COUNT = Counter("embedding_request_count", "Number of embedding requests", ["endpoint", "status"])
    EMBEDDING_LATENCY = Histogram("embedding_latency_seconds", "Time taken to generate embeddings", ["model"])
    BATCH_SIZE = Histogram("embedding_batch_size", "Batch sizes of embedding requests", buckets=[1, 2, 5, 10, 20, 50, 100, 200])
    MODEL_MEMORY_USAGE = Gauge("model_memory_usage_mb", "Model memory usage in MB", ["model"])

class PoolingStrategy(str, Enum):
    MEAN = "mean"
    MAX = "max"
    CLS = "cls"

class ModelManager:
    def __init__(self):
        self.models = {}
        self.current_model_name = DEFAULT_MODEL
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        log.info(f"Using device: {self.device}")

    def load_model(self, model_name: str):
        """Load a model if not already loaded"""
        if model_name not in self.models:
            log.info(f"Loading model: {model_name} on device: {self.device}")
            start = time.time()

            # Try to load with torch CUDA optimizations if available
            if self.device == "cuda":
                with torch.cuda.amp.autocast():
                    model = SentenceTransformer(model_name, device=self.device)
            else:
                model = SentenceTransformer(model_name, device=self.device)

            model.max_seq_length = 512

            # Optional: Quantize model to reduce memory footprint
            if self.device == "cuda" and torch.cuda.is_available():
                model.half()  # Convert to FP16 for faster inference on GPU

            self.models[model_name] = model
            load_time = time.time() - start
            log.info(f"Model {model_name} loaded in {load_time:.2f}s")

            if ENABLE_METRICS:
                # Estimate memory usage
                memory_mb = 0
                if torch.cuda.is_available():
                    torch.cuda.synchronize()
                    memory_mb = torch.cuda.max_memory_allocated() / 1024 / 1024
                MODEL_MEMORY_USAGE.labels(model=model_name).set(memory_mb)

    def get_model(self, model_name: Optional[str] = None) -> SentenceTransformer:
        """Get a loaded model, loading it first if necessary"""
        name = model_name if model_name else self.current_model_name
        if name not in self.models:
            self.load_model(name)
        return self.models[name]

    def set_current_model(self, model_name: str):
        """Set the current default model"""
        if model_name not in AVAILABLE_MODELS:
            raise ValueError(f"Model {model_name} not available. Choose from: {list(AVAILABLE_MODELS.keys())}")

        actual_model_name = AVAILABLE_MODELS[model_name]
        self.current_model_name = actual_model_name
        # Pre-load the model
        self.get_model(actual_model_name)
        return actual_model_name

# App startup and shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize model manager
    app.state.model_manager = ModelManager()
    # Load default model at startup
    app.state.model_manager.get_model()

    # Start metrics server if enabled
    if ENABLE_METRICS:
        from prometheus_client import start_http_server
        metrics_port = int(os.environ.get("METRICS_PORT", 8000))
        start_http_server(metrics_port)
        log.info(f"Metrics server started on port {metrics_port}")

    yield

    # Shutdown: Free resources
    log.info("Shutting down, clearing models")
    app.state.model_manager.models.clear()
    torch.cuda.empty_cache()

# FastAPI Setup
app = FastAPI(
    title="Enhanced Embedding API",
    version="2.0",
    description="Powerful text embedding service with multiple models, and advanced features",
    lifespan=lifespan
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Modify this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Models
class EmbedRequest(BaseModel):
    texts: List[str]
    model: Optional[str] = Field(None, description="Model to use for embeddings")
    pooling: Optional[PoolingStrategy] = Field(PoolingStrategy.MEAN, description="Pooling strategy")
    normalize: bool = Field(True, description="Whether to normalize embeddings")

class EmbedResponse(BaseModel):
    embeddings: List[List[float]]
    model: str
    dimensions: int
    processing_time: float

class ModelInfo(BaseModel):
    name: str
    dimensions: int
    max_sequence_length: int
    description: str

class InfoResponse(BaseModel):
    status: str
    version: str
    models: Dict[str, ModelInfo]
    current_model: str
    device: str

class SimilarityRequest(BaseModel):
    text1: str
    text2: str
    model: Optional[str] = None

class SimilarityResponse(BaseModel):
    similarity: float
    model: str

# Helper functions
def apply_pooling(embeddings: np.ndarray, strategy: str) -> np.ndarray:
    """Apply different pooling strategies to token embeddings"""
    if strategy == PoolingStrategy.MEAN:
        return embeddings  # SentenceTransformer already uses mean pooling by default
    elif strategy == PoolingStrategy.MAX:
        # This is a simplified example - actual implementation depends on model architecture
        return np.max(embeddings, axis=1)
    elif strategy == PoolingStrategy.CLS:
        # Again, simplified - actual implementation depends on model
        return embeddings[:, 0, :]
    return embeddings

def calculate_optimal_batch_size(texts: List[str]) -> int:
    """Calculate optimal batch size based on text length"""
    avg_length = sum(len(text) for text in texts) / len(texts)

    if avg_length > 500:
        return 8
    elif avg_length > 250:
        return 16
    else:
        return 32

# Endpoints
@app.get("/", response_model=InfoResponse)
async def root(request: Request) -> InfoResponse:
    """Get information about the API and available models"""
    model_manager = request.app.state.model_manager

    models_info = {}
    for key, model_name in AVAILABLE_MODELS.items():
        # Only add info for loaded models
        if model_name in model_manager.models:
            model = model_manager.get_model(model_name)
            models_info[key] = ModelInfo(
                name=model_name,
                dimensions=model.get_sentence_embedding_dimension(),
                max_sequence_length=model.max_seq_length,
                description=f"Embedding model {model_name}"
            )
        else:
            models_info[key] = ModelInfo(
                name=model_name,
                dimensions=0,  # Will be populated once loaded
                max_sequence_length=512,
                description=f"Embedding model {model_name} (not yet loaded)"
            )

    return InfoResponse(
        status="ok",
        version="2.0",
        models=models_info,
        current_model=model_manager.current_model_name,
        device=model_manager.device
    )

@app.post("/embed", response_model=EmbedResponse)
async def embed(req: EmbedRequest, request: Request) -> EmbedResponse:
    """Generate embeddings for a batch of texts"""
    start_time = time.time()

    if not req.texts:
        raise HTTPException(status_code=400, detail="Empty request: 'texts' is required")

    if len(req.texts) > MAX_BATCH_SIZE:
        raise HTTPException(status_code=413, detail=f"Batch size too large (max {MAX_BATCH_SIZE})")

    model_manager = request.app.state.model_manager
    model_name = AVAILABLE_MODELS.get(req.model, None) if req.model else model_manager.current_model_name

    try:
        model = model_manager.get_model(model_name)
        pooling_strategy = req.pooling

        # Use optimal batch size based on input length
        batch_size = calculate_optimal_batch_size(req.texts)

        # Embed texts
        raw_embeddings = model.encode(
            req.texts,
            batch_size=batch_size,
            normalize_embeddings=req.normalize,
            show_progress_bar=False,
            convert_to_numpy=True,
        )

        # Apply pooling if needed
        if pooling_strategy != PoolingStrategy.MEAN:
            raw_embeddings = apply_pooling(raw_embeddings, str(pooling_strategy))

        dimensions = len(raw_embeddings[0])
        processing_time = time.time() - start_time

        return EmbedResponse(
            embeddings=raw_embeddings.tolist(),
            model=model_name,
            dimensions=dimensions,
            processing_time=processing_time
        )
    except Exception as e:
        log.exception("Embedding failed")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/embed", response_model=EmbedResponse)
async def embed_query(
    q: str,
    model: Optional[str] = None,
    pooling: Optional[PoolingStrategy] = PoolingStrategy.MEAN,
    normalize: bool = True,
    request: Request = None
) -> EmbedResponse:
    """Generate embeddings for a single query text"""
    if not q:
        raise HTTPException(status_code=400, detail="Query parameter 'q' is required")

    # Reuse the POST endpoint logic by creating an EmbedRequest
    request_data = EmbedRequest(
        texts=[q],
        model=model,
        pooling=pooling,
        normalize=normalize
    )

    return await embed(request_data, request)

@app.post("/similarity", response_model=SimilarityResponse)
async def calculate_similarity(req: SimilarityRequest, request: Request) -> SimilarityResponse:
    """Calculate the cosine similarity between two texts"""
    model_manager = request.app.state.model_manager
    model_name = AVAILABLE_MODELS.get(req.model, None) if req.model else model_manager.current_model_name

    try:
        model = model_manager.get_model(model_name)

        # Encode both texts
        embeddings = model.encode(
            [req.text1, req.text2],
            normalize_embeddings=True,
            show_progress_bar=False
        )

        # Calculate cosine similarity
        similarity = np.dot(embeddings[0], embeddings[1])

        return SimilarityResponse(
            similarity=float(similarity),
            model=model_name
        )
    except Exception as e:
        log.exception("Similarity calculation failed")
        raise HTTPException(status_code=500, detail=str(e))

@app.put("/model/{model_name}")
async def set_model(model_name: str, request: Request) -> Dict[str, Any]:
    """Change the current default model"""
    model_manager = request.app.state.model_manager

    try:
        actual_model_name = model_manager.set_current_model(model_name)
        return {
            "status": "ok",
            "message": f"Model changed to {model_name} ({actual_model_name})"
        }
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        log.exception(f"Failed to change model to {model_name}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/metrics")
async def metrics() -> Dict[str, Any]:
    """Get API usage metrics"""
    if not ENABLE_METRICS:
        return {"status": "metrics disabled"}

    # Collect metrics from Prometheus
    metric_data = prometheus_client.generate_latest().decode("utf-8")

    # Parse and format metrics for API response
    metrics_dict = {}
    for line in metric_data.split("\n"):
        if line and not line.startswith("#"):
            parts = line.split(" ")
            metrics_dict[parts[0]] = float(parts[1])

    return metrics_dict


@app.get("/health")
async def health_check() -> Dict[str, str]:
    """Simple health check endpoint that doesn't require API key"""
    return {"status": "healthy"}

# Run the application
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 4259))
    log.info(f"Starting embedding service on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)
