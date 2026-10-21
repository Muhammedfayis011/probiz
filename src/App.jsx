import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesStrip from './components/ServicesStrip';
import AboutPreview from './components/AboutPreview';
import ServicesAtAGlance from './components/ServicesAtAGlance';
import ServiceDeepDive from './components/ServiceDeepDive';
import SetupRoadmap from './components/SetupRoadmap';
import WhyChooseUs from './components/WhyChooseUs';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ServiceModal from './components/ServiceModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceDetailPage from './components/ServiceDetailPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProcessPage from './components/ProcessPage';
import WhyQatarPage from './components/WhyQatarPage';
import ContactPage from './components/ContactPage';
import { SERVICES } from './data/probizData';

const VALID_PAGES = ['home', 'about', 'services', 'our-process', 'why-qatar', 'contact'];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'services' | 'our-process' | 'why-qatar' | 'contact' | 'service-detail'
  const [detailServiceId, setDetailServiceId] = useState('business-setup');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [activeDeepDiveServiceId, setActiveDeepDiveServiceId] = useState('business-setup');
  const [preselectedServiceName, setPreselectedServiceName] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setPreselectedServiceName(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  const handleOpenServicePage = (serviceId = 'business-setup') => {
    setDetailServiceId(serviceId);
    setCurrentView('service-detail');
    window.location.hash = `#service-${serviceId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    handleNavigateSection('home');
  };

  const handleNavigateSection = (targetId) => {
    const pageId = targetId.replace('#', '');
    if (VALID_PAGES.includes(pageId)) {
      setCurrentView(pageId);
      window.location.hash = `#${pageId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      window.location.hash = `#${pageId}`;
      setTimeout(() => {
        const el = document.getElementById(pageId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // Sync hash routing so back/forward and deep links work
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('service-')) {
        const id = hash.replace('service-', '');
        setDetailServiceId(id);
        setCurrentView('service-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (VALID_PAGES.includes(hash)) {
        setCurrentView(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === 'home') {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // ── AUTO-POPUP: open Free Consultation modal 4 seconds after every page load ──
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsQuoteModalOpen((current) => {
        if (!current) {
          setPreselectedServiceName('');
          return true;
        }
        return current;
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectServiceFromGlance = (service) => {
    handleOpenServicePage(service.id);
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
      <Navbar
        onGetStarted={() => handleOpenQuote()}
        onNavigateSection={handleNavigateSection}
        currentView={currentView}
      />

      {/* ── MULTI-PAGE CONDITIONAL RENDERING ── */}
      {currentView === 'service-detail' && (
        <main style={{ flexGrow: 1, paddingTop: 70 }}>
          <ServiceDetailPage
            serviceId={detailServiceId}
            onBack={handleBackToHome}
            onOpenQuote={(title) => handleOpenQuote(title)}
            onSelectOtherService={(id) => handleOpenServicePage(id)}
          />
        </main>
      )}

      {currentView === 'about' && (
        <main style={{ flexGrow: 1 }}>
          <AboutPage
            onBackToHome={handleBackToHome}
            onOpenQuote={(title) => handleOpenQuote(title)}
          />
        </main>
      )}

      {currentView === 'services' && (
        <main style={{ flexGrow: 1 }}>
          <ServicesPage
            onBackToHome={handleBackToHome}
            onSelectService={(id) => handleOpenServicePage(id)}
            onOpenQuote={(title) => handleOpenQuote(title)}
          />
        </main>
      )}

      {currentView === 'our-process' && (
        <main style={{ flexGrow: 1 }}>
          <ProcessPage
            onBackToHome={handleBackToHome}
            onOpenQuote={(title) => handleOpenQuote(title)}
          />
        </main>
      )}

      {currentView === 'why-qatar' && (
        <main style={{ flexGrow: 1 }}>
          <WhyQatarPage
            onBackToHome={handleBackToHome}
            onOpenQuote={(title) => handleOpenQuote(title)}
          />
        </main>
      )}

      {currentView === 'contact' && (
        <main style={{ flexGrow: 1 }}>
          <ContactPage
            onBackToHome={handleBackToHome}
          />
        </main>
      )}

      {currentView === 'home' && (
        <main style={{ flexGrow: 1 }}>
          {/* HERO */}
          <HeroSection
            onGetStarted={() => handleNavigateSection('services')}
            onServices={() => handleNavigateSection('services')}
            onContact={() => handleNavigateSection('contact')}
          />

          {/* SERVICES ICON STRIP */}
          <ServicesStrip onSelectService={(id) => handleOpenServicePage(id)} />

          {/* ABOUT + WHY CHOOSE PROBIZ */}
          <AboutPreview onLearnMore={() => handleNavigateSection('about')} />

          {/* SERVICES AT A GLANCE */}
          <ServicesAtAGlance onSelectService={handleSelectServiceFromGlance} />

          {/* SERVICE SPECIFICATIONS DEEP DIVE */}
          <ServiceDeepDive
            activeServiceId={activeDeepDiveServiceId}
            onSelectService={(srv) => setActiveDeepDiveServiceId(srv.id)}
            onOpenQuote={() => handleOpenQuote(SERVICES.find((s) => s.id === activeDeepDiveServiceId)?.title)}
          />

          {/* SETUP ROADMAP */}
          <SetupRoadmap onOpenQuote={() => handleOpenQuote('Business Setup & Company Formation')} />

          {/* WHY CHOOSE US */}
          <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />

          {/* FAQ SECTION */}
          <FaqSection onOpenQuote={() => handleOpenQuote()} />

          {/* CONTACT SECTION */}
          <ContactSection />
        </main>
      )}

      {/* ── FOOTER ── */}
      <Footer
        onSelectService={(srv) => handleOpenServicePage(srv.id)}
        onOpenQuote={() => handleOpenQuote()}
        onNavigateSection={handleNavigateSection}
      />

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

      {/* ── FLOATING WHATSAPP ── */}
      <FloatingWhatsApp />
    </div>
  );
}
