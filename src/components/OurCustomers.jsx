import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  Globe2,
  Cpu,
  Layers,
  Utensils,
  CheckCircle2,
  Star,
  Play,
  Pause,
  LayoutGrid,
  Sparkles,
  ShieldCheck,
  MapPin
} from 'lucide-react';

const CUSTOMERS = [
  {
    id: 1,
    name: 'Al-Mansoor Trading & Contracting W.L.L',
    shortName: 'Al-Mansoor',
    monogram: 'AM',
    sector: 'Trading & Commercial Contracting',
    location: 'Doha, Qatar',
    serviceReceived: '100% Foreign LLC Setup & PRO Retainer',
    highlight: 'CR, Tax Card & Municipality License completed in 10 working days',
    icon: Building2,
    accentGradient: 'from-amber-500/25 via-yellow-600/15 to-transparent',
    logoBg: 'from-[#DFBA73]/20 to-[#8E6D27]/30',
    logoColor: '#DFBA73',
  },
  {
    id: 2,
    name: 'Al-Rayyan Specialized Medical Center',
    shortName: 'Al-Rayyan Medical',
    monogram: 'AR',
    sector: 'Healthcare & Clinical Services',
    location: 'Lusail Marina, Qatar',
    serviceReceived: 'MOPH Licensing & DHP Staff Credentialing',
    highlight: 'Full Ministry of Public Health facility permit & healthcare compliance',
    icon: Stethoscope,
    accentGradient: 'from-emerald-500/25 via-teal-600/15 to-transparent',
    logoBg: 'from-emerald-400/20 to-teal-800/30',
    logoColor: '#34D399',
  },
  {
    id: 3,
    name: 'Apex Global Logistics & Freight QFC',
    shortName: 'Apex Logistics',
    monogram: 'AG',
    sector: 'Supply Chain & Maritime Freight',
    location: 'West Bay, Doha (QFC)',
    serviceReceived: 'QFC Branch Formation & Corporate Visas',
    highlight: 'Seamless Qatar Financial Centre registration & international quota clearance',
    icon: Globe2,
    accentGradient: 'from-cyan-500/25 via-blue-600/15 to-transparent',
    logoBg: 'from-cyan-400/20 to-blue-800/30',
    logoColor: '#38BDF8',
  },
  {
    id: 4,
    name: 'Oryx Tech Solutions LLC',
    shortName: 'Oryx Tech',
    monogram: 'OT',
    sector: 'Fintech & Cloud Architecture',
    location: 'QSTP, Doha, Qatar',
    serviceReceived: 'Commercial Registration & Digital IP Advisory',
    highlight: 'Technology entity setup with Ministry of Communications & IP protection',
    icon: Cpu,
    accentGradient: 'from-purple-500/25 via-indigo-600/15 to-transparent',
    logoBg: 'from-purple-400/20 to-indigo-800/30',
    logoColor: '#C084FC',
  },
  {
    id: 5,
    name: 'Doha Crest Engineering Consultancy',
    shortName: 'Doha Crest',
    monogram: 'DC',
    sector: 'Grade-A Engineering & Architecture',
    location: 'C-Ring Road, Doha, Qatar',
    serviceReceived: 'MMUP / UPDA Classification & PRO Retainer',
    highlight: 'Engineering committee approval & corporate visa allocation fulfilled',
    icon: Layers,
    accentGradient: 'from-orange-500/25 via-amber-600/15 to-transparent',
    logoBg: 'from-orange-400/20 to-amber-800/30',
    logoColor: '#FB923C',
  },
  {
    id: 6,
    name: 'Gulf Horizon Hospitality Group',
    shortName: 'Gulf Horizon',
    monogram: 'GH',
    sector: 'Premium Hospitality & F&B Management',
    location: 'The Pearl-Qatar, Doha',
    serviceReceived: 'Municipality Trade Licences & Staff Quota',
    highlight: 'Multi-outlet municipality approvals & Civil Defence certifications issued',
    icon: Utensils,
    accentGradient: 'from-rose-500/25 via-pink-600/15 to-transparent',
    logoBg: 'from-rose-400/20 to-pink-800/30',
    logoColor: '#FB7185',
  },
];

