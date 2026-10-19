import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/probizData';
import { X, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Business Setup & Company Formation',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync preselectedService
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hello ProBiz,%0A%0AI would like to consult on *${formData.service}*.%0AName: ${formData.name || 'Not provided'}%0APhone: ${formData.phone || 'Not provided'}%0ANotes: ${formData.notes || 'None'}`;
    window.open(`https://wa.me/97440001977?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D121F] border border-[#C5A059]/40 p-5 sm:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">Inquiry Received</h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              Thank you for contacting ProBiz Consultancy Services. Our senior consultant will review your inquiry for <strong className="text-[#DFBA73]">{formData.service}</strong> and connect with you shortly.
            </p>

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="btn-gold text-xs py-3 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-black" />
                <span>Continue on WhatsApp Immediately</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn-outline-gold text-xs py-2.5"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="badge-gold mb-2 text-[11px]">Free Consultation</div>
              <h3 className="text-2xl font-bold text-white font-display">
                Request Corporate Advisory
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Our Doha specialists will evaluate your requirements and advise on the fastest legal route in Qatar.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Tariq Mansoor"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+974 ..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Service Vertical *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 text-white focus:outline-none focus:border-[#DFBA73] text-sm"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#0D121F] text-white">
                      {s.number}. {s.title}
                    </option>
                  ))}
                  <option value="Complete Corporate Package">Complete Corporate Setup & PRO Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Notes / Specific Requirements
                </label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your company activity, current stage, or specific licensing requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="btn-gold w-full text-center py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="btn-outline-gold w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Send via WhatsApp (+974 4000 1977)</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
