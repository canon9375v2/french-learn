# AGENTS.md

## Frontend objective

This frontend app is the React client for the Python TDA learning backend in `../tda_learning_agent_backend`.

The frontend should:
- read learner parameters from the backend
- save session data to the backend
- request analysis runs from `/api/analysis`
- show the backend's learner snapshot, phase, findings, and logs

## Project shape

- `src/App.tsx` is the main dashboard UI.
- `src/App.css` contains layout and styling.
- The app communicates with `http://localhost:8000/api` by default.
- Override via `VITE_TDA_API_URL` if needed.

## Backend contract

Important endpoints:
- `GET /api/health`
- `GET /api/params`
- `PUT /api/params`
- `GET /api/sessions`
- `POST /api/sessions`
- `POST /api/analysis`

The analysis payload is:

```json
{
  "params": {
    "daily": 30,
    "vocab": 1000,
    "listen": 65,
    "prod": 60,
    "adapt": 0.6,
    "metric": "cosine",
    "res": 8,
    "over": 35,
    "pers": 0.25
  }
}
```

## Rules for agents

- Keep the API layer separate from presentation logic.
- Use the backend result as the source of truth for the dashboard.
- Persist sessions in the backend, not only in browser state.
- Prefer small fetch helpers and typed request/response models.
- Keep the app friendly to a local development workflow with the FastAPI backend.
