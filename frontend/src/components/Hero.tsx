import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Value Proposition */}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="tag-dot"></span>
              <span>B2B-Mötesbokning för IT- & Tech-rekryterare</span>
            </div>

            <h1 className="hero-title">
              Fler kunduppdrag åt rekryteringsbolag{' '}
              <span className="highlight">utan att ni behöver prospektera själva</span>
            </h1>

            <p className="hero-lead">
              Jag hjälper IT- och tech-rekryteringsbolag att boka kvalificerade möten med företag som behöver anställa, så att ni kan fokusera på att tillsätta kandidater i stället för att jaga nya kunder.
            </p>

            <div className="hero-quote-box">
              <Sparkles size={20} color="#2E7D5B" />
              <span className="quote-text">”Ni rekryterar. Jag fyller kalendern.”</span>
            </div>

            <div className="hero-cta-group">
              <a
                href="https://calendly.com/kevin-prospectly"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Calendar size={20} />
                <span>Boka 15 min introduktionsmöte</span>
                <ArrowRight size={18} />
              </a>

              <a href="#losningen" className="btn btn-secondary btn-lg">
                <span>Så funkar upplägget</span>
              </a>
            </div>

            <div className="hero-trust-list">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Ingen bindningstid</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Betala för resultat</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>100% kvalificerade möten</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Tech Pipeline Card */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-title">
                  <Calendar size={18} color="#2E7D5B" />
                  <span>Kommande möten</span>
                </div>
                <span className="hero-status-pill">
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#2E7D5B', flexShrink: 0 }}></span>
                  Aktiv pipeline
                </span>
              </div>


              <div className="hero-meetings-list">
                <div className="meeting-item">
                  <div className="meeting-time">
                    <div>TIS</div>
                    <div style={{ fontSize: '0.85rem' }}>10:00</div>
                  </div>
                  <div className="meeting-info">
                    <h4>CTO & Co-founder • Fintech Scaleup</h4>
                    <p>Söker 3 st Senior Backend (Go/Python) & Cloud Architect. Behov av rekryteringspartner omgående.</p>
                  </div>
                </div>

                <div className="meeting-item">
                  <div className="meeting-time">
                    <div>ONS</div>
                    <div style={{ fontSize: '0.85rem' }}>13:30</div>
                  </div>
                  <div className="meeting-info">
                    <h4>VP of Engineering • Nordisk SaaS-koncern</h4>
                    <p>Skalar utvecklingsteamet: Behov av Tech Lead & 2 Fullstack-utvecklare i Stockholm.</p>
                  </div>
                </div>

                <div className="meeting-item">
                  <div className="meeting-time">
                    <div>TOR</div>
                    <div style={{ fontSize: '0.85rem' }}>11:00</div>
                  </div>
                  <div className="meeting-info">
                    <h4>Head of Tech • E-handelsbolag</h4>
                    <p>Söker extern partner för att rekrytera DevOps Engineer och Data Platform Specialist.</p>
                  </div>
                </div>
              </div>

              <div className="hero-card-kevin">
                <img
                  src="/images/kevin-bild.jpg"
                  alt="Kevin Söder"
                  className="hero-kevin-avatar"
                />
                <div className="hero-kevin-details">
                  <div className="hero-kevin-name">Kevin Söder</div>
                  <div className="hero-kevin-role">B2B-säljkonsult • Prospectly</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600, color: '#2E7D5B' }}>
                  <ShieldCheck size={16} />
                  <span>Verifierad säljpartner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
