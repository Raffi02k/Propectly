import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, UploadCloud, RotateCcw, FileText } from 'lucide-react';

interface HomeownerFormProps {
  onOpenGdpr?: () => void;
}

export const HomeownerForm: React.FC<HomeownerFormProps> = ({ onOpenGdpr }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Göteborg',
    renovationType: 'Badrum',
    description: '',
    timeframe: 'Inom 1–3 månader',
    hasExistingQuote: 'Nej, jag söker seriösa offerter',
    attachedFileName: '',
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, attachedFileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.city.trim()) {
      setErrorMsg('Vänligen fyll i namn, telefon, e-post och ort.');
      return;
    }

    if (!formData.gdprConsent) {
      setErrorMsg('Du behöver godkänna hanteringen av personuppgifter enligt GDPR för att skicka in.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: 'Göteborg',
      renovationType: 'Badrum',
      description: '',
      timeframe: 'Inom 1–3 månader',
      hasExistingQuote: 'Nej, jag söker seriösa offerter',
      attachedFileName: '',
      gdprConsent: false,
    });
  };

  if (isSubmitted) {
    return (
      <div className="form-success-card">
        <div className="form-success-icon">
          <CheckCircle2 size={54} color="#2E7D5B" />
        </div>
        <h3>Tack för din förfrågan, {formData.name}!</h3>
        <p className="form-success-lead">
          Din förfrågan för <strong>{formData.renovationType.toLowerCase()} i {formData.city}</strong> är mottagen.
        </p>
        <div className="form-success-details">
          <div className="success-row">
            <span>Telefon:</span>
            <strong>{formData.phone}</strong>
          </div>
          <div className="success-row">
            <span>E-post:</span>
            <strong>{formData.email}</strong>
          </div>
          <div className="success-row">
            <span>Önskad start:</span>
            <strong>{formData.timeframe}</strong>
          </div>
          <div className="success-row">
            <span>Befintlig offert:</span>
            <strong>{formData.hasExistingQuote}</strong>
          </div>
          {formData.attachedFileName && (
            <div className="success-row">
              <span>Bifogad fil:</span>
              <strong>{formData.attachedFileName}</strong>
            </div>
          )}
        </div>
        <div className="form-success-promise">
          <ShieldCheck size={20} color="#222222" />
          <span>
            Kevin Söder går personligen igenom ditt underlag och återkommer med kostnadsfri rådgivning eller matchning mot en kvalitetssäkrad firma med F-skatt, försäkring och rätt certifikat (GVK, BKR eller Säker Vatten).
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary btn-sm"
          style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <RotateCcw size={16} />
          <span>Skicka ytterligare en förfrågan (Testa igen)</span>
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form homeowner-form" onSubmit={handleSubmit} noValidate>
      {errorMsg && (
        <div className="form-alert-error" role="alert">
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="hoName" className="form-label">
            Ditt namn <span className="req">*</span>
          </label>
          <input
            id="hoName"
            type="text"
            className="form-input"
            placeholder="För- och efternamn"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoPhone" className="form-label">
            Telefonnummer <span className="req">*</span>
          </label>
          <input
            id="hoPhone"
            type="tel"
            className="form-input"
            placeholder="070-123 45 67"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoEmail" className="form-label">
            E-postadress <span className="req">*</span>
          </label>
          <input
            id="hoEmail"
            type="email"
            className="form-input"
            placeholder="din.epost@exempel.se"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="hoCity" className="form-label">
            Ort / Område <span className="req">*</span>
          </label>
          <input
            id="hoCity"
            type="text"
            className="form-input"
            placeholder="T.ex. Göteborg, Mölndal, Askim, Kungsbacka"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-grid" style={{ marginTop: '1.25rem' }}>
        <div className="form-group">
          <label htmlFor="hoType" className="form-label">
            Typ av renovering <span className="req">*</span>
          </label>
          <select
            id="hoType"
            className="form-select"
            value={formData.renovationType}
            onChange={(e) => setFormData({ ...formData, renovationType: e.target.value })}
          >
            <option value="Badrum">Badrum (Våtrum & Kakel)</option>
            <option value="Kök">Kök (Montering & VVS)</option>
            <option value="Tak">Tak (Takomläggning & Plåt)</option>
            <option value="Totalrenovering">Totalrenovering / Snickeri</option>
            <option value="Annat">Annat projekt</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hoTimeframe" className="form-label">
            Önskad byggstart
          </label>
          <select
            id="hoTimeframe"
            className="form-select"
            value={formData.timeframe}
            onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
          >
            <option value="Så snart som möjligt">Så snart som möjligt (Akut / snar start)</option>
            <option value="Inom 1–3 månader">Inom 1–3 månader (Planerat)</option>
            <option value="Inom 3–6 månader">Inom 3–6 månader</option>
            <option value="Bara prisidé just nu">Bara prisidé / budgetering just nu</option>
          </select>
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '1.25rem' }}>
        <label htmlFor="hoDesc" className="form-label">
          Kort beskrivning & eventuella mått / kvadratmeter:
        </label>
        <textarea
          id="hoDesc"
          className="form-textarea"
          rows={3}
          placeholder="Berätta kort om vad du vill göra, t.ex. 'Helkaklat badrum ca 6 kvm med golvvärme och spotlights', eller 'Takbyte på villa 160 kvm'."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div className="form-group" style={{ marginTop: '1.25rem' }}>
        <label className="form-label">Har du redan fått in offerter från andra firmor?</label>
        <div className="radio-options-wrap">
          <label className="radio-label">
            <input
              type="radio"
              name="existingQuote"
              value="Ja, vill ha hjälp att jämföra/granska"
              checked={formData.hasExistingQuote === 'Ja, vill ha hjälp att jämföra/granska'}
              onChange={(e) => setFormData({ ...formData, hasExistingQuote: e.target.value })}
            />
            <span>Ja, jag har redan en offert och vill få den förklarad eller jämförd</span>
          </label>

          <label className="radio-label">
            <input
              type="radio"
              name="existingQuote"
              value="Nej, jag söker seriösa offerter"
              checked={formData.hasExistingQuote === 'Nej, jag söker seriösa offerter'}
              onChange={(e) => setFormData({ ...formData, hasExistingQuote: e.target.value })}
            />
            <span>Nej, jag letar efter en kontrollerad och pålitlig byggfirma</span>
          </label>
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '1.25rem' }}>
        <label className="form-label">Bifoga bilder, ritning eller offert (valfritt):</label>
        <div className="file-upload-box">
          <input
            type="file"
            id="hoFile"
            className="file-input-hidden"
            accept="image/*,.pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <label htmlFor="hoFile" className="file-upload-label">
            {formData.attachedFileName ? (
              <div className="file-attached-info">
                <FileText size={22} color="#2E7D5B" />
                <span className="file-name">{formData.attachedFileName}</span>
                <span className="file-change-badge">Klicka för att byta</span>
              </div>
            ) : (
              <div className="file-upload-prompt">
                <UploadCloud size={24} color="#1F3A5F" />
                <span>Klicka för att välja fil eller bild (PDF, JPG, PNG)</span>
                <span className="file-upload-sub">Hjälper oss att förstå projektet snabbare</span>
              </div>
            )}
          </label>
        </div>
      </div>

      <div className="form-group checkbox-group" style={{ marginTop: '1.5rem' }}>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={formData.gdprConsent}
            onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
            required
          />
          <span className="checkbox-text">
            Jag godkänner att uppgifterna sparas för att Kevin Söder ska kunna hjälpa mig med mitt projekt enligt{' '}
            <button
              type="button"
              className="text-link-btn"
              onClick={(e) => {
                e.preventDefault();
                onOpenGdpr?.();
              }}
            >
              integritetspolicyn (GDPR)
            </button>
            . Tjänsten är 100% kostnadsfri för mig.
          </span>
        </label>
      </div>

      <div className="form-submit-row">
        <button
          type="submit"
          className="btn btn-primary btn-lg form-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Skickar förfrågan...</span>
          ) : (
            <>
              <Send size={18} />
              <span>Skicka förfrågan kostnadsfritt</span>
            </>
          )}
        </button>

        <div className="form-trust-note">
          <ShieldCheck size={16} color="#2E7D5B" />
          <span>Helt kostnadsfritt för privatpersoner • Endast kontrollerade behöriga firmor</span>
        </div>
      </div>
    </form>
  );
};
