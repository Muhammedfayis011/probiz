import React from 'react';
import { COMPANY_INFO, STATS, CORE_PILLARS } from '../data/probizData';
import DohaSkylineSvg from './DohaSkylineSvg';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCheck,
  Users,
  Stethoscope,
  Sparkles,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

const iconMap = {
  Building2,
  FileCheck,
  Users,
  Stethoscope,
  Sparkles
};

export default function Hero({ onOpenQuote, onSelectPillar }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Background radial gold glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#8A1538]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Messaging from Brochure Page 1 */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Pill from Page 1 */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141B2A] border border-[#C5A059]/40 text-[#DFBA73] text-xs font-semibold tracking-wide uppercase mb-6 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-[#DFBA73] animate-ping" />
              <span>Doha, Qatar • Premier Corporate Consultancy</span>
            </div>

            {/* Main Headline (Exact Brochure Quote) */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white font-display leading-[1.15] mb-4">
              Different Experts.{' '}
              <span className="gold-text-gradient block mt-1">One Team.</span>
              <span className="text-white block mt-1">All Solutions Under One Roof.</span>
            </h1>

            {/* Subtitle from Brochure Page 1 */}
            <p className="text-xl sm:text-2xl font-medium text-slate-300 mt-2 mb-4 leading-relaxed">
              Your Trusted Partner for{' '}
              <span className="text-[#DFBA73] underline decoration-[#C5A059]/50 underline-offset-4">
                Business Growth in Qatar.
              </span>
            </p>

            {/* Slogan Banner from Page 1 */}
            <div className="flex items-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-[#C5A059]/15 via-white/5 to-transparent border-l-4 border-[#C5A059] my-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F5DDA9]">
                {COMPANY_INFO.slogan}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-400 mt-2 mb-8 max-w-2xl leading-relaxed">
              ProBiz Consultancy Services brings together experienced professionals across business formation,
              PRO licensing, legal document attestation, healthcare regulatory approvals (MOPH/DHP), corporate recruitment,
              and brand development — all coordinated through one single point of contact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenQuote}
                className="btn-gold w-full sm:w-auto text-sm px-7 py-3.5"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full sm:w-auto text-sm px-6 py-3.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>

              <a
                href="#services-overview"
                className="text-sm font-semibold text-slate-300 hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 px-3 py-2"
              >
                <span>Explore 6 Verticals</span>
                <span className="text-xs">↓</span>
              </a>
            </div>

            {/* 5 Brochure Pillars Quick Bar (Page 1) */}
            <div className="mt-10 pt-8 border-t border-white/10 w-full">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                Brochure Core Solutions (Click to View):
              </div>
              <div className="flex flex-wrap gap-2.5">
                {CORE_PILLARS.map((pillar) => {
                  const Icon = iconMap[pillar.icon] || Building2;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => onSelectPillar && onSelectPillar(pillar.id)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1626] border border-[#C5A059]/20 hover:border-[#DFBA73] hover:bg-[#152035] text-xs font-medium text-slate-200 transition-all duration-200 group text-left"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform" />
                      <span>{pillar.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Skyline + Luxury Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#DFBA73]/30 via-[#C5A059]/10 to-[#8A1538]/30 rounded-2xl blur-lg opacity-70" />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl bg-[#0D121D] border border-[#C5A059]/30 overflow-hidden shadow-2xl">
                {/* Visual Doha West Bay Skyline & Dhow Boat */}
                <DohaSkylineSvg className="h-[360px] sm:h-[420px]" />

                {/* Overlay Card matching Brochure Page 1 styling */}
                <div className="p-6 bg-gradient-to-t from-[#070A10] via-[#0C111C]/90 to-transparent">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73]">
                        Doha Headquarters
                      </div>
                      <div className="text-base font-bold text-white">
                        Hleyton Tower, Al Miqrab
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Official Direct
                      </div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-sm font-mono font-bold text-[#DFBA73] hover:underline"
                      >
                        +974 4000 1977
                      </a>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>100% Foreign Ownership Advisory</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>MOPH & DHP Licensing Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>End-to-End Ministry PRO Clearance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Certified MOFA Legal Translation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -bottom-6 -left-4 sm:left-4 bg-[#090D16] border border-[#C5A059]/40 rounded-xl p-3.5 shadow-2xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#DFBA73] to-[#8E6D27] flex items-center justify-center text-black font-extrabold text-lg shadow-inner">
                  10+
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Years Combined Experience</div>
                  <div className="text-[11px] text-[#DFBA73]">Trusted Qatar Corporate Partner</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row Counter (Page 2 & 12 Theme) */}
        <div className="mt-20 pt-8 pb-8 px-6 sm:px-10 rounded-2xl bg-gradient-to-r from-[#0C121E] via-[#101726] to-[#0C121E] border border-[#C5A059]/20 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl font-extrabold gold-text-gradient font-display">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
