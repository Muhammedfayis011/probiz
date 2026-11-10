import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesStrip from './components/ServicesStrip';
import AboutPreview from './components/AboutPreview';
import ServicesAtAGlance from './components/ServicesAtAGlance';
import OurCustomers from './components/OurCustomers';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import RightAsidePopup from './components/RightAsidePopup';
import ServiceModal from './components/ServiceModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceDetailPage from './components/ServiceDetailPage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ProcessPage from './components/ProcessPage';
import WhyQatarPage from './components/WhyQatarPage';
import ContactPage from './components/ContactPage';

const VALID_PAGES = ['home', 'about', 'services', 'our-process', 'why-qatar', 'contact'];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'services' | 'our-process' | 'why-qatar' | 'contact' | 'service-detail'
  const [detailServiceId, setDetailServiceId] = useState('business-setup');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [preselectedServiceName, setPreselectedServiceName] = useState('');
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      return localStorage.getItem('probiz_lang') || 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('probiz_lang', currentLang);
      document.documentElement.lang = currentLang;
    } catch {}
  }, [currentLang]);

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

  const handleSelectServiceFromGlance = (service) => {
    const id = typeof service === 'object' && service?.id ? service.id : service;
    handleOpenServicePage(id || 'business-setup');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D0D0D',
        color: '#F1F5F9',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Lora', 'Merriweather', serif",
      }}
    >
      {/* ── TOP NAVIGATION ── */}
      <Navbar
        onGetStarted={() => handleOpenQuote()}
        onNavigateSection={handleNavigateSection}
        currentView={currentView}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* ── MULTI-PAGE CONDITIONAL RENDERING ── */}
      {currentView === 'service-detail' && (
        <main style={{ flexGrow: 1, paddingTop: 104 }}>
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

          {/* OUR CUSTOMERS SECTION (6 CARDS WITH MARQUEE OPTION - HOME ONLY) */}
          <OurCustomers />

          {/* CONTACT SECTION */}
          <ContactSection showMap={false} />
        </main>
      )}

      {/* ── FOOTER ── */}
      <Footer
        onSelectService={(srv) => handleOpenServicePage(srv.id)}
        onOpenQuote={() => handleOpenQuote()}
        onNavigateSection={handleNavigateSection}
      />

      {/* ── MODALS & RIGHT ASIDE POPUP ── */}
      <RightAsidePopup isFullModalOpen={isQuoteModalOpen} />
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
      <FloatingWhatsApp
        isMarketingService={currentView === 'service-detail' && detailServiceId === 'branding-digital'}
      />
    </div>
  );
}
