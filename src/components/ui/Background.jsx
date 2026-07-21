import { useTheme } from '../../hooks/useTheme.js';
export const Background = () => {
  const { darkMode } = useTheme();
  return (
    <>
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="orb w-96 h-96 top-0 right-0 animate-float" style={{ background: 'radial-gradient(circle, #4A7FD4 0%, transparent 70%)', opacity: darkMode ? 0.18 : 0.1 }} />
      <div className="orb w-80 h-80 top-1/3 left-0 animate-float" style={{ background: 'radial-gradient(circle, #1E3A8A 0%, transparent 70%)', opacity: darkMode ? 0.15 : 0.08, animationDelay: '2s' }} />
    </>
  );
};
