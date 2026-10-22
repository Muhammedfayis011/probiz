import React from 'react';
import PageHero from './PageHero';
import SetupRoadmap from './SetupRoadmap';
import { ArrowRight, Landmark } from 'lucide-react';
import processBgImg from '../assets/process-roadmap-bg.jpg';

const MINISTRIES = [
  {
    name: 'Ministry of Commerce & Industry (MOCI)',
    role: 'Trade name approval, commercial activities classification, and Commercial Registration (CR) certificate issuance.',
    badge: 'Phase 1 & 3'
  },
  {
    name: 'Ministry of Justice (MOJ)',
    role: 'Drafting and formal notarization of the Articles of Association (AoA) with 100% foreign ownership or local partner clauses.',
    badge: 'Phase 2'
  },
  {
    name: 'Ministry of Municipality & Civil Defence',
    role: 'Office lease approval, commercial signage inspection, Civil Defence compliance, and Municipality Trade Licence (Rukhsah).',
    badge: 'Phase 4'
  },
  {
    name: 'Ministry of Interior (MOI)',
    role: 'Establishment Card (Computer Card) registration, company seal registration, and immigration portal activation for staff visas.',
    badge: 'Phase 5'
  },
  {
    name: 'General Tax Authority (GTA) & Corporate Banking',
    role: 'Dhareeba tax portal registration, Tax Identification Number (TIN), and corporate bank account opening documentation support.',
    badge: 'Phase 6'
  }
];

export default function ProcessPage({ onBackToHome, onOpenQuote }) {
  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="Our Process"
        badge="Execution Blueprint"
        title="Structured Setup Roadmap."
        highlight="Transparent, Compliant & Fast."
        subtitle="We eliminate bureaucracy and delay. Our 6-phase company formation framework ensures every ministerial filing, translation, and approval is completed in exact legal sequence."
        backgroundImage={processBgImg}
        onBackToHome={onBackToHome}
      />

      {/* Main Roadmap Component */}
      <SetupRoadmap onOpenQuote={() => onOpenQuote && onOpenQuote('Business Setup & Company Formation')} />

      {/* Ministry Coordination Breakdown */}
      <section className="py-16 bg-[#080B12] border-t border-b border-white/5">
        <div className="probiz-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge-gold mb-3 inline-flex">
              <Landmark className="w-3.5 h-3.5" />
              <span>Official Qatar State Entities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              Direct Daily Liaison with Qatar Ministries
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Our seasoned Public Relations Officers (PROs) navigate submissions in person to ensure zero rejections and rapid turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MINISTRIES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0D1322] border border-[#C5A059]/25 hover:border-[#DFBA73]/50 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-bold text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded border border-[#DFBA73]/20">
                    {m.badge}
                  </span>
                  <Landmark className="w-4 h-4 text-[#C5A059]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {m.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {m.role}
                </p>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div className="mt-12 p-8 rounded-2xl glass-card border border-[#C5A059]/30 text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-2 font-display">
              Need a Custom Setup Timeline for Your Sector?
            </h4>
            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              Whether you are opening a trading enterprise, engineering consultancy, medical clinic, or branch of a foreign company, our specialists will draft a personalized licensing roadmap.
            </p>
            <button
              onClick={() => onOpenQuote && onOpenQuote('Custom Setup Roadmap')}
              className="btn-gold py-3 px-8 text-xs sm:text-sm font-bold inline-flex items-center gap-2"
            >
              <span>Request Roadmap Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
