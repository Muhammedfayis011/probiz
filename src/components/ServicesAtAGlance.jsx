import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../data/probizData';
import {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

export default function ServicesAtAGlance({ onSelectService }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Trigger when the top of the cards grid enters ~82% of the viewport (scrolls to front)
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
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFBA73]/15 text-[#DFBA73] text-xs font-bold border border-[#DFBA73]/30">
            
            <span>Comprehensive Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Our Services <span className="gold-text-gradient">at a Glance</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Six interconnected corporate verticals engineered to support your enterprise at every step of its journey in the State of Qatar.
          </p>
        </div>

        {/* 6 Numbered Cards with 3D Perspective & Cascade Drop-Down on Scroll */}
        <div
          ref={containerRef}
          className="glance-cards-perspective-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || Briefcase;
            // Staggered cascade delay for each card
            const dropDelay = `${idx * 0.12 + 0.05}s`;

            return (
              <div
                key={srv.id}
                onClick={() => onSelectService(srv)}
                style={{
                  animationDelay: dropDelay,
                  WebkitAnimationDelay: dropDelay,
                }}
                className={`glass-card glance-drop-card ${
                  isVisible ? 'is-in-view' : ''
                } p-6 sm:p-8 flex flex-col justify-between group cursor-pointer border-t-2 border-t-[#C5A059]/40 hover:border-t-[#DFBA73] relative overflow-hidden transition-all duration-300`}
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFBA73]/5 rounded-bl-full group-hover:bg-[#DFBA73]/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top row: Number Badge + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-display text-[#DFBA73] tracking-wider px-3 py-1 rounded-lg bg-[#DFBA73]/10 border border-[#DFBA73]/30">
                      {srv.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-[#121A2C] border border-[#C5A059]/25 flex items-center justify-center text-[#DFBA73] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DFBA73] transition-colors leading-snug mb-2 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#C5A059] mb-3">
                    {srv.tagline}
                  </p>

                  {/* Brochure Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#DFBA73] group-hover:text-white transition-colors">
                  <span className="tracking-wide uppercase">Explore Full Details</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#121A2B] via-[#0E1524] to-[#121A2B] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Need a customized combination of services?</div>
            <div className="text-xs text-slate-400 mt-0.5">We craft tailored corporate packages combining formation, PRO retainers, translation, and branding.</div>
          </div>
          <a
            href="#contact"
            className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
          >
            <span>Get Tailored Corporate Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── CSS KEYFRAMES: CARDS COMING DOWN TO THE WEBSITE ON SCROLL & FIXING IN POSITION ── */}
      <style>{`
        /* 3D Perspective container */
        .glance-cards-perspective-container {
          perspective: 1200px;
        }

        /* Initial state: elevated high up above and in front with tilt & blur */
        .glance-drop-card {
          opacity: 0;
          transform: translateY(-160px) scale(1.08) rotateX(12deg);
          will-change: transform, opacity, filter;
        }

        /* When scrolling into front view: cards swoop down into the page and fix firmly */
        .glance-drop-card.is-in-view {
          animation: cardFlyDownAndFix 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardFlyDownAndFix {
          0% {
            opacity: 0;
            transform: translateY(-160px) scale(1.1) rotateX(14deg);
            filter: blur(8px);
          }
          65% {
            opacity: 1;
            transform: translateY(8px) scale(1.01) rotateX(-1deg);
            filter: blur(0px);
          }
          85% {
            transform: translateY(-2px) scale(1) rotateX(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1) rotateX(0deg);
            filter: blur(0px);
          }
        }

        /* Once fixed in place, regular interactive hover works smoothly */
        .glance-drop-card.is-in-view:hover {
          transform: translateY(-8px) scale(1.015) !important;
          box-shadow: 0 20px 45px -10px rgba(223, 186, 115, 0.32);
          border-top-color: #DFBA73 !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .glance-drop-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
