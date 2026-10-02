# Architecture — TDA Learning Agent

## 1. System Goal

The TDA Learning Agent is an AI-assisted French learning system designed around a learner model and adaptive learning strategy.

The system should eventually answer:

> Given what the learner has practiced, what they know, their recurring errors, and the structure of their learning state, what should they do next?

The current repository is an MVP that implements the data capture, persistence, analysis boundary, and dashboard. It intentionally stops short of a production TDA/LLM agent.

---

## 2. High-Level Architecture

```text
                         USER
                           |
                           v
                 +--------------------+
                 | Dashboard / UI     |
                 | static/index.html  |
                 +---------+----------+
                           |
                    HTTP JSON / REST
                           |
                           v
                 +--------------------+
                 | FastAPI             |
                 | routers/api.py      |
                 +---------+----------+
                           |
                           v
                 +--------------------+
                 | Learning Controller |
                 | controllers/        |
                 +----+-----------+----+
                      |           |
                      |           +--------------------+
                      v                                v
             +----------------+              +-------------------+
             | SQLite Model   |              | Analysis Service  |
             | models/db.py   |              | services/         |
             +-------+--------+              | analysis.py       |
                     |                       +---------+---------+
                     |                                 |
                     +---------------+-----------------+
                                     |
                                     v
                              JSON Analysis Result
                                     |
                                     v
                                  Dashboard
```

---

## 3. MVC Mapping

### Model

`app/models/`

Responsibilities:

- persistence connection/schema
- Pydantic request/response contracts
- representing structured application data

Files:

- `db.py`
- `schemas.py`

### View

`static/index.html`

Responsibilities:

- display learner metrics
- collect session/parameter input
- call backend APIs
- render analysis results

The current view also contains browser-side API helper code. If the frontend grows, move that logic into separate JS modules.

### Controller

`app/controllers/learning.py`

Responsibilities:

- coordinate persistence
- retrieve sessions
- save strategy parameters
- invoke analysis service
- return application-level results to routes

The controller is deliberately thin. It should not become the place for complex TDA mathematics or LLM prompting.

---

## 4. API Request Flow

### Save learning session

```text
UI form
  ↓
POST /api/sessions
  ↓
SessionCreate validation
  ↓
add_session()
  ↓
SQLite INSERT
  ↓
created session JSON
  ↓
UI refresh
```

### Save strategy parameters

```text
UI parameters
  ↓
PUT /api/params
  ↓
Params validation
  ↓
save_params()
  ↓
SQLite upsert
  ↓
Params JSON
```

### Run analysis

```text
UI parameters
  ↓
POST /api/analysis
  ↓
AnalysisRequest validation
  ↓
run_analysis()
  ↓
list_sessions()
  ↓
analyze(sessions, params)
  ↓
AnalysisResult-shaped dictionary
  ↓
UI renders snapshot/topology/log
```

---

## 5. Data Model

### `sessions`

Current columns:

| Field | Meaning |
|---|---|
| `id` | database identifier |
| `date` | learning date string |
| `activity` | activity name, e.g. Story shadowing |
| `score` | optional 0–100 performance score |
| `minutes` | optional activity duration |
| `error_tags` | comma-separated error labels |

### `params`

There is intentionally only one parameter row (`id = 1`).

| Field | Meaning |
|---|---|
| `daily` | daily study target in minutes |
| `vocab` | vocabulary threshold for phase logic |
| `listen` | listening threshold |
| `prod` | production threshold |
| `adapt` | adaptive aggressiveness |
| `metric` | analysis distance metric name |
| `res` | Mapper resolution |
| `over_pct` | Mapper overlap percentage |
| `pers` | persistence cutoff |

These parameters are currently used partly as prototype controls. Future real TDA implementation should make their mathematical meaning explicit.

---

## 6. Learner Model

The API currently returns a learner snapshot with:

- vocabulary
- listening
- sentence recall
- shadowing
- writing
- speaking
- grammar
- reading
- active/passive vocabulary gap
- confidence

