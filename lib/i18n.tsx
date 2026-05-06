'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { Language, dictionaries } from './dictionaries';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof dictionaries)['RU'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('RU');

  useEffect(() => {
    const saved = localStorage.getItem('kamzino_lang') as Language;
    if (saved && ['RU', 'EN', 'KZ'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('kamzino_lang', newLang);
  };

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
