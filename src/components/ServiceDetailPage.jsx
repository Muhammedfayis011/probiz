import React, { useEffect } from 'react';
import { SERVICES, COMPANY_INFO, FAQS } from '../data/probizData';
import mophBgImg from '../assets/moph-licensing-bg.jpg';
import businessSetupBgImg from '../assets/business-setup-bg.jpg';
import proServicesBgImg from '../assets/pro-services-bg.jpg';
import brandingDigitalBgImg from '../assets/branding-digital-bg.jpg';
import translationDocBgImg from '../assets/translation-document-bg.jpg';
import recruitmentHrBgImg from '../assets/recruitment-hr-bg.jpg';
import {
  ArrowLeft,
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  MessageCircle,
  HelpCircle,
  Landmark,
  Award
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

const QATAR_JOURNEY = [
  {
    step: "01",
    phase: "Name & Activity Approval",
    ministry: "Ministry of Commerce & Industry (MOCI)",
    desc: "Reservation of unique trade name (Arabic/English) and formal selection of approved commercial activities under Qatar classification.",
    duration: "1 - 2 Days",
    deliverable: "Commercial Name Reservation Certificate"
  },
  {
    step: "02",
    phase: "Articles of Association (AoA)",
    ministry: "Ministry of Justice (MOJ)",
    desc: "Drafting corporate bylaws, shareholder distribution, 100% foreign ownership or local sponsorship clauses, and formal notarization.",
    duration: "2 - 3 Days",
    deliverable: "Notarized Articles of Association"
  },
  {
    step: "03",
    phase: "Commercial Registration (CR)",
    ministry: "MOCI & Qatar Chamber",
    desc: "Official issuance of company Commercial Registration certificate establishing legal entity status in the State of Qatar.",
    duration: "2 - 4 Days",
    deliverable: "Official Commercial Registration (CR)"
  },
  {
    step: "04",
    phase: "Office Lease & Municipality Trade Licence",
    ministry: "Ministry of Municipality & Civil Defence",
    desc: "Securing registered commercial office lease, Civil Defence safety clearance, and municipality signage inspection approval.",
    duration: "4 - 7 Days",
    deliverable: "Municipality Trade Licence (Rukhsah)"
  },
  {
    step: "05",
    phase: "Establishment Card (Computer Card)",
    ministry: "Ministry of Interior (MOI)",
    desc: "Registration of official company seal, authorized signatories, and immigration file for issuing work visas and Residence Permits (QID).",
    duration: "2 - 3 Days",
    deliverable: "Establishment Card (Qayd Al-Munsha'a)"
  },
  {
    step: "06",
    phase: "Corporate Bank Account & Tax Card",
    ministry: "Qatar Central Bank & GTA",
    desc: "Opening operational corporate account with QNB, CBQ, QIIB or Dukhan Bank, and General Tax Authority (Dhareeba) registration.",
    duration: "5 - 10 Days",
    deliverable: "Operational Bank Account & Tax Card"
  }
];

const DOCUMENTS_CHECKLIST = [
  {
    category: "Individual Foreign Investors",
    items: [
      "Valid passport copy (valid for at least 6 months) for each foreign shareholder",
      "Personal CV / Professional profile of shareholders",
      "Proposed commercial trade names (in Arabic & English priority order)",
      "Three-month personal bank statement or proof of financial capability",
      "No Objection Certificate (NOC) if shareholder is currently a resident in Qatar"
    ]
  },
  {
    category: "Corporate Parent Companies (Branch / Subsidiary)",
    items: [
      "Certificate of Incorporation / Commercial Registration of the parent company",
      "Memorandum and Articles of Association (MOA / AOA) of parent company",
      "Board Resolution authorizing establishment of the Qatar entity and appointing legal representative",
      "Power of Attorney (POA) issued to ProBiz / authorized manager",
      "All foreign corporate documents authenticated by Qatar Embassy in country of origin & MOFA Qatar"
    ]
  }
];

export default function ServiceDetailPage({
  serviceId = 'business-setup',
  onBack,
  onOpenQuote,
  onSelectOtherService
}) {
  const activeTab = serviceId || 'business-setup';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const handleSwitchService = (id) => {
    if (onSelectOtherService) {
      onSelectOtherService(id);
    }
  };

  const service = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];
  const Icon = iconMap[service.icon] || Briefcase;

  const isBusinessSetup = service.id === 'business-setup';
  const isHealthcare = service.id === 'healthcare-services';
  const isProServices = service.id === 'pro-services';
  const isBrandingDigital = service.id === 'branding-digital';
  const isTranslation = service.id === 'translation-services';
  const isRecruitmentHr = service.id === 'recruitment-hr';

  // Specific FAQs for this service or general
  const serviceFaqs = isBusinessSetup
    ? FAQS.slice(0, 3)
    : FAQS.filter((f, idx) => idx >= 2);

  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 font-sans pb-24">
      {/* ── STICKY TOP SUB-BAR ── */}
      <div className="sticky top-[70px] z-30 bg-[#0A0E17]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#DFBA73] hover:text-white transition-colors py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg hover:bg-white/5 shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </button>

          {/* Service Navigation Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1.5 px-1 max-w-[65vw] sm:max-w-none">
            {SERVICES.map((s) => {
              const active = s.id === activeTab;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSwitchService(s.id)}
                  className={`text-xs px-3 sm:px-3.5 py-1.5 rounded-full font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#C9A84C] text-black font-bold shadow-md scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {s.title.split('&')[0].trim()}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onOpenQuote(service.title)}
              className="btn-gold text-xs px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap cursor-pointer"
            >
              <span className="hidden sm:inline">Get Consultation</span>
              <span className="sm:hidden">Consult</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#121927] via-[#0B0F1A] to-[#070A10] pt-12 pb-16 sm:pb-24 border-b border-[#C5A059]/20 min-h-[480px] flex flex-col justify-center">
        {/* Business Setup Background Image & Overlays */}
        {isBusinessSetup && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={businessSetupBgImg}
              alt="Business Setup & Company Formation Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows meeting & skyline on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        {/* PRO Services Background Image & Overlays */}
        {isProServices && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={proServicesBgImg}
              alt="PRO & Government Services Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows documents, stamp & skyline on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        {/* Recruitment & HR Background Image & Overlays */}
        {isRecruitmentHr && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={recruitmentHrBgImg}
              alt="Recruitment & HR Support Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows hiring team on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        {/* Translation & Document Services Background Image & Overlays */}
        {isTranslation && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={translationDocBgImg}
              alt="Translation & Document Services Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows document signing on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        {/* Branding & Digital Background Image & Overlays */}
        {isBrandingDigital && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={brandingDigitalBgImg}
              alt="Branding, Marketing & Digital Solutions Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows creative studio & skyline on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        {/* Healthcare Background Image & Overlays */}
        {isHealthcare && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={mophBgImg}
              alt="MOPH & Healthcare Licensing Qatar"
              className="w-full h-full object-cover object-center lg:object-right opacity-45 sm:opacity-55 lg:opacity-65"
            />
            {/* Desktop Left-to-Right Gradient: Keeps text super readable on left, shows image on right */}
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            {/* Mobile Top-to-Bottom Gradient */}
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.92) 0%, rgba(7,10,16,0.85) 50%, rgba(7,10,16,0.95) 100%)',
              }}
            />
            {/* Bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-[#070A10]/50" />
          </div>
        )}

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Vertical Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#DFBA73] text-xs font-bold mb-5 backdrop-blur-sm">
              <Icon className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>VERTICAL {service.number} • {service.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.15] drop-shadow-md">
              {service.title}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-[#DFBA73] font-medium mt-4 drop-shadow-sm">
              {service.tagline}
            </p>

            {/* Full description */}
            <p className="text-slate-200 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl drop-shadow-sm">
              {service.fullDesc}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="btn-gold px-6 py-3 text-sm font-bold flex items-center gap-2 shadow-lg"
              >
                <span>Book Setup Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-5 py-3 text-sm font-semibold flex items-center gap-2 backdrop-blur-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Highlights (Business Setup) */}
          {isBusinessSetup && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DFBA73] font-display">100%</div>
                <div className="text-xs text-white font-semibold mt-1">Foreign Ownership</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Permitted under Law No. 1</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DFBA73] font-display">7 - 14 Days</div>
                <div className="text-xs text-white font-semibold mt-1">Typical CR Issuance</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Fast-track ministry clearance</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DFBA73] font-display">0%</div>
                <div className="text-xs text-white font-semibold mt-1">Personal Income Tax</div>
                <div className="text-[11px] text-slate-400 mt-0.5">10% competitive corporate tax</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#DFBA73] font-display">10+ Years</div>
                <div className="text-xs text-white font-semibold mt-1">Team Expertise</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Direct ministry coordination</div>
              </div>
            </div>
          )}

          {/* Quick Highlights (Healthcare Services) */}
          {isHealthcare && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">DataFlow PSV</div>
                <div className="text-xs text-white font-semibold mt-1">Verification Filing</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Primary Source Verification support</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">DHP & QCHP</div>
                <div className="text-xs text-white font-semibold mt-1">Practitioner Licensing</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Doctors, nurses, dentists, allied</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Prometric Exam</div>
                <div className="text-xs text-white font-semibold mt-1">Booking & Scheduling</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Exam preparation guidance</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Facility Licences</div>
                <div className="text-xs text-white font-semibold mt-1">MOPH Pre-Approvals</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Clinics, polyclinics & pharmacies</div>
              </div>
            </div>
          )}

          {/* Quick Highlights (PRO & Government Services) */}
          {isProServices && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Ministry Liaison</div>
                <div className="text-xs text-white font-semibold mt-1">Direct Coordination</div>
                <div className="text-[11px] text-slate-400 mt-0.5">MOCI, MOI, MADLSA & MOJ</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Labour & QID</div>
                <div className="text-xs text-white font-semibold mt-1">Employee Processing</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Work visas & residence permits</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Annual Renewals</div>
                <div className="text-xs text-white font-semibold mt-1">Zero Downtime</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CR, Trade Licence & Computer Card</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Attestation</div>
                <div className="text-xs text-white font-semibold mt-1">Legal Clearance</div>
                <div className="text-[11px] text-slate-400 mt-0.5">MOFA, Chamber & Embassy clearance</div>
              </div>
            </div>
          )}

          {/* Quick Highlights (Branding, Marketing & Digital) */}
          {isBrandingDigital && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Brand Identity</div>
                <div className="text-xs text-white font-semibold mt-1">Logo & Guidelines</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Complete corporate visual system</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Web Portals</div>
                <div className="text-xs text-white font-semibold mt-1">Modern & Responsive</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Corporate websites & landing pages</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Digital Growth</div>
                <div className="text-xs text-white font-semibold mt-1">Targeted Campaigns</div>
                <div className="text-[11px] text-slate-400 mt-0.5">SEO, social media & ad acquisition</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Software / ERP</div>
                <div className="text-xs text-white font-semibold mt-1">Custom Business Tech</div>
                <div className="text-[11px] text-slate-400 mt-0.5">CRM, workflow automation & portals</div>
              </div>
            </div>
          )}

          {/* Quick Highlights (Translation & Document Services) */}
          {isTranslation && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Certified Arabic</div>
                <div className="text-xs text-white font-semibold mt-1">Court & Ministry Ready</div>
                <div className="text-[11px] text-slate-400 mt-0.5">English-Arabic legal translations</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Attestation</div>
                <div className="text-xs text-white font-semibold mt-1">MOFA & Embassies</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Qatar Embassy & Consular certification</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Contracts & AOA</div>
                <div className="text-xs text-white font-semibold mt-1">Corporate Agreements</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Bylaws, resolutions & financial audits</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Fast Turnaround</div>
                <div className="text-xs text-white font-semibold mt-1">Accuracy Guaranteed</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Express same-day legal translations</div>
              </div>
            </div>
          )}

          {/* Quick Highlights (Recruitment & HR Support) */}
          {isRecruitmentHr && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Talent Sourcing</div>
                <div className="text-xs text-white font-semibold mt-1">Local & Global Reach</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Specialist pipelines for Qatar</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Executive Search</div>
                <div className="text-xs text-white font-semibold mt-1">Leadership Roles</div>
                <div className="text-[11px] text-slate-400 mt-0.5">C-suite, managers & directors</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">Candidate Vetting</div>
                <div className="text-xs text-white font-semibold mt-1">Screening & Interviews</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Credentials & background checks</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0A0E17]/80 backdrop-blur-md border border-[#C5A059]/25">
                <div className="text-xl sm:text-2xl font-extrabold text-[#DFBA73] font-display">MADLSA / Labour</div>
                <div className="text-xs text-white font-semibold mt-1">Workforce Clearances</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Ministry of Labour visa quotas</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── MAIN CONTENT SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* 1. STEP-BY-STEP QATAR FORMATION ROADMAP (if Business Setup) */}
        {isBusinessSetup && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-3">
              <Landmark className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Formation Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Step-by-Step Qatar Business Setup Roadmap
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mb-10">
              From commercial name reservation to corporate bank account activation, ProBiz manages every regulatory milestone.
            </p>

            <div className="space-y-4">
              {QATAR_JOURNEY.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0D121F] border border-white/5 hover:border-[#C5A059]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#DFBA73] to-[#C5A059] text-black font-extrabold flex items-center justify-center text-lg font-display flex-shrink-0 shadow-lg">
                      {step.step}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="text-lg font-bold text-white font-display">
                          {step.phase}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#DFBA73] bg-[#DFBA73]/10 px-2 py-0.5 rounded border border-[#DFBA73]/20">
                          {step.ministry}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                        {step.desc}
                      </p>
                      <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Deliverable: {step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 md:text-right flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                    <span className="text-xs text-slate-400">Estimated Duration</span>
                    <span className="text-sm font-bold text-[#DFBA73] mt-0.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. INCLUDED OFFERINGS & CAPABILITIES (Features List) */}
        {service.features && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Service Scope</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Comprehensive Deliverables & Support Included
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mb-8">
              Every detail handled by our specialist team with guaranteed regulatory compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0E1524] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. GROUPS / CATEGORIES (if PRO or Translation) */}
        {service.groups && (
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
              Detailed Scope of Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.groups.map((grp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1524] border border-white/10">
                  <h3 className="text-lg font-bold text-[#DFBA73] mb-4 pb-2 border-b border-white/10">
                    {grp.category}
                  </h3>
                  <ul className="space-y-3">
                    {grp.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-1" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4B. SECTIONS (Branding, Marketing & Web Development) */}
        {service.sections && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-3">
              <Laptop className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">
                Full Service Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Branding, Marketing & Web Development Solutions
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mb-8">
              From high-performance corporate websites and Qatar payment gateways to brand identity and lead generation campaigns.
            </p>

            {/* Special Web Development Spotlight */}
            {service.id === 'branding-digital' && (
              <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#101726] via-[#0E1524] to-[#121B2F] border border-[#C5A059]/40 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                  <div>
                    <div className="badge-gold text-xs inline-flex items-center gap-1.5 mb-2">
                      <span>Featured Technology Pillar</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      Website Development & Software Solutions in Qatar
                    </h3>
                    <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
                      We engineer fast, secure, bilingual (Arabic & English) corporate websites, high-converting landing pages, e-commerce stores, and custom business portals integrated with local Qatar payment solutions.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenQuote('Web Development & Software Solutions')}
                    className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
                  >
                    Request Web Project Quote
                  </button>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Supported Technologies, Frameworks & Payment Gateways:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'WordPress', 'WooCommerce', 'Shopify', 'Tailwind CSS', 'SkipCash', 'QPay', 'Sadad', 'REST APIs', 'Cloud Hosting & SSL'].map((tech) => (
                      <span key={tech} className="text-xs font-mono font-medium text-[#DFBA73] bg-[#DFBA73]/10 border border-[#DFBA73]/25 px-3 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Verticals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.sections.map((sec, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1524] border border-white/10 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-0.5 rounded border border-[#DFBA73]/20">
                        VERTICAL 0{i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-display">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {sec.desc}
                    </p>
                    <ul className="space-y-2.5">
                      {sec.items.map((it, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Tailored to your business</span>
                    <button
                      onClick={() => onOpenQuote(`${service.title} - ${sec.title}`)}
                      className="text-xs font-bold text-[#DFBA73] hover:underline flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4C. CATEGORIES (Healthcare Services) */}
        {service.categories && (
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
              Healthcare Regulatory Pillars & Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.categories.map((cat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1524] border border-white/10">
                  <h3 className="text-lg font-bold text-[#DFBA73] mb-2">{cat.title}</h3>
                  <p className="text-xs text-slate-400 mb-4">{cat.desc}</p>
                  <ul className="space-y-2">
                    {cat.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. REQUIRED DOCUMENTS CHECKLIST (if Business Setup) */}
        {isBusinessSetup && (
          <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121A2C] via-[#0E1524] to-[#121A2C] border border-[#C5A059]/30">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-[#C9A84C]" />
              <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Required Documentation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
              Documents Checklist for Company Formation
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mb-8">
              Prepare these initial documents so ProBiz can immediately start filing your company registration with the Ministry of Commerce & Industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DOCUMENTS_CHECKLIST.map((docGrp, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#090D18]/80 border border-white/5">
                  <h3 className="text-base font-bold text-[#DFBA73] mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#DFBA73]" />
                    <span>{docGrp.category}</span>
                  </h3>
                  <ul className="space-y-3">
                    {docGrp.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400 text-center sm:text-left">
                Need customized assistance or translations of non-English documents?
              </span>
              <button
                onClick={() => onOpenQuote(`${service.title} - Document Review`)}
                className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
              >
                Request Free Document Review
              </button>
            </div>
          </div>
        )}

        {/* 6. SERVICE FAQS */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
            Common Questions About {service.title}
          </h2>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D121F] border border-white/5">
                <h4 className="text-base font-bold text-white mb-2 font-display">
                  {faq.q}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. BOTTOM CALL TO ACTION BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172135] via-[#111929] to-[#172135] border border-[#C5A059]/40 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              Ready to Form Your Company in Qatar?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Speak directly with our senior corporate setup consultants. We evaluate your business model, recommend the best legal structure, and outline exact timelines and transparent government costs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="btn-gold px-8 py-3.5 text-sm font-bold shadow-xl"
              >
                Schedule Free Consultation
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn-outline-gold px-6 py-3.5 text-sm font-semibold flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#DFBA73]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-400">
              Office #49, 10th Floor, Hleyton Tower, Al Baladhiya St., Al Miqrab, Doha, Qatar
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
