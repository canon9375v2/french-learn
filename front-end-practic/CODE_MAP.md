# Code Map — Frontend

A file-by-file guide to the frontend. For how the pieces fit together, see [ARCHITECTURE.md](ARCHITECTURE.md). The backend in [tda_learning_agent_backend/](tda_learning_agent_backend/) is not covered here.

## Root

| File | Purpose |
| --- | --- |
| [index.html](index.html) | Vite HTML entry with `#root` and the page title |
| [package.json](package.json) | Scripts: `dev`, `dev:vercel`, `build`, `lint`, `preview` |
| [vite.config.ts](vite.config.ts) | React plugin; `base` taken from `VITE_BASE_PATH` |
| [vercel.json](vercel.json) | Vercel build settings (Vite, output in `dist`) |
| [tsconfig.json](tsconfig.json) / [tsconfig.app.json](tsconfig.app.json) / [tsconfig.node.json](tsconfig.node.json) | TS project references: `app` covers `src/`, `node` covers `vite.config.ts` |
| [.oxlintrc.json](.oxlintrc.json) | Lint rules (react hooks, only-export-components) |
| [.env.example](.env.example) | Template for `.env.local` (OpenAI key and model, scenario URL) |
| [.github/workflows/deploy.yml](.github/workflows/deploy.yml) | Builds and deploys to GitHub Pages on push to `main` |
| [public/](public/) | `favicon.svg`; `.nojekyll` so Pages serves the files as-is |

## `api/` — serverless

| File | Purpose |
| --- | --- |
| [api/scenario.ts](api/scenario.ts) | `POST /api/scenario`: validates the cards, calls OpenAI in JSON mode (15 s timeout), returns a scenario object or `{ error }` |

## `src/` — app

### Entry

| File | Purpose |
| --- | --- |
| [src/main.tsx](src/main.tsx) | Mounts the provider stack: `HashRouter → LanguageProvider → ProgressProvider → App` |
| [src/App.tsx](src/App.tsx) | App shell (sidebar and main area) and the **route table** |
| [src/types.ts](src/types.ts) | Shared types: `Localized`, `Unit`, `VocabItem`, `GrammarPoint`, `Dialogue`, `QuizQuestion`, `WritingTask`, `SpeakingTask`, `LevelMeta`, `ProgressState` |
| [src/index.css](src/index.css) | Global CSS variables, base styles, light and dark themes |
| [src/App.css](src/App.css) | All component and page styles (one large stylesheet, about 1.8k lines) |

### `src/context/` — global state

| File | Exports | Notes |
| --- | --- | --- |
| [LanguageContext.tsx](src/context/LanguageContext.tsx) | `LanguageProvider`, `useLanguage` → `{ lang, setLang, toggleLang, t, ui }` | Saved under the `localStorage` key `french-tcf-lang-v1` |
| [ProgressContext.tsx](src/context/ProgressContext.tsx) | `ProgressProvider`, `useProgress` → `{ state, markUnitComplete, saveQuizAttempt, markWordReviewed, markPhrasePracticed, unmarkPhrasePracticed, toggleFlashcard, resetProgress }` | Saved under `french-tcf-progress-v1` |

### `src/i18n/`

| File | Purpose |
| --- | --- |
| [uiStrings.ts](src/i18n/uiStrings.ts) | Every static UI label as `{ en, zh }`, keyed by `area.name` (e.g. `flashcards.aiGenerate`). Supports `{{var}}` placeholders. `UiKey` is derived from this object. |

### `src/pages/` — one component per route

| File | Route | Reads | Writes (progress) |
| --- | --- | --- | --- |
| [Home.tsx](src/pages/Home.tsx) | `/` | `levels`, `allUnits` | — |
| [PronunciationPage.tsx](src/pages/PronunciationPage.tsx) | `/prononciation` | `data/pronunciation` | — |
| [PhrasesPage.tsx](src/pages/PhrasesPage.tsx) | `/phrases/essential`, `/phrases/simple` | `phrases`, `phraseStudyNotes`, `phraseSyllables`, `ipaGuide` | `phrasePractice`, `flashcards` |
| [LevelOverview.tsx](src/pages/LevelOverview.tsx) | `/level/:levelId` | `levels`, `getUnitsByLevel` | — |
| [LessonPage.tsx](src/pages/LessonPage.tsx) | `/level/:levelId/:unitId` | `getUnit`, `getNextUnit` | `completedUnits` |
| [EtreVerbPage.tsx](src/pages/EtreVerbPage.tsx) | `/level/A1/etre` | `etreVerb`, `ipaGuide` | `flashcards` |
| [A1CheatSheetPage.tsx](src/pages/A1CheatSheetPage.tsx) | `/level/A1/cheat-sheet` | `a1Verbs` | — |
| [TCFInfoPage.tsx](src/pages/TCFInfoPage.tsx) | `/tcf-canada` | `tcfInfo` | — |
| [ProgressPage.tsx](src/pages/ProgressPage.tsx) | `/progress` | `levels`, units, phrases | `resetProgress` |
| [FlashcardsPage.tsx](src/pages/FlashcardsPage.tsx) | `/flashcards` | phrases, `etreSentences` | `flashcards`; calls the scenario API |

