import React from 'react';
import PageHero from './PageHero';
import ContactSection from './ContactSection';

export default function ContactPage({ onBackToHome }) {
  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="Contact"
        badge="Corporate Headquarters"
        title="Connect with ProBiz."
        highlight="Doha, Qatar."
        subtitle="Visit our executive offices at Hleyton Tower, or speak directly with our senior corporate specialists. We respond to all business consultations within 2 business hours."
        onBackToHome={onBackToHome}
      />

      {/* Main Contact Section with Form, Hotline, and Interactive Google Map */}
      <ContactSection />
    </div>
  );
}