export default function OurCustomers() {
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' | 'grid'
  const [isPaused, setIsPaused] = useState(false);

  // Triple items for seamless, gap-free marquee loop
  const marqueeItems = [...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS];

  return (
    <section className="py-20 relative bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#DFBA73]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="badge-gold mb-3 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>Trusted Partnerships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              Our <span className="gold-text-gradient">Customers</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Empowering visionary enterprises, international corporations, and local ventures
              across Qatar with trusted company setup, government PRO, and corporate solutions.
            </p>
          </div>

          {/* Marquee / Grid View Control Option */}
          <div className="flex items-center gap-2 self-start md:self-end bg-[#0B101C] p-1.5 rounded-xl border border-white/10 shadow-lg">
            <button
              onClick={() => setViewMode('marquee')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'marquee'
                  ? 'bg-gradient-to-r from-[#DFBA73] to-[#C5A059] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Continuous Marquee Flow"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Marquee View</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#DFBA73] to-[#C5A059] text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Static Card Grid"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>

            {viewMode === 'marquee' && (
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="ml-1 p-1.5 text-slate-400 hover:text-[#DFBA73] rounded-md transition-colors"
                title={isPaused ? 'Resume Marquee' : 'Pause Marquee'}
                aria-label={isPaused ? 'Resume Marquee' : 'Pause Marquee'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-[#DFBA73]" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>

        {/* ── OPTION A: CONTINUOUS INFINITE MARQUEE VIEW ── */}
        {viewMode === 'marquee' ? (
          <div className="customers-marquee-wrapper relative overflow-hidden py-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <div
              className={`customers-marquee-track flex gap-6 ${isPaused ? 'is-paused' : ''}`}
            >
              {marqueeItems.map((customer, index) => {
                const IconComponent = customer.icon;
                return (
                  <div
                    key={`${customer.id}-${index}`}
                    className="customer-card group relative p-6 rounded-2xl bg-[#0B101C]/90 border border-[#C5A059]/25 hover:border-[#DFBA73]/60 transition-all duration-300 flex flex-col justify-between flex-shrink-0 shadow-xl overflow-hidden"
                    style={{ width: '340px' }}
                  >
                    {/* Subtle Gradient Backlight */}
                    <div
                      className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${customer.accentGradient} rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                    />

                    <div>
                      {/* Top Row: Round Company Logo & Verified Pill */}
                      <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                        {/* Round Company Logo */}
                        <div className="relative">
                          <div
                            className={`w-16 h-16 rounded-full p-0.5 bg-gradient-to-br ${customer.logoBg} border-2 border-[#DFBA73]/50 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                          >
                            <div className="w-full h-full rounded-full bg-[#080D18] flex flex-col items-center justify-center">
                              <IconComponent
                                className="w-6 h-6 mb-0.5 transition-transform group-hover:scale-110"
                                style={{ color: customer.logoColor }}
                              />
                              <span className="text-[9px] font-extrabold tracking-widest text-[#DFBA73] font-mono">
                                {customer.monogram}
                              </span>
                            </div>
                          </div>
                          {/* Mini Verified Checkmark on Logo */}
                          <div
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#DFBA73] text-black flex items-center justify-center shadow-md"
                            title="Verified Qatar Client"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        {/* Star Rating Badge */}
                        <div className="flex items-center gap-1 bg-[#DFBA73]/10 px-2.5 py-1 rounded-full border border-[#DFBA73]/25">
                          <div className="flex text-[#DFBA73]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-[#DFBA73]" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Company Name */}
                      <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#DFBA73] transition-colors leading-snug mb-1.5 relative z-10">
                        {customer.name}
                      </h3>

                      {/* Sector / Industry Tag */}
                      <div className="text-xs font-semibold text-[#DFBA73] mb-3 relative z-10">
                        {customer.sector}
                      </div>

                      {/* Service Details & Highlight */}
                      <div className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3 relative z-10">
                        <div className="flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">
                            <strong className="text-white">Service:</strong> {customer.serviceReceived}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400 font-mono text-[11px]">
                            {customer.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Milestone Note */}
                    <div className="mt-4 pt-3 border-t border-white/5 bg-black/30 -mx-6 -mb-6 p-4 rounded-b-2xl relative z-10">
                      <p className="text-[11px] text-slate-400 italic leading-relaxed">
                        "{customer.highlight}"
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ── OPTION B: RESPONSIVE 6-CARD GRID VIEW ── */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {CUSTOMERS.map((customer) => {
              const IconComponent = customer.icon;
              return (
                <div
                  key={customer.id}
                  className="customer-card group relative p-6 rounded-2xl bg-[#0B101C]/90 border border-[#C5A059]/25 hover:border-[#DFBA73]/60 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden hover:-translate-y-1.5"
                >
                  {/* Subtle Gradient Backlight */}
                  <div
                    className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${customer.accentGradient} rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  <div>
                    {/* Top Row: Round Company Logo & Verified Pill */}
                    <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                      {/* Round Company Logo */}
                      <div className="relative">
                        <div
                          className={`w-16 h-16 rounded-full p-0.5 bg-gradient-to-br ${customer.logoBg} border-2 border-[#DFBA73]/50 shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                        >
                          <div className="w-full h-full rounded-full bg-[#080D18] flex flex-col items-center justify-center">
                            <IconComponent
                              className="w-6 h-6 mb-0.5 transition-transform group-hover:scale-110"
                              style={{ color: customer.logoColor }}
                            />
                            <span className="text-[9px] font-extrabold tracking-widest text-[#DFBA73] font-mono">
                              {customer.monogram}
                            </span>
                          </div>
                        </div>
                        {/* Mini Verified Checkmark on Logo */}
                        <div
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#DFBA73] text-black flex items-center justify-center shadow-md"
                          title="Verified Qatar Client"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Star Rating Badge */}
                      <div className="flex items-center gap-1 bg-[#DFBA73]/10 px-2.5 py-1 rounded-full border border-[#DFBA73]/25">
                        <div className="flex text-[#DFBA73]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#DFBA73]" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Company Name */}
                    <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-[#DFBA73] transition-colors leading-snug mb-1.5 relative z-10">
                      {customer.name}
                    </h3>

                    {/* Sector / Industry Tag */}
                    <div className="text-xs font-semibold text-[#DFBA73] mb-3 relative z-10">
                      {customer.sector}
                    </div>

                    {/* Service Details & Highlight */}
                    <div className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-3 relative z-10">
                      <div className="flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">
                          <strong className="text-white">Service:</strong> {customer.serviceReceived}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400 font-mono text-[11px]">
                          {customer.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Milestone Note */}
                  <div className="mt-4 pt-3 border-t border-white/5 bg-black/30 -mx-6 -mb-6 p-4 rounded-b-2xl relative z-10">
                    <p className="text-[11px] text-slate-400 italic leading-relaxed">
                      "{customer.highlight}"
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Trust Stat Bar */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#090E1A] border border-[#C5A059]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Over <strong>150+ Companies Established & Supported</strong> Across Qatar</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] text-slate-400 font-medium">
            <span>• 100% Regulatory Compliance</span>
            <span>• Direct Ministry Liaison (MOCI / MOPH / MOI)</span>
            <span>• Zero Corporate Downtime</span>
          </div>
        </div>
      </div>

      {/* ── CSS KEYFRAMES FOR INFINITE MARQUEE SCROLL ── */}
      <style>{`
        .customers-marquee-wrapper {
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }

        .customers-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScrollCustomers 32s linear infinite;
        }

        .customers-marquee-track:hover {
          animation-play-state: paused;
        }

        .customers-marquee-track.is-paused {
          animation-play-state: paused;
        }

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
        }
      `}</style>
    </section>
  );
}
