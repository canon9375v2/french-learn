export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

/** A piece of text available in English and Traditional Chinese. */
export interface Localized {
  en: string;
  zh: string;
}

export interface VocabItem {
  fr: string;
  meaning: Localized;
  example?: string;
  exampleTranslation?: Localized;
}

export interface GrammarExample {
  fr: string;
  translation: Localized;
}

export interface GrammarPoint {
  title: Localized;
  explanation: Localized;
  examples: GrammarExample[];
}

export interface DialogueLine {
  speaker: string;
  fr: string;
  translation: Localized;
}

export interface Dialogue {
  title: Localized;
  lines: DialogueLine[];
}

export type QuizSkill = 'grammar' | 'vocab' | 'reading' | 'listening';

export interface QuizQuestion {
  id: string;
  skill: QuizSkill;
  /** The visible question text. For listening questions this is the instruction; audioText is what gets read aloud. */
  prompt: Localized;
  /** If present, this text is read aloud via speech synthesis and the prompt above is the instruction shown to the learner. */
  audioText?: string;
  /** For reading comprehension: a short passage shown above the question (in French). */
  passage?: string;
  options: Localized[];
  answerIndex: number;
  explanation?: Localized;
}

export interface WritingTask {
  prompt: Localized;
  minWords: number;
  tips: Localized[];
}

export interface SpeakingTask {
  prompt: Localized;
  tips: Localized[];
  modelAnswer?: string;
}

export interface Unit {
  id: string;
  level: CEFRLevel;
  order: number;
  title: Localized;
  description: Localized;
  vocab: VocabItem[];
  grammar: GrammarPoint[];
  dialogue?: Dialogue;
  quiz: QuizQuestion[];
  writing?: WritingTask;
  speaking?: SpeakingTask;
}

export interface LevelMeta {
  id: CEFRLevel;
  title: Localized;
  tagline: Localized;
  description: Localized;
  ncLc: string;
}

export interface QuizAttempt {
  score: number;
  total: number;
  date: string;
}

export interface ProgressState {
  completedUnits: Record<string, boolean>;
  quizAttempts: Record<string, QuizAttempt>;
  wordsReviewed: Record<string, boolean>;
  /** Phrase IDs grouped by the learner's local calendar date (YYYY-MM-DD). */
  phrasePractice: Record<string, Record<string, boolean>>;
  flashcards: Record<string, boolean>;
}
