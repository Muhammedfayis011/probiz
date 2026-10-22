import React, { useEffect, useState } from 'react';

/**
 * LoadingScreen Component
 * Website opening loading screen with centered ProBiz logo and small rounding loading icon.
 */
export default function LoadingScreen({ minDisplayTime = 1400, onFinished }) {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Ensure the loading screen is displayed for at least minDisplayTime for a smooth, premium experience
    const timer = setTimeout(() => {
      setFading(true);
      // Wait for fade transition to finish before removing from DOM
      const removeTimer = setTimeout(() => {
        setRemoved(true);
        if (onFinished) onFinished();
        
        // Also clean up any static preloader element in index.html if still present
        const staticEl = document.getElementById('probiz-preloader');
        if (staticEl) {
          staticEl.remove();
        }
      }, 650);

      return () => clearTimeout(removeTimer);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onFinished]);

  if (removed) return null;

  return (
    <div
      id="probiz-loading-screen"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        backgroundColor: '#070A10',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transform: fading ? 'scale(1.02)' : 'scale(1)',
        filter: fading ? 'blur(4px)' : 'none',
        pointerEvents: fading ? 'none' : 'auto',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        overflow: 'hidden',
      }}
      aria-label="Loading ProBiz Website"
      role="status"
    >
      {/* Ambient Qatar Gold Radial Glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.12) 0%, rgba(201, 168, 76, 0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'probizPulseGlow 3s ease-in-out infinite alternate',
        }}
      />

      {/* Main Centered Content */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* Centered ProBiz Logo with Soft Floating Animation */}
        <div
          style={{
            position: 'relative',
            marginBottom: '1.5rem',
            animation: 'probizLogoEnter 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <img
            src="/probiz-logo.png"
            alt="ProBiz Consultancy Services"
            style={{
              width: '195px',
              maxWidth: '70vw',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 4px 18px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 20px rgba(201, 168, 76, 0.16))',
            }}
          />
        </div>

        {/* Small Rounding Loading Icon & Progress Ring */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.85rem',
            animation: 'probizFadeIn 0.8s 0.25s ease-out backwards',
          }}
        >
          {/* Small Rounding Spinner */}
          <div
            className="probiz-spinner-ring"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '2.5px solid rgba(201, 168, 76, 0.18)',
              borderTopColor: '#F5D061',
              borderRightColor: '#C9A84C',
              animation: 'probizSpinnerRound 0.85s linear infinite',
              boxShadow: '0 0 12px rgba(201, 168, 76, 0.25)',
            }}
          />

          {/* Micro text for luxurious Qatar business tone */}
          <span
            style={{
              fontFamily: "'Lora', serif",
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(201, 168, 76, 0.8)',
              marginTop: '4px',
            }}
          >
            Loading Experience
          </span>
        </div>
      </div>

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes probizSpinnerRound {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes probizLogoEnter {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes probizFadeIn {
          0% {
            opacity: 0;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes probizPulseGlow {
          0% {
            opacity: 0.6;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
