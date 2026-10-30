import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, UserCheck, HardHat } from 'lucide-react';

interface HeaderProps {
  currentView: 'contractors' | 'homeowners';
  onSwitchView: (view: 'contractors' | 'homeowners') => void;
  onOpenGdpr?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onSwitchView }) => {
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
            className="header-logo-text-wrap"
            aria-label="Kevin Söder hem"
          >
            <div className="logo-brand-name">
              KEVIN SÖDER
            </div>
            <div className="logo-brand-sub">
              {currentView === 'contractors' ? 'Säljpartner för byggfirmor' : 'Trygg renovering & offerthjälp'}
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {currentView === 'contractors' ? (
              <>
                <a href="#om-kevin" className="nav-link">Om Kevin</a>
                <a href="#problemet" className="nav-link">Problemet</a>
                <a href="#tjanster" className="nav-link">Tjänster</a>
                <a href="#kvalitetskrav" className="nav-link">Kvalitetskrav</a>
                <a href="#prismodell" className="nav-link">Prismodell</a>
                <a href="#faq" className="nav-link">FAQ</a>
              </>
            ) : (
              <>
                <a href="#kvalitetskrav" className="nav-link">Krav på firmorna</a>
                <a href="#privat-forfragan" className="nav-link">Skicka förfrågan</a>
                <a href="#faq" className="nav-link">Vanliga frågor</a>
              </>
            )}

            {/* View Switcher Button in Nav */}
            <button
              type="button"
              className={`nav-mode-pill ${currentView === 'homeowners' ? 'active-homeowner' : ''}`}
              onClick={() => {
                onSwitchView(currentView === 'contractors' ? 'homeowners' : 'contractors');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {currentView === 'contractors' ? (
                <>
                  <UserCheck size={15} />
                  <span>Ska du renovera? (Privatperson)</span>
                </>
              ) : (
                <>
                  <HardHat size={15} />
                  <span>För Byggfirmor (B2B)</span>
                </>
              )}
            </button>
          </nav>

          <div className="nav-actions">
            {/* Phone Icon Button ONLY (no numbers in header) */}
            <a
              href="tel:0701234567"
              className="header-phone-btn"
              title="Ring Kevin Söder direkt på 070-123 45 67"
              aria-label="Ring Kevin Söder på 070-123 45 67"
            >
              <Phone size={18} className="phone-icon-pulse" />
            </a>

            {/* CTA button (visible on desktop/tablet, drawer has full CTA on mobile) */}
            {currentView === 'contractors' ? (
              <a
                href="#boka-samtal"
                className="btn btn-primary header-btn"
                onClick={() => closeMenu()}
              >
                <span>Boka samtal</span>
              </a>
            ) : (
              <a
                href="#privat-forfragan"
                className="btn btn-primary header-btn"
                onClick={() => closeMenu()}
              >
                <span>Skicka förfrågan</span>
              </a>
            )}

            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Stäng meny' : 'Öppna meny'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-top">
          <div className="mobile-drawer-brand">
            <strong>KEVIN SÖDER</strong>
            <span>{currentView === 'contractors' ? 'Säljpartner för byggfirmor' : 'Trygg renovering & offerthjälp'}</span>
          </div>
        </div>

        {/* View Switcher Mobile Pill */}
        <div style={{ marginBottom: '1rem' }}>
          <button
            type="button"
            className="mobile-mode-switch-btn"
            onClick={() => {
              onSwitchView(currentView === 'contractors' ? 'homeowners' : 'contractors');
              closeMenu();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {currentView === 'contractors' ? (
              <>
                <UserCheck size={18} />
                <span>Byt vy: Ska du renovera? (Privatperson)</span>
              </>
            ) : (
              <>
                <HardHat size={18} />
                <span>Byt vy: För Byggfirmor (B2B)</span>
              </>
            )}
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          {currentView === 'contractors' ? (
            <>
              <a href="#om-kevin" className="mobile-nav-link" onClick={closeMenu}>
                Om Kevin
              </a>
              <a href="#problemet" className="mobile-nav-link" onClick={closeMenu}>
                Problemet
              </a>
              <a href="#tjanster" className="mobile-nav-link" onClick={closeMenu}>
                Tjänster
              </a>
              <a href="#kvalitetskrav" className="mobile-nav-link" onClick={closeMenu}>
                Kvalitetskrav
              </a>
              <a href="#prismodell" className="mobile-nav-link" onClick={closeMenu}>
                Prismodell
              </a>
              <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>
                FAQ
              </a>
            </>
          ) : (
            <>
              <a href="#kvalitetskrav" className="mobile-nav-link" onClick={closeMenu}>
                Krav på firmorna
              </a>
              <a href="#privat-forfragan" className="mobile-nav-link" onClick={closeMenu}>
                Skicka förfrågan
              </a>
              <a href="#faq" className="mobile-nav-link" onClick={closeMenu}>
                Vanliga frågor
              </a>
            </>
          )}
        </nav>

        <div className="mobile-drawer-actions">
          <a
            href="tel:0701234567"
            className="btn btn-secondary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMenu}
          >
            <Phone size={18} />
            <span>Ring: 070-123 45 67</span>
          </a>

          {currentView === 'contractors' ? (
            <a
              href="#boka-samtal"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              <span>Boka förutsättningslöst samtal</span>
              <ArrowRight size={18} />
            </a>
          ) : (
            <a
              href="#privat-forfragan"
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={closeMenu}
            >
              <span>Skicka förfrågan kostnadsfritt</span>
              <ArrowRight size={18} />
            </a>
          )}
        </div>
      </div>
    </>
  );
};
