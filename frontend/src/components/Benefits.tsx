import React from 'react';
import { CheckCircle2, TrendingUp, ShieldCheck, Eye } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="fordelar" className="section-padding benefits-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Vad ni får</div>
          <h2 className="section-title">Konkreta resultat utan tomma löften</h2>

          <p className="section-subtitle">
            Som rekryterare och säljare själva genomskådar ni flum. Mitt samarbete bygger på transparens, mätbarhet och faktisk ROI.
          </p>
        </div>

        <div className="benefits-grid">
          {/* Benefit 1 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <CheckCircle2 size={28} />
            </div>
            <div className="benefit-content">
              <h3>Kvalificerade möten (inte 'kaffemöten')</h3>
              <p>
                Jag bokar bara möten med företag som faktiskt har ett uttalat och verifierat behov av att anställa IT- och tech-kompetens. Inga lösa samtal utan köpkraft, utan skarpa dialoger med beslutsfattare.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <TrendingUp size={28} />
            </div>
            <div className="benefit-content">
              <h3>Ni betalar för resultat</h3>
              <p>
                Ni ska inte betala för oändliga timmar av fruktlöst ringande. Hela upplägget är fokuserat på att leverera verkliga möten och resultat som leder till skarpa kunduppdrag för er verksamhet.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <ShieldCheck size={28} />
            </div>
            <div className="benefit-content">
              <h3>Ingen bindningstid för att komma igång</h3>
              <p>
                Jag tror på partnerskap som bygger på förtroende och leverans, inte juridiska inlåsningar. Ni kommer igång snabbt och riskfritt utan komplicerade flerårsavtal.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <Eye size={28} />
            </div>
            <div className="benefit-content">
              <h3>Full insyn i era bokningar</h3>
              <p>
                Ni har 100% transparens i hela processen. Ni vet exakt vilka företag som kontaktas, vilken feedback som inkommer från marknaden och när nästa möte landar i er kalender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
