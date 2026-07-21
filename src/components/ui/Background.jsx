import { useTheme } from '../../hooks/useTheme.js';
export const Background = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      {/* هالة بنفسجية */}
      <div className="orb w-96 h-96 top-0 right-0 animate-float" style={{ background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)', opacity: darkMode ? 0.25 : 0.15 }} />
      {/* هالة برتقالية */}
      <div className="orb w-80 h-80 top-1/3 left-0 animate-float" style={{ background: 'radial-gradient(circle, #F97316 0%, transparent 70%)', opacity: darkMode ? 0.2 : 0.12, animationDelay: '2s' }} />
    </>
  );
};
