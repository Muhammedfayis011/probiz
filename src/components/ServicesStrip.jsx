import React from 'react';

/* Service icon SVGs */
const RecruitmentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
    <circle cx="20" cy="14" r="6" stroke="#C9A84C" strokeWidth="2.2"/>
    <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="33" cy="24" r="4" stroke="#C9A84C" strokeWidth="2"/>
    <line x1="31" y1="24" x2="36" y2="24" stroke="#C9A84C" strokeWidth="1.5"/>
    <line x1="33" y1="22" x2="33" y2="27" stroke="#C9A84C" strokeWidth="1.5"/>
  </svg>
);

const ProServicesIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
    <rect x="6" y="8" width="28" height="24" rx="2" stroke="#C9A84C" strokeWidth="2.2"/>
    <line x1="12" y1="16" x2="28" y2="16" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="21" x2="24" y2="21" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="26" x2="20" y2="26" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="30" cy="10" r="5" fill="#0D0D0D" stroke="#C9A84C" strokeWidth="2"/>
    <path d="M28 10l1.5 1.5L32 8.5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompanyFormationIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
    <rect x="8" y="16" width="24" height="18" rx="1" stroke="#C9A84C" strokeWidth="2.2"/>
    <path d="M14 16V12a6 6 0 1112 0v4" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round"/>
    <rect x="16" y="22" width="8" height="6" rx="1" stroke="#C9A84C" strokeWidth="1.8"/>
    <line x1="20" y1="22" x2="20" y2="28" stroke="#C9A84C" strokeWidth="1.5"/>
  </svg>
);

const BrandingIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
    <path d="M10 30L20 8l10 22" stroke="#C9A84C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="23" x2="27" y2="23" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="32" cy="12" r="4" stroke="#C9A84C" strokeWidth="2"/>
    <path d="M30 12c1-2 3-2 4-1" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const WebDevIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 28, height: 28 }}>
    <rect x="5" y="8" width="30" height="22" rx="2" stroke="#C9A84C" strokeWidth="2.2"/>
    <path d="M5 14h30" stroke="#C9A84C" strokeWidth="1.8"/>
    <circle cx="9" cy="11" r="1.5" fill="#C9A84C"/>
    <circle cx="13.5" cy="11" r="1.5" fill="#C9A84C"/>
    <circle cx="18" cy="11" r="1.5" fill="#C9A84C"/>
    <path d="M15 21l-4 4 4 4M25 21l4 4-4 4" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="20" y1="20" x2="17" y2="30" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="8" y="31" width="24" height="3" rx="1" stroke="#C9A84C" strokeWidth="1.5"/>
    <rect x="16" y="34" width="8" height="2" rx="1" fill="#C9A84C" opacity="0.5"/>
  </svg>
);

const SERVICES = [
  {
    id: 'recruitment-hr',
    Icon: RecruitmentIcon,
    title: 'Recruitment',
    desc: 'Connecting the right talent to the right opportunities.',
  },
  {
    id: 'pro-services',
    Icon: ProServicesIcon,
    title: 'PRO Services',
    desc: 'Hassle-free government and business support.',
  },
  {
    id: 'business-setup',
    Icon: CompanyFormationIcon,
    title: 'Company Formation',
    desc: 'End-to-end support for your business setup.',
  },
  {
    id: 'branding-digital',
    Icon: BrandingIcon,
    title: 'Branding & Marketing',
    desc: 'Creative solutions to grow your brand.',
  },
  {
    id: 'branding-digital',
    Icon: WebDevIcon,
    title: 'Web Development & Solutions',
    desc: 'Modern digital solutions for your business.',
  },
];

export default function ServicesStrip({ onSelectService }) {
  return (
    <section
      style={{
        backgroundColor: '#F5F3EE',
        padding: '2.8rem 0',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="services-strip-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          alignItems: 'start',
          gap: '1.5rem',
        }}
      >
        {SERVICES.map(({ id, Icon, title, desc }) => (
          <div
            key={title}
            onClick={() => onSelectService && onSelectService(id)}
            className="service-strip-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '0.75rem',
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {/* Icon Circle */}
            <div
              className="service-icon-circle"
              style={{
                width: 68,
                height: 68,
                borderRadius: '50%',
                background: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                flexShrink: 0,
              }}
            >
              <Icon />
            </div>

            <div>
              <div
                className="service-strip-title"
                style={{
                  fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  color: '#111111',
                  lineHeight: 1.3,
                  marginBottom: 4,
                }}
              >
                {title}
              </div>
              <div
                className="service-strip-desc"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '0.78rem',
                  color: '#666',
                  lineHeight: 1.5,
                  maxWidth: 160,
                  margin: '0 auto',
                }}
              >
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-strip-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem 1.5rem !important;
            padding: 0 1.5rem !important;
          }
        }
        @media (max-width: 640px) {
          .services-strip-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.8rem 1rem !important;
            padding: 0 1rem !important;
          }
          .service-icon-circle {
            width: 58px !important;
            height: 58px !important;
          }
          .service-strip-title {
            font-size: 0.85rem !important;
          }
          .service-strip-desc {
            font-size: 0.74rem !important;
          }
        }
        @media (max-width: 360px) {
          .services-strip-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
