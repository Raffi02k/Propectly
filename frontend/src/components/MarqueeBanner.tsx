import React from 'react';
import { Hammer, ShieldCheck } from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'Badrumsrenovering Göteborg',
    'Takbyte & Takläggning',
    'Köksrenovering',
    'Stäng dina kalla offerter',
    'Du bygger, jag säljer',
    'ROT-avdragskalkyler direkt',
    '100% resultatbaserat',
    'Kvalitetskrav: Säker Vatten & GVK/BKR',
    'Ingen fast månadskostnad',
  ];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {/* Double list for seamless looping */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="marquee-item">
            <span className="marquee-dot">
              {idx % 2 === 0 ? <Hammer size={14} color="#222222" /> : <ShieldCheck size={14} color="#717171" />}
            </span>
            <span className="marquee-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
