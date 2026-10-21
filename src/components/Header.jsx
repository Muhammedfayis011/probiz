import React, { useState, useEffect } from 'react';
import ProBizLogo from './ProBizLogo';
import { COMPANY_INFO, SERVICES } from '../data/probizData';
import { Phone, Mail, MapPin, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header({ onOpenQuote, onSelectService }) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Corporate Strip */}
      <div className="bg-[#05070B] border-b border-white/5 text-xs text-slate-400 py-2 hidden md:block">
        <div className="probiz-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 hover:text-[#DFBA73] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#DFBA73] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{COMPANY_INFO.addressShort}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Office Open: Sun–Thu 8:00 AM – 5:30 PM
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-semibold tracking-wide flex items-center gap-1.5">
              <span>🇶🇦</span>
              <span>Doha, Qatar</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#080B12]/95 backdrop-blur-md shadow-2xl shadow-black/60 border-b border-[#C5A059]/25 py-3'
            : 'bg-[#07090E]/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="probiz-container flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center">
            <ProBizLogo size="normal" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <a href="#about" className="hover:text-[#DFBA73] transition-colors">
              About ProBiz
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 py-2 hover:text-[#DFBA73] transition-colors focus:outline-none"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C5A059] transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#0C111C] border border-[#C5A059]/30 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] px-3 py-1.5 border-b border-white/5 mb-1.5">
                    Our 6 Core Solutions
                  </div>
                  {SERVICES.map((srv) => (
                    <a
                      key={srv.id}
                      href={`#${srv.id}`}
                      onClick={() => {
                        setServicesOpen(false);
                        if (onSelectService) onSelectService(srv);
                      }}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <span className="text-xs font-mono font-bold text-[#C5A059] bg-[#C5A059]/10 rounded px-1.5 py-0.5 mt-0.5">
                        {srv.number}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-200 group-hover:text-[#DFBA73] transition-colors leading-snug">
                          {srv.title}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {srv.shortDesc}
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="mt-2 pt-2 border-t border-white/5 px-2">
                    <a
                      href="#services-overview"
                      className="text-xs text-[#DFBA73] hover:underline flex items-center justify-between font-semibold"
                    >
                      <span>View All Services at a Glance</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#setup-guide" className="hover:text-[#DFBA73] transition-colors">
              Setup Guide
            </a>

            <a href="#cost-estimator" className="hover:text-[#DFBA73] transition-colors flex items-center gap-1.5">
              <span>Cost Estimator</span>
              <span className="text-[10px] bg-[#C5A059]/20 text-[#DFBA73] border border-[#C5A059]/40 rounded-full px-2 py-0.2">
                New
              </span>
            </a>

            <a href="#why-probiz" className="hover:text-[#DFBA73] transition-colors">
              Why ProBiz
            </a>

            <a href="#faqs" className="hover:text-[#DFBA73] transition-colors">
              FAQs
            </a>

            <a href="#contact" className="hover:text-[#DFBA73] transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-outline-gold text-xs py-2 px-3.5 hidden xl:inline-flex"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>+974 4000 1977</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="btn-gold text-xs py-2 px-4 shadow-lg"
            >
              <span>Get Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17] border-b border-[#C5A059]/30 px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1 border-b border-white/5"
            >
              About ProBiz
            </a>

            <div className="py-1 border-b border-white/5">
              <div className="text-xs uppercase font-bold text-[#C5A059] mb-2">Our Services</div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SERVICES.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onSelectService) onSelectService(s);
                    }}
                    className="text-sm text-slate-300 hover:text-[#DFBA73] flex items-center gap-2"
                  >
                    <span className="text-[#C5A059] font-mono text-xs">{s.number}.</span>
                    <span>{s.title}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#setup-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1 border-b border-white/5"
            >
              Qatar Company Setup Guide
            </a>

            <a
              href="#cost-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1 border-b border-white/5 flex items-center justify-between"
            >
              <span>Setup Cost Estimator</span>
              <span className="text-xs bg-[#C5A059] text-black font-bold px-2 py-0.5 rounded-full">
                Interactive
              </span>
            </a>

            <a
              href="#why-probiz"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1 border-b border-white/5"
            >
              Why ProBiz?
            </a>

            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1 border-b border-white/5"
            >
              FAQs
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-[#DFBA73] py-1"
            >
              Contact Us
            </a>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn-gold w-full text-center py-2.5 text-sm"
              >
                Request Free Consultation
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold w-full text-center py-2.5 text-sm"
              >
                Chat on WhatsApp (+974 4000 1977)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
