import React, { useState, useEffect } from 'react';
import ProBizLogo from './ProBizLogo';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Our Process', id: 'our-process' },
  { label: 'Why Qatar', id: 'why-qatar' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ onGetStarted, onNavigateSection, currentView = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
        backgroundColor: scrolled ? 'rgba(13,13,13,0.92)' : 'rgba(13,13,13,0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="navbar-container"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
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
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: "'Lora', serif",
                  borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  paddingBottom: 2,
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  if (!isActive) e.target.style.color = '#DFBA73';
                }}
                onMouseLeave={e => {
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
              fontFamily: "'Merriweather', 'Lora', serif",
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
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(197,160,89,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(197,160,89,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get Started <span style={{ fontSize: '1rem' }}>→</span>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: 'rgba(13,13,13,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto',
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
                  color: isActive ? '#C9A84C' : '#E0E0E0',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: "'Lora', serif",
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
              padding: '0.75rem',
              borderRadius: 6,
              border: 'none',
              cursor: 'pointer',
              marginTop: '0.75rem',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Get Started →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .navbar-container { padding: 0 1.25rem !important; }
        }
        @media (max-width: 540px) {
          .navbar-cta { display: none !important; }
          .navbar-container { padding: 0 1rem !important; }
        }
        @media (max-width: 360px) {
          .navbar-container { padding: 0 0.75rem !important; }
        }
      `}</style>
    </nav>
  );
}
