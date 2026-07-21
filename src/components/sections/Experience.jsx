import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage.js';
import { experience } from '../../data/experience.js';
export const Experience = () => {
  const { t, lang } = useLanguage();
  return (
    <section id="experience" className="rounded-3xl p-8 md:p-14 glass relative overflow-hidden scroll-mt-24" style={{ background: 'linear-gradient(135deg, rgba(74,127,212,0.08) 0%, rgba(30,58,138,0.15) 100%)', border: '1px solid rgba(74,127,212,0.2)' }}>
      <div className="flex items-center gap-3 mb-10">
        <Briefcase className="text-brand" size={26} />
        <h2 className="text-2xl md:text-3xl font-black text-brand">{t.expTitle}</h2>
      </div>
      <div className="space-y-10">
        {experience.map((exp, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`pb-8 ${idx !== experience.length - 1 ? 'border-b border-slate-700/30' : ''}`}>
            <div className="flex flex-wrap justify-between items-start mb-6 gap-2">
              <div><h3 className="text-xl font-black mb-1">{lang === 'ar' ? exp.roleAr : exp.roleEn}</h3><p className="text-base font-bold text-brand">{lang === 'ar' ? exp.companyAr : exp.companyEn}</p></div>
              <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-brand/10 border border-brand/25 text-brand">{lang === 'ar' ? exp.periodAr : exp.period}</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {(lang === 'ar' ? exp.detailsAr : exp.detailsEn).map((detail, dIdx) => (
                <li key={dIdx} className="flex gap-2.5 text-sm p-3.5 rounded-xl glass font-medium opacity-90 bg-brand/5 border border-brand/10"><span className="text-brand flex-shrink-0">◆</span><span>{detail}</span></li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
