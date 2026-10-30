import React from 'react';
import { ShieldCheck, Droplets, Zap, FileCheck, Award } from 'lucide-react';

export const TrustCertificates: React.FC = () => {
  return (
    <section id="kvalitetskrav" className="section-padding trust-certificates-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Kvalitet & Trygghet</div>
          <h2 className="section-title">
            Strikta kvalitetskrav på alla anslutna byggfirmor
          </h2>
          <p className="section-subtitle">
            Oavsett om det gäller att stänga en offert eller förmedla ett jobb ställer vi kompromisslösa krav på alla hantverkare i nätverket. Det skapar trygghet för slutkunden och stolthet för byggfirman.
          </p>
        </div>

        <div className="certificates-grid">
          <div className="cert-card">
            <div className="cert-icon-wrap">
              <Droplets size={26} color="#222222" />
            </div>
            <div className="cert-badge-tag">Badrum & Våtrum</div>
            <h3>GVK eller BKR</h3>
            <p>
              Giltig våtrumsbehörighet för tätskikt enligt Byggkeramikrådet eller Golvbranschens Våtrumskontroll. Kvalitetsdokument lämnas alltid till kunden.
            </p>
          </div>

          <div className="cert-card">
            <div className="cert-icon-wrap">
              <ShieldCheck size={26} color="#222222" />
            </div>
            <div className="cert-badge-tag">VVS & Rör</div>
            <h3>Säker Vatten</h3>
            <p>
              Auktoriserade VVS-installatörer som följer branschregler för Säker Vatteninstallation. Minimerar risken för framtida fuktskador.
            </p>
          </div>

          <div className="cert-card">
            <div className="cert-icon-wrap">
              <Zap size={26} color="#222222" />
            </div>
            <div className="cert-badge-tag">El & Belysning</div>
            <h3>Elsäkerhetsverket</h3>
            <p>
              Endast registrerade elinstallationsföretag med behörig elinstallatör för regelefterlevnad vid spotlights, golvvärme och elcentraler.
            </p>
          </div>

          <div className="cert-card">
            <div className="cert-icon-wrap">
              <FileCheck size={26} color="#222222" />
            </div>
            <div className="cert-badge-tag">Trygg Företagsekonomi</div>
            <h3>F-skatt & Försäkring</h3>
            <p>
              Godkända för F-skatt, skuldfria hos Kronofogden samt giltig entreprenad- och ansvarsförsäkring som skyddar kundens hem under hela bygget.
            </p>
          </div>

          <div className="cert-card full-width-highlight">
            <div className="cert-icon-wrap">
              <Award size={26} color="#222222" />
            </div>
            <div className="cert-content-side">
              <div className="cert-badge-tag">Historik & Omdömen</div>
              <h3>Granskade referenser & nöjda kunder</h3>
              <p>
                Alla firmor kontrolleras löpande genom stickprov och kunduppföljningar. Vi samarbetar endast med hantverkare som håller tidsplaner, lämnar snygga arbetsplatser och kommunicerar ärligt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
