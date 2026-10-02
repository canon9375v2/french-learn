# Architecture — Frontend TDA

## Goal

This frontend is a React dashboard for the TDA Learning Agent backend. It lets a user inspect learner data, save sessions, update strategy parameters, and visualize analysis output returned by the backend.

## Flow

```text
Browser UI
  ↓
Fetch /api/params
  ↓
User edits strategy settings
  ↓
PUT /api/params
  ↓
User adds learning session
  ↓
POST /api/sessions
  ↓
POST /api/analysis
  ↓
Render snapshot + findings + phase + logs
```

## Key design choices

- UI and API are intentionally separate.
- The backend is the source of truth for analysis and persisted session data.
- Local state is used only for form editing and view selection.
- The app follows the same MVC split used by the backend: view renders, controller logic is in the backend, and the frontend simply calls the endpoints.
