import React from 'react';
import { Target, CalendarCheck, Trophy, ArrowRight } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section id="losningen" className="section-padding steps-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Så funkar det</div>
          <h2 className="section-title">Ett enkelt upplägg i tre steg</h2>
          <p className="section-subtitle">
            Inga komplicerade onboarding-processer eller tekniska hinder. Jag tar hand om hela säljprospekteringen så att ni kan kliva in när mötet är bokat.
          </p>
        </div>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-number-badge">01</div>
            <h3>Vi kartlägger era drömkunder</h3>
            <p>
              Vi sätter oss ner och definierar er målgrupp och idealkundprofil. Vilka tech-roller är ni bäst på att tillsätta? Vilka bolagsstorlekar, branscher och geografiska marknader vill ni nå?
            </p>
            <div className="step-highlight-box">
              <Target size={18} color="#1F3A5F" />
              <span>Kartläggning av CTOs, IT-chefer & Tech Leads</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-number-badge">02</div>
            <h3>Jag hittar dem & bokar mötet i er kalender</h3>
            <p>
              Jag sköter hela kontakten: gör grundlig research, identifierar rätt beslutsfattare med anställningsbehov och kör skräddarsydd B2B-outreach. När kunden är intresserad bokas mötet direkt i er kalender.
            </p>
            <div className="step-highlight-box">
              <CalendarCheck size={18} color="#2E7D5B" />
              <span>Fullständig brief & möteslänk rakt i kalendern</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-number-badge">03</div>
            <h3>Ni håller mötet och vinner uppdraget</h3>
            <p>
              Allt ni behöver göra är att ansluta till mötet. Kunden vet redan vem ni är och har ett verifierat behov. Ni presenterar era rekryteringstjänster, visar upp relevanta kandidater och stänger affären.
            </p>
            <div className="step-highlight-box">
              <Trophy size={18} color="#1F3A5F" />
              <span>Ni fokuserar 100% på att leverera och vinna kunden</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href="https://calendly.com/kevin-prospectly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <span>Vill ni se hur det skulle se ut för er? Boka ett samtal</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
