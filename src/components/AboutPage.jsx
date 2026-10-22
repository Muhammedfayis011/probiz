import React, { useState } from 'react';
import PageHero from './PageHero';
import AboutSection from './AboutSection';
import { COMPANY_INFO, STATS } from '../data/probizData';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Award,
  Layers,
  UserCheck
} from 'lucide-react';
import aboutBgImg from '../assets/about-skyline.jpg';

const STAT_DETAILS = [
  {
    icon: Award,
    heading: 'Seasoned Expertise',
    desc: 'Over a decade of hands-on advisory navigating Qatar’s dynamic commercial laws, ownership models, and registrations.',
    bullets: ['Deep Ministry Knowledge', 'Zero Trial-and-Error Delays'],
  },
  {
    icon: Layers,
    heading: 'All Under One Roof',
    desc: 'Integrated services spanning setup, PRO retainers, translation, recruitment, healthcare licensing, and digital.',
    bullets: ['Single Window Delivery', 'Holistic Corporate Strategy'],
  },
  {
    icon: ShieldCheck,
    heading: 'Flawless Approvals',
    desc: 'Meticulous document vetting ensuring 100% adherence to MOCI, Labour, and Qatar Municipality standards.',
    bullets: ['Full Legal Security', 'Guaranteed Compliance Audits'],
  },
  {
    icon: UserCheck,
    heading: 'Unified Accountability',
    desc: 'A single dedicated senior consultant coordinates all your corporate needs, eliminating multiple middlemen.',
    bullets: ['Dedicated Account Lead', 'Direct Executive Access'],
  },
];

export default function AboutPage({ onBackToHome, onOpenQuote }) {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleCardFlip = (idx) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="About Us"
        badge="Corporate Profile"
        title="Your Business. Our Expertise."
        highlight="One Trusted Partner in Qatar."
        subtitle="ProBiz Consultancy Services is an integrated corporate solutions firm in Doha, bringing together multi-disciplinary specialists to handle licensing, setup, healthcare regulation, and corporate support."
        backgroundImage={aboutBgImg}
        onBackToHome={onBackToHome}
      />

      {/* Main Narrative & 3 Pillars from brochure */}
      <AboutSection onOpenQuote={onOpenQuote} />

      {/* Stats Counter Section with 3D Flip Cards */}
      <section className="py-20 bg-[#080B12] border-t border-b border-white/5 relative overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="probiz-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-gold mb-2.5 inline-flex">Proven Track Record</div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Built on Trust, Precision & Local Regulatory Mastery
            </h3>
            <p className="text-slate-400 text-sm mt-2.5 font-sans">
              Discover the metrics and institutional pillars powering our corporate performance in Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {STATS.map((stat, idx) => {
              const detail = STAT_DETAILS[idx] || STAT_DETAILS[0];
              const Icon = detail.icon;
              const isFlipped = !!flippedCards[idx];

              return (
                <div
                  key={idx}
                  className={`flip-card stat-flip-card ${isFlipped ? 'is-flipped' : ''}`}
                  onClick={() => toggleCardFlip(idx)}
                >
                  <div className="flip-card-inner stat-flip-card-inner">
                    {/* ── CARD FRONT ── */}
                    <div className="flip-card-front stat-flip-card-front group">
                      {/* Top Row: Icon & Mini Badge */}
                      <div className="flex items-center justify-between w-full mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#080B12] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] shadow-md group-hover:scale-110 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold text-[#DFBA73] tracking-widest uppercase px-2 py-0.5 rounded bg-[#DFBA73]/10 border border-[#DFBA73]/25">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Stat Big Value */}
                      <div className="text-3xl sm:text-4xl font-extrabold gold-text-gradient font-display mb-1.5 leading-none">
                        {stat.value}
                      </div>

                      {/* Label */}
                      <div className="text-sm font-bold text-white mb-1 font-display">
                        {stat.label}
                      </div>

                      {/* Sub-label */}
                      <div className="text-xs text-slate-400 font-sans leading-tight">
                        {stat.sub}
                      </div>
                    </div>

                    {/* ── CARD BACK ── */}
                    <div className="flip-card-back stat-flip-card-back">
                      {/* Back Heading */}
                      <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1.5">
                        {detail.heading}
                      </h4>

                      {/* Back Description */}
                      <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                        {detail.desc}
                      </p>

                      {/* Bullets */}
                      <div className="space-y-1.5 mt-auto">
                        {detail.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-[#DFBA73] font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0" />
                            <span className="text-slate-200">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Registration & Qatar Entity Verification Card */}
      <section className="py-16 probiz-container">
        <div className="glass-card p-5 sm:p-8 md:p-12 border border-[#C5A059]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA73]">
                <ShieldCheck className="w-4 h-4 text-[#DFBA73]" />
                <span>Officially Registered Qatar Corporate Entity</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Doha Headquarters & Ministry Liaison Office
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl font-sans">
                Operating directly from our executive offices at Hleyton Tower in Al Miqrab, Doha. Our consultants maintain daily liaison with the Ministry of Commerce & Industry (MOCI), Ministry of Public Health (MOPH), Ministry of Justice (MOJ), and Ministry of Interior (MOI).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Licensed under State of Qatar Commercial Regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Confidential Client Data Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct Ministry PRO Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Senior Corporate Consultant Assigned</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn-gold py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 text-center font-display"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 text-center font-display"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSS STYLES FOR STATS FLIP CARDS ── */}
      <style>{`
        .stat-flip-card {
          background-color: transparent;
          width: 100%;
          height: 250px;
          perspective: 1000px;
          cursor: pointer;
        }

        .stat-flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.75s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 1rem;
        }

        .stat-flip-card:hover .stat-flip-card-inner,
        .stat-flip-card.is-flipped .stat-flip-card-inner {
          transform: rotateY(180deg);
        }

        .stat-flip-card-front,
        .stat-flip-card-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 1.25rem 1.4rem;
        }

        .stat-flip-card-front {
          background: #0F1524;
          border: 1px solid rgba(197, 160, 89, 0.24);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
          justify-content: space-between;
          align-items: center;
          text-align: center;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-flip-card:hover .stat-flip-card-front {
          border-color: rgba(223, 186, 115, 0.5);
          box-shadow: 0 12px 30px rgba(197, 160, 89, 0.15);
        }

        .stat-flip-card-back {
          background: linear-gradient(145deg, #121A2C 0%, #090E18 100%);
          border: 1.5px solid rgba(197, 160, 89, 0.45);
          transform: rotateY(180deg);
          box-shadow: inset 0 0 25px rgba(197, 160, 89, 0.08), 0 12px 30px rgba(0, 0, 0, 0.5);
          text-align: left;
          justify-content: space-between;
        }

        /* Responsive Stat Flip Cards */
        @media (min-width: 1024px) {
          .stat-flip-card {
            height: 250px;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .stat-flip-card {
            height: 240px;
          }
        }

        @media (max-width: 639px) {
          .stat-flip-card {
            height: 220px;
          }
          .stat-flip-card-front,
          .stat-flip-card-back {
            padding: 1rem 1.15rem;
          }
        }

        @media (max-width: 360px) {
          .stat-flip-card {
            height: 210px;
          }
          .stat-flip-card-front,
          .stat-flip-card-back {
            padding: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
}
