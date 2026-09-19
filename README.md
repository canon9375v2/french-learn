# Apprendre le français — TCF Canada prep

A self-contained React app for learning French from zero to TCF Canada exam readiness (A1 → B2).

## Running it

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Progress (completed units, quiz scores, reviewed words) is saved in your browser's local storage, per browser/device.

## What's inside

- **Units** (`src/data/units/`): each unit has vocabulary, grammar notes, a dialogue, a multiple-choice quiz (grammar/vocab/reading/listening — matching the real TCF format), a writing task, and a speaking task.
- **Listening practice**: uses your browser's built-in text-to-speech (no audio files needed) to read French sentences aloud.
- **Speaking practice**: optional in-browser microphone recording so you can hear yourself back — nothing is uploaded anywhere.
- **TCF Canada info page** (`/tcf-canada`): exam structure and NCLC score bands.

## Adding more content

Add a new file in `src/data/units/` following the `Unit` type in `src/types.ts`, then register it in `src/data/units/index.ts`. Currently seeded: A1 (4 units), A2 (2 units), B1 (1 unit), B2 (1 unit) — more can be added at any level.
