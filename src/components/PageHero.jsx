import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  breadcrumb,
  backgroundImage,
  onBackToHome,
}) {
  return (
    <div
      className={`relative pt-28 pb-16 sm:pb-20 bg-gradient-to-b from-[#060911] via-[#0B101D] to-[#0D0D0D] border-b border-[#C5A059]/20 overflow-hidden ${
        backgroundImage ? 'min-h-[420px] sm:min-h-[480px] flex flex-col justify-center' : ''
      }`}
    >
      {/* Optional Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover object-center sm:object-right opacity-70 sm:opacity-65 lg:opacity-75"
          />
          {/* Desktop Left-to-Right Gradient: Ensures text is high contrast on left while showcasing imagery on right */}
          <div
            className="absolute inset-0 hidden sm:block"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,9,17,0.97) 0%, rgba(11,16,29,0.90) 42%, rgba(13,13,13,0.65) 65%, rgba(13,13,13,0.30) 85%, transparent 100%)',
            }}
          />
          {/* Mobile Top-to-Bottom Gradient: Luminous so background image is clearly seen */}
          <div
            className="absolute inset-0 sm:hidden"
            style={{
              background:
                'linear-gradient(180deg, rgba(6,9,17,0.72) 0%, rgba(11,16,29,0.48) 45%, rgba(13,13,13,0.82) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-[#060911]/50" />
        </div>
      )}

      {/* Golden ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#8A1538]/10 rounded-full blur-[140px] pointer-events-none z-[1]" />

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
