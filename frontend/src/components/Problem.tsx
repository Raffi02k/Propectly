import React from 'react';
import { HelpCircle, Scale, Clock3, ArrowRight } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problemet" className="section-padding problem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Utmaningen i din vardag</div>
          <h2 className="section-title">
            Skickar du många offerter som aldrig blir jobb?
          </h2>
          <p className="section-subtitle">
            Det beror sällan på att ditt pris är för högt. När du är ute och bygger har du varken tid eller ork att sitta i telefon på kvällarna för att jaga kunder och svara på funderingar.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon-wrap">
              <HelpCircle size={26} />
            </div>
            <h3>Kunden förstår inte vad som ingår</h3>
            <p>
              Privatpersonen ser oftast bara den stora totalsumman. De förstår sällan varför ett godkänt tätskikt, ordentligt underarbete eller kvalitetsmaterial kostar som det gör, och drar sig för att svara.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrap">
              <Scale size={26} />
            </div>
            <h3>Äpplen jämförs med päron</h3>
            <p>
              Kunden jämför din kompletta, fackmässiga offert med en billigare konkurrent som har utelämnat rivning, sophantering eller el och VVS. Utan en säljare som förklarar skillnaden förlorar du jobbet i onödan.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrap">
              <Clock3 size={26} />
            </div>
            <h3>Ingen tid för uppföljning</h3>
            <p>
              Du står med verktygen i handen på bygget från morgon till kväll. Efter arbetsdagen orkar ingen ringa upp kalla leads, räkna om ROT-avdrag eller erbjuda trygga delbetalningar. Offerten rinner ut i sanden.
            </p>
          </div>
        </div>

        <div className="problem-banner">
          <div>
            <h3>Lösningen? En säljpartner som kan bygg och stänger åt er</h3>
            <p>
              Jag tar era liggande offerter, kontaktar kunden med ett trevligt och professionellt bemötande, reder ut alla frågor och stänger affären. Ni betalar endast en provision när avtalet är i hamn.
            </p>
          </div>
          <a href="#boka-samtal" className="btn btn-primary btn-lg" style={{ flexShrink: 0 }}>
            <span>Stäng era kalla offerter</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
