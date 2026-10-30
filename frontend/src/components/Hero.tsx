import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface HeroProps {
  onSwitchToHomeowner: () => void;
}

interface ProjectCase {
  id: string;
  category: string;
  location: string;
  title: string;
  image: string;
  badge: string;
  rating: string;
  price: string;
  details: string;
  description: string;
}

const projects: ProjectCase[] = [
  {
    id: 'badrum',
    category: 'Badrum',
    location: 'Villa i Askim',
    title: 'Badrumsrenovering, Villa i Askim',
    image: '/images/badrum-askim.jpg',
    badge: 'Offert stängd',
    rating: '5,0',
    price: '285 000 kr efter ROT',
    details: 'Totalentreprenad • GVK-tätskikt • 12 m²',
    description: 'Personlig genomgång av tätskikt, kalkyl och ROT. Kunden kände sig trygg och signerade avtalet.',
  },
  {
    id: 'kok',
    category: 'Kök',
    location: 'Bostadsrätt i Linné',
    title: 'Köksrenovering, Bostadsrätt i Linné',
    image: '/images/kok-linne.jpg',
    badge: 'Förmedlat uppdrag',
    rating: '5,0',
    price: 'Kvalificerat underlag',
    details: 'Snickeri & montering • Ritning klar',
    description: 'Komplett specifikation och underlag färdigt. Förmedlat till ledig byggfirma i nätverket.',
  },
  {
    id: 'tak',
    category: 'Takbyte',
    location: 'Radhus i Mölndal',
    title: 'Takbyte, Radhus i Mölndal',
    image: '/images/takbyte-molndal.jpg',
    badge: 'Offert stängd',
    rating: '4,9',
    price: '195 000 kr efter ROT',
    details: 'Betongpannor • Plåtarbete • Fackmannamässigt',
    description: 'Jämförelse mot konkurrentoffert förklarad på ren svenska. Kunden valde komplett kvalitet.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onSwitchToHomeowner }) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = projects[activeProjectIdx];

  const handleNext = () => {
    setActiveProjectIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveProjectIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Value Proposition & Airbnb Action Capsule */}
          <div className="hero-content">
            <h1 className="hero-title">
              Säljpartner för byggfirmor • Göteborg
            </h1>

            <p className="hero-subtitle-highlight">
              Fler stängda offerter utan att du behöver sitta på kvällarna
            </p>

            <p className="hero-lead">
              Jag hjälper byggfirmor inom badrum, kök och tak att följa upp och stänga skickade offerter samt förmedlar färdiga renoveringsuppdrag. Du gör det du är bäst på och bygger. Du betalar bara för resultat.
            </p>

            {/* Airbnb-style Search / Action Capsule */}
            <div className="airbnb-search-bar">
              <a href="#boka-samtal" className="airbnb-search-segment">
                <span className="search-label">Vad behöver ni?</span>
                <span className="search-value">Stänga offerter & uppdrag</span>
              </a>
              <div className="airbnb-search-divider"></div>
              <a href="#boka-samtal" className="airbnb-search-segment">
                <span className="search-label">Projektkategori</span>
                <span className="search-value">Badrum • Kök • Tak</span>
              </a>
              <div className="airbnb-search-divider"></div>
              <a href="#prismodell" className="airbnb-search-segment">
                <span className="search-label">Prismodell</span>
                <span className="search-value">0 kr fast • Provision</span>
              </a>
              <a href="#boka-samtal" className="airbnb-search-btn" aria-label="Boka samtal med Kevin Söder">
                <span>Boka samtal</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Trust Points */}
            <div className="hero-trust-row">
              <div className="hero-trust-chip">
                <Check size={15} />
                <span>0 kr fast månadskostnad</span>
              </div>
              <div className="hero-trust-chip">
                <Check size={15} />
                <span>Betala bara vid resultat</span>
              </div>
              <div className="hero-trust-chip">
                <Check size={15} />
                <span>Säljare med snickarbakgrund</span>
              </div>
            </div>

            {/* Subtle Homeowner Entry */}
            <div className="hero-homeowner-pill-wrap">
              <button
                type="button"
                className="hero-homeowner-pill-btn"
                onClick={onSwitchToHomeowner}
              >
                <span className="pill-prefix">Privatperson?</span>
                <span>Ska du renovera? Vi hjälper dig hitta en kontrollerad firma →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Airbnb-Style Project Listing Card */}
          <div className="hero-visual">
            <div className="airbnb-card-wrapper">
              {/* Category Filter Pills on top */}
              <div className="airbnb-category-pills">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`airbnb-cat-btn ${activeProjectIdx === idx ? 'active' : ''}`}
                    onClick={() => setActiveProjectIdx(idx)}
                  >
                    {p.category}
                  </button>
                ))}
              </div>

              {/* Main Listing Card */}
              <div className="airbnb-project-card">
                <div className="airbnb-card-image-wrap">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="airbnb-card-img"
                  />
                  {/* Airbnb Guest-Favorite Style Badge */}
                  <div className="airbnb-guest-favorite-badge">
                    <ShieldCheck size={14} />
                    <span>{activeProject.badge}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="airbnb-rating-badge">
                    <Star size={13} fill="#222222" color="#222222" />
                    <span>{activeProject.rating}</span>
                  </div>

                  {/* Carousel navigation buttons */}
                  <div className="airbnb-card-nav-controls">
                    <button
                      type="button"
                      className="airbnb-nav-arrow"
                      onClick={handlePrev}
                      aria-label="Föregående projekt"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      className="airbnb-nav-arrow"
                      onClick={handleNext}
                      aria-label="Nästa projekt"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Carousel dots */}
                  <div className="airbnb-dots">
                    {projects.map((_, idx) => (
                      <span
                        key={idx}
                        className={`airbnb-dot ${activeProjectIdx === idx ? 'active' : ''}`}
                        onClick={() => setActiveProjectIdx(idx)}
                      ></span>
                    ))}
                  </div>
                </div>

                <div className="airbnb-card-body">
                  <div className="airbnb-card-top-row">
                    <h3 className="airbnb-card-title">{activeProject.title}</h3>
                    <div className="airbnb-card-price">{activeProject.price}</div>
                  </div>
                  <div className="airbnb-card-details">{activeProject.details}</div>
                  <p className="airbnb-card-desc">{activeProject.description}</p>
                </div>

                {/* Airbnb Host / Partner Footer */}
                <div className="airbnb-host-footer">
                  <img
                    src="/images/kevin-bild.jpg"
                    alt="Kevin Söder"
                    className="airbnb-host-avatar"
                  />
                  <div className="airbnb-host-info">
                    <div className="airbnb-host-name">Kevin Söder</div>
                    <div className="airbnb-host-sub">Säljpartner för byggfirmor • Snickarbakgrund</div>
                  </div>
                  <a href="#boka-samtal" className="airbnb-host-action">
                    Få hjälp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
