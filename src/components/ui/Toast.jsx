import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';
export const Toast = ({ message }) => {
  const { darkMode } = useTheme();
  return (
    <AnimatePresence>
      {message && (
        <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} className="fixed bottom-6 right-6 z-50 glass px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-bold border" style={{ background: darkMode ? 'rgba(126, 34, 206, 0.9)' : 'rgba(255, 255, 255, 0.95)', borderColor: '#A855F7', color: darkMode ? 'white' : '#1E1B2E' }}>
          <CheckCircle size={18} style={{ color: '#10B981' }} />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
