import pandas as pd
import ast
import json
from sentence_transformers import SentenceTransformer

def convert_genre_array_to_string(file_path: str, output_path: str):
    df = pd.read_csv(file_path)

    def clean_genres(val):
            if isinstance(val, str):
                try:
                    data = json.loads(val)
                    return ", ".join([v['name'] for v in data if 'name' in v])
                except json.JSONDecodeError:
                    return ""
            else:
                return ", ".join([v['name'] for v in val if 'name' in v])

    if 'genres' in df.columns:
        df['genres'] = df['genres'].apply(clean_genres)
    else:
        print("⚠️ 'genres' column not found.")

    if 'keywords' in df.columns:
        df['keywords'] = df['keywords'].apply(clean_genres)
    else:
        print("⚠️ 'keywords' column not found.")


    def create_movie_detail(row):
        text = (
            f"Title: {row['title']}. "
            f"Genres: {row['genres']}. "
            f"Overview: {row['overview']}. "
            f"Keywords: {row.get('keywords', '')}."
        )

        return text

    df['text'] = df.apply(create_movie_detail, axis=1)

    model = SentenceTransformer('all-MiniLM-L6-v2')  # Fast and high quality

    print("🔄 Generating embeddings...")
    embeddings = model.encode(df['text'].tolist(), show_progress_bar=True)

    # Add embeddings as JSON strings (for CSV saving)
    df['embedding'] = [json.dumps(embedding.tolist()) for embedding in embeddings]

    df.to_csv(output_path, index=False)
    print(f"✅ Cleaned CSV saved to {output_path}")




if __name__ == '__main__':
    convert_genre_array_to_string("tmdb_5000_movies.csv", "cleaned_output.csv")
