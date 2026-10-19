import React, { useState } from 'react';
import { FAQS } from '../data/probizData';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export default function FaqSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-20 relative bg-[#070A10]">
      <div className="probiz-container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="badge-gold mb-3 inline-flex">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers to Common Queries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Clear insights into Qatar corporate law, Commercial Registration, PRO procedures, and healthcare licensing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0D121F] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/[0.02]"
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-3">
                    <span className="text-xs font-mono text-[#DFBA73] bg-[#DFBA73]/10 w-6 h-6 rounded flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#DFBA73] transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-[#DFBA73]/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 bg-[#090E1A]/60">
                    <p className="pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0F1626] border border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Have a specific regulatory or corporate question?</div>
            <div className="text-xs text-slate-400">Our senior consultants can assist with custom industry inquiries.</div>
          </div>
          <button
            onClick={onOpenQuote}
            className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
          >
            <span>Ask a Consultant</span>
          </button>
        </div>

      </div>
    </section>
  );
}
