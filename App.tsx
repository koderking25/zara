
import React, { useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import DetailsGrid from './components/DetailsGrid';
import MusicRoom from './components/MusicRoom';
import WizardSection from './components/WizardSection';
import DebateSection from './components/DebateSection';
import ConversationSparker from './components/ConversationSparker';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Layout>
      <Hero />
      <div id="content" className="bg-[#fcfaf7]">
        <DetailsGrid />
        <MusicRoom />
        <WizardSection />
        <DebateSection />
        <ConversationSparker />
      </div>
    </Layout>
  );
};

export default App;
