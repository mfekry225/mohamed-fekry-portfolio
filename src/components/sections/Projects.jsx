import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage.js';
import { projects } from '../../data/projects.js';
import { ProjectCard } from '../cards/ProjectCard.jsx';
import { SectionTitle } from '../ui/SectionTitle.jsx';

export const Projects = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.type === filter);
  const filters = [
    { id: 'all', label: t.filters.all },
    { id: 'tools', label: t.filters.tools },
    { id: 'systems', label: t.filters.systems },
    { id: 'content', label: t.filters.content }
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <SectionTitle>{t.projectsTitle}</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {filters.map((btn) => (
            <button 
              key={btn.id} 
              onClick={() => setFilter(btn.id)} 
              className="px-4 py-2 rounded-xl text-xs font-bold transition-all" 
              style={{ 
                background: filter === btn.id ? '#A855F7' : 'rgba(168, 85, 247, 0.1)', 
                color: filter === btn.id ? '#FFF' : '#A855F7', 
                border: '1px solid rgba(168, 85, 247, 0.3)' 
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (<ProjectCard key={p.id} project={p} index={i} />))}
      </div>
    </section>
  );
};
