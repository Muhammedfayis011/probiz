import React from 'react';
import { Target, Layers, Clock, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-[#090D15]/80 border-t border-b border-white/5">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="badge-gold mb-3">
            <span>About ProBiz Consultancy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Your business. Our expertise.{' '}
            <span className="gold-text-gradient block mt-1">One trusted partner.</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Narrative text verbatim from brochure Page 2 */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p className="p-5 rounded-xl bg-[#0D1322] border-l-4 border-[#C5A059] text-white font-medium shadow-md">
              <strong className="text-[#DFBA73]">ProBiz Consultancy Services</strong> is an integrated business solutions company in Qatar, bringing together professionals from different fields to support businesses with their essential operational and growth requirements.
            </p>

            <p className="text-slate-300">
              With over <span className="text-[#DFBA73] font-semibold">10 years of combined team experience</span>, we provide reliable, professional and cost-conscious services to corporate clients across various industries.
            </p>

            <p className="text-slate-400">
              Our integrated approach helps businesses simplify operations, reduce coordination efforts and access multiple services through one trusted partner.
            </p>

            {/* Our Aim Card from Page 2 */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#121A2C] to-[#0A0F1A] border border-[#C5A059]/30 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl group-hover:bg-[#C5A059]/20 transition-all" />
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFBA73]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73]">Mission & Purpose</div>
                  <h3 className="text-xl font-bold text-white font-display">Our Aim</h3>
                </div>
              </div>

              <blockquote className="text-slate-200 text-base sm:text-lg italic font-normal leading-relaxed border-l-2 border-[#C5A059]/50 pl-4 my-2">
                &ldquo;To help businesses save time, manage costs and focus on their core activities while we support their essential business needs.&rdquo;
              </blockquote>
            </div>

            {/* Ribbon Banner from Brochure Page 2 */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-gradient-to-r from-[#DFBA73] to-[#99752D] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-lg">
                <span>ONE TRUSTED PARTNER</span>
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                <span>MULTIPLE BUSINESS SOLUTIONS</span>
              </div>
            </div>

          </div>

          {/* Right: 3 Value Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Integrated Model</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Rather than dealing with multiple independent brokers for registration, visas, translations, and marketing, ProBiz consolidates every requirement under one transparent contract.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Time-Saving Speed</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Our direct daily liaison with Qatar ministries (MOCI, MOPH, MOI, MADLSA, MOJ) accelerates submission, approvals, and credential verifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Cost-Conscious Value</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Structured retainer packages and flexible on-demand corporate support keep overhead low while maximizing operational agility.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
