import React from 'react';

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

/* Doha at Golden Hour – compact version for the About section left panel */
const DohaAboutSvg = () => (
  <svg
    viewBox="0 0 520 360"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <defs>
      <linearGradient id="aSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1D2B4A"/>
        <stop offset="40%" stopColor="#9C4822"/>
        <stop offset="70%" stopColor="#E07A30"/>
        <stop offset="100%" stopColor="#F2BF60"/>
      </linearGradient>
      <radialGradient id="aSun" cx="65%" cy="42%" r="52%">
        <stop offset="0%" stopColor="#FFE8A8" stopOpacity="0.9"/>
        <stop offset="35%" stopColor="#E0721C" stopOpacity="0.5"/>
        <stop offset="80%" stopColor="#6E2010" stopOpacity="0.1"/>
        <stop offset="100%" stopColor="#080A12" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id="aWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#50291A"/>
        <stop offset="35%" stopColor="#1C0E09"/>
        <stop offset="100%" stopColor="#060810"/>
      </linearGradient>
      <linearGradient id="aTower" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#12202F" stopOpacity="0.96"/>
        <stop offset="50%" stopColor="#1E3148" stopOpacity="0.85"/>
        <stop offset="100%" stopColor="#091420" stopOpacity="0.96"/>
      </linearGradient>
    </defs>
    <rect width="520" height="230" fill="url(#aSky)"/>
    <rect width="520" height="230" fill="url(#aSun)"/>
    {/* Skyline */}
    <rect x="30" y="75" width="28" height="155" fill="url(#aTower)" rx="1"/>
    <line x1="38" y1="75" x2="38" y2="230" stroke="#C9A84C" strokeWidth="0.6" opacity="0.7"/>
    <line x1="46" y1="75" x2="46" y2="230" stroke="#C9A84C" strokeWidth="0.6" opacity="0.7"/>
    {[90,108,126,144,162,180].map(y=>(
      <line key={y} x1="32" y1={y} x2="56" y2={y} stroke="#FFE9A0" strokeWidth="0.6" strokeDasharray="2 3" opacity="0.6"/>
    ))}
    <polygon points="72,55 95,40 105,230 68,230" fill="#162233"/>
    <line x1="95" y1="40" x2="105" y2="230" stroke="#C9A84C" strokeWidth="1"/>
    <g transform="translate(114,30)">
      <path d="M7 200 Q2 90 12 12 L28 12 Q38 90 33 200 Z" fill="#111C2C"/>
      <path d="M7 200 Q2 90 12 12 L28 12 Q38 90 33 200 Z" stroke="#C9A84C" strokeWidth="0.9" opacity="0.8"/>
      <circle cx="20" cy="10" r="3" fill="#FFF8E5"/>
    </g>
    <g transform="translate(168,22)">
      <polygon points="17,0 13,60 5,210 30,210 21,60" fill="#192840"/>
      <line x1="17" y1="0" x2="17" y2="210" stroke="#C9A84C" strokeWidth="1"/>
      <circle cx="17" cy="0" r="2" fill="#FF2020"/>
    </g>
    <rect x="210" y="68" width="28" height="162" fill="#14202F" rx="1"/>
    <rect x="222" y="55" width="10" height="178" fill="#1E3046"/>
    <polygon points="255,80 270,58 285,80" fill="#162030"/>
    <rect x="290" y="98" width="35" height="132" fill="#11202E"/>
    <polygon points="290,98 308,78 325,98" fill="#C9A84C" opacity="0.6"/>
    <rect x="338" y="110" width="42" height="120" fill="#162130"/>
    <rect x="392" y="80" width="32" height="150" fill="#102030"/>
    <line x1="406" y1="68" x2="406" y2="80" stroke="#C9A84C" strokeWidth="1.4"/>
    <polygon points="436,88 452,70 462,88" fill="#1A2B3E"/>
    <rect x="462" y="95" width="55" height="135" fill="#0E1E2D"/>
    {/* Water */}
    <rect x="0" y="230" width="520" height="130" fill="url(#aWater)"/>
    <rect x="0" y="230" width="520" height="8" fill="#0C1520"/>
    <line x1="0" y1="230" x2="520" y2="230" stroke="#C9A84C" strokeWidth="1.2"/>
    <path d="M0 255 Q130 262 260 255 T520 255" stroke="#C9A84C" strokeWidth="0.7" opacity="0.25" fill="none"/>
    <path d="M0 285 Q150 294 300 285 T520 285" stroke="#C9A84C" strokeWidth="0.7" opacity="0.18" fill="none"/>
    {/* Gold reflections */}
    {[[180,15,240,70,0.45],[250,12,244,55,0.35],[310,10,248,45,0.28]].map(([cx,rx,cy,ry,op],i)=>(
      <ellipse key={i} cx={cx} cy={cy+cy/4} rx={rx} ry={ry/3} fill="#F0B840" opacity={op}/>
    ))}
  </svg>
);

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
          <DohaAboutSvg />

          {/* Dark overlay gradient from bottom */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.6) 50%, rgba(13,13,13,0.1) 100%)',
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
                fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
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
                      fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
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
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
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
          .why-panel { padding: 2.5rem 1.25rem !important; }
        }
        @media (max-width: 480px) {
          .about-left { min-height: 480px !important; }
          .about-left-text { padding: 1.5rem 1rem !important; }
          .why-panel { padding: 2rem 1rem !important; }
          .about-gold-circle { display: none !important; }
        }
      `}</style>
    </section>
  );
}
