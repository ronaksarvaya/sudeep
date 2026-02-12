from pydantic import BaseModel
from typing import List, Optional

class InternshipData(BaseModel):
    id: str
    description: str
    title: str

class RankingRequest(BaseModel):
    user_skills: List[str]
    user_preferences: str # Consolidated text of user profile
    internships: List[InternshipData]

class RankingResponse(BaseModel):
    sorted_internship_ids: List[str]
    scores: List[float]
