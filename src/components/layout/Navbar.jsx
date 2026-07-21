import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';
import { useLanguage } from '../../hooks/useLanguage.js';
export const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ];
  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed w-full z-50 transition-all duration-300 glass ${scrolled ? (darkMode ? 'bg-slate-900/90 border-b border-slate-800 shadow-xl' : 'bg-white/90 border-b border-slate-200 shadow-md') : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-black text-lg md:text-xl tracking-widest text-brand font-display">MOHAMED FEKRY</span>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (<a key={item.id} href={`#${item.id}`} className="text-sm font-bold opacity-80 hover:opacity-100 hover:text-brand transition">{item.label}</a>))}
          <div className="flex items-center gap-2">
            <a href="https://www.linkedin.com/in/mfekry225/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl transition-all hover:scale-105 bg-brand/10 border border-brand/20 text-brand"><Linkedin size={18} /></a>
            <button onClick={toggleTheme} className="p-2.5 rounded-xl transition-all hover:scale-105 bg-brand/10 border border-brand/20 text-brand">{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button>
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 bg-brand/10 border border-brand/20 text-brand"><Globe size={16} /><span>{t.switchLang}</span></button>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-brand">{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          <button onClick={toggleLanguage} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-brand/15 text-brand">{t.switchLang}</button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-brand">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className={`md:hidden px-6 pb-4 ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'}`}>
          {navItems.map((item) => (<a key={item.id} href={`#${item.id}`} onClick={() => setMobileOpen(false)} className="block py-3 font-bold opacity-80 hover:text-brand">{item.label}</a>))}
        </motion.div>
      )}
    </motion.nav>
  );
};
