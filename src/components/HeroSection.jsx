import React, { useState, useEffect } from 'react';

/* -----------------------------------------------------------------------
 * HERO SECTION (Original Reference Design)
 *  - Left content pane with 3-line headline:
 *      People. Ideas.
 *      Business.
 *      Growth.
 *  - Right side: Doha West Bay skyline visual with towers, water reflections, dhow & gold wave
 *  - Stats row: 100+ | 5+ | Qatar
 *  - ProBiz office logo overlay and Qatar watermark
 * --------------------------------------------------------------------- */

const DohaSkylineHero = () => (
  <svg
    viewBox="0 0 900 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    style={{ width: '100%', height: '100%', display: 'block' }}
  >
    <defs>
      <linearGradient id="hSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1A2340" />
        <stop offset="35%" stopColor="#8B3E24" />
        <stop offset="65%" stopColor="#CF6728" />
        <stop offset="82%" stopColor="#E8933C" />
        <stop offset="100%" stopColor="#F2BD68" />
      </linearGradient>
      <radialGradient id="hSun" cx="62%" cy="45%" r="50%">
        <stop offset="0%" stopColor="#FFEDAA" stopOpacity="0.85" />
        <stop offset="30%" stopColor="#E87020" stopOpacity="0.55" />
        <stop offset="75%" stopColor="#7A2510" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0A0D16" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="hWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A2210" />
        <stop offset="30%" stopColor="#1E1006" />
        <stop offset="100%" stopColor="#08090F" />
      </linearGradient>
      <linearGradient id="hTower" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#111E33" stopOpacity="0.97" />
        <stop offset="50%" stopColor="#203350" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#0B1422" stopOpacity="0.97" />
      </linearGradient>
      <linearGradient id="hGoldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF0CE" />
        <stop offset="45%" stopColor="#DFBA73" />
        <stop offset="100%" stopColor="#8A6A22" />
      </linearGradient>
      <filter id="hGlow">
        <feGaussianBlur stdDeviation="2.5" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    {/* Sky */}
    <rect width="900" height="380" fill="url(#hSky)" />
    <rect width="900" height="380" fill="url(#hSun)" />

    {/* Far Skyline Silhouette */}
    <path d="M0 330 L45 330 L45 230 L70 230 L70 330 L125 330 L125 250 L155 250 L155 330 L215 330 L215 210 L245 210 L245 330 L310 330 L310 240 L340 240 L340 330 L420 330 L420 250 L450 250 L450 330 L510 330 L510 225 L545 225 L545 330 L630 330 L630 215 L665 215 L665 330 L730 330 L730 240 L760 240 L760 330 L820 330 L820 250 L855 250 L855 330 L900 330 Z" fill="#3A1D10" opacity="0.5" />

    {/* Major West Bay Towers */}
    {/* Tower 1 - Slim */}
    <rect x="65" y="140" width="42" height="190" fill="url(#hTower)" rx="1"/>
    <line x1="76" y1="140" x2="76" y2="330" stroke="#DFBA73" strokeWidth="0.7" opacity="0.7"/>
    <line x1="86" y1="140" x2="86" y2="330" stroke="#DFBA73" strokeWidth="0.7" opacity="0.7"/>
    <line x1="96" y1="140" x2="96" y2="330" stroke="#DFBA73" strokeWidth="0.7" opacity="0.7"/>
    {[160,183,206,229,252,275,298].map(y => (
      <line key={y} x1="67" y1={y} x2="105" y2={y} stroke="#FFE9A0" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6"/>
    ))}

    {/* Tower 2 - Slanted */}
    <polygon points="130,105 170,85 182,330 125,330" fill="#1A2638"/>
    <polygon points="150,95 170,85 182,330 162,330" fill="#253852" opacity="0.75"/>
    <line x1="170" y1="85" x2="182" y2="330" stroke="#DFBA73" strokeWidth="1.4"/>

    {/* Tower 3 - Tornado */}
    <g transform="translate(210,55)">
      <path d="M12 275 Q4 140 20 18 L44 18 Q60 140 52 275 Z" fill="#121C2D"/>
      <path d="M12 275 Q4 140 20 18 L44 18 Q60 140 52 275 Z" stroke="#DFBA73" strokeWidth="1.1" opacity="0.8"/>
      <path d="M20 18 L52 275 M44 18 L12 275 M16 85 L48 220 M48 85 L14 220" stroke="#FFE9A0" strokeWidth="0.7" opacity="0.45"/>
      <circle cx="32" cy="15" r="4" fill="#FFF8E5"/>
      <circle cx="32" cy="15" r="9" fill="#DFBA73" opacity="0.45"/>
    </g>

    {/* Tower 4 - Burj Doha */}
    <g transform="translate(300,35)">
      <path d="M8 295 L8 75 Q32 0 56 75 L56 295 Z" fill="#172135"/>
      <path d="M8 75 Q32 0 56 75" stroke="#DFBA73" strokeWidth="2" fill="none"/>
      <rect x="12" y="75" width="40" height="220" fill="none" stroke="#D4A84A" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.55"/>
      <line x1="32" y1="4" x2="32" y2="295" stroke="#FFE39A" strokeWidth="1.1" opacity="0.75"/>
      <circle cx="32" cy="4" r="2.5" fill="white"/>
    </g>

    {/* Tower 5 - Spire */}
    <g transform="translate(390,18)">
      <polygon points="25,0 20,80 8,312 44,312 30,80" fill="#192840"/>
      <polygon points="25,0 25,80 25,312 44,312 30,80" fill="#2A3D5E" opacity="0.8"/>
      <line x1="25" y1="0" x2="25" y2="312" stroke="#DFBA73" strokeWidth="1.4"/>
      <circle cx="25" cy="0" r="2.5" fill="#FF3030"/>
    </g>

    {/* Tower 6 */}
    <rect x="456" y="105" width="36" height="225" fill="#141D2E" rx="1"/>
    <rect x="468" y="88" width="13" height="245" fill="#22324C"/>
    <line x1="474" y1="68" x2="474" y2="88" stroke="#DFBA73" strokeWidth="1.8"/>
    <circle cx="474" cy="66" r="2.5" fill="#FFEFB0"/>

    {/* Tower 7 */}
    <polygon points="520,135 558,90 563,330 515,330" fill="#182239"/>
    <line x1="558" y1="90" x2="563" y2="330" stroke="#DFBA73" strokeWidth="1.1"/>

    {/* Tower 8 */}
    <rect x="580" y="145" width="44" height="185" fill="#15202F"/>
    <polygon points="580,145 602,120 624,145" fill="#DFBA73" opacity="0.65"/>

    {/* Tower 9+10 */}
    <rect x="645" y="172" width="52" height="158" fill="#192338"/>
    <rect x="712" y="124" width="40" height="206" fill="#13202F"/>
    <polygon points="712,124 732,100 752,124" fill="#2B3E5A"/>
    <line x1="732" y1="92" x2="732" y2="100" stroke="#DFBA73" strokeWidth="1.5"/>

    {/* Water */}
    <rect x="0" y="330" width="900" height="230" fill="url(#hWater)"/>
    {/* Corniche Line */}
    <rect x="0" y="330" width="900" height="12" fill="#0E1520"/>
    <line x1="0" y1="330" x2="900" y2="330" stroke="#C9A84C" strokeWidth="1.5"/>
    {/* Street Lamps */}
    {[50,110,170,230,290,350,410,470,530,590,650,710,770,830].map(x => (
      <g key={x}>
        <circle cx={x} cy="328" r="2.5" fill="#FFF5D0"/>
        <circle cx={x} cy="328" r="7" fill="#F5C040" opacity="0.3"/>
      </g>
    ))}

    {/* Water Reflections */}
    {[[310,24,380,120,0.5],[420,18,396,150,0.4],[245,22,392,80,0.35],[470,22,380,85,0.3]].map(([cx,rx,cy,ry,op],i)=>(
      <ellipse key={i} cx={cx} cy={cy+cy} rx={rx} ry={ry/2} fill="#F7C260" opacity={op}/>
    ))}
    <path d="M0 370 Q220 377 440 370 T880 370" stroke="#C9A84C" strokeWidth="0.8" opacity="0.28" fill="none"/>
    <path d="M0 415 Q200 424 400 415 T800 415 T900 415" stroke="#C9A84C" strokeWidth="0.8" opacity="0.2" fill="none"/>
    <path d="M0 470 Q250 480 500 470 T900 470" stroke="#C9A84C" strokeWidth="0.8" opacity="0.14" fill="none"/>

    {/* Dhow Boat */}
    <g transform="translate(695,255) scale(0.9)">
      <ellipse cx="62" cy="115" rx="88" ry="38" fill="#F5B840" opacity="0.22" filter="url(#hGlow)"/>
      <polygon points="63,8 138,110 60,100" fill="#FFE4A0" opacity="0.95"/>
      <polygon points="63,8 60,100 4,106" fill="#E0AE52" opacity="0.9"/>
      <line x1="62" y1="5" x2="62" y2="116" stroke="#3D2008" strokeWidth="2.5"/>
      <line x1="2" y1="108" x2="72" y2="7" stroke="#3D2008" strokeWidth="1.8"/>
      <path d="M0 114 Q62 136 142 112 L128 128 Q62 142 14 128 Z" fill="#371C07"/>
      <path d="M10 116 Q62 134 132 114" stroke="#DFBA73" strokeWidth="1.2"/>
      <circle cx="64" cy="110" r="3.5" fill="#FFF2BA"/>
      <circle cx="64" cy="110" r="10" fill="#F5A030" opacity="0.35"/>
      <path d="M-12 130 Q62 138 158 126" stroke="#FFE09A" strokeWidth="0.9" opacity="0.45" fill="none"/>
    </g>

    {/* Gold bottom wave ribbon */}
    <path d="M0 548 C260 536 420 500 580 524 C720 546 820 526 900 508 L900 560 L0 560 Z" fill="url(#hGoldRibbon)" opacity="0.9"/>
    <path d="M0 538 C260 526 420 490 580 514 C720 536 820 516 900 498" stroke="white" strokeWidth="1.2" opacity="0.6" fill="none"/>
  </svg>
);

