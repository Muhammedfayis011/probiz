import React, { useState, useEffect } from 'react';
import heroDohaImg from '../assets/hero-doha-skyline.jpg';

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

export default function HeroSection({ onGetStarted, onContact, onServices }) {
  const count100 = useCounter(100, 1800, 250);
  const count5 = useCounter(5, 1400, 250);

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: 620,
        overflow: 'hidden',
        backgroundColor: '#07090E',
      }}
    >
      {/* Background Image: Doha Skyline & Luxury Office */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <img
          src={heroDohaImg}
          alt="Doha Skyline — ProBiz Consultancy Services Qatar"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center right',
            display: 'block',
          }}
        />
        {/* Left Side Content Overlay: Smooth blackish gradient for text readability */}
        <div
          className="hero-left-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(7,9,14,0.94) 0%, rgba(7,9,14,0.88) 32%, rgba(7,9,14,0.62) 50%, rgba(7,9,14,0.2) 70%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Subtle bottom fade to blend smoothly into the next section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '18%',
            background: 'linear-gradient(to top, #0D0D0D 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

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
          position: 'relative',
          zIndex: 1,
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
              fontFamily: "'Lora', serif",
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
              onClick={onServices || onGetStarted}
              style={{
                background: 'linear-gradient(135deg, #DFBA73 0%, #C9A84C 60%, #9E7B2A 100%)',
                color: '#0D0D0D',
                fontWeight: 700,
                fontFamily: "'Merriweather', 'Lora', serif",
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
                fontFamily: "'Merriweather', 'Lora', serif",
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
              <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 800, fontSize: '1.6rem', color: '#FFFFFF', lineHeight: 1 }}>
                {count100}+
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Businesses Supported</div>
            </div>
            <div className="hero-stat-item-bordered" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2.5rem' }}>
              <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 800, fontSize: '1.6rem', color: '#FFFFFF', lineHeight: 1 }}>
                {count5}+
              </div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Years of Experience</div>
            </div>
            <div className="hero-stat-item-bordered" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2.5rem' }}>
              <div style={{ fontFamily: "'Merriweather', serif", fontWeight: 800, fontSize: '1.4rem', color: '#C9A84C', lineHeight: 1 }}>Qatar</div>
              <div style={{ fontFamily: "'Lora', serif", fontSize: '0.75rem', color: '#888', marginTop: 4 }}>Local Market Expertise</div>
            </div>
          </div>
        </div>

        {/* RIGHT PANE — Transparent view into background office & skyline */}
        <div
          style={{
            position: 'relative',
            minHeight: 560,
          }}
          className="hero-right"
        >
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
            <div style={{ fontFamily: "'Lora', serif", fontSize: '0.62rem', color: 'rgba(255,255,255,0.75)', letterSpacing: 2, lineHeight: 1.8, textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}>
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
          .hero-left-overlay { background: rgba(7,9,14,0.85) !important; }
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-container { padding: 0 1.25rem !important; }
          .hero-left { padding: 5.5rem 0 2rem !important; }
          .hero-subtext { max-width: 100% !important; }
          .hero-right { display: none !important; }
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
          .hero-headline { font-size: 2.1rem !important; }
          .hero-ctas { flex-direction: column !important; width: 100% !important; gap: 0.75rem !important; }
          .hero-ctas button { width: 100% !important; justify-content: center !important; }
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 1.2rem !important;
          }
          .hero-stat-item-bordered {
            border-left: none !important;
            padding-left: 0 !important;
          }
        }

        @media (max-width: 360px) {
          .hero-headline { font-size: 1.85rem !important; }
          .hero-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
