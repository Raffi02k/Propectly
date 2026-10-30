import React from 'react';
import { Mail, Linkedin, Phone, ArrowRight, UserCheck, Briefcase, Percent, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="om-kevin" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Photo column */}
          <div className="about-photo-wrap">
            <img
              src="/images/kevin-bild.jpg"
              alt="Kevin Söder, säljpartner för byggfirmor"
              className="about-photo"
            />
            <div className="about-photo-badge">
              <div className="badge-title">Kevin Söder</div>
              <div className="badge-sub">Grundare • Säljpartner</div>
            </div>
          </div>

          {/* Bio column */}
          <div className="about-content">
            <div className="section-badge">Om Kevin Söder • Din externa säljresurs</div>
            <h2>”Du bygger. Jag säljer.”</h2>
            <div className="about-role">Bakgrund inom snickeri & mångårig försäljningserfarenhet</div>

            <p className="about-bio">
              Jag har själv en bakgrund inom bygg och snickeri i kombination med flera års erfarenhet av aktiv försäljning, bland annat som butikschef och företagssäljare. Den kombinationen är ovanlig, men helt avgörande när offerter ska stängas.
            </p>

            {/* 3 Pillars: Vem, Vad, Hur */}
            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <UserCheck size={18} />
                  </div>
                  <h4>Vem jag är</h4>
                </div>
                <p>
                  Snickare i grunden med mångårig säljerfarenhet. Jag förstår fackspråk, tätskikt och byggprocesser, och vet hur man förklarar kalkylen tryggt för kunden.
                </p>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <Briefcase size={18} />
                  </div>
                  <h4>Vad jag gör</h4>
                </div>
                <p>
                  Jag tar era liggande offerter, ringer upp era kunder och stänger jobben. Dessutom förmedlar jag färdigspecade renoveringsuppdrag i Göteborg.
                </p>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon-badge">
                    <Percent size={18} />
                  </div>
                  <h4>Hur det går till</h4>
                </div>
                <p>
                  100% provisionsbaserat. 0 kr i fast månadskostnad eller startavgift. Inget stängt jobb = noll kronor i kostnad för er firma.
                </p>
              </div>
            </div>

            <div className="about-contact-bar">
              <a
                href="tel:0701234567"
                className="contact-pill"
                aria-label="Ring Kevin på 070-123 45 67"
              >
                <Phone size={15} />
                <span>070-123 45 67</span>
              </a>

              <a
                href="mailto:kevin@kevin-soder.se"
                className="contact-pill"
                aria-label="Maila Kevin på kevin@kevin-soder.se"
              >
                <Mail size={15} />
                <span>kevin@kevin-soder.se</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kevin-s%C3%B6der-b42a1b279?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                aria-label="Besök Kevins LinkedIn-profil"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://calendly.com/kevin-prospectly"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-cta-btn"
                title="Boka tid direkt online i kalendern"
              >
                <Calendar size={15} />
                <span>Boka tid direkt</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
