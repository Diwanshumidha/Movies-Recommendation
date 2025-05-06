from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer
from elasticsearch import Elasticsearch
import os

INDEX_NAME = "movies"
VECTOR_DIM = 384
ES_HOST = os.getenv("ES_HOST", "http://localhost:9200")

app = Flask(__name__)

# Load model once
model = SentenceTransformer("all-MiniLM-L6-v2")

# Connect to Elasticsearch
es = Elasticsearch(ES_HOST)


def search_movies(query: str, title:str = "", k: int = 10):
    embedding = model.encode(query).tolist()
    search_body = {
        "size": k,
        "knn": {
            "field": "embedding",
            "k": k,
            "num_candidates": 100,
            "query_vector": embedding
        },

    }

    res = es.search(index=INDEX_NAME, body=search_body)
    hits = res.get("hits", {}).get("hits", [])

    return [
        {
            "title": hit["_source"]["title"],
            "score": hit["_score"],
            "overview": hit["_source"].get("overview", ""),
            "genres": hit["_source"].get("genres", ""),
            "other": {k: v for k, v in hit["_source"].items() if k != "embedding"}
        }
        for hit in hits
    ]


@app.route("/search", methods=["GET"])
def api_search():
    query = request.args.get("q")
    title = request.args.get("title")

    k = int(request.args.get("k", 10))

    if not query:
        return jsonify({"error": "Missing query parameter `q`"}), 400

    try:
        results = search_movies(query, k)
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=8000)
