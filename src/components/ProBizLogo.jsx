import React from 'react';

/**
 * ProBiz Official Brand Logo
 * Displays the authentic ProBiz Consultancy Services logo with golden ring and crisp typography.
 */
export default function ProBizLogo({ size = 'normal', className = '', style = {}, imgStyle = {} }) {
  const heightMap = {
    small: '26px',
    normal: '35px',
    large: '46px',
    xlarge: '58px',
  };

  const logoHeight = style.height || heightMap[size] || heightMap.normal;

  return (
    <div
      className={`probiz-logo-container inline-flex items-center select-none ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        lineHeight: 0,
        ...style,
      }}
    >
      <img
        src="/probiz-logo.png"
        alt="ProBiz Consultancy Services"
        className="probiz-brand-logo transition-transform duration-200 hover:scale-[1.02]"
        style={{
          height: logoHeight,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
          ...imgStyle,
        }}
        loading="eager"
      />
    </div>
  );
}
