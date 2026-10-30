import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="tjanster" className="section-padding steps-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Våra två tjänster</div>
          <h2 className="section-title">
            Hur vi hjälper din byggfirma att växa
          </h2>
          <p className="section-subtitle">
            Båda tjänsterna betalas av byggfirman via provision. Inget resultat = noll kronor i kostnad för er.
          </p>
        </div>

        {/* Service 1: Stänga offerter */}
        <div className="service-feature-card">
          <div className="service-card-header">
            <div className="service-pill">Tjänst 1 • Huvudtjänst</div>
            <h3>Stänga offerter åt din byggfirma</h3>
            <p>
              Har du skickat iväg offerter på 150 000 till 400 000 kr som bara ligger och samlar damm? Låt mig ta över uppföljningen och förvandla dem till signerade kontrakt.
            </p>
          </div>

          <div className="steps-subgrid">
            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">1</div>
                <h4>Lämna över kalla offerter</h4>
              </div>
              <p>Ni skickar över offerter där kunden inte har svarat eller velar.</p>
            </div>

            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">2</div>
                <h4>Personlig genomgång med kunden</h4>
              </div>
              <p>Jag ringer upp kunden och förklarar kalkylen del för del på vanlig svenska.</p>
            </div>

            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">3</div>
                <h4>ROT & delbetalning</h4>
              </div>
              <p>Jag förklarar dyra poster, räknar på ROT-avdrag och visar månadskostnad.</p>
            </div>

            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">4</div>
                <h4>Kunden tackar ja</h4>
              </div>
              <p>Kunden känner sig trygg, signerar avtalet och ni genomför bygget.</p>
            </div>

            <div className="step-mini-card highlight-step">
              <div className="step-mini-header">
                <div className="step-mini-num">5</div>
                <h4>Provision vid resultat</h4>
              </div>
              <p>Ni betalar en förutbestämd provision. <strong>Inget resultat = 0 kr i kostnad.</strong></p>
            </div>
          </div>
        </div>

        {/* Service 2: Förmedla jobb */}
        <div className="service-feature-card" style={{ marginTop: '2.5rem' }}>
          <div className="service-card-header">
            <div className="service-pill" style={{ backgroundColor: 'rgba(31, 58, 95, 0.08)', color: '#1F3A5F' }}>
              Tjänst 2 • Förmedling
            </div>
            <h3>Förmedla färdigspecificerade renoveringsjobb</h3>
            <p>
              Får ni in förfrågningar ni inte hinner ta? Eller behöver ni fylla luckor i kalendern? Vi matchar kvalitetssäkrade renoveringsuppdrag mellan seriösa aktörer i Göteborg.
            </p>
          </div>

          <div className="steps-subgrid">
            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">1</div>
                <h4>Förfrågan inkommer</h4>
              </div>
              <p>En firma har fullt upp, eller en privatperson skickar in sitt projekt via sajten.</p>
            </div>

            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">2</div>
                <h4>Behovsanalys</h4>
              </div>
              <p>Jag specificerar projektets omfattning, tidsplan, kvadratmeter och ritningar.</p>
            </div>

            <div className="step-mini-card">
              <div className="step-mini-header">
                <div className="step-mini-num">3</div>
                <h4>Matchning till er</h4>
              </div>
              <p>Jobbet skickas direkt till er kontrollerade firma i nätverket med ledig kapacitet.</p>
            </div>

            <div className="step-mini-card highlight-step">
              <div className="step-mini-header">
                <div className="step-mini-num">4</div>
                <h4>Enkel ersättning</h4>
              </div>
              <p>Firman betalar en fast ersättning per förmedlat jobb eller en procentandel.</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#boka-samtal" className="btn btn-primary btn-lg">
            <span>Boka ett samtal och gå igenom era offerter</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
