import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TrustCertificates } from './components/TrustCertificates';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { HomeownerView } from './components/HomeownerView';
import { GdprModal } from './components/GdprModal';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'contractors' | 'homeowners'>('contractors');
  const [gdprOpen, setGdprOpen] = useState(false);

  useEffect(() => {
    // Check if URL has hash or query for homeowners
    const hash = window.location.hash.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    if (hash.includes('renovera') || params.get('view') === 'renovera' || params.get('view') === 'privatperson') {
      setCurrentView('homeowners');
    }
  }, []);

  const handleSwitchView = (view: 'contractors' | 'homeowners') => {
    setCurrentView(view);
    if (view === 'homeowners') {
      window.history.replaceState(null, '', '#renovera');
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <div className="prospectly-app">
      <Header
        currentView={currentView}
        onSwitchView={handleSwitchView}
        onOpenGdpr={() => setGdprOpen(true)}
      />

      <main id="main-content">
        {currentView === 'contractors' ? (
          <>
            <Hero onSwitchToHomeowner={() => handleSwitchView('homeowners')} />
            <MarqueeBanner />
            <About />
            <Problem />
            <Solution />
            <TrustCertificates />
            <Benefits />
            <Pricing />
            <Faq />
            <FinalCta onOpenGdpr={() => setGdprOpen(true)} />
          </>
        ) : (
          <HomeownerView
            onSwitchToContractor={() => handleSwitchView('contractors')}
            onOpenGdpr={() => setGdprOpen(true)}
          />
        )}
      </main>

      <Footer
        currentView={currentView}
        onSwitchView={handleSwitchView}
        onOpenGdpr={() => setGdprOpen(true)}
      />

      <GdprModal isOpen={gdprOpen} onClose={() => setGdprOpen(false)} />
    </div>
  );
};
