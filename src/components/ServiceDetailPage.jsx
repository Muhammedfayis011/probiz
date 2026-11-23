import React, { useEffect } from 'react';
import {
  SERVICES,
  COMPANY_INFO,
  FAQS,
  PRO_SERVICES_FAQS,
  TRANSLATION_SERVICES_FAQS,
  RECRUITMENT_HR_FAQS,
  HEALTHCARE_SERVICES_FAQS,
  BRANDING_MARKETING_FAQS
} from '../data/probizData';
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
  Award,
  Sparkles,
  Workflow
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

/* ── 1. SERVICE-SPECIFIC STEP-BY-STEP WORKFLOWS ── */
const SERVICE_WORKFLOWS = {
  'business-setup': {
    title: 'Step-by-Step Qatar Business Setup Roadmap',
    subtitle: 'From commercial name reservation to corporate bank account activation, ProBiz manages every regulatory milestone.',
    steps: [
      {
        step: '01',
        phase: 'Name & Activity Approval',
        ministry: 'Ministry of Commerce & Industry (MOCI)',
        desc: 'Reservation of unique trade name (Arabic/English) and formal selection of approved commercial activities under Qatar classification.',
        duration: '1 - 2 Days',
        deliverable: 'Commercial Name Reservation Certificate'
      },
      {
        step: '02',
        phase: 'Articles of Association (AoA)',
        ministry: 'Ministry of Justice (MOJ)',
        desc: 'Drafting corporate bylaws, shareholder distribution, 100% foreign ownership or local sponsorship clauses, and formal notarization.',
        duration: '2 - 3 Days',
        deliverable: 'Notarized Articles of Association'
      },
      {
        step: '03',
        phase: 'Commercial Registration (CR)',
        ministry: 'MOCI & Qatar Chamber',
        desc: 'Official issuance of company Commercial Registration certificate establishing legal entity status in the State of Qatar.',
        duration: '2 - 4 Days',
        deliverable: 'Official Commercial Registration (CR)'
      },
      {
        step: '04',
        phase: 'Office Lease & Municipality Trade Licence',
        ministry: 'Ministry of Municipality & Civil Defence',
        desc: 'Securing registered commercial office lease, Civil Defence safety clearance, and municipality signage inspection approval.',
        duration: '4 - 7 Days',
        deliverable: 'Municipality Trade Licence (Rukhsah)'
      },
      {
        step: '05',
        phase: 'Establishment Card (Computer Card)',
        ministry: 'Ministry of Interior (MOI)',
        desc: 'Registration of official company seal, authorized signatories, and immigration file for issuing work visas and Residence Permits (QID).',
        duration: '2 - 3 Days',
        deliverable: "Establishment Card (Qayd Al-Munsha'a)"
      },
      {
        step: '06',
        phase: 'Corporate Bank Account & Tax Card',
        ministry: 'Qatar Central Bank & GTA',
        desc: 'Opening operational corporate account with QNB, CBQ, QIIB or Dukhan Bank, and General Tax Authority (Dhareeba) registration.',
        duration: '5 - 10 Days',
        deliverable: 'Operational Bank Account & Tax Card'
      }
    ]
  },
  'pro-services': {
    title: 'Step-by-Step Qatar PRO & Government Processing Workflow',
    subtitle: 'End-to-end management of ministry submissions, employee clearances, visa quotas, and statutory renewals.',
    steps: [
      {
        step: '01',
        phase: 'Labour Quota Approval & Visa Block',
        ministry: 'Ministry of Labour (MADLSA)',
        desc: 'Filing commercial visa block applications, occupation allocation, and nationality quota authorizations.',
        duration: '3 - 5 Days',
        deliverable: 'Approved Electronic Labour Quota'
      },
      {
        step: '02',
        phase: 'Work Visa & Entry Permit Issuance',
        ministry: 'Ministry of Interior (MOI)',
        desc: 'Processing official entry work visas for expatriate staff, specialized managers, and technical workers.',
        duration: '2 - 4 Days',
        deliverable: 'Official MOI Entry Visa Clearance'
      },
      {
        step: '03',
        phase: 'Medical Commission & CEID Fingerprints',
        ministry: 'MOPH & Ministry of Interior',
        desc: 'Expedited scheduling for employee health screening (blood tests, chest X-rays) and criminal evidence biometric scanning.',
        duration: '2 - 3 Days',
        deliverable: 'Fitness Certificate & Biometric Record'
      },
      {
        step: '04',
        phase: 'QID & Residence Permit Stamping',
        ministry: 'MOI Passports & Immigration',
        desc: 'Final residence permit authorization, printing, and delivery of official Qatar National ID (QID) smart card.',
        duration: '1 - 2 Days',
        deliverable: 'Qatar Residence Permit (QID Smart Card)'
      },
      {
        step: '05',
        phase: 'Labour Contract & WPS Activation',
        ministry: 'MADLSA & Corporate Bank',
        desc: 'Authentication of bilingual employment contracts on MADLSA digital portal and Wage Protection System setup.',
        duration: '2 - 3 Days',
        deliverable: 'Authenticated Contract & WPS Registration'
      },
      {
        step: '06',
        phase: 'Annual Corporate Renewals',
        ministry: 'MOCI, MOI & Municipality',
        desc: 'Proactive calendar management for annual renewal of CR, Trade Licence, Civil Defence, and Establishment Card.',
        duration: 'Ongoing Retainer',
        deliverable: 'Zero-Downtime Entity Compliance'
      }
    ]
  },
  'translation-services': {
    title: 'Step-by-Step Qatar Legal Translation & Attestation Workflow',
    subtitle: 'Sworn, court-approved bilingual translations and multi-tier governmental attestation accepted across all authorities.',
    steps: [
      {
        step: '01',
        phase: 'Document Assessment & Terminology Review',
        ministry: 'ProBiz Legal Translation Bureau',
        desc: 'Reviewing source language, legal context, jurisdictional requirements, and target government department criteria.',
        duration: 'Same Day',
        deliverable: 'Document Review & Feasibility Report'
      },
      {
        step: '02',
        phase: 'Certified Arabic-English Sworn Translation',
        ministry: 'Accredited Sworn Translators',
        desc: 'Flawless line-by-line legal translation adhering to strict Qatar statutory terminology and official terminology databases.',
        duration: '1 - 2 Days',
        deliverable: 'Official Sworn Translation Draft'
      },
      {
        step: '03',
        phase: 'Linguistic Audit & Seal Endorsement',
        ministry: 'Certified Review Board',
        desc: 'Dual-pass verification by senior legal linguists, stamping with accredited translation seals and legal signatures.',
        duration: 'Same Day',
        deliverable: 'Accredited Certified Translation'
      },
      {
        step: '04',
        phase: 'Ministry of Justice (MOJ) Notarization',
        ministry: 'Ministry of Justice Documentation Dept',
        desc: 'Formal verification, sworn stamp notarization, and official legal registry authentication in Doha.',
        duration: '1 - 2 Days',
        deliverable: 'Ministry of Justice (MOJ) Authentication'
      },
      {
        step: '05',
        phase: 'Ministry of Foreign Affairs (MOFA) Attestation',
        ministry: 'MOFA Consular Affairs Dept',
        desc: 'Consular verification, official revenue voucher clearance, and sovereign government authentication seal.',
        duration: '1 - 2 Days',
        deliverable: 'Official MOFA Qatar Attestation Stamp'
      },
      {
        step: '06',
        phase: 'Embassy Legalization & Authority Filing',
        ministry: 'Foreign Embassies & Qatar Courts/MOCI',
        desc: 'Final legalization by foreign diplomatic missions or immediate filing with Qatar courts and licensing bodies.',
        duration: '2 - 4 Days',
        deliverable: 'Globally Validated & Accepted Document'
      }
    ]
  },
  'recruitment-hr': {
    title: 'Step-by-Step Qatar Talent Acquisition & Hiring Roadmap',
    subtitle: 'Strategic executive search, candidate vetting, labour quota alignment, and seamless workforce onboarding.',
    steps: [
      {
        step: '01',
        phase: 'Role Profiling & Job Specification',
        ministry: 'Employer Consultation & Benchmarking',
        desc: 'In-depth position profiling, salary benchmarking in the Qatar market, and establishment of core candidate criteria.',
        duration: '1 - 2 Days',
        deliverable: 'Formal Role Specification & Hiring Blueprint'
      },
      {
        step: '02',
        phase: 'Candidate Sourcing & Talent Scouting',
        ministry: 'Local & Global Talent Networks',
        desc: 'Scouting top-tier qualified talent from Qatar local resident candidate pools and international specialist pipelines.',
        duration: '3 - 7 Days',
        deliverable: 'Targeted Candidate Longlist'
      },
      {
        step: '03',
        phase: 'Rigorous Vetting & Competency Screening',
        ministry: 'ProBiz Candidate Assessment',
        desc: 'Detailed resume auditing, credentials check, behavioral interviews, and technical competency evaluations.',
        duration: '2 - 4 Days',
        deliverable: 'Verified Candidate Shortlist & Notes'
      },
      {
        step: '04',
        phase: 'Employer Interviews & Selection',
        ministry: 'Coordinated Interview Loops',
        desc: 'Scheduling direct panel interviews, technical tests, reference checks, and final candidate appraisal.',
        duration: '3 - 5 Days',
        deliverable: 'Finalist Selection & Evaluation Report'
      },
      {
        step: '05',
        phase: 'Offer Negotiation & Labour Contract',
        ministry: 'MADLSA Compliant Standards',
        desc: 'Drafting structured offer letters, compensation packages, and bilingual employment contracts complying with Qatar Labour Law.',
        duration: '2 - 3 Days',
        deliverable: 'Signed Employment Agreement'
      },
      {
        step: '06',
        phase: 'Visa Clearance & Onboarding Coordination',
        ministry: 'Ministry of Interior (MOI)',
        desc: 'Expedited work visa filing, relocation coordination, flight booking assistance, and formal Day-1 corporate induction.',
        duration: '5 - 10 Days',
        deliverable: 'Successful Candidate Placement & Deployment'
      }
    ]
  },
  'healthcare-services': {
    title: 'Step-by-Step MOPH Healthcare Licensing & Compliance Roadmap',
    subtitle: 'DataFlow Primary Source Verification, Prometric examination scheduling, DHP licensing, and clinic facility approvals.',
    steps: [
      {
        step: '01',
        phase: 'Credential Review & DataFlow PSV Application',
        ministry: 'DataFlow Group Primary Source Verification',
        desc: 'Authenticating professional medical degrees, transcripts, valid home licenses, and verifiable experience records directly at source.',
        duration: '15 - 25 Days',
        deliverable: 'Positive DataFlow PSV Verification Report'
      },
      {
        step: '02',
        phase: 'Prometric Qualifying Examination Scheduling',
        ministry: 'Prometric Testing Center Qatar',
        desc: 'Booking exam slots, syllabus briefing, study resources, and qualifying score registration for doctors, nurses, and allied staff.',
        duration: '3 - 7 Days',
        deliverable: 'Prometric Exam Pass Result Certificate'
      },
      {
        step: '03',
        phase: 'DHP Initial Evaluation & Scope of Practice',
        ministry: 'Department of Healthcare Professions (DHP)',
        desc: 'Filing evaluation dossiers on the MOPH digital portal to obtain formal pre-approval and assigned clinical scope of practice.',
        duration: '5 - 10 Days',
        deliverable: 'Official DHP Evaluation Letter'
      },
      {
        step: '04',
        phase: 'Facility Sponsoring & Health Clearance',
        ministry: 'Licensed Qatar Medical Facility & MOPH',
        desc: 'Linking practitioner file with authorized sponsoring clinic/hospital, Medical Commission screening, and CEID criminal clearance.',
        duration: '3 - 5 Days',
        deliverable: 'Verified Facility Sponsorship Linkage'
      },
      {
        step: '05',
        phase: 'Medical Practitioner License Issuance',
        ministry: 'MOPH Licensing Department',
        desc: 'Final regulatory validation and issuance of the official Qatar Medical Practice License smart registration.',
        duration: '2 - 4 Days',
        deliverable: 'Official Qatar Healthcare Practice License'
      },
      {
        step: '06',
        phase: 'Facility Architectural & Operational Licensing',
        ministry: 'MOPH Healthcare Facilities Dept',
        desc: 'Engineering floor plans review, biomedical waste agreements, Civil Defence clearance, and on-site MOPH inspection.',
        duration: '15 - 30 Days',
        deliverable: 'Official Healthcare Facility Operating License'
      }
    ]
  },
  'branding-digital': {
    title: 'Step-by-Step Brand Identity & Digital Platform Development Workflow',
    subtitle: 'From brand positioning and bilingual identity to custom web development, Qatar payment gateways, and targeted acquisition.',
    steps: [
      {
        step: '01',
        phase: 'Brand Strategy & Market Discovery',
        ministry: 'Creative Brief & Positioning Roadmap',
        desc: 'Analyzing target market demographics in Qatar/GCC, evaluating competitor landscapes, and defining clear value propositions.',
        duration: '2 - 4 Days',
        deliverable: 'Brand Strategy & Technical Roadmap'
      },
      {
        step: '02',
        phase: 'Bilingual Visual Identity & Logo Crafting',
        ministry: 'Design Studio & Arabic Calligraphy',
        desc: 'Designing bilingual English/Arabic logos, luxury color systems, bespoke typography, and comprehensive brand guideline books.',
        duration: '4 - 7 Days',
        deliverable: 'Complete Corporate Visual Identity System'
      },
      {
        step: '03',
        phase: 'UI/UX Wireframing & Interactive Prototyping',
        ministry: 'Digital Product Architecture',
        desc: 'Creating conversion-optimized wireframes, intuitive mobile user flows, and interactive high-fidelity prototypes in Figma.',
        duration: '3 - 6 Days',
        deliverable: 'Approved High-Fidelity UI/UX Prototype'
      },
      {
        step: '04',
        phase: 'Modern Web Development & Software Engineering',
        ministry: 'Full-Stack Engineering & Cloud Hosting',
        desc: 'Coding high-performance responsive web portals in React, Next.js, or WordPress with secure SSL hosting and database integration.',
        duration: '7 - 14 Days',
        deliverable: 'Functional Web Platform / Application'
      },
      {
        step: '05',
        phase: 'Qatar Payment Gateways & API Integration',
        ministry: 'Fintech Integration & Security Testing',
        desc: 'Integrating local Qatar payment gateways (SkipCash, QPay, Sadad), CRM webhooks, analytics tracking, and automated receipts.',
        duration: '3 - 5 Days',
        deliverable: 'Live Secure Payment & API Systems'
      },
      {
        step: '06',
        phase: 'Quality Assurance, SEO & Digital Growth Launch',
        ministry: 'Performance Tuning & Search Optimization',
        desc: 'Multi-device mobile responsiveness audits, speed optimization, local Qatar SEO setup, and targeted digital advertising launch.',
        duration: '3 - 5 Days',
        deliverable: 'Fully Deployed Platform & Acquisition Campaigns'
      }
    ]
  }
};

