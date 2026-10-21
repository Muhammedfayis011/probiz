import React from 'react';
import PageHero from './PageHero';
import AboutSection from './AboutSection';
import { COMPANY_INFO, STATS } from '../data/probizData';
import { ShieldCheck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export default function AboutPage({ onBackToHome, onOpenQuote }) {
  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="About Us"
        badge="Corporate Profile"
        title="Your Business. Our Expertise."
        highlight="One Trusted Partner in Qatar."
        subtitle="ProBiz Consultancy Services is an integrated corporate solutions firm in Doha, bringing together multi-disciplinary specialists to handle licensing, setup, healthcare regulation, and corporate support."
        onBackToHome={onBackToHome}
      />

      {/* Main Narrative & 3 Pillars from brochure */}
      <AboutSection onOpenQuote={onOpenQuote} />

      {/* Stats Counter Section */}
      <section className="py-16 bg-[#080B12] border-t border-b border-white/5">
        <div className="probiz-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge-gold mb-2 inline-flex">Proven Track Record</div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Built on Trust, Precision & Local Regulatory Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0F1524] border border-[#C5A059]/20 text-center shadow-lg hover:border-[#DFBA73]/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-extrabold gold-text-gradient font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Registration & Qatar Entity Verification Card */}
      <section className="py-16 probiz-container">
        <div className="glass-card p-5 sm:p-8 md:p-12 border border-[#C5A059]/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFBA73]">
                <ShieldCheck className="w-4 h-4 text-[#DFBA73]" />
                <span>Officially Registered Qatar Corporate Entity</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Doha Headquarters & Ministry Liaison Office
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Operating directly from our executive offices at Hleyton Tower in Al Miqrab, Doha. Our consultants maintain daily liaison with the Ministry of Commerce & Industry (MOCI), Ministry of Public Health (MOPH), Ministry of Justice (MOJ), and Ministry of Interior (MOI).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Licensed under State of Qatar Commercial Regulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Confidential Client Data Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct Ministry PRO Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Dedicated Senior Corporate Consultant Assigned</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenQuote && onOpenQuote()}
                className="btn-gold py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 text-center"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold py-3 px-6 text-sm font-semibold flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
