import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Localized } from '../types';
import { uiStrings, type UiKey } from '../i18n/uiStrings';

export type Lang = 'en' | 'zh';

const STORAGE_KEY = 'french-tcf-lang-v1';

function loadLang(): Lang {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === 'zh' ? 'zh' : 'en';
  } catch {
    return 'en';
  }
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Resolve a Localized content object (vocab, grammar, quiz text, ...) to the current language. */
  t: (loc: Localized) => string;
  /** Resolve a static UI string by key, with optional {{token}} interpolation. */
  ui: (key: UiKey, vars?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(loadLang);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage unavailable — language choice just won't persist
    }
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'zh' : 'en')),
      t: (loc: Localized) => loc[lang],
      ui: (key: UiKey, vars?: Record<string, string | number>) => {
        let text = uiStrings[key][lang];
        if (vars) {
          for (const [token, val] of Object.entries(vars)) {
            text = text.replace(`{{${token}}}`, String(val));
          }
        }
        return text;
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
