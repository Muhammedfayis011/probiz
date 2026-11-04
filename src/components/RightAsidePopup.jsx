import React, { useState, useEffect } from 'react';
import { SERVICES, COMPANY_INFO } from '../data/probizData';
import { X, Minus, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function RightAsidePopup({ isFullModalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Business Setup & Company Formation',
  });

  useEffect(() => {
    // Only auto-open on laptop, PC, and TV screens (>= 1024px width)
    // Never auto-open on mobile screens
    if (typeof window === 'undefined') return;
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  // If user opened the full central modal or dismissed the aside popup, don't show
  if (!isOpen || isDismissed || isFullModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isMarketing =
    formData.service?.toLowerCase().includes('brand') ||
    formData.service?.toLowerCase().includes('marketing') ||
    formData.service?.toLowerCase().includes('digital');

  const targetWhatsAppRaw = isMarketing
    ? (COMPANY_INFO.marketingWhatsappRaw || '97477307006')
    : (COMPANY_INFO.whatsappRaw || '97477307004');

  const targetWhatsAppDisplay = isMarketing
    ? (COMPANY_INFO.marketingWhatsappNumber || '+974 7730 7006')
    : (COMPANY_INFO.whatsappNumber || '+974 7730 7004');

  const handleWhatsAppSend = () => {
    const text = `Hello ProBiz,%0A%0AI would like a quick consultation on *${formData.service}*.%0AName: ${formData.name || 'Not provided'}%0APhone: ${formData.phone || 'Not provided'}`;
    window.open(`https://wa.me/${targetWhatsAppRaw}?text=${text}`, '_blank');
  };

  // Minimized floating pill (docked to bottom-right)
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-40 hidden lg:block animate-in fade-in duration-300">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0D121F] border border-[#C5A059]/50 text-white shadow-2xl hover:border-[#DFBA73] hover:scale-105 transition-all group"
        >
          <MessageSquare className="w-4 h-4 text-[#DFBA73] group-hover:rotate-6 transition-transform" />
          <span className="text-xs font-bold font-display text-white">Free Consultation</span>
          <span className="text-[10px] text-[#DFBA73] font-mono ml-1">Open ↑</span>
        </button>
      </div>
    );
  }

  return (
    <aside
      aria-label="Quick Consultation Popup"
      className="fixed bottom-6 right-6 z-50 hidden lg:block w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl bg-[#0D121F]/95 backdrop-blur-xl border border-[#C5A059]/40 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(197,160,89,0.18)] animate-in slide-in-from-right-6 duration-500 font-sans"
    >
      {/* Top Header Controls */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
        <div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#DFBA73] font-display">
            Quick Advisory
          </span>
        </div>

        <div className="flex items-center gap-1">
          {/* Minimize button */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Minimize popup"
            aria-label="Minimize"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={() => {
              setIsDismissed(true);
              setIsOpen(false);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Close popup"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {submitted ? (
        <div className="py-4 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white font-display">Inquiry Received</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our senior consultant will get in touch shortly for <strong className="text-[#DFBA73]">{formData.service}</strong>.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="btn-gold text-[11px] py-2 flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-black" />
              <span>Chat on WhatsApp Directly</span>
            </button>
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              className="text-slate-400 hover:text-white text-[11px] py-1 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div>
          {/* Title & Subtitle */}
          <div className="mb-3">
            <h4 className="text-base font-bold text-white font-display leading-tight">
              Talk to a Corporate Advisor
            </h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Get immediate answers on 100% foreign ownership LLC laws and Qatar trade licensing.
            </p>
          </div>

          {/* Quick Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name *"
                className="w-full px-3 py-2 rounded-lg bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-xs"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone / WhatsApp (+974 ...) *"
                className="w-full px-3 py-2 rounded-lg bg-[#080B14] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#DFBA73] text-xs font-mono"
              />
            </div>

            <div>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#080B14] border border-white/10 text-white focus:outline-none focus:border-[#DFBA73] text-xs"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title} className="bg-[#0D121F] text-white">
                    {s.title}
                  </option>
                ))}
                <option value="Complete Corporate Package">Complete Corporate Setup & PRO Package</option>
              </select>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <button
                type="submit"
                className="btn-gold w-full text-center py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Free Call Back</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp ({targetWhatsAppDisplay})</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </aside>
  );
}