In the current prototype, several values are deterministic placeholders. They should eventually be derived from actual learner history.

The intended learner model should eventually combine:

```text
Knowledge state
+ skill performance
+ error patterns
+ response behavior
+ forgetting/review state
+ exposure history
+ learning strategy stage
```

---

## 7. TDA Boundary

`app/services/analysis.py` is the current abstraction boundary.

Current implementation:

- computes simple aggregates
- derives a phase
- identifies a heuristic bottleneck
- counts error tags
- returns a topology-like structure
- records an analysis log

It does **not** currently perform genuine Mapper or persistent homology.

### Future implementation

A production-oriented analysis pipeline could become:

```text
Raw learner sessions
       ↓
Feature extraction
       ↓
Learner vectors / embeddings
       ↓
Distance matrix / metric
       ↓
Mapper
       ↓
Persistent homology
       ↓
Topological features
       ↓
Learner-state interpretation
```

Potential libraries can be introduced later, but dependency choice should be deliberate and benchmarked against the actual learner-data representation.

---

## 8. Learning Strategy Layer

The intended pedagogical strategy is:

### Main line

1. Daily ~30 minutes.
2. Learn common sentences.
3. Shadow the sentences.
4. Flashcard practice.

### Once vocabulary is sufficient

1. Short daily video.
2. Gaussian-blur / reduced-visual-context listening practice.

### Once the learner has a foundation

1. Create original sentences.
2. Stories with audio.
3. Reading shadowing while audio plays.
4. Chinese → French writing, followed by checking/correction.
5. Once sentence patterns are familiar enough to substitute words, expand toward 1,000–3,000 common words.

This should eventually be represented as explicit curriculum rules/configuration rather than hard-coded in the frontend.

---

## 9. Agent Layer — Intended Future State

The Agent should sit above analysis and strategy:

```text
Learner Model
      +
TDA findings
      +
Learning Strategy
      ↓
Agent decision
      ↓
Next activity
```

Example:

```text
Learner:
- vocabulary is adequate
- listening is weak
- sentence recall is strong

TDA:
- listening ↔ speaking bridge is weak

Strategy:
- learner is ready for short video

Agent:
- choose 1-minute video
- follow with shadowing
- test recall
- then generate a production task
```

The Agent should return structured decisions, not only prose.

A future contract might look like:

```json
{
  "stage": "foundation",
  "goal": "connect listening to spontaneous production",
  "activities": [
    {"type": "video", "minutes": 5},
    {"type": "shadowing", "minutes": 8},
    {"type": "production", "minutes": 7}
  ],
  "reason_codes": ["weak_listening", "weak_bridge"]
}
```

---

## 10. LLM Layer — Intended Future State

The LLM should not own learner state or database persistence.

It should receive structured context such as:

```text
learner snapshot
+ recent errors
+ selected curriculum activity
+ TDA findings
+ language level
```

and generate:

- explanations
- example sentences
- exercises
- stories
- corrections
- conversation
- audio-ready scripts

A dedicated `llm` service should be introduced when this is implemented.

---

## 11. Architectural Invariants

These should remain true as the project grows:

1. UI does not directly access SQLite.
2. FastAPI routes do not contain learning algorithms.
3. Controllers orchestrate rather than implement TDA mathematics.
4. Analysis is replaceable behind a service boundary.
5. Learner Model is distinct from raw session records.
6. Learning Strategy is distinct from learner state.
7. Agent decision-making is distinct from LLM text generation.
8. Secrets/configuration are externalized.

---

## 12. Current Limitations

- No authentication or multi-user model.
- SQLite is local and development-oriented.
- Learner metrics are partly hard-coded/heuristic.
- TDA is not mathematically implemented yet.
- No real Agent planning loop.
- No LLM provider integration.
- Frontend is a single HTML file.
- No automated test suite is included yet.

These are known prototype boundaries, not accidental behavior.
