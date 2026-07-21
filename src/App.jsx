import { useState, useCallback } from 'react';
import { SEO } from './lib/seo.jsx';
import { Background } from './components/ui/Background.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { About } from './components/sections/About.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Toast } from './components/ui/Toast.jsx';
import { useTheme } from './hooks/useTheme.js';
import { useLanguage } from './hooks/useLanguage.js';

const EMAIL = 'mfekry225@outlook.com';

function App() {
  const { darkMode } = useTheme();
  const { t } = useLanguage();
  const [toast, setToast] = useState('');

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast(t.copyToast);
      setTimeout(() => setToast(''), 3000);
    } catch (err) {}
  }, [t.copyToast]);

  const bgStyle = darkMode ? { background: '#050814', color: '#E2E8F0' } : { background: '#F8FAFC', color: '#0F172A' };

  return (
    <>
      <SEO t={t} />
      <div className="min-h-screen relative overflow-hidden" style={bgStyle}>
        <Background />
        <Toast message={toast} />
        <Navbar />
        <Hero />
        <main className="max-w-6xl mx-auto px-6 pb-24 space-y-28 relative z-10">
          <About />
          <Projects />
          <Experience />
          <Contact onCopyEmail={copyEmail} />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
