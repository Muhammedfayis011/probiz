import React from 'react';

export default function ProBizLogo({ size = 'normal', className = '', style = {} }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const mainFontSize = isLarge ? '1.85rem' : isSmall ? '1.15rem' : '1.4rem';
  const subFontSize = isLarge ? '0.66rem' : isSmall ? '0.45rem' : '0.52rem';
  const subMarginTop = isLarge ? 5 : isSmall ? 2 : 3;

  return (
    <div
      className={`probiz-logo select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: mainFontSize,
          letterSpacing: '0.12em',
          color: '#FFFFFF',
          lineHeight: 1,
        }}
      >
        PR<span style={{ color: '#C9A84C' }}>O</span>BIZ
      </span>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: subFontSize,
          letterSpacing: '0.24em',
          color: '#C9A84C',
          marginTop: subMarginTop,
          textTransform: 'uppercase',
        }}
      >
        CONSULTANCY SERVICES
      </span>
    </div>
  );
}
