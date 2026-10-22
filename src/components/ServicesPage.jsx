import React, { useState } from 'react';
import PageHero from './PageHero';
import ServicesStrip from './ServicesStrip';
import ServicesAtAGlance from './ServicesAtAGlance';
import ServiceDeepDive from './ServiceDeepDive';
import { SERVICES } from '../data/probizData';
import servicesCorporateBgImg from '../assets/services-corporate-bg.jpg';

export default function ServicesPage({
  onBackToHome,
  onSelectService,
  onOpenQuote,
}) {
  const [activeDeepDiveId, setActiveDeepDiveId] = useState('business-setup');

  const handleSelectServiceFromGlance = (srv) => {
    const id = typeof srv === 'object' && srv?.id ? srv.id : srv;
    if (onSelectService) {
      onSelectService(id || 'business-setup');
    }
  };

  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="Services"
        badge="6 Core Business Verticals"
        title="Comprehensive Corporate Solutions."
        highlight="All Under One Roof."
        subtitle="Explore our specialized services across Qatar commercial registration, government PRO liaison, certified legal translation, healthcare MOPH licensing, executive talent recruitment, and corporate digital branding."
        backgroundImage={servicesCorporateBgImg}
        onBackToHome={onBackToHome}
      />

      {/* Services Strip */}
      <ServicesStrip onSelectService={(id) => onSelectService && onSelectService(id)} />

      {/* Services at a Glance Cards */}
      <ServicesAtAGlance onSelectService={handleSelectServiceFromGlance} />

      {/* Deep Dive Specifications */}
      <ServiceDeepDive
        activeServiceId={activeDeepDiveId}
        onSelectService={(srv) => setActiveDeepDiveId(srv.id)}
        onOpenQuote={() => {
          const current = SERVICES.find((s) => s.id === activeDeepDiveId);
          if (onOpenQuote) {
            onOpenQuote(current?.title);
          }
        }}
      />
    </div>
  );
}
