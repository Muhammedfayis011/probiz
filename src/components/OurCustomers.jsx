import React from 'react';
import {
  Building2,
  Briefcase,
  Globe2,
  ShieldCheck,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const CUSTOMERS = [
  {
    id: 1,
    name: 'abc',
    monogram: 'ABC',
    icon: Building2,
    accentGradient: 'from-amber-500/25 via-yellow-600/15 to-transparent',
    logoBg: 'from-[#DFBA73]/20 to-[#8E6D27]/30',
    logoColor: '#DFBA73',
  },
  {
    id: 2,
    name: 'abc',
    monogram: 'ABC',
    icon: Briefcase,
    accentGradient: 'from-emerald-500/25 via-teal-600/15 to-transparent',
    logoBg: 'from-emerald-400/20 to-teal-800/30',
    logoColor: '#34D399',
  },
  {
    id: 3,
    name: 'abc',
    monogram: 'ABC',
    icon: Globe2,
    accentGradient: 'from-cyan-500/25 via-blue-600/15 to-transparent',
    logoBg: 'from-cyan-400/20 to-blue-800/30',
    logoColor: '#38BDF8',
  },
  {
    id: 4,
    name: 'abc',
    monogram: 'ABC',
    icon: ShieldCheck,
    accentGradient: 'from-purple-500/25 via-indigo-600/15 to-transparent',
    logoBg: 'from-purple-400/20 to-indigo-800/30',
    logoColor: '#C084FC',
  },
  {
    id: 5,
    name: 'abc',
    monogram: 'ABC',
    icon: Layers,
    accentGradient: 'from-orange-500/25 via-amber-600/15 to-transparent',
    logoBg: 'from-orange-400/20 to-amber-800/30',
    logoColor: '#FB923C',
  },
  {
    id: 6,
    name: 'abc',
    monogram: 'ABC',
    icon: Sparkles,
    accentGradient: 'from-rose-500/25 via-pink-600/15 to-transparent',
    logoBg: 'from-rose-400/20 to-pink-800/30',
    logoColor: '#FB7185',
  },
];

export default function OurCustomers() {
  // Triple items for seamless, continuous marquee flow
  const marqueeItems = [...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS];

  return (
    <section className="customers-section relative bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DFBA73]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        {/* Section Header */}
        <div className="customers-header text-center max-w-xl mx-auto">
          <h2 className="customers-title font-bold font-display text-white tracking-tight">
            Our <span className="gold-text-gradient">Customers</span>
          </h2>
          <p className="customers-subtitle text-slate-400 leading-relaxed">
            Trusted by leading enterprises, healthcare institutions, and corporate ventures across Qatar.
          </p>
        </div>

        {/* ── CONTINUOUS INFINITE MARQUEE ── */}
        <div className="customers-marquee-wrapper relative overflow-hidden">
          <div className="customers-marquee-track flex">
            {marqueeItems.map((customer, index) => {
              const IconComponent = customer.icon;
              return (
                <div
                  key={`${customer.id}-${index}`}
                  className="customer-card group relative rounded-2xl bg-[#0B101C]/90 border border-[#C5A059]/25 hover:border-[#DFBA73]/60 transition-all duration-300 flex flex-col items-center text-center flex-shrink-0 shadow-lg overflow-hidden hover:-translate-y-1"
                >
                  {/* Subtle Gradient Backlight */}
                  <div
                    className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${customer.accentGradient} rounded-full blur-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Round Picture in Center */}
                  <div className="relative z-10 customer-card-logo-container">
                    <div
                      className={`customer-card-logo-wrap rounded-full p-0.5 bg-gradient-to-br ${customer.logoBg} border-2 border-[#DFBA73]/50 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="w-full h-full rounded-full bg-[#080D18] flex flex-col items-center justify-center">
                        <IconComponent
                          className="customer-card-icon mb-0.5 transition-transform group-hover:scale-110"
                          style={{ color: customer.logoColor }}
                        />
                        <span className="customer-card-monogram font-extrabold tracking-widest text-[#DFBA73] font-mono">
                          {customer.monogram}
                        </span>
                      </div>
                    </div>
                    {/* Mini Verified Checkmark on Logo */}
                    <div
                      className="customer-card-badge absolute rounded-full bg-[#DFBA73] text-black flex items-center justify-center shadow-sm"
                      title="Verified Qatar Client"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Company Name: abc */}
                  <h3 className="customer-card-title font-bold text-white font-display group-hover:text-[#DFBA73] transition-colors leading-snug line-clamp-1 z-10">
                    abc
                  </h3>

                  {/* Line 1: Business Setup & PRO Services */}
                  <div className="customer-card-line1 font-semibold text-[#DFBA73] line-clamp-1 z-10">
                    Business Setup & PRO Services
                  </div>

                  {/* Line 2: Doha, Qatar */}
                  <div className="customer-card-line2 text-slate-400 line-clamp-1 z-10">
                    Doha, Qatar
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MASTER RESPONSIVE MEDIA QUERIES SUITE FOR CUSTOMER CARDS ── */}
      <style>{`
        /* Base Defaults */
        .customers-section {
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
        }

        .customers-header {
          margin-bottom: 2.25rem;
        }

        .customers-title {
          font-size: 2rem;
          line-height: 1.2;
        }

        .customers-subtitle {
          font-size: 0.875rem;
          margin-top: 0.375rem;
        }

        .customers-marquee-wrapper {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }

        .customers-marquee-track {
          display: flex;
          width: max-content;
          gap: 1.25rem;
          animation: marqueeScrollCustomers 28s linear infinite;
        }

        .customers-marquee-track:hover {
          animation-play-state: paused;
        }

        .customer-card {
          width: 230px;
          padding: 1.15rem 1rem;
        }

        .customer-card-logo-container {
          margin-bottom: 0.75rem;
        }

        .customer-card-logo-wrap {
          width: 56px;
          height: 56px;
        }

        .customer-card-icon {
          width: 20px;
          height: 20px;
        }

        .customer-card-monogram {
          font-size: 8px;
        }

        .customer-card-badge {
          width: 16px;
          height: 16px;
          bottom: -2px;
          right: -2px;
        }

        .customer-card-badge svg {
          width: 11px;
          height: 11px;
        }

        .customer-card-title {
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .customer-card-line1 {
          font-size: 0.6875rem;
        }

        .customer-card-line2 {
          font-size: 0.625rem;
          margin-top: 0.125rem;
        }

        /* ── 1. ULTRA-WIDE & 4K DISPLAYS (>= 1536px) ── */
        @media (min-width: 1536px) {
          .customers-section {
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
          }
          .customers-title {
            font-size: 2.5rem;
          }
          .customers-subtitle {
            font-size: 0.95rem;
          }
          .customers-marquee-track {
            gap: 1.5rem;
            animation-duration: 32s;
          }
          .customer-card {
            width: 250px;
            padding: 1.35rem 1.15rem;
          }
          .customer-card-logo-wrap {
            width: 60px;
            height: 60px;
          }
          .customer-card-icon {
            width: 22px;
            height: 22px;
          }
          .customer-card-title {
            font-size: 0.95rem;
          }
          .customer-card-line1 {
            font-size: 0.75rem;
          }
          .customer-card-line2 {
            font-size: 0.7rem;
          }
        }

        /* ── 2. DESKTOP & LAPTOPS (1024px to 1535px) ── */
        @media (min-width: 1024px) and (max-width: 1535px) {
          .customers-section {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }
          .customers-title {
            font-size: 2.25rem;
          }
          .customers-marquee-track {
            gap: 1.25rem;
            animation-duration: 28s;
          }
          .customer-card {
            width: 230px;
            padding: 1.15rem 1rem;
          }
          .customer-card-logo-wrap {
            width: 56px;
            height: 56px;
          }
        }

        /* ── 3. TABLETS (768px to 1023px) ── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .customers-section {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .customers-header {
            margin-bottom: 2rem;
          }
          .customers-title {
            font-size: 1.85rem;
          }
          .customers-subtitle {
            font-size: 0.825rem;
          }
          .customers-marquee-track {
            gap: 1.1rem;
            animation-duration: 26s;
          }
          .customer-card {
            width: 215px;
            padding: 1rem 0.9rem;
          }
          .customer-card-logo-wrap {
            width: 52px;
            height: 52px;
          }
          .customer-card-icon {
            width: 19px;
            height: 19px;
          }
          .customer-card-title {
            font-size: 0.85rem;
          }
          .customer-card-line1 {
            font-size: 0.68rem;
          }
          .customer-card-line2 {
            font-size: 0.625rem;
          }
        }

        /* ── 4. LARGE PHONES & PHABLETS (480px to 767px) ── */
        @media (min-width: 480px) and (max-width: 767px) {
          .customers-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .customers-header {
            margin-bottom: 1.75rem;
          }
          .customers-title {
            font-size: 1.65rem;
          }
          .customers-subtitle {
            font-size: 0.8rem;
          }
          .customers-marquee-track {
            gap: 0.9rem;
            animation-duration: 25s;
          }
          .customer-card {
            width: 195px;
            padding: 0.95rem 0.8rem;
          }
          .customer-card-logo-container {
            margin-bottom: 0.65rem;
          }
          .customer-card-logo-wrap {
            width: 48px;
            height: 48px;
          }
          .customer-card-icon {
            width: 18px;
            height: 18px;
          }
          .customer-card-title {
            font-size: 0.825rem;
          }
          .customer-card-line1 {
            font-size: 0.65rem;
          }
          .customer-card-line2 {
            font-size: 0.6rem;
          }
        }

        /* ── 5. STANDARD SMARTPHONES (361px to 479px) ── */
        @media (min-width: 361px) and (max-width: 479px) {
          .customers-section {
            padding-top: 2.75rem;
            padding-bottom: 2.75rem;
          }
          .customers-header {
            margin-bottom: 1.5rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          .customers-title {
            font-size: 1.5rem;
          }
          .customers-subtitle {
            font-size: 0.775rem;
          }
          .customers-marquee-track {
            gap: 0.75rem;
            animation-duration: 24s;
          }
          .customer-card {
            width: 180px;
            padding: 0.85rem 0.7rem;
            border-radius: 0.875rem;
          }
          .customer-card-logo-container {
            margin-bottom: 0.55rem;
          }
          .customer-card-logo-wrap {
            width: 44px;
            height: 44px;
          }
          .customer-card-icon {
            width: 17px;
            height: 17px;
          }
          .customer-card-monogram {
            font-size: 7px;
          }
          .customer-card-badge {
            width: 14px;
            height: 14px;
          }
          .customer-card-badge svg {
            width: 9px;
            height: 9px;
          }
          .customer-card-title {
            font-size: 0.8rem;
            margin-bottom: 0.15rem;
          }
          .customer-card-line1 {
            font-size: 0.625rem;
          }
          .customer-card-line2 {
            font-size: 0.58rem;
          }
        }

        /* ── 6. COMPACT PHONES (< 360px) ── */
        @media (max-width: 360px) {
          .customers-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          .customers-header {
            margin-bottom: 1.25rem;
          }
          .customers-title {
            font-size: 1.35rem;
          }
          .customers-subtitle {
            font-size: 0.725rem;
          }
          .customers-marquee-track {
            gap: 0.65rem;
            animation-duration: 22s;
          }
          .customer-card {
            width: 165px;
            padding: 0.75rem 0.6rem;
            border-radius: 0.75rem;
          }
          .customer-card-logo-container {
            margin-bottom: 0.5rem;
          }
          .customer-card-logo-wrap {
            width: 40px;
            height: 40px;
          }
          .customer-card-icon {
            width: 15px;
            height: 15px;
          }
          .customer-card-monogram {
            font-size: 6.5px;
          }
          .customer-card-badge {
            width: 13px;
            height: 13px;
          }
          .customer-card-badge svg {
            width: 8px;
            height: 8px;
          }
          .customer-card-title {
            font-size: 0.75rem;
            margin-bottom: 0.1rem;
          }
          .customer-card-line1 {
            font-size: 0.6rem;
          }
          .customer-card-line2 {
            font-size: 0.55rem;
          }
        }

        /* ── 7. ACCESSIBILITY & MOTION ── */
        @keyframes marqueeScrollCustomers {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .customers-marquee-track {
            animation: none !important;
          }
          .customers-marquee-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </section>
  );
}
