import { createContext, useEffect, useState } from 'react';
import { ar } from '../locales/ar.js';
import { en } from '../locales/en.js';
const LanguageContext = createContext(undefined);
const translations = { ar, en };
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'ar');
  useEffect(() => {
    const t = translations[lang];
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
    localStorage.setItem('lang', lang);
  }, [lang]);
  const toggleLanguage = () => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  const t = translations[lang];
  return <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
export default LanguageContext;
