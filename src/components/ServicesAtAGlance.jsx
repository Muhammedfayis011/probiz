import React from 'react';
import { SERVICES } from '../data/probizData';
import {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Briefcase,
  FileCheck2,
  Languages,
  Users,
  Stethoscope,
  Laptop
};

export default function ServicesAtAGlance({ onSelectService }) {
  return (
    <section id="services-overview" className="py-20 relative">
      <div className="probiz-container">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3 inline-flex">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Our Services <span className="gold-text-gradient">at a Glance</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Six interconnected corporate verticals engineered to support your enterprise at every step of its journey in the State of Qatar.
          </p>
        </div>

        {/* 6 Numbered Cards from Brochure Page 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon] || Briefcase;
            return (
              <div
                key={srv.id}
                onClick={() => onSelectService(srv)}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer border-t-2 border-t-[#C5A059]/40 hover:border-t-[#DFBA73] relative overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFBA73]/5 rounded-bl-full group-hover:bg-[#DFBA73]/15 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top row: Number Badge + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-display text-[#DFBA73] tracking-wider px-3 py-1 rounded-lg bg-[#DFBA73]/10 border border-[#DFBA73]/30">
                      {srv.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-[#121A2C] border border-[#C5A059]/25 flex items-center justify-center text-[#DFBA73] group-hover:scale-110 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DFBA73] transition-colors leading-snug mb-2 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#C5A059] mb-3">
                    {srv.tagline}
                  </p>

                  {/* Brochure Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-[#DFBA73] group-hover:text-white transition-colors">
                  <span className="tracking-wide uppercase">Explore Full Details</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#DFBA73]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-[#121A2B] via-[#0E1524] to-[#121A2B] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-white">Need a customized combination of services?</div>
            <div className="text-xs text-slate-400 mt-0.5">We craft tailored corporate packages combining formation, PRO retainers, translation, and branding.</div>
          </div>
          <a
            href="#cost-estimator"
            className="btn-gold text-xs px-5 py-2.5 whitespace-nowrap"
          >
            <span>Launch Service Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
