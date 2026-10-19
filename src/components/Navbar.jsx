import React, { useState } from 'react';

const navLinks = ['Home', 'About', 'Services', 'Our Process', 'Why Qatar', 'Contact'];

export default function Navbar({ onGetStarted }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'transparent',
        borderBottom: 'none',
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
        {/* Left Side: Clean Written PROBIZ Text */}
        <a
          href="#home"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: '1.4rem',
              letterSpacing: '0.12em',
              color: '#FFFFFF',
              lineHeight: 1,
            }}
          >
            PR<span style={{ color: '#C9A84C' }}>O</span>BIZ
          </span>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '0.52rem',
              letterSpacing: '0.24em',
              color: '#C9A84C',
              marginTop: 3,
              textTransform: 'uppercase',
            }}
          >
            CONSULTANCY SERVICES
          </span>
        </a>

        {/* Center: Desktop Nav Links (Fixed to the Exact Center of Navbar) */}
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
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                color: link === 'Home' ? '#C9A84C' : '#CCCCCC',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                borderBottom: link === 'Home' ? '2px solid #C9A84C' : 'none',
                paddingBottom: 2,
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.target.style.color = '#DFBA73')}
              onMouseLeave={e => (e.target.style.color = link === 'Home' ? '#C9A84C' : '#CCCCCC')}
            >
              {link}
            </a>
          ))}
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
              fontFamily: "'Plus Jakarta Sans', sans-serif",
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
            backgroundColor: 'rgba(13,13,13,0.96)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              onClick={() => setMobileOpen(false)}
              style={{
                color: link === 'Home' ? '#C9A84C' : '#E0E0E0',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link}
            </a>
          ))}
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
              marginTop: '0.5rem',
              width: '100%',
              textAlign: 'center',
            }}
          >
            Get Started →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .navbar-container { padding: 0 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .navbar-cta { padding: 0.5rem 0.9rem !important; font-size: 0.8rem !important; }
          .navbar-container { padding: 0 1rem !important; }
        }
      `}</style>
    </nav>
  );
}
