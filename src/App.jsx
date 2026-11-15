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
import { SERVICES } from './data/probizData';

const VALID_PAGES = ['home', 'about', 'services', 'our-process', 'why-qatar', 'contact'];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'services' | 'our-process' | 'why-qatar' | 'contact' | 'service-detail'
  const [detailServiceId, setDetailServiceId] = useState('business-setup');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [preselectedServiceName, setPreselectedServiceName] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setPreselectedServiceName(serviceName || '');
    setIsQuoteModalOpen(true);
  };

  const handleGoToContactForm = () => {
    const scrollToForm = () => {
      const formEl = document.getElementById('contact-form') || document.getElementById('contact');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const firstInput = formEl.querySelector('input');
        if (firstInput) {
          setTimeout(() => firstInput.focus({ preventScroll: true }), 450);
        }
      }
    };

    if (currentView === 'home') {
      scrollToForm();
    } else {
      setCurrentView('contact');
      window.location.hash = '#contact';
      setTimeout(scrollToForm, 100);
    }
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

  // Dynamic SEO metadata updates per view and service deep-dive
  useEffect(() => {
    const SEO_CONFIG = {
      home: {
        title: 'ProBiz Consultancy Services | Qatar Business Setup, PRO & Healthcare Solutions',
        desc: 'ProBiz Consultancy Services in Doha, Qatar. Expert solutions for 100% foreign business setup, commercial registration (CR), PRO retainers, MOPH healthcare licensing, and translation.',
      },
      about: {
        title: 'About Us | ProBiz Consultancy Services Doha Qatar',
        desc: 'Learn about ProBiz Consultancy Services in Doha, Qatar. A multidisciplinary corporate firm delivering licensing, PRO, translation, and healthcare advisory with over a decade of track record.',
      },
      services: {
        title: 'Our Corporate Solutions | ProBiz Consultancy Services Qatar',
        desc: "Explore ProBiz's 6 core corporate solutions in Qatar: Business Setup, Corporate PRO Support, Healthcare Licensing, Translation, Recruitment, and Digital Solutions.",
      },
      'our-process': {
        title: 'Our 4-Stage Setup Process & Methodology | ProBiz Qatar',
        desc: "Discover ProBiz's structured 4-stage corporate setup roadmap in Qatar: Consultation, Documentation, Ministry Filings, and Ongoing Corporate Operations.",
      },
      'why-qatar': {
        title: 'Why Invest in Qatar | 100% Ownership & 0% Personal Tax | ProBiz',
        desc: "Discover Qatar's investment advantages: 0% personal tax, 100% foreign company ownership (Law No. 1), Hamad Port connectivity, and Qatar National Vision 2030 stability.",
      },
      contact: {
        title: 'Contact ProBiz Consultancy Services | Doha, Qatar Headquarters',
        desc: 'Get in touch with senior corporate consultants at ProBiz Consultancy Services in Hleyton Tower, Doha, Qatar. Direct phone, email, and WhatsApp advisory.',
      },
    };

    if (currentView === 'service-detail') {
      const srv = SERVICES.find((s) => s.id === detailServiceId);
      if (srv) {
        document.title = `${srv.title} in Qatar | ProBiz Consultancy Services`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            `${srv.title} in Doha, Qatar. ${srv.shortDesc || srv.tagline} Guaranteed compliance with MOCI, MOPH, and Qatar government regulations.`
          );
        }
        return;
      }
    }

    const currentSeo = SEO_CONFIG[currentView] || SEO_CONFIG.home;
    document.title = currentSeo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSeo.desc);
    }
  }, [currentView, detailServiceId]);

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
        onGetStarted={handleGoToContactForm}
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