function useCounter(target, duration = 1800, delay = 250) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    const timeoutId = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth ease-out cubic curve: rapidly counts up then settles into target
        const ease = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(ease * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration, delay]);

  return count;
}

export default function HeroSection({ onGetStarted, onContact }) {
  const count100 = useCounter(100, 1800, 250);
  const count5 = useCounter(5, 1400, 250);

  return (
    <section
      style={{
        position: 'relative',
        backgroundColor: '#0D0D0D',
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: 640,
          alignItems: 'stretch',
          gap: 0,
        }}
        className="hero-grid hero-container"
      >
        {/* LEFT PANE — Headline & CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '6.5rem 3rem 3.5rem 0',
            position: 'relative',
            zIndex: 2,
          }}
          className="hero-left"
        >
          {/* Big Headline (3 lines) with Merriweather Serif */}
          <h1
            className="hero-headline"
            style={{
              fontFamily: '"Merriweather", serif',
              fontOpticalSizing: 'auto',
              fontWeight: 800,
              fontStyle: 'normal',
              fontVariationSettings: '"wdth" 100',
              fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              margin: 0,
              marginBottom: '1.5rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            People Ideas<br />
            Business<br />
            <span style={{ color: '#C9A84C' }}>Growth .</span>
          </h1>

          {/* Sub-text */}
          <p
            className="hero-subtext"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#BBBBBB',
              fontSize: '1rem',
              lineHeight: 1.7,
              maxWidth: 320,
              marginBottom: '2rem',
            }}
          >
            Your trusted partner for business setup, brand growth and digital solutions in Qatar.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={onGetStarted}
              style={{
                background: 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 60%, #9E7B2A 100%)',
                color: '#0D0D0D',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.9rem',
                padding: '0.8rem 1.8rem',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 6px 20px rgba(197,160,89,0.4)',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(197,160,89,0.55)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(197,160,89,0.4)'; }}
            >
              Our Services <span>→</span>
            </button>

            <button
              onClick={onContact}
              style={{
                background: 'rgba(255,255,255,0.06)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.9rem',
                padding: '0.8rem 1.8rem',
                borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.18)',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
            >
              Contact Us
            </button>
          </div>

          {/* Stats Row */}
          <div
            className="hero-stats"
            style={{
              display: 'flex',
              gap: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1.5rem',
            }}
          >
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#FFFFFF', lineHeight: 1 }}>
                {count100}+
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Businesses Supported</div>
            </div>
            <div className="hero-stat-item-bordered" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2.5rem' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#FFFFFF', lineHeight: 1 }}>
                {count5}+
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Years of Experience</div>
            </div>
            <div className="hero-stat-item-bordered" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2.5rem' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#C9A84C', lineHeight: 1 }}>Qatar</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Local Market Expertise</div>
            </div>
          </div>
        </div>

        {/* RIGHT PANE — Doha Skyline Visual */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 560,
          }}
          className="hero-right"
        >
          {/* Skyline SVG fills the right pane */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <DohaSkylineHero />
          </div>

          {/* Left fade overlay blending into dark left pane */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #0D0D0D 0%, rgba(13,13,13,0.5) 18%, transparent 40%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />

          {/* Luxury Office Interior glow in top-right of the visual (mirrors reference) */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              right: '6%',
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(197,160,89,0.25) 0%, transparent 70%)',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          />


          {/* Bottom-right watermark text */}
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '5%',
              textAlign: 'right',
              zIndex: 4,
            }}
          >
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', letterSpacing: 2, lineHeight: 1.8, textTransform: 'uppercase' }}>
              Business Opportunities<br />Beyond Borders
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Tablet & Mobile Media Queries */
        @media (max-width: 1024px) {
          .hero-container { padding: 0 1.5rem !important; }
          .hero-left { padding: 5.5rem 1.5rem 2.5rem 0 !important; }
          .hero-stats { gap: 1.5rem !important; }
          .hero-stat-item-bordered { padding-left: 1.5rem !important; }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-container { padding: 0 1.25rem !important; }
          .hero-left { padding: 5.5rem 0 2rem !important; }
          .hero-subtext { max-width: 100% !important; }
          .hero-right { min-height: 340px !important; }
          .hero-stats {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
          }
          .hero-stat-item-bordered {
            border-left: 1px solid rgba(255,255,255,0.1) !important;
            padding-left: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .hero-container { padding: 0 1rem !important; }
          .hero-left { padding: 5rem 0 1.5rem !important; }
          .hero-headline { font-size: 2.3rem !important; }
          .hero-ctas { flex-direction: column !important; width: 100% !important; }
          .hero-ctas button { width: 100% !important; justify-content: center !important; }
          .hero-stats {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 1.2rem !important;
          }
          .hero-stat-item-bordered {
            border-left: none !important;
            padding-left: 0 !important;
          }
          .hero-right { min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
