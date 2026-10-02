# Architecture — Frontend

This document covers the React frontend and the Vercel serverless function in this repo. The Python service in [tda_learning_agent_backend/](tda_learning_agent_backend/) is a separate project with its own docs.

## At a glance

| Concern | Choice |
| --- | --- |
| Framework | React 19 + TypeScript, built with Vite 8 |
| Routing | `react-router-dom` v7, `HashRouter` (works on static hosts like GitHub Pages with no server rewrites) |
| State | Two React contexts: `LanguageContext` (UI language) and `ProgressContext` (learning progress) |
| Persistence | `localStorage` only — no accounts, no database |
| Content | Typed TypeScript data modules under `src/data/` (no CMS, no runtime fetch) |
| Audio | Browser Web Speech API (`speechSynthesis`) for TTS; `MediaRecorder` + `SpeechRecognition` for speaking practice |
| AI | One endpoint, `POST /api/scenario`, served by Vercel ([api/scenario.ts](api/scenario.ts)) or the Python backend |
| Lint / types | `oxlint`, `tsc -b` |
| Hosting | GitHub Pages (static, via GitHub Actions) and/or Vercel (static + serverless) |

## System diagram

```
┌──────────────────────────── Browser ────────────────────────────┐
│                                                                 │
│  main.tsx                                                       │
│   └─ HashRouter                                                 │
│       └─ LanguageProvider  ──► localStorage "french-tcf-lang-v1"│
│           └─ ProgressProvider ──► localStorage                  │
│               │                   "french-tcf-progress-v1"      │
│               └─ App (NavBar + <Routes>)                        │
│                    └─ pages/*  ──uses──► components/*           │
│                         │                    │                  │
│                         ▼                    ▼                  │
│                    src/data/*         Web Speech API /          │
│                    (static content)   MediaRecorder             │
│                                                                 │
│  FlashcardsPage ──fetch POST──┐                                 │
└───────────────────────────────┼─────────────────────────────────┘
                                ▼
        VITE_SCENARIO_API_URL  or  /api/scenario (default)
                ┌───────────────┴────────────────┐
                ▼                                ▼
     Vercel function api/scenario.ts    Python backend
                │                       /api/french/scenario
                ▼
        OpenAI Chat Completions
```

## Layers

### 1. Entry and shell
- [src/main.tsx](src/main.tsx) mounts the provider stack: `StrictMode → HashRouter → LanguageProvider → ProgressProvider → App`.
- [src/App.tsx](src/App.tsx) renders the persistent sidebar ([NavBar](src/components/NavBar.tsx)) and the route table. All routes are declared here.

### 2. Routes

| Path | Page | Notes |
| --- | --- | --- |
| `/` | `Home` | Level cards and overall progress |
| `/prononciation` | `PronunciationPage` | Alphabet, vowels, nasals, consonants, liaison |
| `/phrases` | → redirect to `/phrases/essential` | |
| `/phrases/essential` | `PhrasesPage` | 30 core phrases, study notes, syllable playback, recording |
| `/phrases/simple` | `PhrasesPage` with `simplePhrases` | Same page, different data |
| `/level/:levelId` | `LevelOverview` | Unit list for A1/A2/B1/B2 |
| `/level/A1/etre` | `EtreVerbPage` | Static route, ranked above `:unitId` |
| `/level/A1/cheat-sheet` | `A1CheatSheetPage` | Static route, ranked above `:unitId` |
| `/level/:levelId/:unitId` | `LessonPage` | Generic renderer for any `Unit` |
| `/tcf-canada` | `TCFInfoPage` | Exam structure, NCLC table |
| `/progress` | `ProgressPage` | Stats, phrase streaks, reset |
| `/flashcards` | `FlashcardsPage` | Saved cards and the AI scenario generator |

### 3. State (contexts)

**LanguageContext** ([src/context/LanguageContext.tsx](src/context/LanguageContext.tsx))
- `lang: 'en' | 'zh'` (`zh` is Traditional Chinese).
- `t(loc: Localized)` resolves content objects (`{ en, zh }`) from the data files.
- `ui(key, vars?)` resolves static UI strings from [src/i18n/uiStrings.ts](src/i18n/uiStrings.ts) and fills in `{{token}}` placeholders. `UiKey` is derived from that object, so a wrong key is a compile error.

**ProgressContext** ([src/context/ProgressContext.tsx](src/context/ProgressContext.tsx))
- Holds `ProgressState` (defined in [src/types.ts](src/types.ts)):
  - `completedUnits[unitId]`: set when the learner clicks "mark complete"
  - `quizAttempts[unitId]`: last `{score, total, date}` only
  - `wordsReviewed[fr]`: keyed by the French word itself
  - `phrasePractice[YYYY-MM-DD][phraseId]`: daily check-ins, using the local calendar date
  - `flashcards[phraseId]`: cards the learner saved (essential, simple and être sentences)
- Saves the whole state to `localStorage` on every change. `loadState` defaults each missing field to `{}`, so new fields can be added without a migration. Changing the meaning of an existing field means bumping the storage key (`-v1`).

