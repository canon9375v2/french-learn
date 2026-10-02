# TDA Learning Agent — Backend-connected MVC prototype

## Run

```bash
cd tda_learning_agent_backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open http://127.0.0.1:8000

API docs: http://127.0.0.1:8000/docs

## French app integration

The backend now exposes a French conversation endpoint that the current frontend can call via `VITE_SCENARIO_API_URL`:

```bash
POST http://localhost:8000/api/french/scenario
```

Example body:

```json
{
  "level": "A1",
  "topic": "introducing yourself",
  "cards": [
    { "french": "Je m'appelle Ana.", "meaning": "My name is Ana." },
    { "french": "Je suis étudiante.", "meaning": "I am a student." }
  ]
}
```

The response matches the frontend’s scenario contract:

```json
{
  "title": "A1 introduction scenario",
  "situation": "You are meeting a new classmate in a language exchange at the university.",
  "openingMessage": "Bonjour ! Je suis ravi de vous parler aujourd’hui.",
  "nextQuestion": "Comment est-ce que vous décririez votre routine quotidienne en français ?",
  "targetPhrases": ["Je m'appelle Ana.", "Je suis étudiante."]
}
```

## Architecture

- `models/`: SQLite + Pydantic data model
- `controllers/`: persistence and application logic
- `services/analysis.py`: TDA/learner-analysis service boundary
- `services/french_scenario.py`: deterministic French role-play generator for the frontend
- `routers/api.py`: REST API
- `static/index.html`: dashboard UI and API client

The current analysis service is deterministic prototype logic. It deliberately exposes a clean boundary where real Mapper / persistent-homology computation can be inserted later.
