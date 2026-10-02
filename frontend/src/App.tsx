import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Benefits } from './components/Benefits';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="prospectly-app">
      <Header />
      <main id="main-content">
        <Hero />
        <MarqueeBanner />
        <Problem />
        <Solution />
        <Benefits />
        <Pricing />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};


