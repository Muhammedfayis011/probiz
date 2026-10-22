import React, { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../data/probizData';
import {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

const serviceImageMap = {
  'business-setup': '/business-setup-bg.jpg',
  'pro-services': '/pro-services-bg.jpg',
  'translation-services': '/translation-document-bg.jpg',
  'recruitment-hr': '/recruitment-hr-bg.jpg',
  'healthcare-services': '/moph-licensing-bg.jpg',
  'branding-digital': '/branding-digital-bg.jpg',
};

export default function ServicesAtAGlance({ onSelectService }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const checkScrollPosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight * 0.85 && rect.bottom >= 100) {
        setIsVisible(true);
      } else if (rect.top > windowHeight) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleCardClick = (srv) => {
    if (onSelectService) {
      onSelectService(srv);
    }
  };

  const toggleCardFlip = (e, id) => {
    e.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#07090E]">
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
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed font-sans">
            Six interconnected corporate verticals engineered to support your enterprise at every step of its journey in the State of Qatar.
          </p>
        </div>

        {/* 6 3D Flip Cards Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8"
        >
          {SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || Briefcase;
            const cardImg = serviceImageMap[srv.id] || '/business-setup-bg.jpg';
            const isFlipped = !!flippedCards[srv.id];
            const dropDelay = `${idx * 0.1 + 0.05}s`;

            return (
              <div
                key={srv.id}
                className={`flip-card ${isFlipped ? 'is-flipped' : ''} ${
                  isVisible ? 'card-entered' : 'card-hidden'
                }`}
                style={{
                  animationDelay: dropDelay,
                  WebkitAnimationDelay: dropDelay,
                }}
                onClick={() => handleCardClick(srv)}
                title={`Click to view ${srv.title} page`}
              >
                <div className="flip-card-inner">
                  {/* ── CARD FRONT ── */}
                  <div className="flip-card-front group">
                    {/* Background Service Image */}
                    <img
                      src={cardImg}
                      alt={srv.title}
                      className="flip-card-image"
                      loading="lazy"
                    />

                    {/* Atmospheric Dark Gradient Overlay */}
                    <div className="flip-card-overlay" />

                    {/* Top Content Row: Number Badge & Icon */}
                    <div className="relative z-10 p-6 flex items-center justify-between">
                      <span className="text-2xl font-black font-display text-[#DFBA73] tracking-wider px-3.5 py-1.5 rounded-xl bg-[#080B12]/80 backdrop-blur-md border border-[#DFBA73]/35 shadow-lg">
                        {srv.number}
                      </span>

                      <div className="w-12 h-12 rounded-xl bg-[#080B12]/80 backdrop-blur-md border border-[#C5A059]/35 flex items-center justify-center text-[#DFBA73] shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 p-6 mt-auto">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug mb-2 group-hover:text-[#DFBA73] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#C5A059] font-medium font-sans mb-4 line-clamp-1">
                        {srv.tagline}
                      </p>

                      {/* Action Bar on Front */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300">
                        <span className="flex items-center gap-1.5 text-[#DFBA73] font-display">
                          <span>Explore Full Service</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ── CARD BACK ── */}
                  <div className="flip-card-back">
                    {/* Subtle Top Ambient Gold Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#DFBA73]/10 rounded-bl-full pointer-events-none" />

                    <div className="p-6 sm:p-7 flex flex-col justify-between h-full relative z-10">
                      <div>
                        {/* Top Meta Bar */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                          <span className="text-xs font-bold text-[#DFBA73] tracking-wider uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#DFBA73] inline-block animate-pulse" />
                            Vertical #{srv.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-tight mb-2">
                          {srv.title}
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs font-semibold text-[#DFBA73] mb-3 font-sans">
                          {srv.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                          {srv.shortDesc}
                        </p>

                        {/* Top Key Features */}
                        <div className="space-y-2 mb-4">
                          {srv.features && srv.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{feat.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(srv);
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#DFBA73] via-[#C5A059] to-[#8E6D27] text-black font-bold text-xs font-display flex items-center justify-center gap-2 shadow-lg hover:shadow-[#DFBA73]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        <span>Explore Full Service Page</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#121A2B] via-[#0E1524] to-[#121A2B] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white font-display">Need a customized combination of services?</div>
            <div className="text-xs text-slate-400 mt-0.5 font-sans">We craft tailored corporate packages combining formation, PRO retainers, translation, and branding.</div>
          </div>
          <a
            href="#contact"
            className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap font-display"
          >
            <span>Get Tailored Corporate Package</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── CSS STYLES FOR FLIP CARDS ── */}
      <style>{`
        /* Flip Card Base */
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 440px;
          perspective: 1200px;
          cursor: pointer;
        }

        /* Scroll Entrance Animation */
        .card-hidden {
          opacity: 0;
          transform: translateY(40px) scale(0.96);
        }
        .card-entered {
          animation: cardEntryFade 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardEntryFade {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Inner container that flips */
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transition: transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 1.25rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        /* Flip trigger on hover, focus, or tapped state */
        .flip-card:hover .flip-card-inner,
        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        /* Front & Back positioning */
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Front card styling */
        .flip-card-front {
          background-color: #0D121D;
          border: 1px solid rgba(197, 160, 89, 0.3);
          transition: border-color 0.3s ease;
        }
        .flip-card:hover .flip-card-front {
          border-color: rgba(223, 186, 115, 0.6);
        }

        .flip-card-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .flip-card:hover .flip-card-image {
          transform: scale(1.06);
        }

        .flip-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 9, 14, 0.96) 0%,
            rgba(7, 9, 14, 0.65) 50%,
            rgba(7, 9, 14, 0.35) 100%
          );
        }

        /* Back card styling */
        .flip-card-back {
          background: linear-gradient(145deg, #0E1626 0%, #070A12 100%);
          border: 1.5px solid rgba(197, 160, 89, 0.45);
          transform: rotateY(180deg);
          box-shadow: inset 0 0 35px rgba(197, 160, 89, 0.08), 0 20px 45px rgba(0, 0, 0, 0.6);
        }

        /* Multi-Screen Media Queries for Flip Cards */
        @media (min-width: 1440px) {
          .flip-card {
            height: 460px;
          }
        }

        @media (min-width: 1024px) and (max-width: 1439px) {
          .flip-card {
            height: 440px;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .flip-card {
            height: 430px;
          }
        }

        @media (min-width: 480px) and (max-width: 767px) {
          .flip-card {
            height: 410px;
          }
        }

        @media (max-width: 479px) {
          .flip-card {
            height: 395px;
          }
        }

        @media (max-width: 360px) {
          .flip-card {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
