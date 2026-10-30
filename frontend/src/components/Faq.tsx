import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Phone } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Vad kostar det för min byggfirma att anlita dig?",
    answer:
      "Det kostar 0 kr i fast månadskostnad eller startavgift. Jag jobbar 100% resultatbaserat mot en förutbestämd provision på stängda offerter eller förmedlade jobb. Inget resultat = noll kronor i kostnad för er."
  },
  {
    question: "Hur snabbt kan vi komma igång och testa?",
    answer:
      "Vi kan komma igång på 24 timmar. Du fyller i formuläret här på sidan eller ringer mig direkt, sedan skickar du över ett par offerter som kunden inte har svarat på så börjar jag bearbeta dem direkt."
  },
  {
    question: "Vilka typer av renoveringar och orter fokuserar du på?",
    answer:
      "Fokus ligger på renovering av badrum, kök och tak med utgångspunkt i Göteborg och kranskommuner (Mölndal, Kungsbacka, Kungälv, Partille, Lerum, Härryda etc.)."
  },
  {
    question: "Hur presenterar du dig när du ringer mina kunder?",
    answer:
      "Jag presenterar mig som er personliga säljresurs och samarbetspartner. Jag går igenom offerten i ert namn med stor respekt för ert varumärke, förklarar ROT-avdrag och materialval samt rätar ut eventuella frågetecken som hindrat kunden från att skriva på."
  },
  {
    question: "Hur fungerar det om vi får in förfrågningar vi inte hinner ta?",
    answer:
      "Då kan ni förmedla jobbet vidare genom mig. Jag tar emot kundens underlag och förmedlar det till en kontrollerad firma i mitt nätverk som har ledig kapacitet. Ni får ersättning för tipset i stället för att tappa kunden helt."
  },
  {
    question: "Finns det någon bindningstid eller exklusivitet?",
    answer:
      "Nej, det finns ingen bindningstid. Du väljer själv vilka offerter du vill lämna över och kan testa upplägget i den takt som passar er verksamhet."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Vanliga frågor</div>
          <h2 className="section-title">Frågor & svar för byggfirmor</h2>
          <p className="section-subtitle">
            Här hittar du svar på de vanligaste funderingarna kring hur samarbetet fungerar i praktiken.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div className={`faq-answer-wrapper ${isOpen ? 'open' : ''}`}>
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-bottom-cta">
          <p>Har du en specifik fundering eller vill diskutera en offert direkt?</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0701234567" className="btn btn-secondary">
              <Phone size={18} />
              <span>Ring Kevin på 070-123 45 67</span>
            </a>
            <a href="#boka-samtal" className="btn btn-primary">
              <span>Boka förutsättningslöst samtal</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
