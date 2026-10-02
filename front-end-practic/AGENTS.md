# AGENTS.md

## Project overview

This repo is a TypeScript React app for French learning and TCF Canada preparation. The app is a single-page Vite project with lessons, quizzes, speaking tasks, and browser-local progress tracking.

Primary docs:
- [README.md](README.md)
- [src/types.ts](src/types.ts)
- [src/data/units/index.ts](src/data/units/index.ts)
- [api/scenario.ts](api/scenario.ts)

## Working conventions

- Prefer TypeScript-safe edits and keep the existing type definitions aligned with the app’s data model.
- Keep new lesson content in the lesson/unit data model instead of hard-coding UI logic for each lesson.
- Preserve browser-local persistence patterns: progress and completion data is stored in local storage, not a server database.
- When adding a feature that needs AI generation, use the Vercel dev flow described in [README.md](README.md); do not rely on plain `npm run dev` for `/api/scenario` requests.
- Treat the separate backend under [tda_learning_agent_backend](tda_learning_agent_backend) as an independent Python service with its own setup and documentation.

## Commands

Run these from the repo root:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run dev:vercel
```

Notes:
- `npm run dev` starts the Vite frontend only.
- `npm run dev:vercel` is required for AI-backed scenario requests because it loads the serverless API and env file.
- Never commit `.env.local` or other local secrets.

## Architecture notes

- UI pages live under [src/pages](src/pages).
- Shared data structures and app typing live in [src/types.ts](src/types.ts).
- Lesson/unit content is stored under [src/data/units](src/data/units), with each unit following the `Unit` type.
- Progress and language state live under [src/context](src/context).
- Reusable UI pieces live under [src/components](src/components).
- The Vercel serverless endpoint is in [api/scenario.ts](api/scenario.ts).

## Change guidance for agents

- When adding or modifying lesson content, follow the unit schema in [src/types.ts](src/types.ts) and register the unit in [src/data/units/index.ts](src/data/units/index.ts).
- When changing routes or page structure, keep navigation and localization patterns in sync with the existing page components and the app shell.
- When debugging or extending the AI scenario flow, check the Vercel endpoint and env setup before changing the frontend contract.
- Prefer small, focused edits over broad refactors; the app is content-heavy and feature-oriented.

## If more docs are needed

For deeper context on product goals, TCF prep structure, and content patterns, start with [README.md](README.md). For backend-specific work, read [tda_learning_agent_backend/README.md](tda_learning_agent_backend/README.md).
