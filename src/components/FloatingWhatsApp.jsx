import React from 'react';
import { COMPANY_INFO } from '../data/probizData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating WhatsApp Action Pill */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ProBiz on WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-black fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline font-sans tracking-wide">
          WhatsApp ProBiz
        </span>
      </a>
    </div>
  );
}
