import React from 'react';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="prismodell" className="section-padding pricing-section">
      <div className="container">
        <div className="pricing-card">
          <div className="section-badge" style={{ textAlign: 'center', display: 'block', margin: '0 auto 0.75rem auto' }}>
            Prismodell
          </div>
          <h2 className="pricing-headline">
            Ingen fast kostnad. Du betalar bara för resultat
          </h2>

          <p className="pricing-desc">
            Jag tror på schyssta och enkla villkor. Du ska inte betala för att någon bara ringer samtal utan resultat. Vi avtalar en rimlig provision på stängda offerter och förmedlade uppdrag. Inget signerat jobb = noll kronor att betala.
          </p>

          <div className="pricing-pillars">
            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>0 kr fast månadskostnad</h4>
                <p>Ingen månadsavgift och ingen startkostnad. Vi kommer igång direkt med era liggande offerter.</p>
              </div>
            </div>

            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>Ingen bindningstid</h4>
                <p>Ni testar samarbetet förutsättningslöst. Samarbetet fortsätter så länge det skapar lönsamhet för er.</p>
              </div>
            </div>

            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>Tydlig provision</h4>
                <p>En förutbestämd procent på ordervärdet som faktureras först när kunden har godkänt er offert.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <a href="#boka-samtal" className="btn btn-primary btn-lg">
              <span>Boka ett samtal och kom igång riskfritt</span>
              <ArrowRight size={18} />
            </a>
            <a href="tel:0701234567" className="btn btn-secondary btn-lg">
              <Phone size={18} />
              <span>Ring direkt: 070-123 45 67</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
