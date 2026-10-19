import React from 'react';

export default function ProBizLogo({ size = "normal", light = false }) {
  const isLarge = size === "large";
  const isSmall = size === "small";

  const scale = isLarge ? 1.3 : isSmall ? 0.75 : 1;
  const height = isLarge ? 58 : isSmall ? 36 : 46;

  return (
    <div className="flex items-center gap-3 select-none" style={{ height: `${height}px` }}>
      <svg
        viewBox="0 0 340 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${height}px`, width: 'auto' }}
        className="transition-transform duration-300 hover:scale-[1.02]"
      >
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="25%" stopColor="#DFBA73" />
            <stop offset="60%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#8A6623" />
          </linearGradient>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6623" />
            <stop offset="40%" stopColor="#DFBA73" />
            <stop offset="70%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* PROBIZ Main Wordmark */}
        <g fill={light ? "#FFFFFF" : "#F8FAFC"} fontFamily="'Cinzel', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="38" letterSpacing="2">
          {/* Letter P */}
          <text x="2" y="38" fill={light ? "#FFFFFF" : "#F8FAFC"}>P</text>
          {/* Letter R */}
          <text x="36" y="38" fill={light ? "#FFFFFF" : "#F8FAFC"}>R</text>
        </g>

        {/* Stylized Golden 'O' ring from brochure */}
        <g transform="translate(104, 26)">
          <circle cx="0" cy="0" r="16.5" stroke="url(#goldRing)" strokeWidth="6" fill="none" filter="url(#goldGlow)" />
          <circle cx="0" cy="0" r="9" fill="#07090E" />
          <circle cx="3" cy="-3" r="2.5" fill="#FFF8E7" opacity="0.8" />
        </g>

        {/* B I Z */}
        <g fill={light ? "#FFFFFF" : "#F8FAFC"} fontFamily="'Cinzel', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="38" letterSpacing="2">
          <text x="131" y="38" fill={light ? "#FFFFFF" : "#F8FAFC"}>B</text>
          <text x="169" y="38" fill={light ? "#FFFFFF" : "#F8FAFC"}>I</text>
          <text x="187" y="38" fill="url(#goldGrad)">Z</text>
        </g>

        {/* Small gold dot accent */}
        <circle cx="228" cy="36" r="3.5" fill="url(#goldGrad)" />

        {/* Sub-Brand: CONSULTANCY SERVICES */}
        <g fill="url(#goldGrad)" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="600" fontSize="9.5" letterSpacing="6.5">
          <text x="4" y="58">CONSULTANCY SERVICES</text>
        </g>
      </svg>
    </div>
  );
}
