import React, { useState } from 'react';
import { SERVICES } from '../data/probizData';
import mophBgImg from '../assets/moph-licensing-bg.jpg';
import businessSetupBgImg from '../assets/business-setup-bg.jpg';
import proServicesBgImg from '../assets/pro-services-bg.jpg';
import brandingDigitalBgImg from '../assets/branding-digital-bg.jpg';
import translationDocBgImg from '../assets/translation-document-bg.jpg';
import recruitmentHrBgImg from '../assets/recruitment-hr-bg.jpg';
import {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
  Check
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

export default function ServiceDeepDive({ activeServiceId, onSelectService, onOpenQuote }) {
  const [internalId, setInternalId] = useState(SERVICES[0].id);
  const selectedId = activeServiceId || internalId;

  const currentService = SERVICES.find((s) => s.id === selectedId) || SERVICES[0];
  const ServiceIcon = iconMap[currentService.icon] || Briefcase;

  return (
    <section id="services-deep-dive" className="py-20 relative bg-[#070A10]">
      <div className="probiz-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="badge-gold mb-3 inline-flex items-center gap-1.5">
            
            <span>Detailed Service Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Integrated Solutions <span className="gold-text-gradient">Under One Roof</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Select a vertical below to explore exact government procedures, licensing workflows, and service deliverables.
          </p>
        </div>

        {/* Tab Selector Bar */}
        <div className="flex overflow-x-auto gap-2.5 pb-4 mb-10 no-scrollbar justify-start lg:justify-center border-b border-white/10">
          {SERVICES.map((s) => {
            const isSelected = s.id === selectedId;
            const TabIcon = iconMap[s.icon] || Briefcase;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setInternalId(s.id);
                  if (onSelectService) onSelectService(s);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#DFBA73] to-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#0E1422] text-slate-300 hover:text-white hover:bg-[#141C30] border border-white/5'
                }`}
              >
                <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-black' : 'text-[#DFBA73] bg-[#DFBA73]/10'}`}>
                  {s.number}
                </span>
                <TabIcon className="w-4 h-4" />
                <span>{s.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Service Content Panel */}
        <div className="glass-card p-6 sm:p-10 lg:p-12 relative overflow-hidden border border-[#C5A059]/30">
          
          {/* Top Banner inside Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#DFBA73] to-[#8E6D27] text-black flex items-center justify-center font-bold shadow-lg flex-shrink-0">
                <ServiceIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#DFBA73] bg-[#DFBA73]/15 px-2.5 py-0.5 rounded">
                    SECTION {currentService.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {currentService.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {currentService.title}
                </h3>
                <p className="text-sm sm:text-base text-[#DFBA73] font-medium mt-1">
                  {currentService.tagline}
                </p>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="btn-gold text-xs px-5 py-3 w-full sm:w-auto"
              >
                <span>Consult on this Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Full description */}
          <div className="py-6">
            <p className="text-slate-300 text-base leading-relaxed max-w-4xl">
              {currentService.fullDesc}
            </p>
          </div>

          {/* Dynamic Content Rendering based on brochure page structure */}

          {/* 1. Business Setup View (Page 4) */}
          {currentService.id === 'business-setup' && (
            <div className="space-y-10">
              {/* Feature Banner with Business Setup Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={businessSetupBgImg}
                  alt="Business Setup & Company Formation Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    100% Foreign Ownership • MOCI Authorized
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Turn Your Business Idea Into A Qatar Entity
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Fast-track Commercial Registration (CR), Articles of Association, municipality licensing, and corporate bank accounts handled by seasoned Qatar corporate consultants.
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('Business Setup & Company Formation')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request Free Setup Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-display">
                  <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                  <span>Our 8 Core Company Formation Services </span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#090E1A] border border-[#C5A059]/15 hover:border-[#DFBA73]/40 transition-colors flex items-start gap-3.5"
                    >
                      <span className="text-xs font-mono font-extrabold text-[#DFBA73] bg-[#DFBA73]/10 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white mb-1">
                          {feat.title}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Banner from Page 4 */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#DFBA73]/20 via-transparent to-transparent border-l-4 border-[#DFBA73] text-sm text-slate-300">
                <span className="font-bold text-white uppercase tracking-wider text-xs block mb-1">FROM BUSINESS IDEA TO BUSINESS SETUP</span>
                We help simplify the administrative process so you can concentrate on planning and growing your business.
              </div>
            </div>
          )}

          {/* 2. PRO & Government Services View (Page 5) */}
          {currentService.id === 'pro-services' && (
            <div className="space-y-8">
              {/* Feature Banner with PRO Services Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={proServicesBgImg}
                  alt="PRO & Government Services Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    Direct Ministry Liaison • Rapid Approvals
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Less Paperwork. More Focus On Business.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    End-to-end management of employee visas, QID issuance, CR renewals, municipality clearance, and Ministry attestation under one dedicated corporate PRO coordinator.
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('PRO & Government Services')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request PRO Retainer Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentService.groups.map((grp, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#080D18] border border-[#C5A059]/20">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-2">
                      Category 0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4 font-display">
                      {grp.category}
                    </h4>
                    <ul className="space-y-3">
                      {grp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Ongoing PRO note from Page 5 */}
              <div className="p-4 rounded-xl bg-[#111929] border border-[#C5A059]/30 flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="w-8 h-8 rounded-full bg-[#DFBA73]/20 flex items-center justify-center text-[#DFBA73] flex-shrink-0 font-bold">
                  i
                </div>
                <div>
                  <strong className="text-[#DFBA73]">PRO Retainer & On-Demand Support: </strong>
                  Ongoing PRO support can be discussed according to your company's requirements and agreed scope of work.
                </div>
              </div>
            </div>
          )}

          {/* 3. Translation & Document Services View (Page 6) */}
          {currentService.id === 'translation-services' && (
            <div className="space-y-8">
              {/* Feature Banner with Translation & Document Services Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={translationDocBgImg}
                  alt="Translation & Document Services Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    Certified Legal Translation • MOJ & Court Accepted
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Clear Communication. Professionally Handled.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Officially certified English-Arabic translations, commercial contracts, corporate bylaws, educational credentials, and full embassy & MOFA attestation support in Doha.
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('Translation & Document Services')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request Document Translation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentService.groups.map((grp, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#080D18] border border-[#C5A059]/20">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-2">
                      Pillar 0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-4 font-display">
                      {grp.category}
                    </h4>
                    <ul className="space-y-3">
                      {grp.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <Check className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Attestation Process Workflow */}
              <div className="p-6 rounded-2xl bg-[#0A101D] border border-white/10">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DFBA73]" />
                  <span>Standard Document Attestation Chain in Qatar:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-[#121A2C] border border-white/5">
                    <div className="text-xs font-bold text-[#DFBA73]">Step 1</div>
                    <div className="text-xs text-white font-medium mt-1">Home Country / Notary</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121A2C] border border-white/5">
                    <div className="text-xs font-bold text-[#DFBA73]">Step 2</div>
                    <div className="text-xs text-white font-medium mt-1">Qatar Embassy Abroad</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121A2C] border border-white/5">
                    <div className="text-xs font-bold text-[#DFBA73]">Step 3</div>
                    <div className="text-xs text-white font-medium mt-1">MOFA Qatar Attestation</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#121A2C] border border-white/5">
                    <div className="text-xs font-bold text-[#DFBA73]">Step 4</div>
                    <div className="text-xs text-white font-medium mt-1">Ministry of Justice Notarization</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. Recruitment & HR Support View (Page 7) */}
          {currentService.id === 'recruitment-hr' && (
            <div className="space-y-8">
              {/* Feature Banner with Recruitment & HR Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={recruitmentHrBgImg}
                  alt="Recruitment & HR Support Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    Corporate Workforce Solutions • Talent Acquisition
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    The Right Talent. A Stronger Business.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    End-to-end recruitment coordination, multi-channel executive search, candidate qualification screening, and Ministry of Labour onboarding across Qatar.
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('Recruitment & HR Support')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request Hiring Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#090E1A] border border-[#C5A059]/20 hover:border-[#DFBA73]/50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 text-[#DFBA73] font-bold text-xs flex items-center justify-center mb-3">
                      0{idx + 1}
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5 font-display">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Banner from Page 7 */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#DFBA73]/20 via-[#141C2E] to-transparent border-l-4 border-[#DFBA73]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-1">
                  SUPPORTING YOUR HIRING GOALS
                </div>
                <div className="text-sm text-slate-200">
                  We work with employers to understand their requirements and coordinate recruitment support around their business needs.
                </div>
              </div>
            </div>
          )}

          {/* 5. MOPH & Healthcare Services View (Pages 8 & 9) */}
          {currentService.id === 'healthcare-services' && (
            <div className="space-y-8">
              {/* Feature Banner with MOPH Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={mophBgImg}
                  alt="MOPH & Healthcare Licensing Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    Ministry of Public Health Liaison & Regulatory Clearance
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Healthcare Licensing, Made Easier
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Direct application coordination, DataFlow PSV verification, Prometric scheduling, and facility accreditation with the Ministry of Public Health (MOPH) and Department of Healthcare Professions (DHP).
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('MOPH & Healthcare Licensing')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request Healthcare Licensing Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {currentService.categories.map((cat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#080D18] border border-[#C5A059]/20 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-2">
                        Pillar 0{idx + 1}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 font-display">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                        {cat.desc}
                      </p>
                      <ul className="space-y-2.5">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal Notice from Page 9 */}
              <div className="p-4 rounded-xl bg-[#121824] border border-white/10 text-xs text-slate-400 flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                <span>
                  Applications and approvals are subject to the requirements and decisions of the relevant authorities (Ministry of Public Health - MOPH / Department of Healthcare Professions - DHP).
                </span>
              </div>
            </div>
          )}

          {/* 6. Branding & Digital Solutions View (Pages 10 & 11) */}
          {currentService.id === 'branding-digital' && (
            <div className="space-y-8">
              {/* Feature Banner with Branding & Digital Background Image & Text Overlay */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/30 min-h-[220px] flex items-center p-6 sm:p-8">
                <img
                  src={brandingDigitalBgImg}
                  alt="Branding, Marketing & Digital Solutions Qatar"
                  className="absolute inset-0 w-full h-full object-cover object-center sm:object-right opacity-45"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(8,13,24,0.96) 0%, rgba(8,13,24,0.88) 45%, rgba(8,13,24,0.4) 80%, rgba(8,13,24,0.2) 100%)',
                  }}
                />
                <div className="relative z-10 max-w-xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA73] mb-1.5 block">
                    Brand Strategy • Web Portals • Performance Marketing
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Build A Brand That Stands Out In Qatar
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    From brand identity and logo guidelines to high-converting responsive websites, Qatar payment gateway integrations, and custom CRM systems.
                  </p>
                  <button
                    onClick={() => onOpenQuote && onOpenQuote('Branding, Marketing & Digital Solutions')}
                    className="btn-gold text-xs py-2 px-4 inline-flex items-center gap-1.5"
                  >
                    <span>Request Digital Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentService.sections.map((sec, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#080D18] border border-[#C5A059]/20">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-1">
                      Vertical 0{idx + 1}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1.5 font-display">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {sec.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {sec.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-[#0F1626] p-2.5 rounded-lg border border-white/5">
                          <Check className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Digital Banner from Page 11 */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#DFBA73]/20 via-[#141C2E] to-transparent border-l-4 border-[#DFBA73]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-1">
                  DIGITAL SOLUTIONS BUILT AROUND YOUR NEEDS
                </div>
                <div className="text-sm text-slate-200">
                  Turn your business vision into digital experiences. We create digital solutions that help businesses improve their online presence, engage customers and support their operational goals.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