### 4. Content model

All learning content is plain TypeScript data. Pages and components render it and never hard-code lesson text.

- **Units** ([src/data/units/](src/data/units/)): one file per unit, typed as `Unit` (vocab, grammar, optional dialogue, quiz, optional writing and speaking tasks). They are registered in [src/data/units/index.ts](src/data/units/index.ts), which provides `allUnits`, `getUnitsByLevel`, `getUnit` and `getNextUnit`. The nav, level overview, lesson page and progress page all read from that registry, so adding a unit takes no UI changes.
- **Standalone content** with its own local types: `phrases.ts` (phrases, study notes, syllable/IPA pairs), `etreVerb.ts`, `a1Verbs.ts`, `pronunciation.ts`, `ipaGuide.ts`, `levels.ts`, `tcfInfo.ts`.
- **Bilingual by construction**: every learner-facing string that is not French is a `Localized { en, zh }`.

### 5. Browser audio features
- **TTS**: [SpeakButton](src/components/SpeakButton.tsx) (normal and slow) and [SyllableSpeakButton](src/components/SyllableSpeakButton.tsx) (one segment at a time). Both pick a voice in the order `fr-FR`, then any `fr-*`. Each component has its own copy of the voice cache, and both set the global `speechSynthesis.onvoiceschanged` handler.
- **Recording**: [SpeakingTaskView](src/components/SpeakingTaskView.tsx) records audio for playback only. [PhrasePronunciationCheck](src/components/PhrasePronunciationCheck.tsx) also runs `SpeechRecognition` (`fr-FR`) and compares the transcript to the target text word by word (accents removed, in order) to compute a match score. Audio stays in the browser as blob URLs and is never uploaded.

### 6. AI scenario flow

1. On `FlashcardsPage`, the learner picks a topic and a level. The page sends `{ level, topic, cards: [{ french, meaning }] }` to `VITE_SCENARIO_API_URL`, or to `/api/scenario` if that variable is unset. The client aborts after 30 s.
2. [api/scenario.ts](api/scenario.ts) (a Vercel Web-standard `Request → Response` handler) validates the input (at most 40 cards, length limits on level and topic) and calls OpenAI Chat Completions in JSON mode with `OPENAI_MODEL` (default `gpt-4o-mini`). It gives up on the provider after 15 s.
3. Response contract (shared with the Python backend):
   ```ts
   { title: string; situation: string; openingMessage: string; nextQuestion: string; targetPhrases: string[] }
   // or, on failure:
   { error: string }
   ```
4. Any change to this contract has to be made in three places: `FlashcardsPage`, `api/scenario.ts`, and the Python backend.

## Build and deploy

- `npm run build` runs `tsc -b`, then `vite build`, and writes to `dist/`.
- The base path comes from `VITE_BASE_PATH` ([vite.config.ts](vite.config.ts)). GitHub Pages builds with `/french-learn/`.
- **GitHub Pages** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) deploys on every push to `main`. It serves static files only, so `/api/scenario` does not exist there. The AI feature works on Pages only if `VITE_SCENARIO_API_URL` is set at build time to point at a deployed endpoint, and the workflow currently does not set it.
- **Vercel** ([vercel.json](vercel.json)) serves `dist/` together with `api/*.ts` as serverless functions. Set `OPENAI_API_KEY` (and optionally `OPENAI_MODEL`) in the project's environment settings.

## Environment variables

| Variable | Where it is read | Purpose |
| --- | --- | --- |
| `OPENAI_API_KEY` | `api/scenario.ts` (server) | Required for the AI scenario |
| `OPENAI_MODEL` | `api/scenario.ts` (server) | Optional, default `gpt-4o-mini` |
| `VITE_SCENARIO_API_URL` | `FlashcardsPage` (client, built into the bundle) | Overrides the scenario endpoint |
| `VITE_BASE_PATH` | `vite.config.ts` | Public base path, e.g. `/french-learn/` |

Anything prefixed `VITE_` is baked into the public bundle, so never put secrets in those variables.

## Design constraints and trade-offs

- **No backend for user data.** Progress is per browser and per device, and clearing site data erases it. This is intentional: there is nothing to host and nothing to secure.
- **Content lives in code.** Adding content requires a rebuild, but it is type-checked and versioned in git.
- **Hash routing.** URLs look like `/#/level/A1`. Hash routing was chosen so deep links work on GitHub Pages.
- **Web Speech quality depends on the platform.** Available voices and recognition support vary by browser and OS. Components hide or explain features that are unavailable.

## Known gaps

- `api/` is not covered by any `tsconfig` `include` (`tsconfig.app.json` includes only `src`, and `tsconfig.node.json` includes only `vite.config.ts`), so `npm run build` does not type-check `api/scenario.ts`.
- The voice-selection logic is duplicated in `SpeakButton` and `SyllableSpeakButton`.
- The phrase sub-links in `NavBar` are hard-coded in Chinese instead of going through `ui()`.
- The GitHub Pages build does not set `VITE_SCENARIO_API_URL`, so the AI scenario fails there.
