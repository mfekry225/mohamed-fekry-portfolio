import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, ArrowRight, Folder, LayoutDashboard, ClipboardCheck, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage.js';
const iconList = { 'layout-dashboard': LayoutDashboard, 'clipboard-check': ClipboardCheck, zap: Zap, globe: Globe };
export const ProjectCard = ({ project, index }) => {
  const { lang, t } = useLanguage();
  const Icon = iconList[project.icon] || Folder;
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  return (
    <motion.a href={project.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group p-8 rounded-3xl card-hover block glass relative overflow-hidden bg-brand/5 border border-brand/15">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3.5 rounded-2xl transition-transform group-hover:scale-110 bg-brand/10 text-brand"><Icon size={26} /></div>
        <ExternalLink size={18} style={{ opacity: 0.4 }} />
      </div>
      <span className="inline-block px-3 py-1 mb-3 rounded-lg text-xs font-bold tracking-wider bg-brand/10 text-brand border border-brand/20">{lang === 'ar' ? project.tagAr : project.tagEn}</span>
      <h3 className="text-xl font-black mb-3">{lang === 'ar' ? project.titleAr : project.titleEn}</h3>
      <p className="text-sm leading-relaxed mb-6 font-medium opacity-80">{lang === 'ar' ? project.descAr : project.descEn}</p>
      <div className="flex items-center gap-2 text-xs font-black text-brand"><span>{t.openTool}</span><Arrow size={14} /></div>
    </motion.a>
  );
};
