# Code Map — TDA Learning Agent

This file is a navigation guide for developers and coding agents.
Use it before editing unfamiliar code.

## 1. Start Here

If you are new to the repository, read in this order:

```text
README.md
  ↓
ARCHITECTURE.md
  ↓
app/main.py
  ↓
app/routers/api.py
  ↓
app/controllers/learning.py
  ↓
app/models/schemas.py
  ↓
app/models/db.py
  ↓
app/services/analysis.py
  ↓
static/index.html
```

---

## 2. Repository Tree

```text
tda_learning_agent_backend/
│
├── AGENTS.md                 # Instructions for coding agents
├── ARCHITECTURE.md           # System architecture and design boundaries
├── CODE_MAP.md               # This navigation map
├── README.md                 # Setup and high-level project info
├── requirements.txt          # Python dependencies
├── data.sqlite3              # Runtime SQLite DB; generated/updated locally
│
├── app/
│   ├── __init__.py
│   ├── main.py               # FastAPI application bootstrap
│   │
│   ├── routers/
│   │   ├── __init__.py
│   │   └── api.py            # REST endpoints
│   │
│   ├── controllers/
│   │   ├── __init__.py
│   │   └── learning.py       # Application orchestration + persistence
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── db.py             # SQLite connection/schema
│   │   └── schemas.py        # Pydantic API contracts
│   │
│   └── services/
│       ├── __init__.py
│       └── analysis.py       # Learner/TDA analysis boundary
│
└── static/
    └── index.html            # Dashboard + browser API client
```

`__pycache__/` directories are generated Python bytecode and are not part of the conceptual architecture.

---

## 3. `app/main.py`

### Purpose
Application entry point.

### Important responsibilities

- create `FastAPI`
- configure CORS
- call `init_db()` on startup/import
- include API router
- mount `/static`
- serve dashboard at `/`

### Main dependency flow

```text
main.py
 ├── models.db.init_db
 ├── routers.api.router
 └── static/index.html
```

### Change this file when

- adding application middleware
- mounting a new router
- changing startup configuration
- changing static serving

Do not put learning logic here.

---

## 4. `app/routers/api.py`

### Purpose
HTTP boundary.

### Endpoints

| Method | Path | Calls |
|---|---|---|
| GET | `/api/health` | inline health response |
| GET | `/api/sessions` | `list_sessions()` |
| POST | `/api/sessions` | `add_session()` |
| GET | `/api/params` | `load_params()` |
| PUT | `/api/params` | `save_params()` |
| POST | `/api/analysis` | `run_analysis()` |

### Important rule
Keep this file thin.

If you find yourself writing database queries, TDA calculations, or curriculum decisions here, move that work to the appropriate layer.

---

## 5. `app/controllers/learning.py`

### Purpose
Current application/service orchestration layer.

### Functions

#### `list_sessions()`
Reads all learning sessions from SQLite, newest first.

#### `add_session(payload)`
Persists one validated `SessionCreate` payload and returns the created row.

#### `save_params(p)`
Upserts the single strategy/analysis parameter row.

#### `load_params()`
Loads the single parameter row and converts it to `Params`.

#### `run_analysis(p)`
Loads current sessions and calls `services.analysis.analyze()`.

### Important dependency direction

```text
controller
  ↓
model/db

controller
  ↓
service/analysis
```

The controller should not be imported by the database layer.

---

## 6. `app/models/schemas.py`

### Purpose
API/data contracts and validation.

### Types

#### `SessionCreate`
Input for a learning session.

Fields:

- `date`
- `activity`
- `score`
- `minutes`
- `error_tags`

#### `Params`
Learning/TDA strategy parameters.

Fields:

- `daily`
- `vocab`
- `listen`
- `prod`
- `adapt`
- `metric`
- `res`
- `over`
- `pers`

#### `AnalysisRequest`
Wraps `Params` for the analysis endpoint.

#### `Session`
A persisted session with `id`.

#### `LearnerSnapshot`
Structured learner-state output.

#### `AnalysisResult`
Expected analysis response structure.

### Change this file when

- request fields change
- response contracts change
- validation rules change

When changing `AnalysisResult`, check both frontend rendering and `analysis.py`.

---

## 7. `app/models/db.py`

### Purpose
SQLite persistence infrastructure.

### Important objects

- `DB_PATH`
- `connect()`
- `init_db()`

### Current tables

```text
sessions
params
```

### Important behavior

`init_db()` creates tables if they do not exist and seeds four learning sessions when the session table is empty.

