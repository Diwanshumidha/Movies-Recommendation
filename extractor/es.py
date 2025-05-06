from elasticsearch import Elasticsearch
from elasticsearch.helpers import bulk
import pandas as pd
import json
import sys

INDEX_NAME = "movies"
CSV_PATH = "cleaned_output.csv"
VECTOR_DIM = 384  # from MiniLM

def connect_to_elasticsearch():
    try:
        # Basic connection without any special configuration
        es = Elasticsearch("http://localhost:9200")

        # Test the connection
        if not es.ping():
            raise Exception("Could not connect to Elasticsearch")

        return es
    except Exception as e:
        print(f"❌ Error connecting to Elasticsearch: {str(e)}")
        print("Please make sure Elasticsearch is running on http://localhost:9200")
        sys.exit(1)

# Connect to Elasticsearch
print("Attempting to connect to Elasticsearch...")
es = connect_to_elasticsearch()

try:
    health = es.cluster.health()
    print("✅ Elasticsearch cluster health:", health["status"])
except Exception as e:
    print("❌ Elasticsearch is not healthy or not reachable:", e)
    sys.exit(1)


# Define index mapping
index_body = {
    "mappings": {
        "properties": {
            "title": {"type": "text"},
            "genres": {"type": "text"},
            "overview": {"type": "text"},
            "keywords": {"type": "text"},
            "text": {"type": "text"},
            "embedding": {
                "type": "dense_vector",
                "dims": VECTOR_DIM,
                "index": True,
                "similarity": "cosine",
                "index_options": {
                    "type": "hnsw",
                    "m": 16,
                    "ef_construction": 100
                }
            }
        }
    }
}

# Create index if not exists
if not es.indices.exists(index=INDEX_NAME):
    es.indices.create(index=INDEX_NAME, body=index_body)
    print(f"🆕 Created index '{INDEX_NAME}'")
else:
    print(f"ℹ️ Index '{INDEX_NAME}' already exists")

# Delete existing docs
es.delete_by_query(index=INDEX_NAME, body={"query": {"match_all": {}}})
print(f"🧹 All existing documents deleted from index '{INDEX_NAME}'")

# Load CSV
df = pd.read_csv(CSV_PATH)

# Validate structure
required_cols = {"title", "genres", "overview", "text", "embedding"}
if not required_cols.issubset(df.columns):
    print(f"❌ CSV missing required columns: {required_cols - set(df.columns)}")
    sys.exit(1)

# Generator for bulk insert
def generate_docs():
    for _, row in df.iterrows():
        try:
            yield {
                "_index": INDEX_NAME,
                "_source": {
                    "title": row["title"],
                    "genres": row["genres"],
                    "overview": row["overview"],
                    "keywords": row.get("keywords", ""),
                    "text": row["text"],
                    "embedding": json.loads(row["embedding"]),
                }
            }
        except Exception as e:
            print(f"⚠️ Skipping row due to error: {e}")

# Bulk index with error tracking
success, failed = bulk(es, generate_docs(), raise_on_error=False)

if failed:
    print(f"❌ {len(failed)} documents failed to index.")
    for error in failed:
        print(f"Error: {error}")
else:
    print(f"✅ Successfully uploaded {success} documents to Elasticsearch.")
