import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Linkedin, ArrowDown, Award, Cpu, FileCheck, MapPin } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';
import { useLanguage } from '../../hooks/useLanguage.js';

const iconMap = { award: Award, cpu: Cpu, 'file-check': FileCheck, 'map-pin': MapPin };

export const Hero = () => {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const imgUrl = "https://z-cdn-media.chatglm.cn/files/71b7bb16-6fe3-4162-8bff-faff624b591e.png?auth_key=1884632707-07a125a1f8fa4cbda4d5c69fb0affe3c-0-457a2baad03f3e098ec046bd5ab399d5";

  return (
    <section className="pt-40 pb-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* النصوص والبيانات */}
        <div className="text-center md:text-right">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-wider bg-brand/10 border border-brand/30 text-brand">
            <Sparkles size={14} /><span>{t.badge}</span>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-black mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: darkMode ? '#F8FAFC' : '#1E1B2E' }}>{t.name}</motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl font-medium max-w-xl mx-auto md:mx-0 leading-relaxed mb-10 opacity-90" style={{ color: darkMode ? '#D8B4FE' : '#6B21A8' }}>{t.title}</motion.p>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://wa.me/97336819980" target="_blank" rel="noopener noreferrer" className="luxury-btn text-white px-7 py-3.5 rounded-2xl font-bold flex items-center gap-2.5"><MessageCircle size={18} /><span>{t.whatsapp}</span></a>
            <a href="https://www.linkedin.com/in/mfekry225/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 bg-brand/10 border border-brand/30 text-brand"><Linkedin size={18} /><span>{t.linkedin}</span></a>
          </motion.div>
        </div>

        {/* الصورة الشخصية */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, type: 'spring' }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* التوهج خلف الصورة */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-500 animate-float"></div>
            {/* إطار الصورة */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-brand to-accent">
              <img 
                src={imgUrl} 
                alt="Mohamed Fekry" 
                className="w-full h-full object-contain rounded-full bg-white p-4" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* الإحصائيات أسفل القسم */}
      <div className="max-w-4xl mx-auto mt-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Award;
            return (
              <div key={i} className="p-4 rounded-2xl glass text-center bg-brand/5 border border-brand/20">
                <div className="flex justify-center mb-2 text-accent"><Icon size={20} /></div>
                <h3 className="text-xl font-black mb-1">{stat.title}</h3>
                <p className="text-xs opacity-75">{stat.desc}</p>
              </div>
            );
          })}
        </motion.div>
        <div className="shimmer-line h-px max-w-xs mx-auto mt-14 rounded-full" />
      </div>
    </section>
  );
};
