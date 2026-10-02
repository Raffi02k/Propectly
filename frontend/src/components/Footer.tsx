import React from 'react';
import { Mail, Linkedin, Calendar, ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="footer-logo-link"
              aria-label="Tillbaka till toppen"
            >
              <img
                src="/images/logo-prospectly.png"
                alt="Prospectly"
              />
            </a>

            <p>
              Kvalificerad B2B-mötesbokning för små och medelstora IT- och tech-rekryteringsbolag i Sverige. Ni rekryterar. Jag fyller kalendern.
            </p>
          </div>

          <div className="footer-links">
            <a href="#problemet" className="footer-link">Problemet</a>
            <a href="#losningen" className="footer-link">Så funkar det</a>
            <a href="#fordelar" className="footer-link">Fördelar</a>
            <a href="#prissattning" className="footer-link">Prismodell</a>
            <a href="#om-kevin" className="footer-link">Om Kevin</a>
            <a href="#faq" className="footer-link">FAQ</a>
            <a
              href="mailto:kevin@prospectly.se"
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Mail size={16} />
              <span>kevin@prospectly.se</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-s%C3%B6der-b42a1b279?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://calendly.com/kevin-prospectly"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              aria-label="Calendly"
            >
              <Calendar size={16} />
              <span>Calendly</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Prospectly (prospectly.se). Grundat av Kevin Söder. Alla rättigheter förbehållna.
          </div>

          {/* MediaMagnet Credit */}
          <div className="footer__credit">
            <span>Byggd av</span>
            <a
              href="https://mediamagnet.se"
              target="_blank"
              rel="noopener noreferrer"
              title="MediaMagnet Webb & Marknadsföring"
            >
              <img
                src="/images/mediamagnet_logo_with_text_vit.png"
                alt="MediaMagnet"
                className="footer__credit-img"
              />
              <ArrowUpRight size={16} style={{ opacity: 0.8 }} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#94a3b8', fontSize: '0.85rem' }}
          >
            <span>Till toppen</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