/* ── 2. SERVICE-SPECIFIC REQUIRED DOCUMENTS CHECKLISTS ── */
const SERVICE_DOCUMENTS = {
  'business-setup': [
    {
      category: 'Individual Foreign Investors',
      items: [
        'Valid passport copy (valid for at least 6 months) for each foreign shareholder',
        'Personal CV / Professional profile of shareholders',
        'Proposed commercial trade names (in Arabic & English priority order)',
        'Three-month personal bank statement or proof of financial capability',
        'No Objection Certificate (NOC) if shareholder is currently a resident in Qatar'
      ]
    },
    {
      category: 'Corporate Parent Companies (Branch / Subsidiary)',
      items: [
        'Certificate of Incorporation / Commercial Registration of the parent company',
        'Memorandum and Articles of Association (MOA / AOA) of parent company',
        'Board Resolution authorizing establishment of the Qatar entity and appointing legal representative',
        'Power of Attorney (POA) issued to ProBiz / authorized manager',
        'All foreign corporate documents authenticated by Qatar Embassy in country of origin & MOFA Qatar'
      ]
    }
  ],
  'pro-services': [
    {
      category: 'Company Entity Documents',
      items: [
        'Valid Commercial Registration (CR) copy registered with MOCI',
        'Active Municipality Trade Licence (Rukhsah) and Civil Defence certificate',
        'Company Establishment Card (Computer Card) showing authorized signatories',
        'General Tax Authority (GTA / Dhareeba) tax card certificate'
      ]
    },
    {
      category: 'Employee & Applicant Records',
      items: [
        'Clear passport copy valid for minimum 6 months from entry date',
        'Original certified & attested educational degree certificate (where applicable)',
        'Signed standard Qatar Ministry of Labour employment contract',
        'Police clearance certificate (PCC) attested by MOFA for specific visa categories'
      ]
    }
  ],
  'translation-services': [
    {
      category: 'Corporate & Legal Documents',
      items: [
        'Articles of Association (AOA) and corporate bylaws of domestic or foreign entities',
        'Commercial contracts, partnership agreements, and vendor service pacts',
        'Board resolutions, Power of Attorney (POA), and shareholder authorisations',
        'Audited balance sheets, financial statements, and court litigation briefs'
      ]
    },
    {
      category: 'Personal & Academic Credentials',
      items: [
        'University degrees, diplomas, academic transcripts, and school records',
        'Marriage certificates, birth certificates, and family status registers',
        'Police clearance certificates (Good Conduct Certificate) from home country',
        'Medical examination fitness reports and clinical licensure records'
      ]
    }
  ],
  'recruitment-hr': [
    {
      category: 'Employer Position Profile',
      items: [
        'Detailed job description, key performance indicators (KPIs), and reporting line',
        'Required academic qualifications, professional licensures, and years of experience',
        'Approved salary scale, housing/transport allowances, and performance bonus structure',
        'Active company visa block quotas and nationality authorizations from MADLSA'
      ]
    },
    {
      category: 'Candidate Verification Files',
      items: [
        'Comprehensive updated CV highlighting recent employment history and achievements',
        'Attested copies of university degrees and professional certifications',
        'Clear passport copy valid for at least 6 months with previous visa records',
        'Verifiable professional references from previous line managers and HR departments'
      ]
    }
  ],
  'healthcare-services': [
    {
      category: 'Healthcare Practitioner Credentials',
      items: [
        'Basic university medical/dental/nursing/allied degree certificate and transcripts',
        'Valid license to practice issued by the regulatory authority in country of origin',
        'Certificate of Good Standing (CGS) issued within the last 6 months',
        'Verifiable clinical experience certificates covering at least 3-5 years',
        'Valid passport copy with at least 6 months remaining validity'
      ]
    },
    {
      category: 'Healthcare Facility & Clinic Requirements',
      items: [
        'Approved architectural floor blueprints conforming to MOPH healthcare guidelines',
        'Civil Defence fire safety certificate and municipal engineering clearance',
        'Approved commercial lease agreement in a designated medical/commercial zone',
        'Contract with licensed biomedical waste management company in Qatar',
        'Medical Director appointment letter and medical equipment calibration log'
      ]
    }
  ],
  'branding-digital': [
    {
      category: 'Brand Strategy & Creative Brief',
      items: [
        'Company profile, mission statement, core brand values, and unique value proposition',
        'Target customer demographics across Qatar, GCC, or international markets',
        'Preferred design aesthetics, color preferences, and visual reference benchmarks',
        'Official approved English and Arabic trade names as listed on the Commercial Registration'
      ]
    },
    {
      category: 'Web Platform & Software Scope',
      items: [
        'Structured sitemap, navigation architecture, and desired functionality list',
        'High-resolution branding assets, product catalogs, and corporate photography',
        'Qatar merchant payment gateway account details (SkipCash, QPay, Sadad) where applicable',
        'Domain registrar access credentials, corporate email preferences, and hosting requirements'
      ]
    }
  ]
};

