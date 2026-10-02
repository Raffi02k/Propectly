import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Vilka typer av bolag hjälper Prospectly i Göteborg och övriga Sverige?",
    answer:
      "Jag hjälper små och medelstora IT- och tech-rekryterings- samt bemanningsföretag i Göteborg och över hela Sverige. Mina kunder är ofta grundarledda bolag som vill skala sin kundbas utan att behöva anställa interna säljare eller slösa tid på kall prospektering."
  },
  {
    question: "Vilka beslutsfattare bokar du möten med?",
    answer:
      "Möten bokas uteslutande med relevanta beslutsfattare som har direkt mandat att anställa IT- och tech-kompetens – exempelvis CTOs, Head of Engineering, Tech Leads, IT-chefer och rekryterande VD:ar."
  },
  {
    question: "Hur snabbt kan vi komma igång?",
    answer:
      "Efter ett kort introduktionssamtal där vi definierar er målgrupp, tech-stackar och idealkundsprofil sätter jag igång researchen och outreach-arbetet. Första mötena brukar landa i er kalender inom 1–2 veckor."
  },
  {
    question: "Vad innebär det att vi betalar för resultat?",
    answer:
      "Det innebär ett transparent och riskfritt partnerskap. Ni betalar för faktiska, kvalificerade kundmöten som levereras – inte för tomma timrapporter eller slentrianmässiga samtal."
  },
  {
    question: "Finns det någon bindningstid?",
    answer:
      "Nej, det finns ingen bindningstid för att komma igång. Jag tror på långsiktiga partnerskap baserade på verklig leverans, inte på att låsa in kunder i krångliga avtal."
  },
  {
    question: "Hur har vi insyn i prospekteringen och bokningarna?",
    answer:
      "Ni har full transparens. Ni får löpande avstämningar och ser precis vilka bolag som kontaktas, vilken feedback som marknaden ger och när nya möten bokas direkt in i er kalender."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={15} />
            <span>Vanliga frågor</span>
          </div>
          <h2 className="section-title">Frågor & svar om mötesbokningen</h2>
          <p className="section-subtitle">
            Här hittar du svar på de vanligaste frågorna kring hur samarbetet fungerar för rekryteringsbolag i Göteborg och hela landet.
          </p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFaq(index);
                  }}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? 'rotated' : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div className={`faq-answer-panel ${isOpen ? 'visible' : ''}`}>
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq-bottom-cta">
          <p>Har du en specifik fråga om dina förutsättningar?</p>
          <a
            href="https://calendly.com/kevin-prospectly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>Boka ett 15 min samtal med Kevin</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
