import React from 'react';
import aboutSkylineImg from '../assets/about-skyline.jpg';

/* Why Choose Icons */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#C9A84C"/>
  </svg>
);
const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 }}>
    <path d="M4 12h1.5L8 14l2.5-2H12l2 2 2.5-2H18L20 12" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10l4-4h4l2 2 2-2h4l4 4-2 2-2-2h-1l-3 3-3-3H9L7 12 5 10H3L2 10z" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 }}>
    <path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6l-8-4z" stroke="#C9A84C" strokeWidth="1.8" fill="none"/>
    <path d="M9 12l2 2 4-4" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TrendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 20, height: 20 }}>
    <path d="M3 17l5-5 4 4 9-9" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 8h5v5" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WHY_ITEMS = [
  {
    Icon: PinIcon,
    title: 'Local Expertise',
    desc: 'Deep understanding of the Qatar market.',
  },
  {
    Icon: HandshakeIcon,
    title: 'End-to-End Support',
    desc: 'From setup to growth, we are with you.',
  },
  {
    Icon: ShieldIcon,
    title: 'Trusted & Reliable',
    desc: 'Transparent, professional and client-focused.',
  },
  {
    Icon: TrendIcon,
    title: 'Growth Driven',
    desc: 'Solutions designed for long-term success.',
  },
];

export default function AboutPreview({ onLearnMore }) {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#0D0D0D',
        padding: '0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 360,
        }}
        className="about-grid"
      >
        {/* LEFT: Image + Text overlay */}
        <div className="about-left" style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }}>
          <img
            src={aboutSkylineImg}
            alt="Doha Skyline - ProBiz Consultancy Services"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />

          {/* Dark overlay gradient from bottom */}
          <div
            className="about-left-overlay"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.52) 50%, rgba(13,13,13,0.1) 100%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Gold circle graphic accent (large backdrop circle from reference) */}
          <div
            className="about-gold-circle"
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-8%',
              width: 280,
              height: 280,
              borderRadius: '50%',
              border: '3px solid rgba(197,160,89,0.35)',
              background: 'radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />

          {/* Text overlay at bottom of image */}
          <div
            className="about-left-text"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '2.5rem',
              zIndex: 4,
            }}
          >
            <div
              style={{
                fontFamily: "'Lora', serif",
                fontWeight: 700,
                fontSize: '0.7rem',
                color: '#C9A84C',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              About ProBiz
            </div>

            <h2
              style={{
                fontFamily: "'Merriweather', serif",
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: '#FFFFFF',
                lineHeight: 1.2,
                margin: 0,
                marginBottom: '1rem',
              }}
            >
              A partner in<br />
              your <span style={{ color: '#C9A84C' }}>business journey</span>
            </h2>

            <p
              style={{
                fontFamily: "'Lora', serif",
                color: '#AAAAAA',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                maxWidth: 400,
                marginBottom: '1.5rem',
              }}
            >
              PROBIZ Consultancy Services is built on a simple belief — that people, ideas and businesses can create meaningful growth together. We support individuals, startups and established companies in Qatar with reliable, professional and innovative solutions.
            </p>

            <button
              onClick={onLearnMore}
              style={{
                background: 'transparent',
                color: '#C9A84C',
                fontFamily: "'Merriweather', 'Lora', serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                border: '1.5px solid #C9A84C',
                borderRadius: 6,
                padding: '0.7rem 1.6rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#C9A84C';
                e.currentTarget.style.color = '#0D0D0D';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#C9A84C';
              }}
            >
              More About Us <span>→</span>
            </button>
          </div>
        </div>

        {/* RIGHT: Why Choose ProBiz */}
        <div
          style={{
            background: '#111111',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3.5rem 3rem',
          }}
          className="why-panel"
        >
          <h3
            style={{
              fontFamily: "'Merriweather', serif",
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              color: '#FFFFFF',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}
          >
            Why Choose PROBIZ
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {WHY_ITEMS.map(({ Icon, title, desc }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem 1.2rem',
                  borderRadius: 8,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(197,160,89,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(197,160,89,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: 'rgba(197,160,89,0.12)',
                    border: '1px solid rgba(197,160,89,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Merriweather', serif",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#FFFFFF',
                      marginBottom: 4,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '0.82rem',
                      color: '#888888',
                      lineHeight: 1.5,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-panel { padding: 3rem 2rem !important; }
          .about-left-text { padding: 2rem !important; }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-left { min-height: 440px !important; }
          .about-left-text { padding: 2rem 1.25rem !important; }
          .about-left-overlay {
            background: linear-gradient(to top, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.38) 55%, rgba(13,13,13,0.1) 100%) !important;
          }
          .why-panel { padding: 2.5rem 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .about-left { min-height: 480px !important; }
          .about-left-text { padding: 1.5rem 1rem !important; }
          .about-left-overlay {
            background: linear-gradient(to top, rgba(13,13,13,0.85) 0%, rgba(13,13,13,0.32) 55%, rgba(13,13,13,0.08) 100%) !important;
          }
          .why-panel { padding: 2rem 1rem !important; }
          .about-gold-circle { display: none !important; }
        }
      `}</style>
    </section>
  );
}
