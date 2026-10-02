# CLAUDE.md

Guidance for Claude Code when working on the **frontend** of this repo: a React + TypeScript (Vite) app for learning French and preparing for TCF Canada, with UI in English and Traditional Chinese.

- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- File-by-file map: [Code_map.md](Code_map.md)
- General agent notes: [AGENTS.md](AGENTS.md)

[tda_learning_agent_backend/](tda_learning_agent_backend/) is the owner's own Python service. Don't modify it unless explicitly asked; treat it as an external API that implements the same scenario contract.

## Commands

```bash
npm install
npm run dev          # Vite only; /api/scenario does NOT work here
npm run dev:vercel   # Vite + api/ functions, loads .env.local (needed for AI scenario)
npm run build        # tsc -b && vite build — run this to verify changes
npm run lint         # oxlint
```

There is no test suite. Verify changes with `npm run build` and `npm run lint`.

## Rules

1. **Content is data.** Put lesson text in `src/data/**` and type it with the types in `src/types.ts`. Do not hard-code lesson content in pages or components.
2. **New units**: create `src/data/units/<level>-unit<n>.ts` exporting a `Unit`, then add it to `allUnits` in `src/data/units/index.ts`. The nav and pages update automatically.
3. **Always bilingual.** Learner-facing text that is not French must be `Localized { en, zh }` (`zh` is Traditional Chinese, 繁體). Render content with `t()` and UI labels with `ui('key')`. Add new labels to `src/i18n/uiStrings.ts` with both languages.
4. **Progress is local only.** All persistence goes through `ProgressContext` (`localStorage` key `french-tcf-progress-v1`). To add a field, update `ProgressState` in `types.ts`, the defaults in `loadState`, and `resetProgress`. Never rename existing IDs (`a1-u1`, `p1`, `simple-N`, `etre-N`), because saved progress is keyed by them.
5. **Routes** live only in `src/App.tsx`. Static paths such as `/level/A1/etre` must keep coexisting with `/level/:levelId/:unitId`. Add matching links in `NavBar.tsx`. Routing uses `HashRouter`; keep it, because GitHub Pages depends on it.
6. **AI scenario contract.** The request is `{ level, topic, cards: [{ french, meaning }] }`. The response is `{ title, situation, openingMessage, nextQuestion, targetPhrases[] }` or `{ error }`. If you change it, update `api/scenario.ts` and `FlashcardsPage.tsx` together, and tell the user the Python backend also has to change.
7. **Secrets.** `OPENAI_API_KEY` is server-side only. Never prefix secrets with `VITE_`, since those values are baked into the public bundle. Never commit `.env.local`.
8. **Audio** uses browser APIs (`speechSynthesis`, `MediaRecorder`, `SpeechRecognition`). Check that an API is available before using it, and degrade gracefully with a localized message. Prefer the `fr-FR` voice. Never upload recordings.
9. **Style**: function components, named exports, `import type` for types (`verbatimModuleSyntax` is on), and no unused locals or params (enforced by the TS config). CSS goes in `src/App.css`, using the theme variables from `src/index.css`. Check that it is readable in dark mode.
10. Keep edits small and focused. Don't add dependencies without a reason.

## Gotchas

- The build does not type-check `api/scenario.ts`, because it is outside every `tsconfig` `include`. Review edits there carefully.
- The GitHub Pages deploy is static, so the AI feature only works there if `VITE_SCENARIO_API_URL` is set at build time.
- The base path is set by `VITE_BASE_PATH` (`/french-learn/` on Pages). Use relative or router links, never absolute `/` asset paths in code.
- `SpeakButton` and `SyllableSpeakButton` each keep their own copy of the voice-selection logic. Change both together.
- The client times out the scenario request after 30 s; the server times out the OpenAI call after 15 s.
