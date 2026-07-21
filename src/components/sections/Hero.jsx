import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Linkedin, ArrowDown, Award, Cpu, FileCheck, MapPin } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';
import { useLanguage } from '../../hooks/useLanguage.js';
const iconMap = { award: Award, cpu: Cpu, 'file-check': FileCheck, 'map-pin': MapPin };
export const Hero = () => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  return (
    <section className="pt-40 pb-20 px-6 relative text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-wider bg-brand/10 border border-brand/30 text-brand">
          <Sparkles size={14} /><span>{t.badge}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-black mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: darkMode ? '#F8FAFC' : '#0F172A' }}>{t.name}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10 opacity-90" style={{ color: darkMode ? '#94A3B8' : '#334155' }}>{t.title}</motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/97336819980" target="_blank" rel="noopener noreferrer" className="luxury-btn text-white px-7 py-3.5 rounded-2xl font-bold flex items-center gap-2.5"><MessageCircle size={18} /><span>{t.whatsapp}</span></a>
          <a href="https://www.linkedin.com/in/mfekry225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 bg-brand/10 border border-brand/25 text-brand"><Linkedin size={18} /><span>{t.linkedin}</span></a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {t.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <div key={i} className="p-4 rounded-2xl glass text-center bg-brand/5 border border-brand/15">
                <div className="flex justify-center mb-2 text-brand"><Icon size={20} /></div>
                <h3 className="text-xl font-black mb-1">{stat.title}</h3>
                <p className="text-xs opacity-75">{stat.desc}</p>
              </div>
            );
          })}
        </motion.div>
        <div className="shimmer-line h-px max-w-xs mx-auto mt-14 rounded-full" />
        <motion.a href="#about" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="inline-block mt-10 text-brand opacity-60"><ArrowDown size={24} /></motion.a>
      </div>
    </section>
  );
};
