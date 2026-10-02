from typing import List

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from ..controllers.learning import add_session, list_sessions, load_params, run_analysis, save_params
from ..models.schemas import AnalysisRequest, Params, SessionCreate
from ..services.french_scenario import generate_french_scenario


class ScenarioCard(BaseModel):
    french: str
    meaning: str


class ScenarioRequest(BaseModel):
    cards: List[ScenarioCard] = Field(default_factory=list)
    level: str = "A1"
    topic: str = "introducing yourself"


router = APIRouter(prefix="/api")


@router.get('/health')
def health(): return {'status': 'ok', 'service': 'tda-learning-agent'}


@router.get('/sessions')
def sessions(): return list_sessions()


@router.post('/sessions')
def create_session(payload: SessionCreate): return add_session(payload)


@router.get('/params')
def params(): return load_params()


@router.put('/params')
def put_params(payload: Params): return save_params(payload)


@router.post('/analysis')
def analysis(payload: AnalysisRequest): return run_analysis(payload.params)


@router.post('/french/scenario')
def french_scenario(payload: ScenarioRequest):
    if not payload.cards:
        raise HTTPException(status_code=400, detail='No flash cards were selected.')

    try:
        return generate_french_scenario([card.model_dump() for card in payload.cards], payload.level, payload.topic)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
