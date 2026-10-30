import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface GdprModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GdprModal: React.FC<GdprModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="gdpr-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <ShieldCheck size={22} color="#2E7D5B" />
            <h3 id="gdpr-title">Integritetspolicy & GDPR-information</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Stäng">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          <p>
            Vi värnar om din personliga integritet och hanterar dina personuppgifter i enlighet med gällande dataskyddsförordning (GDPR).
          </p>

          <h4>1. Vilka uppgifter sparar vi?</h4>
          <p>
            Vi samlar endast in de uppgifter du frivilligt anger i våra formulär: namn, företagsnamn, telefonnummer, e-postadress samt uppgifter om renoveringsprojekt eller offerter.
          </p>

          <h4>2. Vad används uppgifterna till?</h4>
          <p>
            Uppgifterna används uteslutande för att:
          </p>
          <ul>
            <li>Ta kontakt med dig gällande ditt ärende (offertuppföljning eller renoveringsförfrågan).</li>
            <li>Matcha privatpersoner med kontrollerade och behöriga byggfirmor i vårt nätverk.</li>
            <li>Följa upp bokade möten och genomföra samarbeten med anslutna hantverksföretag.</li>
          </ul>

          <h4>3. Delning av information</h4>
          <p>
            Dina uppgifter säljs aldrig vidare till tredje part. För privatpersoner delas projektunderlaget enbart med den specifika hantverkare som granskats och valts ut för att lämna offert eller utföra arbetet.
          </p>

          <h4>4. Dina rättigheter</h4>
          <p>
            Du har när som helst rätt att begära ett utdrag av de uppgifter vi har sparade om dig, samt begära rättelse eller omedelbar radering. Kontakta Kevin Söder direkt på <a href="mailto:kevin@kevin-soder.se">kevin@kevin-soder.se</a> eller telefon <a href="tel:0701234567">070-123 45 67</a> för eventuella registerfrågor.
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Jag förstår
          </button>
        </div>
      </div>
    </div>
  );
};
