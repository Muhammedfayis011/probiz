import React from 'react';

export default function DohaSkylineSvg({ className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ minHeight: '380px' }}>
      <svg
        viewBox="0 0 900 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Sunset sky gradient */}
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E2A47" />
            <stop offset="35%" stopColor="#8C412F" />
            <stop offset="65%" stopColor="#E28639" />
            <stop offset="85%" stopColor="#F7B256" />
            <stop offset="100%" stopColor="#FDD889" />
          </linearGradient>

          {/* Sea water gradient */}
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5C361E" />
            <stop offset="20%" stopColor="#2E1B15" />
            <stop offset="60%" stopColor="#121824" />
            <stop offset="100%" stopColor="#080C14" />
          </linearGradient>

          {/* Golden glow */}
          <radialGradient id="sunGlow" cx="65%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#F98028" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#8A2E12" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0B0F19" stopOpacity="0" />
          </radialGradient>

          {/* Gold ribbon gradient matching brochure */}
          <linearGradient id="brochureGoldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFECC7" />
            <stop offset="30%" stopColor="#DFBA73" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#7E5C1B" />
          </linearGradient>
          
          <linearGradient id="towerGlass" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1B263B" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#304461" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#101726" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Sky Background */}
        <rect width="900" height="420" fill="url(#skyGrad)" />
        <rect width="900" height="420" fill="url(#sunGlow)" />

        {/* Subtle clouds */}
        <path d="M50 180 Q140 160 250 185 T480 175 T700 190 T900 170 L900 240 L0 240 Z" fill="#994D2A" opacity="0.25" />
        <path d="M0 220 Q180 200 360 215 T720 210 T900 225 L900 280 L0 280 Z" fill="#D36B2B" opacity="0.2" />

        {/* Far Background Skyline Silhouettes */}
        <path
          d="M0 360 L40 360 L40 260 L65 260 L65 360 L120 360 L120 280 L145 280 L145 360 L200 360 L200 300 L230 300 L230 360 L280 360 L280 240 L305 240 L305 360 L400 360 L400 270 L430 270 L430 360 L500 360 L500 290 L530 290 L530 360 L620 360 L620 250 L650 250 L650 360 L750 360 L750 280 L780 280 L780 360 L850 360 L850 290 L880 290 L880 360 L900 360 Z"
          fill="#4A261E"
          opacity="0.45"
        />

        {/* Doha West Bay Architectural Towers */}
        {/* Tower 1 - Sleek high-rise left */}
        <rect x="70" y="160" width="46" height="200" fill="url(#towerGlass)" rx="2" />
        <line x1="82" y1="160" x2="82" y2="360" stroke="#DFBA73" strokeWidth="0.8" opacity="0.7" />
        <line x1="93" y1="160" x2="93" y2="360" stroke="#DFBA73" strokeWidth="0.8" opacity="0.7" />
        <line x1="104" y1="160" x2="104" y2="360" stroke="#DFBA73" strokeWidth="0.8" opacity="0.7" />
        {/* Glowing window rows */}
        {[180, 205, 230, 255, 280, 305, 330].map(y => (
          <line key={y} x1="72" y1={y} x2="114" y2={y} stroke="#FFE5A3" strokeWidth="1" strokeDasharray="3 3" opacity="0.65" />
        ))}

        {/* Tower 2 - Slanted modern tower */}
        <polygon points="135,120 175,100 185,360 130,360" fill="#1C273D" />
        <polygon points="145,115 175,100 185,360 155,360" fill="#2E3E5B" opacity="0.7" />
        <line x1="175" y1="100" x2="185" y2="360" stroke="#DFBA73" strokeWidth="1.5" />

        {/* Tower 3 - Tornado Tower (Hyperboloid mesh structure) */}
        <g transform="translate(220, 70)">
          {/* Outer curved frame */}
          <path d="M10 290 Q2 150 18 20 L42 20 Q58 150 50 290 Z" fill="#131C2D" />
          <path d="M10 290 Q2 150 18 20 L42 20 Q58 150 50 290 Z" stroke="#DFBA73" strokeWidth="1.2" opacity="0.7" />
          {/* Diagonal diamond diagrid mesh */}
          <path d="M18 20 L50 290 M42 20 L10 290 M14 90 L48 230 M46 90 L12 230 M15 160 L45 160" stroke="#FFE9A8" strokeWidth="0.8" opacity="0.5" />
          {/* Crown light */}
          <circle cx="30" cy="18" r="4" fill="#FFFAEE" />
          <circle cx="30" cy="18" r="8" fill="#DFBA73" opacity="0.5" />
        </g>

        {/* Tower 4 - Burj Doha (Iconic cylinder with dome top) */}
        <g transform="translate(305, 40)">
          <path d="M8 320 L8 80 Q32 0 56 80 L56 320 Z" fill="#182236" />
          <path d="M8 80 Q32 0 56 80" stroke="#DFBA73" strokeWidth="2" fill="none" />
          {/* Mashrabiya lace pattern simulation */}
          <rect x="12" y="80" width="40" height="240" fill="none" stroke="#E2B768" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          <line x1="32" y1="5" x2="32" y2="320" stroke="#FFE39C" strokeWidth="1.2" opacity="0.8" />
          <circle cx="32" cy="5" r="3" fill="#FFF" />
        </g>

        {/* Tower 5 - Spire Tower (Al Bidda / Palm Tower) */}
        <g transform="translate(390, 20)">
          <polygon points="25,0 20,90 8,340 42,340 30,90" fill="#1B283E" />
          <polygon points="25,0 25,90 25,340 42,340 30,90" fill="#2F4263" opacity="0.8" />
          <line x1="25" y1="0" x2="25" y2="340" stroke="#DFBA73" strokeWidth="1.5" />
          <circle cx="25" cy="0" r="3" fill="#FF3333" />
        </g>

        {/* Tower 6 - Twin modern high-rises */}
        <rect x="460" y="110" width="38" height="250" fill="#141E30" rx="1" />
        <rect x="472" y="90" width="14" height="270" fill="#24344E" />
        <line x1="479" y1="70" x2="479" y2="90" stroke="#DFBA73" strokeWidth="2" />
        <circle cx="479" cy="68" r="2.5" fill="#FFEAA7" />

        {/* Tower 7 - Diagonal Crown Tower */}
        <polygon points="525,140 560,95 565,360 520,360" fill="#19253A" />
        <line x1="560" y1="95" x2="565" y2="360" stroke="#DFBA73" strokeWidth="1.2" />

        {/* Tower 8 - Luxury residential & commercial cluster */}
        <rect x="585" y="150" width="45" height="210" fill="#162033" />
        <polygon points="585,150 607,125 630,150" fill="#DFBA73" opacity="0.7" />

        {/* Tower 9 - Right cluster */}
        <rect x="650" y="180" width="55" height="180" fill="#1B263B" />
        <rect x="720" y="130" width="40" height="230" fill="#141F32" />
        <polygon points="720,130 740,105 760,130" fill="#2F4263" />
        <line x1="740" y1="95" x2="740" y2="105" stroke="#DFBA73" strokeWidth="1.5" />

        {/* Corniche Promenade Waterfront Line */}
        <rect x="0" y="360" width="900" height="14" fill="#0E1420" />
        <line x1="0" y1="360" x2="900" y2="360" stroke="#DFBA73" strokeWidth="1.5" />
        {/* Promenade street lights */}
        {[50, 110, 170, 230, 290, 350, 410, 470, 530, 590, 650, 710, 770, 830].map(x => (
          <g key={x}>
            <circle cx={x} cy="358" r="2.5" fill="#FFF5D1" />
            <circle cx={x} cy="358" r="7" fill="#F8B739" opacity="0.35" />
          </g>
        ))}

        {/* Doha Bay Sea Water */}
        <rect x="0" y="374" width="900" height="226" fill="url(#waterGrad)" />

        {/* Water Golden Light Reflections */}
        {[
          { x: 235, w: 25, y: 380, h: 100, op: 0.35 },
          { x: 320, w: 40, y: 380, h: 160, op: 0.5 },
          { x: 400, w: 20, y: 380, h: 120, op: 0.4 },
          { x: 470, w: 25, y: 380, h: 90, op: 0.3 },
          { x: 670, w: 30, y: 380, h: 80, op: 0.25 },
        ].map((r, i) => (
          <ellipse
            key={i}
            cx={r.x + r.w / 2}
            cy={r.y + r.h / 2}
            rx={r.w}
            ry={r.h / 2}
            fill="#F7C066"
            opacity={r.op}
            filter="url(#goldGlow)"
          />
        ))}

        {/* Subtle Water Waves */}
        <path d="M0 400 Q150 405 300 400 T600 400 T900 400" stroke="#DFBA73" strokeWidth="0.8" opacity="0.3" fill="none" />
        <path d="M0 435 Q180 442 360 435 T720 435 T900 435" stroke="#DFBA73" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M0 480 Q200 488 400 480 T800 480 T900 480" stroke="#DFBA73" strokeWidth="0.8" opacity="0.2" fill="none" />
        <path d="M0 530 Q220 538 440 530 T880 530" stroke="#DFBA73" strokeWidth="0.8" opacity="0.15" fill="none" />

        {/* Traditional Qatari Dhow Boat sailing in the bay (from brochure page 1 & 2) */}
        <g transform="translate(680, 260) scale(0.95)">
          {/* Glow around the dhow */}
          <ellipse cx="60" cy="120" rx="90" ry="40" fill="#FFBD59" opacity="0.25" filter="url(#goldGlow)" />
          {/* Triangular lateen sail */}
          <polygon points="62,10 135,115 60,105" fill="#FFE6A3" opacity="0.95" />
          <polygon points="62,10 60,105 5,110" fill="#E8B459" opacity="0.9" />
          {/* Mast and spar */}
          <line x1="61" y1="5" x2="61" y2="120" stroke="#42250F" strokeWidth="2.5" />
          <line x1="2" y1="112" x2="72" y2="8" stroke="#42250F" strokeWidth="1.8" />
          {/* Rigging line */}
          <line x1="62" y1="15" x2="135" y2="115" stroke="#8A5A23" strokeWidth="0.9" />
          {/* Hull */}
          <path d="M0 118 Q65 140 145 116 L130 132 Q65 146 15 132 Z" fill="#3D1E0B" />
          <path d="M10 120 Q65 138 135 118" stroke="#DFBA73" strokeWidth="1.2" />
          {/* Sail lantern warm reflection */}
          <circle cx="65" cy="115" r="4" fill="#FFF2BD" />
          <circle cx="65" cy="115" r="10" fill="#FF9D2E" opacity="0.4" />
          {/* Dhow water wake */}
          <path d="M-15 135 Q60 142 160 130" stroke="#FCE09B" strokeWidth="1" opacity="0.5" fill="none" />
        </g>

        {/* Brochure Iconic Curved Golden Wave (from Page 1, 2, 4, 12) */}
        <path
          d="M0 580 C280 570 420 510 580 540 C720 565 820 545 900 520 L900 600 L0 600 Z"
          fill="url(#brochureGoldRibbon)"
          opacity="0.95"
        />
        <path
          d="M0 570 C280 560 420 500 580 530 C720 555 820 535 900 510"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          opacity="0.7"
          fill="none"
        />
      </svg>
    </div>
  );
}