/* ── 3. SERVICE-SPECIFIC CTA CONFIGURATION ── */
const SERVICE_CTA_CONFIG = {
  'business-setup': {
    heading: 'Ready to Form Your Company in Qatar?',
    desc: 'Speak directly with our senior corporate setup consultants. We evaluate your business model, recommend the best legal structure, and outline exact timelines and transparent government costs.',
    btnText: 'Schedule Free Consultation',
    reviewText: 'Need customized assistance or foreign corporate document attestation?',
    reviewBtn: 'Request Free Setup Assessment'
  },
  'pro-services': {
    heading: 'Need Reliable Corporate PRO Retainer Support in Qatar?',
    desc: 'Speak directly with our senior government liaison specialists. We eliminate administrative downtime, expedite employee visa quotas, and maintain seamless compliance across all Qatar ministries.',
    btnText: 'Request PRO Retainer Consultation',
    reviewText: 'Have pending employee visas or company licences needing urgent renewal?',
    reviewBtn: 'Request Free PRO Compliance Audit'
  },
  'translation-services': {
    heading: 'Need Certified Legal Translation or Document Attestation?',
    desc: 'Speak directly with our accredited translation team. We deliver court-approved, ministry-certified legal translations with express same-day turnaround across Doha.',
    btnText: 'Request Translation Quote',
    reviewText: 'Have complex foreign certificates or corporate contracts needing sworn translation?',
    reviewBtn: 'Request Free Document Review'
  },
  'recruitment-hr': {
    heading: 'Looking for Qualified Talent for Your Qatar Business?',
    desc: 'Connect directly with our corporate talent acquisition team. We scout, screen, and place high-caliber professionals tailored to your industry, team dynamics, and corporate culture.',
    btnText: 'Schedule Hiring Consultation',
    reviewText: 'Need specialized executive talent or volume workforce quota planning?',
    reviewBtn: 'Request Free Recruitment Scoping'
  },
  'healthcare-services': {
    heading: 'Need Expert Guidance on MOPH Healthcare Licensing in Qatar?',
    desc: 'Speak directly with our specialized medical regulatory consultants. We expedite DataFlow PSV, Prometric test scheduling, DHP professional licensing, and clinic facility approvals with complete accuracy.',
    btnText: 'Schedule Healthcare Consultation',
    reviewText: 'Need fast-track DataFlow verification or healthcare facility blueprint review?',
    reviewBtn: 'Request Free Healthcare Case Audit'
  },
  'branding-digital': {
    heading: 'Ready to Elevate Your Brand & Digital Presence in Qatar?',
    desc: 'Speak directly with our creative branding and digital specialists. We craft high-impact identities, custom software, and digital marketing strategies tailored to your market.',
    btnText: 'Request Brand & Web Proposal',
    reviewText: 'Need an e-commerce website with local Qatar payment gateways (SkipCash, QPay)?',
    reviewBtn: 'Request Free Digital Consultation'
  }
};

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

  const service = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];
  const Icon = iconMap[service.icon] || Briefcase;

  const isBusinessSetup = service.id === 'business-setup';
  const isHealthcare = service.id === 'healthcare-services';
  const isProServices = service.id === 'pro-services';
  const isBrandingDigital = service.id === 'branding-digital';
  const isTranslation = service.id === 'translation-services';
  const isRecruitmentHr = service.id === 'recruitment-hr';

  // Specific FAQs for this service or general
  const serviceFaqs = isProServices
    ? PRO_SERVICES_FAQS
    : isTranslation
    ? TRANSLATION_SERVICES_FAQS
    : isRecruitmentHr
    ? RECRUITMENT_HR_FAQS
    : isHealthcare
    ? HEALTHCARE_SERVICES_FAQS
    : isBrandingDigital
    ? BRANDING_MARKETING_FAQS
    : isBusinessSetup
    ? FAQS.slice(0, 3)
    : FAQS.filter((f, idx) => idx >= 2);

  const currentWorkflow = SERVICE_WORKFLOWS[activeTab] || SERVICE_WORKFLOWS['business-setup'];
  const currentDocuments = SERVICE_DOCUMENTS[activeTab] || SERVICE_DOCUMENTS['business-setup'];
  const ctaConfig = SERVICE_CTA_CONFIG[activeTab] || SERVICE_CTA_CONFIG['business-setup'];

  return (
    <div className="min-h-screen bg-[#070A10] text-slate-100 font-sans pb-24">
      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#121927] via-[#0B0F1A] to-[#070A10] pt-12 pb-16 sm:pb-24 border-b border-[#C5A059]/20 min-h-[480px] flex flex-col justify-center">
        {/* Business Setup Background Image & Overlays */}
        {isBusinessSetup && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={businessSetupBgImg}
              alt="Business Setup & Company Formation Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        {/* PRO Services Background Image & Overlays */}
        {isProServices && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={proServicesBgImg}
              alt="PRO & Government Services Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        {/* Recruitment & HR Background Image & Overlays */}
        {isRecruitmentHr && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={recruitmentHrBgImg}
              alt="Recruitment & HR Support Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        {/* Translation & Document Services Background Image & Overlays */}
        {isTranslation && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={translationDocBgImg}
              alt="Translation & Document Services Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        {/* Branding & Digital Background Image & Overlays */}
        {isBrandingDigital && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={brandingDigitalBgImg}
              alt="Branding, Marketing & Digital Solutions Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        {/* Healthcare Background Image & Overlays */}
        {isHealthcare && (
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src={mophBgImg}
              alt="MOPH & Healthcare Licensing Qatar"
              className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
            />
            <div
              className="absolute inset-0 hidden sm:block"
              style={{
                background:
                  'linear-gradient(90deg, rgba(7,10,16,0.97) 0%, rgba(7,10,16,0.93) 38%, rgba(7,10,16,0.72) 60%, rgba(7,10,16,0.35) 82%, rgba(7,10,16,0.2) 100%)',
              }}
            />
            <div
              className="absolute inset-0 sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(7,10,16,0.72) 0%, rgba(7,10,16,0.45) 45%, rgba(7,10,16,0.85) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A10]/90 via-transparent to-[#070A10]/40" />
          </div>
        )}

        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Small Back Arrow Button */}
            <div className="mb-4">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#DFBA73] hover:text-white transition-all py-1.5 px-3 rounded-full bg-[#0A0E17]/80 hover:bg-[#0A0E17] border border-[#C5A059]/30 hover:border-[#DFBA73] backdrop-blur-md cursor-pointer group shadow-sm"
                aria-label="Back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#DFBA73] transition-transform group-hover:-translate-x-1" />
                <span>Back</span>
              </button>
            </div>

            {/* Service Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#DFBA73] text-xs font-bold mb-5 backdrop-blur-sm">
              <Icon className="w-3.5 h-3.5 text-[#DFBA73]" />
              <span>SERVICE {service.number} • {service.badge}</span>
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

            {/* Action Buttons (Responsive Media Query Setup) */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="btn-gold px-6 py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer w-full sm:w-auto"
              >
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={isBrandingDigital ? COMPANY_INFO.marketingWhatsappUrl : COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-5 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Quick WhatsApp Chat ({isBrandingDigital ? COMPANY_INFO.marketingWhatsappNumber : COMPANY_INFO.whatsappNumber})</span>
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
        
        {/* 1. STEP-BY-STEP WORKFLOW / ROADMAP (Rendered for ALL 6 Services) */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-3">
            <Workflow className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Regulatory Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            {currentWorkflow.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mb-10">
            {currentWorkflow.subtitle}
          </p>

          <div className="space-y-4">
            {currentWorkflow.steps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D121F] border border-white/5 hover:border-[#C5A059]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#DFBA73] to-[#C5A059] text-black font-extrabold flex items-center justify-center text-base sm:text-lg font-display flex-shrink-0 shadow-lg">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {step.phase}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#DFBA73] bg-[#DFBA73]/10 px-2 py-0.5 rounded border border-[#DFBA73]/20">
                        {step.ministry}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                    <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Deliverable: {step.deliverable}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 md:text-right flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                  <span className="text-xs text-slate-400">Estimated Duration</span>
                  <span className="text-xs sm:text-sm font-bold text-[#DFBA73] mt-0.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. INCLUDED OFFERINGS & CAPABILITIES (Features List) */}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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

        {/* 3. GROUPS / CATEGORIES (Detailed Scope of Activities) */}
        {service.groups && (
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-8">
              Detailed Scope of Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {service.groups.map((grp, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1524] border border-white/10">
                  <h3 className="text-lg font-bold text-[#DFBA73] mb-4 pb-2 border-b border-white/10">
                    {grp.category}
                  </h3>
                  <ul className="space-y-3">
                    {grp.items.map((it, j) => (
                      <li key={j} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
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

        {/* 4. SECTIONS (Branding, Marketing & Web Development) */}
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
                    className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap cursor-pointer"
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

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {service.sections.map((sec, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0E1524] border border-white/10 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-0.5 rounded border border-[#DFBA73]/20">
                        SECTION 0{i + 1}
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
                      className="text-xs font-bold text-[#DFBA73] hover:underline flex items-center gap-1 cursor-pointer"
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

        {/* 5. CATEGORIES (Healthcare Regulatory Pillars) */}
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

        {/* 6. REQUIRED DOCUMENTS CHECKLIST (Rendered for ALL 6 Services) */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121A2C] via-[#0E1524] to-[#121A2C] border border-[#C5A059]/30">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-[#C9A84C]" />
            <span className="text-xs font-bold text-[#C9A84C] uppercase tracking-wider">Required Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Documents Checklist & Prerequisites for {service.title}
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mb-8">
            Prepare these initial documents so ProBiz can immediately start filing and processing your requirements with the relevant ministries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {currentDocuments.map((docGrp, idx) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#090D18]/80 border border-white/5">
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
              {ctaConfig.reviewText}
            </span>
            <button
              onClick={() => onOpenQuote(`${service.title} - Document Review`)}
              className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap cursor-pointer"
            >
              {ctaConfig.reviewBtn}
            </button>
          </div>
        </div>

        {/* 7. SERVICE FAQS */}
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
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#0D121F] border border-white/5">
                <h4 className="text-base font-bold text-white mb-2 font-display">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 8. BOTTOM CALL TO ACTION BANNER (Tailored per service) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172135] via-[#111929] to-[#172135] border border-[#C5A059]/40 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              {ctaConfig.heading}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              {ctaConfig.desc}
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
              <button
                onClick={() => onOpenQuote(service.title)}
                className="btn-gold px-7 py-3.5 text-sm font-bold shadow-xl cursor-pointer w-full sm:w-auto justify-center"
              >
                {ctaConfig.btnText}
              </button>
              <a
                href={isBrandingDigital ? COMPANY_INFO.marketingWhatsappUrl : COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-5 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp ({isBrandingDigital ? COMPANY_INFO.marketingWhatsappNumber : COMPANY_INFO.whatsappNumber})</span>
              </a>
              <a
                href={`tel:${isBrandingDigital ? COMPANY_INFO.marketingPhoneRaw : COMPANY_INFO.phoneRaw}`}
                className="btn-outline-gold px-5 py-3.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-[#DFBA73] shrink-0" />
                <span>Call {isBrandingDigital ? COMPANY_INFO.marketingPhone : COMPANY_INFO.phone}</span>
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
