import React from 'react';
import ProBizLogo from './ProBizLogo';
import { COMPANY_INFO, SERVICES } from '../data/probizData';
import { Phone, Mail, MapPin, Globe, ArrowUp, ShieldCheck } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onSelectService, onOpenQuote, onNavigateSection }) {
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

  return (
    <footer className="bg-[#04060A] text-slate-400 pt-16 pb-12 border-t border-[#C5A059]/20 relative overflow-hidden">
      {/* Decorative golden ambient gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Column (Brochure Page 1 & 12) */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              style={{ textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}
              aria-label="ProBiz Home"
            >
              <ProBizLogo size="large" />
            </a>
            
            <p className="text-sm text-slate-300 font-medium leading-relaxed pt-2">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY_INFO.aim}
            </p>

            <div className="p-3.5 rounded-xl bg-[#0D1322] border border-[#C5A059]/20 inline-block">
              <span className="text-xs font-bold text-[#DFBA73] uppercase tracking-wider block">
                Official Qatar Entity
              </span>
              <span className="text-[11px] text-slate-400">
                10+ Years Combined Professional Experience
              </span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] mb-4">
              Our 6 Core Services
            </div>
            <ul className="space-y-2 text-xs">
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
                    className="hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#DFBA73] font-mono text-[11px]">{srv.number}.</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav & Tools */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] mb-4">
              Resources & Tools
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer"
                >
                  About ProBiz
                </a>
              </li>
              <li>
                <a
                  href="#our-process"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('our-process');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer"
                >
                  Qatar Setup Guide
                </a>
              </li>
              <li>
                <a
                  href="#why-qatar"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('why-qatar');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#why-qatar"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('why-qatar');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer"
                >
                  Client FAQs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-[#DFBA73] transition-colors cursor-pointer"
                >
                  Office Location Map
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column (Page 12) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] mb-4">
              Doha Headquarters
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-mono hover:text-[#DFBA73]">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#DFBA73]">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <span className="font-mono text-[#DFBA73]">{COMPANY_INFO.website}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="btn-gold text-xs py-2 px-4 w-full"
              >
                Request Free Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Brochure Mandatory Regulatory Disclaimer */}
        <div className="py-4 border-b border-white/5 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
            <span>
              Disclaimer: Applications, permits, and governmental approvals are subject to the requirements, regulations, and decisions of the relevant Qatar state ministries and authorities.
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#DFBA73] transition-colors text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright & Slogan Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            &copy; {CURRENT_YEAR} {COMPANY_INFO.name}. All rights reserved. Doha, Qatar.
          </div>
          <div className="font-medium text-[#DFBA73] tracking-wider uppercase text-[11px]">
            {COMPANY_INFO.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
}
