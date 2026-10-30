import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { ContractorForm } from './ContractorForm';

interface FinalCtaProps {
  onOpenGdpr?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenGdpr }) => {
  return (
    <section id="boka-samtal" className="section-padding final-cta-section">
      <div className="container">
        <div className="form-wrapper-box">
          <div className="form-header-area">
            <div className="section-badge">Boka förutsättningslöst samtal</div>
            <h2>Få fler stängda offerter utan fast kostnad</h2>
            <p>
              Fyll i formuläret nedan så ringer Kevin upp dig inom 24 timmar. Vi går igenom hur din firma arbetar idag, vilka offerter som ligger och hur vi kan stänga dem tillsammans.
            </p>
          </div>

          <ContractorForm onOpenGdpr={onOpenGdpr} />

          <div className="direct-call-banner">
            <div className="direct-call-left">
              <Phone size={22} color="#222222" />
              <div>
                <strong>Sitter du i bilen eller vill prata direkt?</strong>
                <p>Ring Kevin Söder på 070-123 45 67 (Vardagar 07:00 till 18:00)</p>
              </div>
            </div>
            <a href="tel:0701234567" className="btn btn-secondary btn-sm">
              Ring direkt
            </a>
          </div>

          <div className="direct-call-banner" style={{ marginTop: '0.85rem' }}>
            <div className="direct-call-left">
              <Calendar size={22} color="#1F3A5F" />
              <div>
                <strong>Föredrar du att välja tid direkt i kalendern?</strong>
                <p>Boka ett 15 minuters samtal online i Kevins kalender</p>
              </div>
            </div>
            <a
              href="https://calendly.com/kevin-prospectly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Boka tid online</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
