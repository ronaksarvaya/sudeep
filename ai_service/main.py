from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import uvicorn
from models import RankingRequest, RankingResponse
from ranking import rank_internships

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "AI Microservice is running"}

@app.post("/rank", response_model=RankingResponse)
def rank_internships_endpoint(request: RankingRequest):
    try:
        if not request.internships:
            return RankingResponse(sorted_internship_ids=[], scores=[])

        # Construct textual representation for embedding
        # Creating a rich text representation of the user profile
        user_text = f"Skills: {', '.join(request.user_skills)}. Preferences: {request.user_preferences}"
        
        internship_texts = [
            f"Title: {i.title}. Description: {i.description}" 
            for i in request.internships
        ]

        scores = rank_internships(user_text, internship_texts)

        # Pair scores with IDs
        scored_internships = list(zip([i.id for i in request.internships], scores))
        
        # Sort by score descending
        scored_internships.sort(key=lambda x: x[1], reverse=True)
        
        sorted_ids = [x[0] for x in scored_internships]
        sorted_scores = [x[1] for x in scored_internships]

        return RankingResponse(sorted_internship_ids=sorted_ids, scores=sorted_scores)

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
