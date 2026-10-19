import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/probizData';
import {
  Lightbulb,
  FileSpreadsheet,
  FileCheck2,
  Building2,
  CreditCard,
  Stamp,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const QATAR_JOURNEY = [
  {
    step: "01",
    phase: "Name & Activity Approval",
    ministry: "Ministry of Commerce & Industry (MOCI)",
    desc: "Reservation of unique trade name (Arabic/English) and selection of authorized commercial activities.",
    duration: "1 - 2 Days"
  },
  {
    step: "02",
    phase: "Articles of Association (AoA)",
    ministry: "Ministry of Justice (MOJ)",
    desc: "Drafting corporate bylaws, shareholder distribution, 100% foreign ownership or local sponsorship clauses, and notarization.",
    duration: "2 - 3 Days"
  },
  {
    step: "03",
    phase: "Commercial Registration (CR)",
    ministry: "MOCI & Qatar Chamber",
    desc: "Official issuance of company CR certificate establishing legal entity status in the State of Qatar.",
    duration: "2 - 4 Days"
  },
  {
    step: "04",
    phase: "Office Lease & Trade Licence",
    ministry: "Ministry of Municipality",
    desc: "Securing registered commercial office lease, Civil Defence clearance, and municipality signage approval.",
    duration: "4 - 7 Days"
  },
  {
    step: "05",
    phase: "Establishment Card (Computer Card)",
    ministry: "Ministry of Interior (MOI)",
    desc: "Registration of official company seal, authorized signatories, and immigration file for visa processing.",
    duration: "2 - 3 Days"
  },
  {
    step: "06",
    phase: "Corporate Bank Account & Tax Card",
    ministry: "Qatar Central Bank & GTA",
    desc: "Opening operational corporate account with QNB, CBQ, QIIB or Dukhan Bank, and General Tax Authority filing.",
    duration: "5 - 10 Days"
  }
];

export default function SetupRoadmap({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="setup-guide" className="py-20 relative bg-[#090D16]">
      <div className="probiz-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3 inline-flex">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            How to Set Up a Business <span className="gold-text-gradient">in Qatar</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            From initial business concept to your first operational trade licence — ProBiz coordinates every milestone seamlessly.
          </p>
        </div>

        {/* Interactive Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {QATAR_JOURNEY.map((item, index) => {
            const isCurrent = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isCurrent
                    ? 'bg-[#141E33] border-[#DFBA73] shadow-xl shadow-[#C5A059]/15 -translate-y-1'
                    : 'bg-[#0D121F] border-white/5 hover:border-[#C5A059]/30 hover:bg-[#101728]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                    isCurrent ? 'bg-[#DFBA73] text-black' : 'bg-[#DFBA73]/15 text-[#DFBA73]'
                  }`}>
                    PHASE {item.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 font-display">
                  {item.phase}
                </h3>

                <div className="text-xs text-[#C5A059] font-medium mb-2.5">
                  {item.ministry}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#DFBA73]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>ProBiz Full Liaison Support</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Working Process 4-Step Summary (Page 2 & 4) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#101726] via-[#141E30] to-[#101726] border border-[#C5A059]/30 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73]">Our Client Engagement Model</div>
            <h4 className="text-xl font-bold text-white mt-1">From First Call to Scaled Operations</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {WORKFLOW_STEPS.map((ws, i) => (
              <div key={i} className="flex flex-col items-start relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#DFBA73] to-[#8E6D27] text-black font-extrabold flex items-center justify-center mb-3 shadow-md">
                  {ws.step}
                </div>
                <div className="text-sm font-bold text-white mb-1">{ws.title}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300 text-center sm:text-left">
              Have existing Commercial Registration (CR) needing renewal, activity additions or foreign ownership transfer?
            </div>
            <button
              onClick={onOpenQuote}
              className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
            >
              <span>Schedule Company Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