### Caution
Schema changes here can affect the controller and existing local `data.sqlite3` files. Do not casually change columns without considering migration/reset behavior.

---

## 8. `app/services/analysis.py`

### Purpose
The most strategically important backend file.

It is the boundary between raw learner records and structured learner/TDA findings.

### Current function

`analyze(sessions, p)`

### Current stages inside `analyze`

```text
sessions
  ↓
score aggregation
  ↓
heuristic skill values
  ↓
phase detection
  ↓
bottleneck detection
  ↓
error-tag counting
  ↓
topology-like result
  ↓
learner snapshot
  ↓
analysis log
```

### Important warning
The current implementation is **prototype logic**. It does not calculate actual Mapper or persistent homology.

### This is where real TDA should eventually enter

A future refactor might split this into:

```text
services/
├── analysis.py
├── feature_engineering.py
├── tda.py
├── learner_model.py
└── agent.py
```

Keep the public analysis contract stable where practical.

---

## 9. `static/index.html`

### Purpose
Current single-page dashboard.

### Responsibilities

- show metrics
- show learner/TDA findings
- collect new learning sessions
- collect strategy/TDA parameters
- call REST API
- show API connection status
- trigger analysis

### Backend calls to look for

```text
GET  /api/health
GET  /api/sessions
POST /api/sessions
GET  /api/params
PUT  /api/params
POST /api/analysis
```

### Future frontend split

When this file becomes difficult to maintain, split into:

```text
static/
├── index.html
├── css/
├── js/
│   ├── api.js
│   ├── dashboard.js
│   ├── sessions.js
│   ├── parameters.js
│   └── analysis.js
```

Do this only when justified; do not add frontend tooling merely for the sake of framework adoption.

---

## 10. End-to-End Trace: Add Session

```text
User clicks Save session
        ↓
static/index.html
        ↓
POST /api/sessions
        ↓
routers/api.py:create_session
        ↓
controllers/learning.py:add_session
        ↓
models/db.py:connect
        ↓
SQLite sessions table
        ↓
created row
        ↓
JSON response
        ↓
Dashboard refresh
```

---

## 11. End-to-End Trace: Run Analysis

```text
User changes parameters
        ↓
static/index.html
        ↓
POST /api/analysis
        ↓
routers/api.py:analysis
        ↓
controllers/learning.py:run_analysis
        ↓
list_sessions()
        ↓
services/analysis.py:analyze
        ↓
Analysis result
  ├── snapshot
  ├── phase
  ├── bottleneck
  ├── findings
  ├── topology
  └── log
        ↓
JSON response
        ↓
Dashboard renders results
```

---

## 12. Where New Features Belong

| New feature | First place to inspect | Likely implementation |
|---|---|---|
| New learner field | `schemas.py`, `db.py` | schema + DB + controller + UI |
| New learning activity | frontend + `SessionCreate` | activity input + analysis mapping |
| New skill metric | `analysis.py` | feature extraction + snapshot |
| Real Mapper | `analysis.py` boundary | dedicated TDA service |
| Persistent homology | `analysis.py` boundary | dedicated TDA service |
| Agent curriculum decision | new `services/agent.py` | structured decision output |
| LLM generation | new `services/llm.py` | provider adapter |
| Spaced repetition | new learner/review service | persistent learner state |
| User accounts | database + auth layer | multi-user data model |

---

## 13. Debugging Map

### API returns 422
Start at:

```text
models/schemas.py
        ↓
routers/api.py
```

Check payload shape and validation constraints.

### API returns 500 while saving
Start at:

```text
controllers/learning.py
        ↓
models/db.py
```

Check SQL and database schema.

### Analysis output looks wrong
Start at:

```text
services/analysis.py
        ↓
controllers/learning.py:run_analysis
```

Then inspect the sessions being fed into `analyze()`.

### Dashboard does not update
Start at:

```text
static/index.html
        ↓
endpoint URL
        ↓
response JSON shape
```

Compare UI assumptions with `AnalysisResult`.

### TDA parameters appear to do nothing
That may be expected in the current prototype. Some parameters are displayed/stored and included in the analysis metadata, but the current algorithm is not genuine TDA.

---

## 14. Mental Model For The Project

Remember the distinction:

```text
RAW DATA
What did the learner do?
        ↓
LEARNER MODEL
What does the system believe about the learner?
        ↓
TDA
What structure/pattern exists in that learner state?
        ↓
LEARNING STRATEGY
What teaching principles should guide the response?
        ↓
AGENT
What should happen next?
        ↓
LLM
How should that activity be generated and communicated?
```

This distinction is the most important conceptual map for extending the project.
