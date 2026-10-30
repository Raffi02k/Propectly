import React from 'react';
import { Mail, Linkedin, Phone, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  currentView: 'contractors' | 'homeowners';
  onSwitchView: (view: 'contractors' | 'homeowners') => void;
  onOpenGdpr: () => void;
}

export const Footer: React.FC<FooterProps> = ({ currentView, onSwitchView, onOpenGdpr }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-text">
              <strong>KEVIN SÖDER</strong>
            </div>
            <p>
              Säljpartner och offertstängning för byggfirmor inom badrum, kök och tak i Göteborgsområdet.
              <br />
              <em>”Du bygger, jag säljer.”</em>
            </p>
            <div className="footer-badges">
              <span className="footer-badge-pill">
                <ShieldCheck size={14} color="#2E7D5B" />
                Endast resultatbaserat
              </span>
              <span className="footer-badge-pill">
                <ShieldCheck size={14} color="#2E7D5B" />
                0 kr fast månadskostnad
              </span>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4>För Byggfirmor</h4>
              <a
                href="#problemet"
                className="footer-link"
                onClick={() => {
                  if (currentView !== 'contractors') onSwitchView('contractors');
                }}
              >
                Problemet
              </a>
              <a
                href="#tjanster"
                className="footer-link"
                onClick={() => {
                  if (currentView !== 'contractors') onSwitchView('contractors');
                }}
              >
                Våra tjänster
              </a>
              <a
                href="#kvalitetskrav"
                className="footer-link"
                onClick={() => {
                  if (currentView !== 'contractors') onSwitchView('contractors');
                }}
              >
                Kvalitetskrav
              </a>
              <a
                href="#prismodell"
                className="footer-link"
                onClick={() => {
                  if (currentView !== 'contractors') onSwitchView('contractors');
                }}
              >
                Prismodell
              </a>
              <a
                href="#boka-samtal"
                className="footer-link"
                onClick={() => {
                  if (currentView !== 'contractors') onSwitchView('contractors');
                }}
              >
                Boka samtal
              </a>
            </div>

            <div className="footer-links-col">
              <h4>För Privatpersoner</h4>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  onSwitchView('homeowners');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Ska du renovera?
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  onSwitchView('homeowners');
                  setTimeout(() => {
                    document.getElementById('privat-forfragan')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Skicka in offert / förfrågan
              </button>
              <button
                type="button"
                className="footer-link-btn"
                onClick={() => {
                  onSwitchView('homeowners');
                  setTimeout(() => {
                    document.getElementById('kvalitetskrav')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                Krav på våra hantverkare
              </button>
            </div>

            <div className="footer-links-col">
              <h4>Kontakt & Info</h4>
              <a href="tel:0701234567" className="footer-link">
                <Phone size={15} color="#2E7D5B" />
                <span>070-123 45 67</span>
              </a>
              <a href="mailto:kevin@kevin-soder.se" className="footer-link">
                <Mail size={15} />
                <span>kevin@kevin-soder.se</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-s%C3%B6der-b42a1b279"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={15} color="#0077b5" />
                <span>LinkedIn</span>
              </a>
              <button
                type="button"
                className="footer-link-btn"
                onClick={onOpenGdpr}
              >
                Integritetspolicy (GDPR)
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Kevin Söder. Alla rättigheter förbehållna. Verksam i Göteborg, Mölndal, Kungsbacka & Västsverige.
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Tillbaka till toppen"
          >
            <span>Till toppen</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
