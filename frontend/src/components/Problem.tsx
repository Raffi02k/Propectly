import React from 'react';
import { UserCheck2, Clock, PhoneOff, ArrowRight } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problemet" className="section-padding problem-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Utmaningen i er vardag</div>
          <h2 className="section-title">
            Kandidaterna finns där. Men tiden att jaga nya kunduppdrag räcker inte till.
          </h2>
          <p className="section-subtitle">
            Som grundare eller rekryterare på ett IT-rekryteringsbolag är er vardag full av intervjuer och kandidatleverans. Då hamnar nykundsbearbetningen ofrånkomligen på efterkälken.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-icon-wrap">
              <UserCheck2 size={26} />
            </div>
            <h3>Starka kandidater men för få uppdrag</h3>
            <p>
              Ni har ett starkt nätverk och heta tech-kandidater redo för nya uppdrag. Men utan ett jämnt flöde av inkommande kundförfrågningar riskerar talangerna att försvinna till konkurrenter innan ni hunnit tillsätta dem.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrap">
              <Clock size={26} />
            </div>
            <h3>Nykundsbearbetningen hamnar sist</h3>
            <p>
              När ni väl har uppdrag att tillsätta krävs 100% fokus på leverans, intervjuer och referenstagning. Resultatet blir en klassisk bergochdalbana: full beläggning ena månaden, och tom säljpipeline nästa.
            </p>
          </div>

          <div className="problem-card">
            <div className="problem-icon-wrap">
              <PhoneOff size={26} />
            </div>
            <h3>Kalla kontakter tar tid och energi</h3>
            <p>
              Att sitta och manuellt leta upp CTOs, HR-chefer och IT-ledare, hitta deras direktkontaktuppgifter och köra kall outreach är tidskrävande och energidränerande. Tid ni hellre lägger på att matcha och tillsätta.
            </p>
          </div>
        </div>

        <div className="problem-banner">
          <div>
            <h3>Lösningen? Låt en expert sköta inflödet medan ni levererar</h3>
            <p>
              Jag tar över prospekteringen och mötesbokningen och fyller er kalender med relevanta bolag som aktivt behöver anställa.

            </p>
          </div>
          <a
            href="https://calendly.com/kevin-prospectly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ flexShrink: 0 }}
          >
            <span>Boka ett samtal</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
