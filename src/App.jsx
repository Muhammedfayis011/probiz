import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesStrip from './components/ServicesStrip';
import AboutPreview from './components/AboutPreview';
import ServicesAtAGlance from './components/ServicesAtAGlance';
import ServiceDeepDive from './components/ServiceDeepDive';
import SetupRoadmap from './components/SetupRoadmap';
import QatarSetupEstimator from './components/QatarSetupEstimator';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServiceModal from './components/ServiceModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { SERVICES } from './data/probizData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [activeDeepDiveServiceId, setActiveDeepDiveServiceId] = useState('business-setup');
  const [preselectedServiceName, setPreselectedServiceName] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setPreselectedServiceName(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  // ── AUTO-POPUP: open enquiry form 60 seconds after page load ──────────────
  // Uses sessionStorage so it fires only once per browser session (not on
  // every page refresh or component re-render).
  useEffect(() => {
    const STORAGE_KEY = 'probiz_auto_popup_shown';
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);

    if (alreadyShown) return; // don't show again this session

    const timer = setTimeout(() => {
      // Only open if no other modal is already showing
      setIsQuoteModalOpen((current) => {
        if (!current) {
          setPreselectedServiceName(''); // generic enquiry
          sessionStorage.setItem(STORAGE_KEY, '1');
          return true;
        }
        return current;
      });
    }, 60000); // 60 000 ms = 1 minute

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);


  const handleSelectServiceFromGlance = (service) => {
    setSelectedServiceForModal(service);
    setActiveDeepDiveServiceId(service.id);
  };

  const handleSelectPillarFromHero = (pillarId) => {
    const srv = SERVICES.find((s) => s.id === pillarId) || SERVICES[0];
    setActiveDeepDiveServiceId(srv.id);
    const element = document.getElementById('services-deep-dive');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D0D0D',
        color: '#F1F5F9',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
    >
      {/* ── TOP NAVIGATION ── */}
      <Navbar onGetStarted={() => handleOpenQuote()} />

      <main style={{ flexGrow: 1 }}>

        {/* ── HERO: "People. Ideas. Business. Growth." ── */}
        <HeroSection
          onGetStarted={() => handleOpenQuote()}
          onContact={() => handleOpenQuote()}
        />

        {/* ── SERVICES ICON STRIP (cream background) ── */}
        <ServicesStrip />

        {/* ── ABOUT + WHY CHOOSE PROBIZ (dark split panel) ── */}
        <AboutPreview onLearnMore={() => handleOpenQuote()} />

        {/* ── TEMPORARILY COMMENTED SECTIONS (Other pages) ── */}
        {/*
        <ServicesAtAGlance onSelectService={handleSelectServiceFromGlance} />

        <ServiceDeepDive
          activeServiceId={activeDeepDiveServiceId}
          onSelectService={(srv) => setActiveDeepDiveServiceId(srv.id)}
          onOpenQuote={() => handleOpenQuote(SERVICES.find((s) => s.id === activeDeepDiveServiceId)?.title)}
        />

        <SetupRoadmap onOpenQuote={() => handleOpenQuote('Business Setup & Company Formation')} />

        <QatarSetupEstimator onOpenQuote={() => handleOpenQuote()} />

        <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />

        <FaqSection onOpenQuote={() => handleOpenQuote()} />

        <ContactSection />
        */}
      </main>

      {/* ── FOOTER (Temporarily commented out) ── */}
      {/*
      <Footer
        onSelectService={(srv) => setActiveDeepDiveServiceId(srv.id)}
        onOpenQuote={() => handleOpenQuote()}
      />
      */}

      {/* ── MODALS ── */}
      <ConsultationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedServiceName}
      />
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onConsult={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      ── FLOATING WHATSAPP ──
      <FloatingWhatsApp />
    </div>
  );
}
