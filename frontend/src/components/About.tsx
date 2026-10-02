import React from 'react';
import { Mail, Linkedin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="om-kevin" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Photo column */}
          <div className="about-photo-wrap">
            <img
              src="/images/kevin-bild.jpg"
              alt="Kevin Söder, B2B-säljkonsult och grundare av Prospectly"

              className="about-photo"
            />
            <div className="about-photo-badge">
              <div className="badge-title">Kevin Söder</div>
              <div className="badge-sub">Grundare • Prospectly</div>
            </div>
          </div>

          {/* Bio column */}
          <div className="about-content">
            <div className="section-badge">Om Kevin Söder</div>
            <h2>”Ni rekryterar. Jag fyller kalendern.”</h2>
            <div className="about-role">B2B-säljkonsult & Mötesbokare för IT-rekryterare</div>

            <p className="about-bio">
              Jag driver Prospectly med ett tydligt mål: att hjälpa grundare och ledare på små och medelstora IT-rekryterings- och bemanningsbolag att slippa det moment som stjäl mest energi – den kalla nykundsbearbetningen.
            </p>

            <p className="about-bio">
              Ni är experter på att intervjua, kvalitetssäkra och matcha vassa IT- och tech-talanger. Mitt jobb är att se till att ni har ett konstant inflöde av relevanta kunduppdrag att matcha dem mot. Genom personlig, professionell och rak dialog når jag rätt beslutsfattare och bokar in skarpa möten direkt i er kalender.
            </p>

            <div className="about-contact-bar">
              <a
                href="mailto:kevin@prospectly.se"
                className="contact-pill"
                aria-label="Maila Kevin på kevin@prospectly.se"
              >
                <Mail size={18} color="#1F3A5F" />
                <span>kevin@prospectly.se</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kevin-s%C3%B6der-b42a1b279?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                aria-label="Besök Kevins LinkedIn-profil"
              >
                <Linkedin size={18} color="#0077b5" />
                <span>LinkedIn-profil</span>
              </a>

              <a
                href="https://calendly.com/kevin-prospectly"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
                aria-label="Boka möte i Kevins Calendly"
              >
                <Calendar size={18} color="#2E7D5B" />
                <span>Calendly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
