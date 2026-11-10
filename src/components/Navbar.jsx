import React, { useState, useEffect } from 'react';
import ProBizLogo from './ProBizLogo';
import { COMPANY_INFO } from '../data/probizData';
import { Globe, Mail } from 'lucide-react';

const NAV_ITEMS_EN = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Our Process', id: 'our-process' },
  { label: 'Why Qatar', id: 'why-qatar' },
  { label: 'Contact', id: 'contact' },
];

const NAV_ITEMS_AR = [
  { label: 'الرئيسية', id: 'home' },
  { label: 'من نحن', id: 'about' },
  { label: 'خدماتنا', id: 'services' },
  { label: 'آلية العمل', id: 'our-process' },
  { label: 'لماذا قطر', id: 'why-qatar' },
  { label: 'تواصل معنا', id: 'contact' },
];

export default function Navbar({
  onGetStarted,
  onNavigateSection,
  currentView = 'home',
  currentLang = 'en',
  onLanguageChange,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [internalLang, setInternalLang] = useState(() => {
    try {
      return localStorage.getItem('probiz_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  const lang = onLanguageChange ? currentLang : internalLang;

  const handleLanguageSwitch = (newLang) => {
    if (onLanguageChange) {
      onLanguageChange(newLang);
    } else {
      setInternalLang(newLang);
    }
    try {
      localStorage.setItem('probiz_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {}
  };

  const navItems = lang === 'ar' ? NAV_ITEMS_AR : NAV_ITEMS_EN;
  const activeSection = currentView === 'service-detail' ? 'services' : currentView;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    if (onNavigateSection) {
      onNavigateSection(targetId);
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10,13,20,0.95)' : 'rgba(10,13,20,0.85)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.04)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* ── TOP UTILITY STRIP / LANGUAGE SELECTION BAR ── */}
      <div
        className="navbar-topbar"
        style={{
          borderBottom: '1px solid rgba(197, 160, 89, 0.18)',
          backgroundColor: scrolled ? 'rgba(6, 8, 14, 0.96)' : 'rgba(6, 8, 14, 0.88)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="topbar-container"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 38,
            fontSize: '0.75rem',
            color: '#94A3B8',
          }}
        >
          {/* Left: Quick Corporate Info */}
          <div
            className="topbar-left"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#E2E8F0',
                fontWeight: 600,
                letterSpacing: '0.01em',
              }}
            >
              <span>🇶🇦</span>
              <span>{lang === 'ar' ? 'الدوحة، قطر' : 'Doha, Qatar'}</span>
            </span>

            <span className="topbar-sep topbar-email-sep" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="topbar-link topbar-email"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#94A3B8',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#DFBA73')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
            >
              <Mail size={12} color="#C5A059" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          {/* Right: English / Arabic Language Selection Option */}
          <div
            className="topbar-right"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <div
              className="lang-selection-capsule"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderRadius: 9999,
                padding: '2px 4px',
                gap: '2px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
              }}
              role="group"
              aria-label="Language selection"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 4px',
                  color: '#DFBA73',
                }}
              >
                <Globe size={13} />
              </div>

              {/* English Button */}
              <button
                type="button"
                onClick={() => handleLanguageSwitch('en')}
                style={{
                  background:
                    lang === 'en'
                      ? 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 100%)'
                      : 'transparent',
                  color: lang === 'en' ? '#090D15' : '#CBD5E1',
                  fontWeight: lang === 'en' ? 700 : 500,
                  fontSize: '0.72rem',
                  fontFamily: "'Lora', serif",
                  padding: '2px 8px',
                  borderRadius: 9999,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (lang !== 'en') e.currentTarget.style.color = '#DFBA73';
                }}
                onMouseLeave={(e) => {
                  if (lang !== 'en') e.currentTarget.style.color = '#CBD5E1';
                }}
                aria-pressed={lang === 'en'}
                title="Switch to English"
              >
                English
              </button>

              <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem' }}>/</span>

              {/* Arabic Button */}
              <button
                type="button"
                onClick={() => handleLanguageSwitch('ar')}
                style={{
                  background:
                    lang === 'ar'
                      ? 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 100%)'
                      : 'transparent',
                  color: lang === 'ar' ? '#090D15' : '#CBD5E1',
                  fontWeight: lang === 'ar' ? 700 : 500,
                  fontSize: '0.75rem',
                  fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
                  padding: '2px 8px',
                  borderRadius: 9999,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (lang !== 'ar') e.currentTarget.style.color = '#DFBA73';
                }}
                onMouseLeave={(e) => {
                  if (lang !== 'ar') e.currentTarget.style.color = '#CBD5E1';
                }}
                aria-pressed={lang === 'ar'}
                title="التبديل إلى العربية"
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVBAR ── */}
      <div
        className="navbar-container"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 66,
          position: 'relative',
        }}
      >
        {/* Left Side: PROBIZ Logo */}
        <a
          href="#home"
          onClick={(e) => handleItemClick(e, 'home')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            zIndex: 2,
            cursor: 'pointer',
          }}
          aria-label="ProBiz Consultancy Services Home"
        >
          <ProBizLogo size="normal" />
        </a>

        {/* Center: Desktop Nav Links */}
        <div
          className="desktop-nav"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
            zIndex: 2,
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleItemClick(e, item.id)}
                style={{
                  color: isActive ? '#C9A84C' : '#CCCCCC',
                  textDecoration: 'none',
                  fontSize: lang === 'ar' ? '0.925rem' : '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : "'Lora', serif",
                  borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  paddingBottom: 2,
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = '#DFBA73';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = '#CCCCCC';
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2 }}>
          <button
            onClick={onGetStarted}
            className="navbar-cta"
            style={{
              background: 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 60%, #9E7B2A 100%)',
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: '0.85rem',
              fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : "'Merriweather', 'Lora', serif",
              padding: '0.55rem 1.3rem',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 16px rgba(197,160,89,0.35)',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(197,160,89,0.55)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(197,160,89,0.35)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {lang === 'ar' ? (
              <>
                ابدأ الآن <span style={{ fontSize: '1rem' }}>←</span>
              </>
            ) : (
              <>
                Get Started <span style={{ fontSize: '1rem' }}>→</span>
              </>
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── MOBILE DROPDOWN MENU ── */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: 'rgba(10,13,20,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: 'calc(100vh - 104px)',
            overflowY: 'auto',
          }}
        >
          {/* Mobile In-Menu Language Selection */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.85rem',
              backgroundColor: 'rgba(255,255,255,0.04)',
              borderRadius: 8,
              border: '1px solid rgba(197, 160, 89, 0.2)',
              marginBottom: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#DFBA73', fontSize: '0.825rem', fontWeight: 600 }}>
              <Globe size={15} />
              <span>{lang === 'ar' ? 'اللغة' : 'Language'}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <button
                type="button"
                onClick={() => handleLanguageSwitch('en')}
                style={{
                  padding: '0.28rem 0.75rem',
                  borderRadius: 6,
                  border: lang === 'en' ? '1px solid #DFBA73' : '1px solid rgba(255,255,255,0.1)',
                  background: lang === 'en' ? 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 100%)' : 'transparent',
                  color: lang === 'en' ? '#090D15' : '#CBD5E1',
                  fontWeight: lang === 'en' ? 700 : 500,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                }}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => handleLanguageSwitch('ar')}
                style={{
                  padding: '0.28rem 0.75rem',
                  borderRadius: 6,
                  border: lang === 'ar' ? '1px solid #DFBA73' : '1px solid rgba(255,255,255,0.1)',
                  background: lang === 'ar' ? 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 100%)' : 'transparent',
                  color: lang === 'ar' ? '#090D15' : '#CBD5E1',
                  fontWeight: lang === 'ar' ? 700 : 500,
                  fontSize: '0.82rem',
                  fontFamily: "'Cairo', sans-serif",
                  cursor: 'pointer',
                }}
              >
                العربية
              </button>
            </div>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleItemClick(e, item.id)}
                style={{
                  color: isActive ? '#C9A84C' : '#E0E0E0',
                  textDecoration: 'none',
                  fontSize: lang === 'ar' ? '1rem' : '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : "'Lora', serif",
                  padding: '0.65rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: '#C9A84C', fontSize: '0.8rem' }}>●</span>}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileOpen(false);
              onGetStarted();
            }}
            style={{
              background: 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 60%, #9E7B2A 100%)',
              color: '#0D0D0D',
              fontWeight: 700,
              fontSize: '0.9rem',
              fontFamily: lang === 'ar' ? "'Cairo', sans-serif" : 'inherit',
              padding: '0.75rem',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              marginTop: '0.75rem',
              width: '100%',
              textAlign: 'center',
            }}
          >
            {lang === 'ar' ? 'ابدأ الآن ←' : 'Get Started →'}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .navbar-container { padding: 0 1.25rem !important; }
          .topbar-container { padding: 0 1.25rem !important; }
        }
        @media (max-width: 640px) {
          .topbar-email, .topbar-email-sep { display: none !important; }
        }
        @media (max-width: 540px) {
          .navbar-cta { display: none !important; }
          .navbar-container { padding: 0 1rem !important; }
          .topbar-container { padding: 0 1rem !important; }
        }
        @media (max-width: 360px) {
          .navbar-container { padding: 0 0.75rem !important; }
          .topbar-container { padding: 0 0.75rem !important; }
        }
      `}</style>
    </nav>
  );
}
