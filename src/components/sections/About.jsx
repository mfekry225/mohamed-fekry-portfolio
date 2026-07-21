import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';
import { useLanguage } from '../../hooks/useLanguage.js';
import { SectionTitle } from '../ui/SectionTitle.jsx';
export const About = () => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  return (
    <section id="about" className="grid md:grid-cols-2 gap-12 items-start scroll-mt-24">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
        <SectionTitle>{t.aboutTitle}</SectionTitle>
        <p className="text-lg leading-relaxed font-medium opacity-90 pl-4 border-l-2 md:border-l-0 md:pr-4" style={{ borderColor: '#4A7FD4', color: darkMode ? '#CBD5E1' : '#1E293B' }}>{t.about}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl glass card-hover bg-brand/5 border border-brand/15">
        <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-brand"><GraduationCap size={22} /><span>{t.eduTitle}</span></h3>
        <div className="space-y-6">
          {t.education.map((edu, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="px-3 py-1.5 rounded-xl font-black text-xs bg-brand/15 text-brand border border-brand/25">{edu.year}</div>
              <div><h4 className="font-bold text-base mb-1">{edu.degree}</h4><p className="text-sm opacity-70">{edu.university}</p></div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
