import React, { useState, useEffect, useRef } from 'react';
import { WORKFLOW_STEPS } from '../data/probizData';
import {
  CheckCircle,
  ArrowRight,
  Landmark
} from 'lucide-react';

const QATAR_JOURNEY = [
  {
    step: "01",
    phase: "Name & Activity Approval",
    ministry: "Ministry of Commerce & Industry (MOCI)",
    desc: "Reservation of unique trade name (Arabic/English) and selection of authorized commercial activities.",
    duration: "1 - 2 Days"
  },
  {
    step: "02",
    phase: "Articles of Association (AoA)",
    ministry: "Ministry of Justice (MOJ)",
    desc: "Drafting corporate bylaws, shareholder distribution, 100% foreign ownership or local sponsorship clauses, and notarization.",
    duration: "2 - 3 Days"
  },
  {
    step: "03",
    phase: "Commercial Registration (CR)",
    ministry: "MOCI & Qatar Chamber",
    desc: "Official issuance of company CR certificate establishing legal entity status in the State of Qatar.",
    duration: "2 - 4 Days"
  },
  {
    step: "04",
    phase: "Office Lease & Trade Licence",
    ministry: "Ministry of Municipality",
    desc: "Securing registered commercial office lease, Civil Defence clearance, and municipality signage approval.",
    duration: "4 - 7 Days"
  },
  {
    step: "05",
    phase: "Establishment Card (Computer Card)",
    ministry: "Ministry of Interior (MOI)",
    desc: "Registration of official company seal, authorized signatories, and immigration file for visa processing.",
    duration: "2 - 3 Days"
  },
  {
    step: "06",
    phase: "Corporate Bank Account & Tax Card",
    ministry: "Qatar Central Bank & GTA",
    desc: "Opening operational corporate account with QNB, CBQ, QIIB or Dukhan Bank, and General Tax Authority filing.",
    duration: "5 - 10 Days"
  }
];

