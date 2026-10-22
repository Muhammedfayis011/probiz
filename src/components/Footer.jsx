import React, { useState } from 'react';
import ProBizLogo from './ProBizLogo';
import { COMPANY_INFO, SERVICES } from '../data/probizData';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MessageSquare,
  Building2,
  Lock,
  Sparkles,
  Send
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onSelectService, onOpenQuote, onNavigateSection }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (target) => {
    if (onNavigateSection) {
      onNavigateSection(target);
    } else {
      window.location.hash = `#${target}`;
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#04060A] text-slate-300 pt-16 pb-12 border-t border-[#C5A059]/25 relative overflow-hidden font-sans">
      {/* Decorative Luxury Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[250px] bg-[#C5A059]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#C5A059]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        
        {/* ── TOP VIP CALLOUT BANNER ── */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0D1424] via-[#090E1A] to-[#0D1424] border border-[#C5A059]/35 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#DFBA73]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFBA73]/15 border border-[#DFBA73]/30 text-[#DFBA73] text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Senior Corporate Consultants Available in Doha</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight leading-tight">
                Ready to Establish or Expand Your Business in Qatar?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Get immediate clarity on 100% foreign ownership LLC laws, Commercial Registration (CR), PRO government clearances, and healthcare licensing.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 justify-end">
              <button
                type="button"
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn-gold py-3.5 px-6 text-sm font-bold font-display flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Free Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 5-COLUMN MAIN FOOTER ARCHITECTURE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Institutional Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block cursor-pointer focus:outline-none"
              aria-label="ProBiz Home"
            >
              <ProBizLogo size="large" />
            </a>

            <p className="text-sm text-slate-300 font-medium leading-relaxed font-display">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.aim}
            </p>

            {/* Official Entity Badge */}
            <div className="p-4 rounded-2xl bg-[#090F1C] border border-[#C5A059]/25 shadow-lg space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DFBA73] font-display uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <span>Licensed Qatar Corporate Entity</span>
              </div>
              <div className="text-[11px] text-slate-300 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>Hleyton Tower, Al Miqrab, Doha, Qatar</span>
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>MOCI, MOPH, MOJ & MOI Regulatory Liaison</span>
              </div>
            </div>

            {/* Newsletter / Regulatory Briefing */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] block mb-2 font-display">
                Qatar Corporate Regulatory Updates
              </span>
              {isSubscribed ? (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! You will receive Qatar regulatory updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter corporate email"
                    required
                    className="w-full bg-[#080D18] border border-white/15 focus:border-[#DFBA73] text-xs text-white rounded-xl px-3.5 py-2.5 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-[#C5A059] hover:bg-[#DFBA73] text-black transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md"
                    title="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: 6 Core Services (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] font-display flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Business Verticals</span>
            </div>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={`#${srv.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectService) {
                        onSelectService(srv);
                      }
                    }}
                    className="group flex items-start gap-2 hover:text-white transition-colors cursor-pointer py-0.5"
                  >
                    <span className="text-[#DFBA73] font-mono text-[11px] font-bold group-hover:translate-x-0.5 transition-transform">
                      {srv.number}.
                    </span>
                    <span className="group-hover:text-[#DFBA73] transition-colors leading-snug">
                      {srv.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Portals (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] font-display flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              <span>Corporate Links</span>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  Home Overview
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  About ProBiz
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('services');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  Services Directory
                </a>
              </li>
              <li>
                <a
                  href="#our-process"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('our-process');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  Qatar Setup Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#why-qatar"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('why-qatar');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  Why Qatar Advantages
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer block"
                >
                  Executive Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Doha Headquarters & Direct Contacts (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] font-display flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Doha Headquarters</span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#090E1A] border border-white/5">
                <MapPin className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090E1A] border border-white/5">
                <Clock className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <span className="text-[11px] text-slate-300">
                  {COMPANY_INFO.workingHours} (AST)
                </span>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090E1A] border border-white/5">
                <Phone className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-mono text-white hover:text-[#DFBA73] font-semibold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#090E1A] border border-white/5">
                <Mail className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#DFBA73] text-slate-200 transition-colors truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-gold text-xs py-2.5 px-4 w-full font-display font-bold shadow-lg"
              >
                Schedule Executive Meeting
              </button>
            </div>
          </div>

        </div>

        {/* ── INSTITUTIONAL TRUST & REGULATORY RIBBON ── */}
        <div className="py-6 border-b border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left text-xs text-slate-400">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
            <span>100% Qatar Regulatory Adherence</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Lock className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
            <span>Bank-Grade Client Confidentiality</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Building2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
            <span>Licensed Commercial Entity</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
            <span>Direct Ministry Liaison Desk</span>
          </div>
        </div>

        {/* ── STATUTORY REGULATORY DISCLAIMER ── */}
        <div className="py-4 border-b border-white/5 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-start sm:items-center gap-2 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Official Regulatory Notice: Applications, approvals, CR issuances, and commercial licenses are subject to the executive decisions, statutory frameworks, and regulations of the Ministry of Commerce & Industry (MOCI), Ministry of Public Health (MOPH), and relevant authorities in the State of Qatar.
            </span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#DFBA73] transition-colors text-xs font-semibold cursor-pointer whitespace-nowrap p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DFBA73]" />
          </button>
        </div>

        {/* ── BOTTOM COPYRIGHT & LUXURY FOOTER SUB-BAR ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.name}. All rights reserved. Doha, State of Qatar.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span className="text-[#DFBA73] font-semibold tracking-wider uppercase">
              {COMPANY_INFO.slogan}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
