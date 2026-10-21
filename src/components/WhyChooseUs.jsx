import React, { useEffect, useRef, useState } from 'react';
import { WHY_CHOOSE_US } from '../data/probizData';
import {
  ShieldCheck,
  BadgePercent,
  Clock,
  UserCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  BadgePercent,
  Clock,
  UserCheck,
  TrendingUp
};

export default function WhyChooseUs({ onOpenQuote }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Trigger when the top of the cards grid enters ~82% of the viewport (scrolls into front)
      if (rect.top <= windowHeight * 0.82 && rect.bottom >= 120) {
        setIsVisible(true);
      } else if (rect.top > windowHeight) {
        // Reset when user scrolls back up so scrolling down brings them down again
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition(); // Check on initial page load / mount

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <section id="why-qatar" className="py-24 relative bg-[#090D15] border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        
        {/* Section Header from Brochure Page 12 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFBA73]/15 text-[#DFBA73] text-xs font-bold border border-[#DFBA73]/30">
            <span>Why Choose ProBiz?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Why ProBiz? <span className="gold-text-gradient">Let's Grow Together.</span>
          </h2>
          <p className="text-xl font-medium text-[#DFBA73] mt-2">
            One partner. Multiple solutions. Greater convenience.
          </p>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Whether you are establishing a new business, managing a growing organisation or strengthening your digital presence, ProBiz is ready to support your next step.
          </p>
        </div>

        {/* 5 Value Cards + Slogan Card with Scroll Drop-Down & Hover Zoom-In */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            const dropDelay = `${idx * 0.11 + 0.05}s`;

            return (
              <div
                key={idx}
                style={{
                  animationDelay: dropDelay,
                  WebkitAnimationDelay: dropDelay,
                }}
                className={`why-choose-card glass-card p-6 sm:p-7 flex flex-col justify-between border-t-2 border-t-[#C5A059]/40 hover:border-t-[#DFBA73] group relative ${
                  isVisible ? 'is-in-view' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#121A2C] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded-full border border-[#DFBA73]/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#DFBA73] transition-colors font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Slogan Banner Card */}
          <div
            style={{
              animationDelay: '0.62s',
              WebkitAnimationDelay: '0.62s',
            }}
            className={`why-choose-card p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1B273E] via-[#111929] to-[#0A0F1A] border-2 border-[#DFBA73]/40 flex flex-col justify-between text-left relative overflow-hidden group ${
              isVisible ? 'is-in-view' : ''
            }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFBA73]/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-2">
                Our Commitment
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                SIMPLIFY YOUR BUSINESS. FOCUS ON GROWTH.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Direct phone and WhatsApp line with senior consultants. Fast turnaround on QID, Commercial Registration, and certified translations.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-gold text-xs py-2.5 px-4 w-full justify-center shadow-lg shadow-[#C5A059]/20"
            >
              <span>Get Started with ProBiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* ── CSS KEYFRAMES: CARDS MOVING DOWN ON SCROLL & MOUSE HOVER ZOOM IN ── */}
      <style>{`
        /* Initial state: elevated above with blur & opacity 0 */
        .why-choose-card {
          opacity: 0;
          transform: translateY(-160px) scale(0.95);
          will-change: transform, opacity, filter;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }

        /* When scrolling brings section into front view: cards drop down and lock firmly */
        .why-choose-card.is-in-view {
          animation: whyChooseDropDownAndFix 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes whyChooseDropDownAndFix {
          0% {
            opacity: 0;
            transform: translateY(-160px) scale(0.95);
            filter: blur(8px);
          }
          65% {
            opacity: 1;
            transform: translateY(8px) scale(1.01);
            filter: blur(0px);
          }
          85% {
            transform: translateY(-2px) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        /* MOUSE HOVER: CARDS ZOOM IN WITH ELEVATED SHADOW & GLOW (DESKTOP ONLY) */
        @media (hover: hover) and (min-width: 769px) {
          .why-choose-card.is-in-view:hover {
            transform: scale(1.05) translateY(-6px) !important;
            box-shadow: 0 24px 50px -10px rgba(223, 186, 115, 0.35), 0 0 30px rgba(223, 186, 115, 0.18) !important;
            border-top-color: #DFBA73 !important;
            z-index: 30;
          }
        }

        /* Mobile Optimization: Smooth natural display without off-screen translate */
        @media (max-width: 640px) {
          .why-choose-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            filter: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .why-choose-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
