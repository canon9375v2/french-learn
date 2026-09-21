import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ProgressState, QuizAttempt } from '../types';

const STORAGE_KEY = 'french-tcf-progress-v1';

function localDateKey() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error('empty');
    const parsed = JSON.parse(raw) as ProgressState;
    return {
      completedUnits: parsed.completedUnits ?? {},
      quizAttempts: parsed.quizAttempts ?? {},
      wordsReviewed: parsed.wordsReviewed ?? {},
      phrasePractice: parsed.phrasePractice ?? {},
      flashcards: parsed.flashcards ?? {},
    };
  } catch {
    return { completedUnits: {}, quizAttempts: {}, wordsReviewed: {}, phrasePractice: {}, flashcards: {} };
  }
}

interface ProgressContextValue {
  state: ProgressState;
  markUnitComplete: (unitId: string) => void;
  saveQuizAttempt: (unitId: string, score: number, total: number) => void;
  markWordReviewed: (word: string) => void;
  markPhrasePracticed: (phraseId: string) => void;
  unmarkPhrasePracticed: (phraseId: string) => void;
  toggleFlashcard: (phraseId: string) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // localStorage unavailable (private mode etc.) — progress just won't persist
    }
  }, [state]);

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      markUnitComplete: (unitId: string) =>
        setState((prev) => ({ ...prev, completedUnits: { ...prev.completedUnits, [unitId]: true } })),
      saveQuizAttempt: (unitId: string, score: number, total: number) => {
        const attempt: QuizAttempt = { score, total, date: new Date().toISOString() };
        setState((prev) => ({ ...prev, quizAttempts: { ...prev.quizAttempts, [unitId]: attempt } }));
      },
      markWordReviewed: (word: string) =>
        setState((prev) => ({ ...prev, wordsReviewed: { ...prev.wordsReviewed, [word]: true } })),
      markPhrasePracticed: (phraseId: string) => {
        const date = localDateKey();
        setState((prev) => ({
          ...prev,
          phrasePractice: {
            ...prev.phrasePractice,
            [date]: { ...prev.phrasePractice[date], [phraseId]: true },
          },
        }));
      },
      unmarkPhrasePracticed: (phraseId: string) => {
        const date = localDateKey();
        setState((prev) => {
          const today = { ...prev.phrasePractice[date] };
          delete today[phraseId];
          const phrasePractice = { ...prev.phrasePractice };
          if (Object.keys(today).length === 0) delete phrasePractice[date];
          else phrasePractice[date] = today;
          return { ...prev, phrasePractice };
        });
      },
      toggleFlashcard: (phraseId: string) =>
        setState((prev) => {
          const flashcards = { ...prev.flashcards };
          if (flashcards[phraseId]) delete flashcards[phraseId];
          else flashcards[phraseId] = true;
          return { ...prev, flashcards };
        }),
      resetProgress: () => setState({ completedUnits: {}, quizAttempts: {}, wordsReviewed: {}, phrasePractice: {}, flashcards: {} }),
    }),
    [state],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
