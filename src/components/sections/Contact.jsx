import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Phone, Copy } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage.js';
export const Contact = ({ onCopyEmail }) => {
  const { t } = useLanguage();
  const buttons = [
    { href: 'https://wa.me/97336819980', label: t.whatsapp, icon: MessageCircle, primary: true },
    { href: 'https://www.linkedin.com/in/mfekry225/', label: t.linkedin, icon: Linkedin },
    { href: 'tel:0097336819980', label: t.call, icon: Phone },
  ];
  return (
    <section id="contact" className="text-center space-y-8 scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
        <h2 className="text-3xl font-black">{t.contactTitle}</h2>
        <p className="text-sm font-medium opacity-75">{t.contactSub}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-wrap justify-center gap-4">
        {buttons.map((btn, i) => (
          <a key={i} href={btn.href} target={btn.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={btn.primary ? 'luxury-btn text-white px-7 py-3.5 rounded-2xl font-bold flex items-center gap-2.5' : 'flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 bg-brand/10 border border-brand/25 text-brand'}><btn.icon size={18} /><span>{btn.label}</span></a>
        ))}
        <button onClick={onCopyEmail} className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold transition-all hover:scale-105 bg-brand/10 border border-brand/25 text-brand"><Copy size={18} /><span>{t.mail}</span></button>
      </motion.div>
    </section>
  );
};
