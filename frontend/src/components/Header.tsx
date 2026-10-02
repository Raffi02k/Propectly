import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="header-logo"
            aria-label="Prospectly hem"
          >
            <img
              src="/images/logo-prospectly.png"
              alt="Prospectly - B2B-säljkonsult för rekryteringsbolag"
            />
          </a>


          <nav className="nav-desktop">
            <a href="#problemet" className="nav-link">Problemet</a>
            <a href="#losningen" className="nav-link">Så funkar det</a>
            <a href="#fordelar" className="nav-link">Fördelar</a>
            <a href="#prissattning" className="nav-link">Prismodell</a>
            <a href="#om-kevin" className="nav-link">Om Kevin</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a
              href="https://calendly.com/kevin-prospectly"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary header-btn"
            >
              <Calendar size={18} />
              <span>Boka möte</span>
            </a>

            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#problemet" className="mobile-nav-link" onClick={closeMenu}>
          Problemet
        </a>
        <a href="#losningen" className="mobile-nav-link" onClick={closeMenu}>
          Så funkar det
        </a>
        <a href="#fordelar" className="mobile-nav-link" onClick={closeMenu}>
          Fördelar
        </a>
        <a href="#prissattning" className="mobile-nav-link" onClick={closeMenu}>
          Prismodell
        </a>
        <a href="#om-kevin" className="mobile-nav-link" onClick={closeMenu}>
          Om Kevin
        </a>
        <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>
          FAQ
        </a>

        <div style={{ marginTop: '1rem' }}>
          <a
            href="https://calendly.com/kevin-prospectly"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ width: '100%' }}
            onClick={closeMenu}
          >
            <Calendar size={20} />
            <span>Boka möte i Calendly</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
};
