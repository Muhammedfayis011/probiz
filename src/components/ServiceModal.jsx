import React from 'react';
import { X, ArrowRight, CheckCircle2, Check } from 'lucide-react';

export default function ServiceModal({ service, onClose, onConsult }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0D121F] border border-[#C5A059]/40 p-4 sm:p-6 md:p-8 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono font-bold text-[#DFBA73] bg-[#DFBA73]/15 px-2.5 py-0.5 rounded">
              VERTICAL {service.number}
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {service.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {service.title}
          </h3>
          <p className="text-sm font-semibold text-[#DFBA73] mt-1">
            {service.tagline}
          </p>
        </div>

        {/* Body content */}
        <div className="space-y-6 text-sm text-slate-300">
          <p className="leading-relaxed text-slate-200">
            {service.fullDesc}
          </p>

          {/* Features list if available */}
          {service.features && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DFBA73] mb-3">
                Included Offerings & Capabilities:
              </div>
              <div className="space-y-2.5">
                {service.features.map((feat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#080B14] border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-xs">{feat.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{feat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Groups list if available */}
          {service.groups && (
            <div className="space-y-4">
              {service.groups.map((grp, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#080B14] border border-white/5">
                  <div className="text-xs font-bold uppercase text-[#DFBA73] mb-2">{grp.category}</div>
                  <ul className="space-y-1.5">
                    {grp.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Categories list if available (Healthcare) */}
          {service.categories && (
            <div className="space-y-4">
              {service.categories.map((cat, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#080B14] border border-white/5">
                  <div className="text-xs font-bold uppercase text-[#DFBA73] mb-1">{cat.title}</div>
                  <div className="text-xs text-slate-400 mb-2">{cat.desc}</div>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Sections list if available (Branding & Digital) */}
          {service.sections && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.sections.map((sec, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#080B14] border border-white/5">
                  <div className="text-xs font-bold text-[#DFBA73] mb-1">{sec.title}</div>
                  <div className="text-[11px] text-slate-400 mb-2">{sec.desc}</div>
                  <ul className="space-y-1">
                    {sec.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-[#DFBA73] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {service.note && (
            <div className="p-3 rounded-lg bg-[#141C2E] border border-[#C5A059]/30 text-xs text-slate-300">
              <strong className="text-[#DFBA73]">Notice: </strong>
              {service.note}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              if (onConsult) onConsult(service.title);
            }}
            className="btn-gold w-full sm:w-auto text-xs px-6 py-2.5 flex items-center justify-center gap-2"
          >
            <span>Request Proposal for this Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="btn-outline-gold w-full sm:w-auto text-xs py-2 px-4"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
