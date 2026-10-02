import React from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="prissattning" className="section-padding pricing-section">
      <div className="container">
        <div className="pricing-card">
          <div className="section-badge" style={{ margin: '0 auto 1.5rem auto' }}>
            Prismodell
          </div>

          <h2 className="pricing-headline">
            Skräddarsytt upplägg utifrån era behov
          </h2>

          <p className="pricing-desc">
            Varje rekryterings- och bemanningsbolag är unikt. Ert fokusområde inom IT, er geografiska marknad och hur många nya uppdrag ni vill ha kapacitet att ta in varje månad avgör hur vårt samarbete bäst struktureras. Boka ett kort samtal så går vi igenom era förutsättningar och tar fram ett konkret förslag.
          </p>

          <div className="pricing-pillars">
            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>Individuellt anpassat</h4>
                <p>Upplägget dimensioneras exakt efter hur många möten ni vill och hinner ta emot per vecka.</p>
              </div>
            </div>

            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>Ingen bindningstid</h4>
                <p>Testa samarbetet utan krångliga avtal. Ni stannar för att resultaten skapar värde.</p>
              </div>
            </div>

            <div className="pillar-item">
              <CheckCircle2 className="pillar-icon" size={20} />
              <div className="pillar-text">
                <h4>Fokus på avkastning</h4>
                <p>Varje möte är noggrant kvalificerat för att ge maximal chans till skarpa kundavtal.</p>
              </div>
            </div>
          </div>

          <a
            href="https://calendly.com/kevin-prospectly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <Calendar size={20} />
            <span>Boka ett samtal och få ett förslag</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
