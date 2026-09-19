import type { LevelMeta } from '../types';

export const levels: LevelMeta[] = [
  {
    id: 'A1',
    title: { en: 'A1 — Découverte', zh: 'A1 — 入門' },
    tagline: { en: 'Absolute beginner', zh: '完全新手' },
    description: {
      en: 'Survival French: greetings, numbers, basic questions, introducing yourself, and simple present-tense sentences.',
      zh: '生存法文：問候語、數字、基本問句、自我介紹，以及簡單的現在式句子。',
    },
    ncLc: 'Below NCLC 1',
  },
  {
    id: 'A2',
    title: { en: 'A2 — Élémentaire', zh: 'A2 — 基礎' },
    tagline: { en: 'Elementary', zh: '初級' },
    description: {
      en: 'Everyday topics: shopping, daily routine, the past tense (passé composé), and short conversations.',
      zh: '日常主題：購物、日常作息、過去式（passé composé），以及簡短對話。',
    },
    ncLc: 'NCLC 3–4',
  },
  {
    id: 'B1',
    title: { en: 'B1 — Intermédiaire', zh: 'B1 — 中級' },
    tagline: { en: 'Intermediate — common TCF Canada target', zh: '中級——TCF Canada 常見目標等級' },
    description: {
      en: 'Expressing opinions, giving reasons, future/conditional tenses, and handling most everyday situations independently.',
      zh: '表達意見、說明理由、未來式/條件式，以及能夠獨立應付大多數日常情況。',
    },
    ncLc: 'NCLC 5–6',
  },
  {
    id: 'B2',
    title: { en: 'B2 — Avancé', zh: 'B2 — 進階' },
    tagline: { en: 'Upper intermediate — strong TCF Canada score', zh: '中高級——TCF Canada 高分等級' },
    description: {
      en: 'Argumentation, nuance, the subjunctive, complex texts, and fluent spontaneous conversation.',
      zh: '論證表達、語意細膩差異、虛擬式、複雜文本，以及流暢的即興對話。',
    },
    ncLc: 'NCLC 7+',
  },
];

export function getLevelMeta(id: string): LevelMeta | undefined {
  return levels.find((l) => l.id === id);
}