export default function SetupRoadmap({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);
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
        // Reset when user scrolls back up so scrolling down moves them up from down again
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition(); // Check on initial page load / mount

    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <section id="our-process" className="py-24 relative bg-[#070A10] overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#DFBA73]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFBA73]/15 text-[#DFBA73] text-xs font-bold border border-[#DFBA73]/30">
            <span>Interactive Qatar Formation Workflow</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            How to Set Up a Business <span className="gold-text-gradient">in Qatar</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            From initial business concept to your first operational trade licence — ProBiz coordinates every milestone seamlessly.
          </p>
        </div>

        {/* Interactive Steps Grid: Moving from Down to Fix in Original Positions */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14"
        >
          {QATAR_JOURNEY.map((item, index) => {
            const isCurrent = activeStep === index;
            const riseDelay = `${index * 0.12 + 0.05}s`;
            const beamDelay = `${index * 0.7}s`;

            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                style={{
                  animationDelay: riseDelay,
                  WebkitAnimationDelay: riseDelay,
                }}
                className={`roadmap-rise-card group p-6 sm:p-7 rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-300 ${
                  isVisible ? 'is-in-view' : ''
                } ${
                  isCurrent
                    ? 'is-active bg-[#111A2D] border-2 border-[#DFBA73] shadow-2xl shadow-[#C5A059]/25 scale-[1.02]'
                    : 'bg-[#0B101C] border border-[#C5A059]/20 hover:border-[#DFBA73]/70 hover:bg-[#0E1526]'
                }`}
              >
                {/* ── Continuous Luminous Light Beam Sweep ── */}
                <div
                  className="glili-shimmer-beam"
                  style={{ animationDelay: beamDelay }}
                />

                {/* Top Row: Phase Badge + Duration (Top stars removed as requested) */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-lg transition-all duration-300 ${
                      isCurrent
                        ? 'bg-gradient-to-r from-[#DFBA73] to-[#C5A059] text-black shadow-md shadow-[#C5A059]/30'
                        : 'bg-[#DFBA73]/15 text-[#DFBA73] border border-[#DFBA73]/25 group-hover:bg-[#DFBA73]/25'
                    }`}>
                      PHASE {item.step}
                    </span>
                    {isCurrent && (
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DFBA73] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A84C]" />
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                    {item.duration}
                  </span>
                </div>

                {/* Phase Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#DFBA73] transition-colors mb-1.5 font-display relative z-10">
                  {item.phase}
                </h3>

                {/* Ministry Label */}
                <div className="text-xs text-[#C5A059] font-semibold mb-3 flex items-center gap-1.5 relative z-10">
                  <Landmark className="w-3.5 h-3.5 text-[#DFBA73]" />
                  <span>{item.ministry}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed relative z-10">
                  {item.desc}
                </p>

                {/* Bottom Verification Status */}
                <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-xs text-[#DFBA73] relative z-10">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle className="w-4 h-4 text-[#DFBA73]" />
                    <span>ProBiz Full Liaison Support</span>
                  </div>
                  <span className="text-[11px] text-slate-400 group-hover:text-white transition-colors">
                    Click to review
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Working Process 4-Step Summary */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#101726] via-[#141E30] to-[#101726] border border-[#C5A059]/35 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#DFBA73] mb-1">
              <span>Our Client Engagement Model</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              From First Call to Scaled Operations
            </h4>
          </div>

          {/* Infinite Marquee Track: Moving Right to Left */}
          <div className="workflow-marquee-container relative z-10 overflow-hidden py-2">
            <div className="workflow-marquee-track flex gap-6">
              {[...WORKFLOW_STEPS, ...WORKFLOW_STEPS, ...WORKFLOW_STEPS].map((ws, i) => (
                <div
                  key={i}
                  className="workflow-marquee-card p-5 sm:p-6 rounded-2xl bg-[#090E18]/90 border border-[#C5A059]/20 hover:border-[#DFBA73]/60 hover:bg-[#0D1422] transition-all flex flex-col items-start relative group flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DFBA73] to-[#8E6D27] text-black font-extrabold flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform font-display">
                    {ws.step}
                  </div>
                  <div className="text-sm font-bold text-white mb-1.5 group-hover:text-[#DFBA73] transition-colors font-display">
                    {ws.title}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Have existing Commercial Registration (CR) needing renewal, activity additions or foreign ownership transfer?
            </div>
            <button
              onClick={onOpenQuote}
              className="btn-gold text-xs px-6 py-3 whitespace-nowrap shadow-lg shadow-[#C5A059]/20"
            >
              <span>Schedule Company Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* ── CSS KEYFRAMES: CARDS MOVING FROM DOWN TO FIX IN ORIGINAL POSITION ── */}
      <style>{`
        /* Initial state: elevated down below with blur & opacity 0 */
        .roadmap-rise-card {
          opacity: 0;
          transform: translateY(160px) scale(0.92);
          will-change: transform, opacity, filter;
        }

        /* When scrolling into view: cards move up from down and fix firmly in original position */
        .roadmap-rise-card.is-in-view {
          animation: cardRiseFromDownAndFix 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cardRiseFromDownAndFix {
          0% {
            opacity: 0;
            transform: translateY(160px) scale(0.92);
            filter: blur(8px);
          }
          65% {
            opacity: 1;
            transform: translateY(-8px) scale(1.01);
            filter: blur(0px);
          }
          85% {
            transform: translateY(2px) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
            filter: blur(0px);
          }
        }

        .roadmap-rise-card.is-in-view.is-active {
          transform: translateY(-4px) scale(1.02);
        }

        /* Once fixed in place, smooth interactive hover */
        .roadmap-rise-card.is-in-view:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 20px 45px -10px rgba(223, 186, 115, 0.3), 0 0 25px rgba(223, 186, 115, 0.15);
        }

        /* Continuous Diagonal Luminous Shimmer Light Beam */
        @keyframes gliliShimmerSweep {
          0% {
            transform: translateX(-160%) rotate(25deg);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          45% {
            transform: translateX(180%) rotate(25deg);
            opacity: 0.9;
          }
          55%, 100% {
            transform: translateX(180%) rotate(25deg);
            opacity: 0;
          }
        }

        .glili-shimmer-beam {
          position: absolute;
          top: -60%;
          left: -40%;
          width: 70%;
          height: 220%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(223, 186, 115, 0.04) 25%,
            rgba(255, 240, 195, 0.45) 50%,
            rgba(223, 186, 115, 0.08) 75%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 5;
          animation: gliliShimmerSweep 4.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* ── WORKFLOW MARQUEE: RIGHT TO LEFT ── */
        .workflow-marquee-container {
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }

        .workflow-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScrollRightToLeft 24s linear infinite;
        }

        .workflow-marquee-container:hover .workflow-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .roadmap-rise-card {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .glili-shimmer-beam {
            animation: none !important;
            display: none;
          }
          .workflow-marquee-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
