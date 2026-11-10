import React from 'react';
import scottsLogo from '../assets/customers/scotts-logo.png';
import idealServicesLogo from '../assets/customers/ideal-services-logo.png';
import oudiPerfumesLogo from '../assets/customers/oudi-perfumes-logo.png';
import basePointLogo from '../assets/customers/base-point-logo.png';
import idealEcoLogo from '../assets/customers/ideal-eco-logo.png';

const CUSTOMERS = [
  {
    id: 'scotts',
    name: 'Scotts',
    logo: scottsLogo,
  },
  {
    id: 'ideal-services',
    name: 'Ideal Services Typing & Translation',
    logo: idealServicesLogo,
  },
  {
    id: 'oudi-perfumes',
    name: 'Oudi Perfumes',
    logo: oudiPerfumesLogo,
  },
  {
    id: 'base-point',
    name: 'Base Point Trading & Contracting',
    logo: basePointLogo,
  },
  {
    id: 'ideal-eco',
    name: 'Ideal Eco Trading and Services',
    logo: idealEcoLogo,
  },
];

export default function OurCustomers() {
  // 4x repetition for seamless, continuous infinite marquee flow
  const marqueeItems = [
    ...CUSTOMERS,
    ...CUSTOMERS,
    ...CUSTOMERS,
    ...CUSTOMERS,
  ];

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

        {/* ── CONTINUOUS INFINITE MARQUEE (LOGOS ONLY) ── */}
        <div className="customers-marquee-wrapper relative overflow-hidden">
          <div className="customers-marquee-track flex">
            {marqueeItems.map((customer, index) => (
              <div
                key={`${customer.id}-${index}`}
                className="customer-card group relative rounded-2xl bg-white hover:bg-white border border-[#C5A059]/30 hover:border-[#DFBA73] transition-all duration-300 flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-[0_8px_28px_rgba(223,186,115,0.35)] hover:-translate-y-1 overflow-hidden"
                title={customer.name}
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="customer-logo-img object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  style={customer.id === 'scotts' ? { filter: 'brightness(0)' } : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE MEDIA QUERIES SUITE FOR CUSTOMER LOGO CARDS ── */}
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
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }

        .customers-marquee-track {
          display: flex;
          width: max-content;
          gap: 1.5rem;
          animation: marqueeScrollCustomers 24s linear infinite;
        }

        .customers-marquee-track:hover {
          animation-play-state: paused;
        }

        .customer-card {
          width: 220px;
          height: 105px;
          padding: 0.85rem 1.5rem;
          background: #FFFFFF;
        }

        .customer-logo-img {
          max-width: 100%;
          max-height: 68px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
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
            gap: 1.75rem;
            animation-duration: 28s;
          }
          .customer-card {
            width: 240px;
            height: 115px;
            padding: 1rem 1.75rem;
          }
          .customer-logo-img {
            max-height: 75px;
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
            gap: 1.5rem;
            animation-duration: 24s;
          }
          .customer-card {
            width: 220px;
            height: 105px;
            padding: 0.85rem 1.5rem;
          }
          .customer-logo-img {
            max-height: 68px;
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
            gap: 1.25rem;
            animation-duration: 22s;
          }
          .customer-card {
            width: 195px;
            height: 95px;
            padding: 0.75rem 1.25rem;
          }
          .customer-logo-img {
            max-height: 58px;
          }
        }

        /* ── 4. SMALL TABLETS & LARGE PHONES (540px to 767px) ── */
        @media (min-width: 540px) and (max-width: 767px) {
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
            gap: 1.1rem;
            animation-duration: 20s;
          }
          .customer-card {
            width: 175px;
            height: 85px;
            padding: 0.65rem 1rem;
          }
          .customer-logo-img {
            max-height: 52px;
          }
        }

        /* ── 5. MOBILE PHONES (360px to 539px) ── */
        @media (min-width: 360px) and (max-width: 539px) {
          .customers-section {
            padding-top: 2.5rem;
            padding-bottom: 2.5rem;
          }
          .customers-header {
            margin-bottom: 1.5rem;
          }
          .customers-title {
            font-size: 1.45rem;
          }
          .customers-subtitle {
            font-size: 0.75rem;
          }
          .customers-marquee-track {
            gap: 1rem;
            animation-duration: 18s;
          }
          .customer-card {
            width: 155px;
            height: 78px;
            padding: 0.5rem 0.85rem;
            border-radius: 0.75rem;
          }
          .customer-logo-img {
            max-height: 46px;
          }
        }

        /* ── 6. ULTRA-COMPACT MOBILE SCREENS (< 360px) ── */
        @media (max-width: 359px) {
          .customers-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          .customers-header {
            margin-bottom: 1.25rem;
          }
          .customers-title {
            font-size: 1.3rem;
          }
          .customers-subtitle {
            font-size: 0.7rem;
          }
          .customers-marquee-track {
            gap: 0.85rem;
            animation-duration: 16s;
          }
          .customer-card {
            width: 140px;
            height: 72px;
            padding: 0.45rem 0.75rem;
            border-radius: 0.625rem;
          }
          .customer-logo-img {
            max-height: 42px;
          }
        }

        /* ── 7. ACCESSIBILITY & MOTION ── */
        @keyframes marqueeScrollCustomers {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
