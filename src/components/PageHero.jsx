import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumb,
  onBackToHome,
}) {
  return (
    <div className="relative pt-28 pb-14 bg-gradient-to-b from-[#060911] via-[#0B101D] to-[#0D0D0D] border-b border-[#C5A059]/20 overflow-hidden">
      {/* Golden ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#8A1538]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="probiz-container relative z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
          <button
            onClick={onBackToHome}
            className="hover:text-[#DFBA73] transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#DFBA73] font-semibold">{breadcrumb}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DFBA73]/10 border border-[#DFBA73]/30 text-[#DFBA73] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBA73] animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-4xl">
          {title}{' '}
          {highlight && <span className="gold-text-gradient">{highlight}</span>}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
