# Apprendre le français — TCF Canada prep

A self-contained React app for learning French from zero to TCF Canada exam readiness (A1 → B2).

## Running it

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Progress (completed units, quiz scores, reviewed words) is saved in your browser's local storage, per browser/device.

To run the AI scenario function locally, choose one of these options:

### Option A: Use the Vercel serverless route

```bash
cp .env.example .env.local
npm run dev:vercel
```

Use the URL printed by Vercel. `vercel dev` loads `OPENAI_API_KEY` from `.env.local` and serves both the Vite app and `/api/scenario`.

### Option B: Use the Python backend in `tda_learning_agent_backend`

```bash
cd tda_learning_agent_backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Then point the frontend at the Python API in `.env.local`:

```bash
VITE_SCENARIO_API_URL=http://localhost:8000/api/french/scenario
```

This keeps the French app connected to the backend while still using the same `VITE_SCENARIO_API_URL` contract already used by the flashcard page. Never commit `.env.local`.

## What's inside

- **Units** (`src/data/units/`): each unit has vocabulary, grammar notes, a dialogue, a multiple-choice quiz (grammar/vocab/reading/listening — matching the real TCF format), a writing task, and a speaking task.
- **Listening practice**: uses your browser's built-in text-to-speech (no audio files needed) to read French sentences aloud.
- **Speaking practice**: optional in-browser microphone recording so you can hear yourself back — nothing is uploaded anywhere.
- **TCF Canada info page** (`/tcf-canada`): exam structure and NCLC score bands.

## Adding more content

Add a new file in `src/data/units/` following the `Unit` type in `src/types.ts`, then register it in `src/data/units/index.ts`. Currently seeded: A1 (4 units), A2 (2 units), B1 (1 unit), B2 (1 unit) — more can be added at any level.
