import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, HardHat, FileSearch, PhoneCall } from 'lucide-react';
import { HomeownerForm } from './HomeownerForm';
import { TrustCertificates } from './TrustCertificates';

interface HomeownerViewProps {
  onSwitchToContractor: () => void;
  onOpenGdpr: () => void;
}

export const HomeownerView: React.FC<HomeownerViewProps> = ({ onSwitchToContractor, onOpenGdpr }) => {
  return (
    <div className="homeowner-view-wrapper">
      {/* Homeowner Hero */}
      <section className="hero-section homeowner-hero">
        <div className="container">
          <div className="homeowner-hero-inner">
            <div className="section-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span>Kostnadsfritt för privatpersoner • Hitta kontrollerad firma</span>
            </div>

            <h1 className="hero-title" style={{ maxWidth: '900px', margin: '0 auto 1.25rem', textAlign: 'center' }}>
              Seriösa byggfirmor i Göteborg,{' '}
              <span className="hero-title-highlight">kontrollerade åt dig</span>
            </h1>

            <p className="hero-lead" style={{ maxWidth: '780px', margin: '0 auto 1.75rem', textAlign: 'center' }}>
              Ska du renovera badrum, kök eller tak? Vi matchar dig med noggrant granskade hantverkare med rätt behörigheter (Säker Vatten, GVK/BKR) – eller hjälper dig granska en offert du redan har fått så att du vet exakt vad du betalar för.
            </p>

            <div className="hero-trust-row" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
              <div className="hero-trust-chip">
                <CheckCircle2 size={16} />
                <span>100% gratis för dig</span>
              </div>
              <div className="hero-trust-chip">
                <CheckCircle2 size={16} />
                <span>Endast certifierade firmor</span>
              </div>
              <div className="hero-trust-chip">
                <CheckCircle2 size={16} />
                <span>ROT-avdrag direkt på fakturan</span>
              </div>
            </div>

            <div className="b2b-switch-banner">
              <HardHat size={18} color="#1F3A5F" />
              <span>Driver du en byggfirma?</span>
              <button
                type="button"
                className="b2b-switch-btn"
                onClick={onSwitchToContractor}
              >
                Gå till sidan för byggfirmor →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Step Process for Homeowners */}
      <section className="section-padding steps-section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Så fungerar det</div>
            <h2 className="section-title">Från idé eller offert till färdigt bygge</h2>
            <p className="section-subtitle">
              Vi tar bort osäkerheten när du ska renovera. Ingen stress, inga obegripliga fackuttryck och inga oseriösa aktörer.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-card-top">
                <div className="step-number-badge">01</div>
                <h3>Beskriv ditt projekt</h3>
              </div>
              <p>
                Fyll i formuläret nedan. Berätta om du vill göra badrum, kök eller tak. Har du redan fått offerter från andra firmor kan du enkelt bifoga dem så granskar vi dem åt dig.
              </p>
              <div className="step-highlight-box">
                <FileSearch size={18} color="#1F3A5F" />
                <span>Kostnadsfri genomgång av offerter</span>
              </div>
            </div>

            <div className="step-card">
              <div className="step-card-top">
                <div className="step-number-badge">02</div>
                <h3>Personlig rådgivning med Kevin</h3>
              </div>
              <p>
                Kevin Söder kontaktar dig för ett kort, trevligt samtal. Vi går igenom vad du vill göra, reder ut frågetecken kring ROT-avdrag och förklarar vad som rimligen bör ingå.
              </p>
              <div className="step-highlight-box">
                <PhoneCall size={18} color="#2E7D5B" />
                <span>Byggkunnig rådgivning på vanlig svenska</span>
              </div>
            </div>

            <div className="step-card">
              <div className="step-card-top">
                <div className="step-number-badge">03</div>
                <h3>Trygg offert & kvalitetssäkrad start</h3>
              </div>
              <p>
                Du får kontakt med en granskad och behörig firma i Göteborg med F-skatt, försäkring och rätt våtrums- eller VVS-behörighet. Du får en tydlig kalkyl och väljer själv i lugn och ro.
              </p>
              <div className="step-highlight-box">
                <ShieldCheck size={18} color="#1F3A5F" />
                <span>Alltid rätt behörighet & garantier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Certificates */}
      <TrustCertificates />

      {/* Homeowner Form Section */}
      <section id="privat-forfragan" className="section-padding homeowner-form-section">
        <div className="container">
          <div className="form-wrapper-box">
            <div className="form-header-area">
              <div className="section-badge">Kostnadsfri förfrågan</div>
              <h2>Skicka in ditt projekt eller din offert</h2>
              <p>
                Fyll i uppgifterna nedan så återkommer Kevin Söder personligen inom 24 timmar. Det kostar ingenting och du förbinder dig inte till något.
              </p>
            </div>

            <HomeownerForm onOpenGdpr={onOpenGdpr} />
          </div>
        </div>
      </section>

      {/* Homeowner FAQ */}
      <section className="section-padding faq-section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Vanliga frågor från privatpersoner</div>
            <h2 className="section-title">Frågor & svar inför renoveringen</h2>
          </div>

          <div className="faq-accordion" style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="faq-item open">
              <div className="faq-question-btn" style={{ cursor: 'default' }}>
                <span className="faq-question-text">Kostar det något för mig som privatperson?</span>
              </div>
              <div className="faq-answer-inner">
                <p className="faq-answer-text">
                  Nej, absolut ingenting! Vår rådgivning, offerthjälp och förmedling är 100% kostnadsfri för dig som ska renovera. Eventuell ersättning betalas av byggfirman.
                </p>
              </div>
            </div>

            <div className="faq-item open">
              <div className="faq-question-btn" style={{ cursor: 'default' }}>
                <span className="faq-question-text">Jag har redan fått en offert från en firma – kan ni granska den?</span>
              </div>
              <div className="faq-answer-inner">
                <p className="faq-answer-text">
                  Ja, precis det är en av våra största styrkor! Många villaägare tycker offerter är svåra att tyda: Vad ingår? Är underarbetet medräknat? Kommer det bli dyra tillägg senare? Kevin går igenom offerten tillsammans med dig så att du känner dig 100% trygg innan du skriver på.
                </p>
              </div>
            </div>

            <div className="faq-item open">
              <div className="faq-question-btn" style={{ cursor: 'default' }}>
                <span className="faq-question-text">Vilka hantverkare samarbetar ni med?</span>
              </div>
              <div className="faq-answer-inner">
                <p className="faq-answer-text">
                  Vi jobbar endast med etablerade, granskade byggföretag i Göteborgsområdet med godkänd F-skatt, gällande ansvarsförsäkring och branschbehörigheter såsom Säker Vatten, BKR/GVK för våtrum samt Elsäkerhetsverket.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              type="button"
              onClick={onSwitchToContractor}
              className="btn btn-secondary"
            >
              <span>Är du hantverkare / byggföretagare? Gå till sidan för byggfirmor</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
