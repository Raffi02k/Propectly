import React from 'react';
import { Sparkles } from 'lucide-react';

const marqueeItems = [
  "Kvalificerad B2B-mötesbokning",
  "Nischad mot IT- & Tech-rekrytering",
  "Betala för resultat",
  "Möten med CTOs & Tech Leads",
  "Ingen bindningstid",
  "Ni rekryterar • Jag fyller kalendern",
  "Full insyn i er pipeline",
  "Slipp kalla samtal",
  "100% verifierat anställningsbehov"
];

export const MarqueeBanner: React.FC = () => {
  // Duplicate list twice for seamless infinite CSS loop
  const displayItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {displayItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <Sparkles size={14} className="marquee-spark" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