### `src/components/` — reusable UI

| File | Used by | Purpose |
| --- | --- | --- |
| [NavBar.tsx](src/components/NavBar.tsx) | `App` | Sidebar: links, collapsible per-level unit lists (generated from the unit registry), language toggle |
| [VocabList.tsx](src/components/VocabList.tsx) | `LessonPage` | Vocabulary table; marks words reviewed |
| [GrammarSection.tsx](src/components/GrammarSection.tsx) | `LessonPage` | Grammar points with spoken examples |
| [DialogueView.tsx](src/components/DialogueView.tsx) | `LessonPage` | Dialogue lines with translation toggle and TTS |
| [MCQQuiz.tsx](src/components/MCQQuiz.tsx) | `LessonPage` | Multiple-choice quiz (grammar, vocab, reading, listening); saves `quizAttempts` |
| [WritingTaskView.tsx](src/components/WritingTaskView.tsx) | `LessonPage` | Writing prompt with a word counter |
| [SpeakingTaskView.tsx](src/components/SpeakingTaskView.tsx) | `LessonPage` | Speaking prompt and a mic recorder (local playback only) |
| [SpeakButton.tsx](src/components/SpeakButton.tsx) | many | 🔊 normal and 🐢 slow French TTS buttons |
| [SyllableSpeakButton.tsx](src/components/SyllableSpeakButton.tsx) | Phrases, Être | Plays one segment at a time, each with its IPA |
| [PhrasePronunciationCheck.tsx](src/components/PhrasePronunciationCheck.tsx) | `PhrasesPage` | Record, transcribe (`SpeechRecognition`) and score word matches |

### `src/data/` — content

| File | Exports | Shape |
| --- | --- | --- |
| [units/index.ts](src/data/units/index.ts) | `allUnits`, `getUnitsByLevel`, `getUnit`, `getNextUnit` | **Unit registry**: add new units here |
| `units/a1-unit1..4.ts`, `a2-unit1..2.ts`, `b1-unit1.ts`, `b2-unit1.ts` | `a1Unit1`, … | `Unit` |
| [levels.ts](src/data/levels.ts) | `levels`, `getLevelMeta` | `LevelMeta[]` (A1–B2, NCLC mapping) |
| [phrases.ts](src/data/phrases.ts) | `essentialPhrases`, `simplePhrases`, `phraseStudyNotes`, `phraseSyllables`, types `Phrase`, `WordUsage`, `SyllablePair` | Phrase IDs `p1…p30`, `simple-N` |
| [etreVerb.ts](src/data/etreVerb.ts) | `etreConjugation`, `etreSentences` | Sentence IDs `etre-N` |
| [a1Verbs.ts](src/data/a1Verbs.ts) | `a1Verbs` | Conjugation tables with IPA |
| [pronunciation.ts](src/data/pronunciation.ts) | `alphabetLetters`, `simpleVowels`, `nasalVowels`, `consonantRules`, `liaison*` | Pronunciation lessons |
| [ipaGuide.ts](src/data/ipaGuide.ts) | `ipaGuide`, `findIpaSymbolsIn` | The difficult IPA symbols, with explanations |
| [tcfInfo.ts](src/data/tcfInfo.ts) | `tcfCanadaSections`, `nclcScale`, `tcfTips` | TCF Canada exam information |

## ID conventions

These IDs are used as `localStorage` keys. Renaming one orphans the progress saved under the old ID.

| Kind | Pattern | Example |
| --- | --- | --- |
| Unit | `<level>-u<n>` | `a1-u1` |
| Quiz question | `<level>u<n>-q<n>` | `a1u1-q1` |
| Essential phrase | `p<n>` | `p1` |
| Simple phrase | `simple-<n>` | `simple-3` |
| Être sentence | `etre-<n>` | `etre-2` |
| Reviewed word | the French word itself | `bonjour` |

## Common tasks → where to edit

| Task | Files |
| --- | --- |
| Add a lesson unit | New `src/data/units/<id>.ts` → register in `units/index.ts` |
| Add a UI label | `src/i18n/uiStrings.ts` (both `en` and `zh`) |
| Add a page | `src/pages/X.tsx` → route in `App.tsx` → link in `NavBar.tsx` → labels in `uiStrings.ts` |
| Track new progress | `ProgressState` in `types.ts` → default value in `loadState` and `resetProgress` → action in `ProgressContext` |
| Change the AI scenario contract | `api/scenario.ts` + `FlashcardsPage.tsx` + the Python backend |
| Styling | `src/App.css` (components), `src/index.css` (tokens and theme) |
