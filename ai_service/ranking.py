from sentence_transformers import SentenceTransformer, util
from sklearn.metrics.pairwise import rbf_kernel, cosine_similarity
import numpy as np
import torch

# Load lightweight model for performance
# 'all-MiniLM-L6-v2' is a distilled BERT model optimized for speed/accuracy trade-off
MODEL_NAME = 'all-MiniLM-L6-v2'
model = SentenceTransformer(MODEL_NAME)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def rank_internships(user_profile_text: str, internship_descriptions: list[str]):
    """
    Ranks internships based on semantic similarity to user profile.
    Uses:
    1. MiniLM Embeddings (BERT-based)
    2. Cosine Similarity
    3. RBF Kernel for non-linear scaling
    4. Sigmoid for probability normalization
    """
    
    # Encode user profile
    user_embedding = model.encode(user_profile_text, convert_to_tensor=True)
    
    # Encode internships (batch processing)
    internship_embeddings = model.encode(internship_descriptions, convert_to_tensor=True)
    
    # 1. Cosine Similarity (Linear Match)
    # Move to CPU for sklearn compatibility if using GPU
    user_emb_np = user_embedding.cpu().numpy().reshape(1, -1)
    intern_emb_np = internship_embeddings.cpu().numpy()
    
    cosine_scores = cosine_similarity(user_emb_np, intern_emb_np)[0]
    
    # 2. RBF Kernel (Non-linear Match)
    # Gamma parameter controls the 'reach' of a single training example
    # Here we treat user_profile as the 'center'
    rbf_scores = rbf_kernel(user_emb_np, intern_emb_np, gamma=0.5)[0]
    
    # Combine scores (Weighted average)
    # Giving more weight to Cosine as it's direct semantic similarity
    # RBF helps peak the distribution around very close matches
    combined_raw_scores = (0.7 * cosine_scores) + (0.3 * rbf_scores)
    
    # 3. Sigmoid Normalization (0-1 Probability)
    # Scale raw scores to spread them out before sigmoid
    # Cosine is -1 to 1. We want to map high similarity (e.g. > 0.5) to high probability.
    scaled_scores = (combined_raw_scores - 0.5) * 10 
    final_probs = sigmoid(scaled_scores)
    
    return final_probs.tolist()
