import React from 'react';
import { Hammer, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

export const Benefits: React.FC = () => {
  return (
    <section id="fordelar" className="section-padding benefits-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Fördelarna för er</div>
          <h2 className="section-title">Konkreta resultat utan tomma löften</h2>
          <p className="section-subtitle">
            Som hantverkare vill du inte ha fluffiga säljtermer. Du vill ha fler signerade jobb och trygghet i att dina offerter tas om hand på ett seriöst sätt.
          </p>
        </div>

        <div className="benefits-grid">
          {/* Benefit 1 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <Hammer size={28} />
            </div>
            <div className="benefit-content">
              <h3>En säljare som förstår bygg</h3>
              <p>
                Jag har själv snickarbakgrund och förstår skillnaden på olika tätskikt, reglar, takpannor och rördragningar. Jag kan prata teknik med dig och trygghet, ROT-avdrag och pengar med kunden.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <TrendingUp size={28} />
            </div>
            <div className="benefit-content">
              <h3>Du betalar endast för resultat</h3>
              <p>
                Inga fasta månadskostnader, ingen startavgift och ingen risk. Du betalar en provision först när kunden har signerat och godkänt offerten.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <Clock size={28} />
            </div>
            <div className="benefit-content">
              <h3>Fokusera 100% på bygget</h3>
              <p>
                Slipp sitta framför datorn på kvällen med dåligt samvete över kalla offerter. Du bygger under dagarna och vet att någon professionell följer upp kunderna i rätt tid.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="benefit-card">
            <div className="benefit-icon">
              <ShieldCheck size={28} />
            </div>
            <div className="benefit-content">
              <h3>Högre stängningsfrekvens</h3>
              <p>
                När kunden förstår varför offerten kostar som den gör väljer de hellre er kompletta kvalitet framför billiga fuskbyggare. Kunden slipper osäkerhet och ni vinner jobbet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
