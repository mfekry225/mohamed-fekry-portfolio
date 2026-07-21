import { useLanguage } from '../../hooks/useLanguage.js';
export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 text-center border-t border-slate-800/40 relative z-10 text-xs opacity-75">
      <p className="font-bold mb-2">MOHAMED FEKRY AL-KAFAFI · {t.stats[3].title}</p>
      <p>{t.footer}</p>
    </footer>
  );
};
