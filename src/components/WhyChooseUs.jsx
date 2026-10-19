import React from 'react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/probizData';
import {
  ShieldCheck,
  BadgePercent,
  Clock,
  UserCheck,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  BadgePercent,
  Clock,
  UserCheck,
  TrendingUp
};

export default function WhyChooseUs({ onOpenQuote }) {
  return (
    <section id="why-probiz" className="py-20 relative bg-[#090D15] border-t border-b border-white/5">
      <div className="probiz-container">
        
        {/* Section Header from Brochure Page 12 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3 inline-flex">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose ProBiz?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Why ProBiz? <span className="gold-text-gradient">Let's Grow Together.</span>
          </h2>
          <p className="text-xl font-medium text-[#DFBA73] mt-2">
            One partner. Multiple solutions. Greater convenience.
          </p>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Whether you are establishing a new business, managing a growing organisation or strengthening your digital presence, ProBiz is ready to support your next step.
          </p>
        </div>

        {/* 5 Value Cards from Page 12 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between border-t-2 border-t-[#C5A059]/40 hover:border-t-[#DFBA73] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#121A2C] border border-[#C5A059]/30 flex items-center justify-center text-[#DFBA73] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#DFBA73] bg-[#DFBA73]/10 px-2.5 py-1 rounded-full border border-[#DFBA73]/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#DFBA73] transition-colors font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Slogan Banner Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#1B273E] via-[#111929] to-[#0A0F1A] border-2 border-[#DFBA73]/40 flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFBA73]/10 rounded-full blur-xl pointer-events-none" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-2">
                Our Commitment
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-display">
                SIMPLIFY YOUR BUSINESS. FOCUS ON GROWTH.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Direct phone and WhatsApp line with senior consultants. Fast turnaround on QID, Commercial Registration, and certified translations.
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-gold text-xs py-2.5 px-4 w-full justify-center"
            >
              <span>Get Started with ProBiz</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#0B101C] border border-[#C5A059]/30 overflow-hidden shadow-2xl">
          <div className="p-5 bg-gradient-to-r from-[#121A2C] to-[#0E1524] border-b border-white/10 flex items-center justify-between">
            <span className="text-sm font-bold text-white uppercase tracking-wider">
              Comparison: The ProBiz Advantage
            </span>
            <span className="text-xs text-[#DFBA73] font-semibold">
              Save up to 40% in coordination time
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-black/20 text-slate-400 font-semibold">
                  <th className="p-4 sm:p-5 w-2/5">Feature / Experience</th>
                  <th className="p-4 sm:p-5 w-3/10 text-slate-400">Multiple Separate Vendors</th>
                  <th className="p-4 sm:p-5 w-3/10 text-[#DFBA73] bg-[#DFBA73]/5">ProBiz Consultancy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Contact & Communication</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>4-6 different agents to manage</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-semibold bg-[#DFBA73]/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                      <span>1 Dedicated Account Manager</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Pricing & Overhead</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>Unpredictable piecemeal markups</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-semibold bg-[#DFBA73]/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                      <span>Transparent, cost-conscious bundles</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Government Follow-up</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>Constant chasing for status updates</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-semibold bg-[#DFBA73]/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                      <span>Proactive tracking with daily reports</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Specialized MOPH Licensing</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>Usually not supported by standard PROs</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-semibold bg-[#DFBA73]/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                      <span>Full DHP, PSV DataFlow & Prometric</span>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-white">Digital & Creative Execution</td>
                  <td className="p-4 sm:p-5 text-slate-400 flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>Separate expensive digital agency</span>
                  </td>
                  <td className="p-4 sm:p-5 text-emerald-400 font-semibold bg-[#DFBA73]/5">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0" />
                      <span>In-house branding, web & apps</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
