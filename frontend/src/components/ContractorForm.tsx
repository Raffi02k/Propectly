import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, RotateCcw } from 'lucide-react';

interface ContractorFormProps {
  onOpenGdpr?: () => void;
}

export const ContractorForm: React.FC<ContractorFormProps> = ({ onOpenGdpr }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    jobTypes: [] as string[],
    monthlyQuotes: '6–15 st',
    gdprConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleJobTypeToggle = (type: string) => {
    setFormData((prev) => {
      const exists = prev.jobTypes.includes(type);
      return {
        ...prev,
        jobTypes: exists
          ? prev.jobTypes.filter((t) => t !== type)
          : [...prev.jobTypes, type],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Vänligen fyll i alla obligatoriska fält markerade med stjärna (*).');
      return;
    }

    if (!formData.gdprConsent) {
      setErrorMsg('Du behöver godkänna villkoren för personuppgiftshantering för att skicka förfrågan.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending to Kevin's email/system
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      jobTypes: [],
      monthlyQuotes: '6–15 st',
      gdprConsent: false,
    });
  };

  if (isSubmitted) {
    return (
      <div className="form-success-card">
        <div className="form-success-icon">
          <CheckCircle2 size={54} color="#2E7D5B" />
        </div>
        <h3>Tack för din intresseanmälan, {formData.contactPerson}!</h3>
        <p className="form-success-lead">
          Din förfrågan för <strong>{formData.companyName}</strong> har tagits emot av Kevin Söder.
        </p>
        <div className="form-success-details">
          <div className="success-row">
            <span>Kontakttelefon:</span>
            <strong>{formData.phone}</strong>
          </div>
          <div className="success-row">
            <span>E-postadress:</span>
            <strong>{formData.email}</strong>
          </div>
          <div className="success-row">
            <span>Valda verksamhetsområden:</span>
            <strong>{formData.jobTypes.length > 0 ? formData.jobTypes.join(', ') : 'Ej specificerat'}</strong>
          </div>
          <div className="success-row">
            <span>Uppskattade offerter/mån:</span>
            <strong>{formData.monthlyQuotes}</strong>
          </div>
        </div>
        <div className="form-success-promise">
          <ShieldCheck size={20} color="#222222" />
          <span>
            Kevin går igenom dina uppgifter och ringer upp dig inom kort för ett förutsättningslöst introduktionssamtal.
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary btn-sm"
          style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <RotateCcw size={16} />
          <span>Skicka ytterligare en anmälan (Testa igen)</span>
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form contractor-form" onSubmit={handleSubmit} noValidate>
      {errorMsg && (
        <div className="form-alert-error" role="alert">
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="companyName" className="form-label">
            Firmanamn <span className="req">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            className="form-input"
            placeholder="T.ex. Askim Bygg & Badrum AB"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactPerson" className="form-label">
            Kontaktperson <span className="req">*</span>
          </label>
          <input
            id="contactPerson"
            type="text"
            className="form-input"
            placeholder="För- och efternamn"
            value={formData.contactPerson}
            onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Telefonnummer <span className="req">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            className="form-input"
            placeholder="070-123 45 67"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-postadress <span className="req">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder="namn@byggfirma.se"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '1.25rem' }}>
        <label className="form-label">Typ av jobb ni utför (välj ett eller flera):</label>
        <div className="form-pills-wrap">
          {['Badrum', 'Kök', 'Tak', 'Snickeri & Renovering', 'Annat'].map((type) => {
            const isSelected = formData.jobTypes.includes(type);
            return (
              <button
                type="button"
                key={type}
                className={`form-pill-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleJobTypeToggle(type)}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-group" style={{ marginTop: '1.25rem' }}>
        <label htmlFor="monthlyQuotes" className="form-label">
          Ungefär hur många offerter skickar ni per månad?
        </label>
        <select
          id="monthlyQuotes"
          className="form-select"
          value={formData.monthlyQuotes}
          onChange={(e) => setFormData({ ...formData, monthlyQuotes: e.target.value })}
        >
          <option value="1–5 st">1–5 st (Mindre inflöde)</option>
          <option value="6–15 st">6–15 st (Mellan, regelbundna offerter)</option>
          <option value="15+ st">15+ st (Stort inflöde och hög potential)</option>
        </select>
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
            Jag godkänner att mina uppgifter sparas för att bli kontaktad gällande samarbete enligt{' '}
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
            .
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
            <span>Skickar intresseanmälan...</span>
          ) : (
            <>
              <Send size={18} />
              <span>Boka ett förutsättningslöst samtal</span>
            </>
          )}
        </button>

        <div className="form-trust-note">
          <ShieldCheck size={16} color="#2E7D5B" />
          <span>Inget bindande • 100% resultatbaserat • Ingen fast kostnad</span>
        </div>
      </div>
    </form>
  );
};
