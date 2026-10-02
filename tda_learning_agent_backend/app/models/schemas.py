from pydantic import BaseModel, Field
from typing import Optional, List

class SessionCreate(BaseModel):
    date: str
    activity: str
    score: Optional[float] = Field(default=None, ge=0, le=100)
    minutes: Optional[int] = Field(default=None, ge=0, le=600)
    error_tags: str = ""

class Params(BaseModel):
    daily: int = 30
    vocab: int = 1000
    listen: int = 65
    prod: int = 60
    adapt: float = 0.6
    metric: str = "cosine"
    res: int = 8
    over: int = 35
    pers: float = 0.25

class AnalysisRequest(BaseModel):
    params: Params

class Session(SessionCreate):
    id: int

class LearnerSnapshot(BaseModel):
    vocabulary: int
    listening: float
    sentence_recall: float
    shadowing: float
    writing: float
    speaking: float
    grammar: float
    reading: float
    active_passive_gap: float
    confidence: float

class AnalysisResult(BaseModel):
    snapshot: LearnerSnapshot
    phase: str
    bottleneck: str
    findings: List[str]
    topology: dict
    log: List[str]
