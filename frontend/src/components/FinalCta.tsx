import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="section-padding final-cta-section">
      <div className="container">
        <div className="final-cta-box">
          <h2>Redo att fylla kalendern med nya kunduppdrag?</h2>
          <p>
            Boka ett förutsättningslöst 15-minuters introduktionssamtal direkt i min Calendly. Vi stämmer av er kapacitet, er målgrupp och ser hur många kvalificerade möten vi kan leverera till er nästa månad.
          </p>

          <div className="final-cta-action">
            <a
              href="https://calendly.com/kevin-prospectly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
              style={{ fontSize: '1.15rem', padding: '1.15rem 2.5rem' }}
            >
              <Calendar size={22} />
              <span>Boka ett kort möte med Kevin</span>
              <ArrowRight size={20} />
            </a>

            <div className="final-cta-subtext">
              <span>✓ Helt förutsättningslöst</span>
              <span>•</span>
              <span>✓ Inget säljsnack</span>
              <span>•</span>
              <span>✓ Direkt i kalendern</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
