import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/probizData';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Navigation,
  ExternalLink
} from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Business Setup & Company Formation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#06080E]">
      <div className="probiz-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-gold mb-3 inline-flex">
            <span>Connect with ProBiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Let's Discuss Your <span className="gold-text-gradient">Business Goals in Qatar</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Visit our office at Hleyton Tower in Doha, or reach out directly for immediate assistance with company formation, PRO documentation, and licensing.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Information (Brochure Page 12) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="glass-card p-6 sm:p-8 border border-[#C5A059]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="text-xs font-bold uppercase tracking-widest text-[#DFBA73] mb-2">
                Doha Corporate Office
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-6">
                ProBiz Consultancy Services
              </h3>

              <div className="space-y-5 text-sm text-slate-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">Physical Address</div>
                    <div className="text-white font-medium leading-relaxed">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">Direct Hotline</div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-white font-mono font-bold hover:text-[#DFBA73] transition-colors text-base"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">General Inquiries</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-white font-medium hover:text-[#DFBA73] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">Official Website</div>
                    <span className="text-[#DFBA73] font-mono font-medium">
                      {COMPANY_INFO.website}
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">Working Schedule</div>
                    <div className="text-white font-medium">
                      {COMPANY_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Chat on WhatsApp (+974 4000 1977)</span>
                </a>
              </div>
            </div>

            {/* Doha Location Direction Helper */}
            <div className="p-5 rounded-2xl bg-[#0B101C] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-[#DFBA73]" />
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block">Central Doha Location:</span>
                  Close to Doha Municipalities & Government Ministries
                </div>
              </div>
              <a
                href="#office-map"
                className="text-[11px] font-bold text-[#DFBA73] hover:underline flex items-center gap-1 bg-[#DFBA73]/10 px-2.5 py-1 rounded border border-[#DFBA73]/20"
              >
                <span>View Map</span>
                <span>↓</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 border border-[#C5A059]/30">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white font-display">
                  Request a Free Corporate Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details and our senior corporate specialist will contact you within 2 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#0E1A2C] border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You, {formState.name || 'Valued Client'}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry regarding <strong className="text-[#DFBA73]">{formState.service}</strong> has been received by the ProBiz corporate consulting team.
                  </p>
                  <div className="p-4 rounded-xl bg-black/30 border border-white/5 text-xs text-slate-400">
                    A representative will reach out at <span className="text-white font-mono">{formState.phone || formState.email}</span> shortly.
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold text-xs px-6 py-2.5 mt-2"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Nasser Al-Thani / John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Al-Noor Holdings / New Venture LLC"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="director@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+974 5500 0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm font-mono"
                      />
                    </div>
                  </div>

                  {/* Primary Service Interested In */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Primary Service Requirement *
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white focus:outline-none focus:border-[#DFBA73] text-sm cursor-pointer"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#0D121F] text-white">
                          {srv.number}. {srv.title}
                        </option>
                      ))}
                      <option value="General Corporate Retainer" className="bg-[#0D121F] text-white">
                        Complete Integrated Corporate Retainer
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Current Requirements
                    </label>
                    <textarea
                      rows="4"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please mention your planned company activity in Qatar, number of visas needed, licensing deadlines, or translation requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#090D18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full text-center py-3.5 text-sm font-bold flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your details are held in strict commercial confidence under Qatar privacy standards.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Interactive Office Location Map */}
        <div id="office-map" className="mt-14 rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#0A0E18] shadow-2xl relative">
          {/* Map Header Bar */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0C1220] via-[#0F172A] to-[#0C1220] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DFBA73]/20 to-[#9E7B2A]/20 border border-[#DFBA73]/40 flex items-center justify-center text-[#DFBA73] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold text-white font-display">
                    ProBiz Office Location Map
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#DFBA73]/15 text-[#DFBA73] border border-[#DFBA73]/30">
                    Doha, Qatar
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs px-4 py-2.5 flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="relative w-full h-[380px] sm:h-[440px] bg-[#070A12]">
            <iframe
              title="ProBiz Corporate Office Location Map"
              src="https://maps.google.com/maps?q=Hleyton+Tower,+Al+Baladhiya+St,+Doha,+Qatar&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.04) saturate(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick Location Landmarks Bar */}
          <div className="p-4 sm:p-5 bg-[#080C16] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[#DFBA73]" />
              <span><strong>Building:</strong> Hleyton Tower (Floor 10, Office #49)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span><strong>Street:</strong> Al Baladhiya St., Al Miqrab, Doha</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span><strong>Access:</strong> Central Doha • Close to Government Ministries</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
