# AGENTS.md — TDA Learning Agent

## Purpose

This repository is a backend-connected MVC prototype for an AI French-learning agent.
The product records learner activity, builds a learner snapshot, analyzes learning structure, and returns signals that can later drive an adaptive curriculum and LLM tutor.

The current TDA layer is a **deterministic prototype**, not a real topological-data-analysis implementation. Keep that distinction explicit in code, documentation, and UI.

## Product Concepts

- **Learner Model**: the current representation of a learner's knowledge, performance, errors, and learning state.
- **TDA Analysis**: analysis of relationships/structure in learner data. The current implementation is a replaceable heuristic boundary for future Mapper / persistent-homology work.
- **Learning Strategy**: the pedagogical policy: daily study, common sentences, shadowing, flashcards, short videos, Gaussian-blur listening, stories, reading shadowing, Chinese→French writing, and vocabulary expansion.
- **Agent**: the decision layer that will eventually use learner state + analysis + strategy to decide the next learning action.
- **LLM Tutor**: the generation/interaction layer that will eventually turn the selected action into explanations, exercises, stories, feedback, and conversations.

## Current Architecture

```text
Browser / static/index.html
        |
        | HTTP JSON
        v
FastAPI router: app/routers/api.py
        |
        v
Controller: app/controllers/learning.py
        |                         \
        |                          \-> Analysis service
        v
SQLite model: app/models/db.py       app/services/analysis.py
        |                                      |
        +--------------------------------------+
                       |
                       v
                 JSON response
                       |
                       v
                    Browser
```

## File Ownership

- `app/main.py`: application bootstrap, middleware, database initialization, static-file serving.
- `app/routers/api.py`: HTTP routes only. Keep request/response wiring thin.
- `app/controllers/learning.py`: application orchestration and persistence. This is the current MVC controller layer.
- `app/models/db.py`: SQLite connection and schema initialization.
- `app/models/schemas.py`: Pydantic API/data contracts.
- `app/services/analysis.py`: learner-analysis/TDA service boundary. This is the main replacement point for real TDA.
- `static/index.html`: dashboard UI plus browser-side API client logic.
- `data.sqlite3`: local runtime database. Do not treat it as source code.

## Rules For Coding Agents

1. **Read before changing.** Inspect the relevant file and its callers/callees before editing.
2. **Preserve the architecture.** Do not move business logic into FastAPI route functions just because it is shorter.
3. **Keep layers separated.** Routes handle HTTP; controllers orchestrate; models define persistence/contracts; services implement analysis/business algorithms.
4. **Do not silently turn heuristics into “real TDA.”** If an algorithm is simulated or heuristic, label it as such.
5. **Keep the analysis contract stable** unless a change is intentional and documented. Frontend currently depends on `snapshot`, `phase`, `bottleneck`, `findings`, `topology`, and `log`.
6. **Prefer additive changes.** Do not rewrite the whole project to introduce a new framework.
7. **Validate API contracts.** Pydantic schemas are the source of truth for request validation.
8. **Do not expose secrets.** If an LLM provider is added later, use environment variables and never commit API keys.
9. **Do not put provider-specific LLM code into `analysis.py`.** Create a separate service/module for LLM interaction.
10. **Keep TDA provider code isolated.** Real Mapper, Ripser, GUDHI, giotto-tda, or KeplerMapper integrations should sit behind the analysis service boundary.
11. **Avoid destructive database changes.** If the schema changes, provide a migration or explicit development reset path.
12. **Update documentation when architecture changes.** Keep `ARCHITECTURE.md` and `CODE_MAP.md` aligned with the repository.
13. **Do not add dependencies casually.** Explain why a new package is needed and update `requirements.txt`.
14. **Run the app/API checks after changes.** At minimum verify import/startup and affected endpoints.
15. **When explaining code to the user**, start with purpose → data flow → important functions → concrete example. Assume the user understands basic Python but is still learning this architecture.

## How To Work On A Task

Before editing:

```text
1. Identify the user-visible behavior.
2. Trace the request path.
3. Identify the owning layer.
4. Inspect adjacent schemas/functions.
5. Make the smallest coherent change.
```

After editing:

```text
1. Check syntax/imports.
2. Start FastAPI or run focused tests.
3. Exercise the affected endpoint.
4. Check frontend assumptions if the response shape changed.
5. Update docs if architecture or contracts changed.
```

## Common Change Locations

| Task | Primary location |
|---|---|
| Add API endpoint | `app/routers/api.py` + controller |
| Change request validation | `app/models/schemas.py` |
| Change SQLite schema | `app/models/db.py` |
| Save/read learner data | `app/controllers/learning.py` + `app/models/db.py` |
| Change learner analysis | `app/services/analysis.py` |
| Add real TDA algorithm | `app/services/analysis.py` or a dedicated TDA service called by it |
| Add Agent decision logic | create a dedicated agent service; do not overload router/model |
| Add LLM provider | dedicated LLM service + environment configuration |
| Change dashboard | `static/index.html` |
| Change pedagogical rules | dedicated strategy/config layer; do not bury them in UI code |

## Important Product Direction

The intended long-term flow is:

```text
Learning Activity
      ↓
Learner Model
      ↓
TDA / structural analysis
      ↓
Learning Strategy
      ↓
Agent decision
      ↓
Adaptive Curriculum
      ↓
LLM Tutor
      ↓
New Learning Activity
```

The prototype currently implements the data → analysis → UI portion. Agent planning, adaptive curriculum execution, and LLM tutoring are future layers.
