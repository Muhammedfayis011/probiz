import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/probizData';
import {
  Calculator,
  CheckCircle2,
  Building2,
  Send,
  MessageSquare,
  HelpCircle,
  FileCheck,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';

const ENTITY_TYPES = [
  { id: 'llc-foreign', name: '100% Foreign Owned LLC', desc: 'Law No. 1 / 2019 without local partner', baseDays: '15-20 Days' },
  { id: 'llc-partner', name: 'Standard LLC (51/49% W.L.L)', desc: 'With trusted Qatari Corporate Partner', baseDays: '10-14 Days' },
  { id: 'branch', name: 'Branch of Foreign Company', desc: 'Government / Private Project Contract in Qatar', baseDays: '20-25 Days' },
  { id: 'freezone', name: 'Free Zone (QFZA / QFC)', desc: '100% foreign ownership, tax benefits', baseDays: '14-21 Days' }
];

const SERVICE_ADDONS = [
  { id: 'cr_license', label: 'Commercial Registration (CR) & Trade Licence', cat: 'Setup', defaultChecked: true },
  { id: 'computer_card', label: 'Establishment / Computer Card + Tax Card', cat: 'Setup', defaultChecked: true },
  { id: 'pro_retainer', label: 'Annual PRO & Ministry Liaison Retainer', cat: 'Corporate Support', defaultChecked: true },
  { id: 'moph_licensing', label: 'MOPH & Healthcare Licensing / Dataflow PSV', cat: 'Healthcare', defaultChecked: false },
  { id: 'attestation', label: 'Certified Legal Translation & MOFA Attestation', cat: 'Legal & Language', defaultChecked: true },
  { id: 'branding_web', label: 'Brand Identity, Logo & Corporate Website', cat: 'Branding & Digital', defaultChecked: false },
  { id: 'recruitment', label: 'Workforce Sourcing & Labour Quota Approval', cat: 'HR', defaultChecked: false }
];

export default function QatarSetupEstimator({ onOpenQuote }) {
  const [selectedEntity, setSelectedEntity] = useState('llc-foreign');
  const [selectedServices, setSelectedServices] = useState([
    'cr_license',
    'computer_card',
    'pro_retainer',
    'attestation'
  ]);
  const [visaCount, setVisaCount] = useState(3);
  const [officeType, setOfficeType] = useState('serviced');

  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const currentEntityObj = ENTITY_TYPES.find((e) => e.id === selectedEntity) || ENTITY_TYPES[0];

  // Build WhatsApp pre-filled text
  const selectedServiceNames = SERVICE_ADDONS.filter((s) =>
    selectedServices.includes(s.id)
  )
    .map((s) => `• ${s.label}`)
    .join('%0A');

  const waMessage = `Hello ProBiz Team,%0A%0AI used your website Qatar Setup Estimator:%0A- Entity Type: ${encodeURIComponent(
    currentEntityObj.name
  )}%0A- Estimated Visas: ${visaCount}%0A- Office Type: ${officeType}%0A- Selected Services:%0A${selectedServiceNames}%0A%0APlease provide a detailed proposal and consultation.`;

  const waLink = `https://wa.me/97440001977?text=${waMessage}`;

  return (
    <section id="cost-estimator" className="py-20 relative bg-[#070A10]">
      <div className="probiz-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="badge-gold mb-3 inline-flex">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Qatar Business Setup & <span className="gold-text-gradient">Service Calculator</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Customize your corporate requirements to calculate estimated setup timelines, required ministry deliverables, and request a personalized quotation.
          </p>
        </div>

        {/* Two-Column Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configuration Controls */}
          <div className="lg:col-span-7 space-y-8 glass-card p-6 sm:p-8 border border-[#C5A059]/25">
            
            {/* 1. Entity Type Selection */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                <span>1. Select Proposed Legal Entity in Qatar:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {ENTITY_TYPES.map((entity) => (
                  <div
                    key={entity.id}
                    onClick={() => setSelectedEntity(entity.id)}
                    className={`p-3.5 rounded-xl cursor-pointer border transition-all ${
                      selectedEntity === entity.id
                        ? 'bg-[#141E33] border-[#DFBA73] shadow-md shadow-[#C5A059]/15'
                        : 'bg-[#0B101C] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-white">{entity.name}</div>
                      {selectedEntity === entity.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#DFBA73]" />
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{entity.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Services Selection */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                <span>2. Select Required Services (Multi-Select):</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                {SERVICE_ADDONS.map((srv) => {
                  const checked = selectedServices.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3 rounded-lg cursor-pointer border flex items-start gap-3 transition-colors ${
                        checked
                          ? 'bg-[#121A2C] border-[#DFBA73]/50 text-white'
                          : 'bg-[#090E18] border-white/5 text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}} // handled by parent onClick
                        className="mt-0.5 accent-[#DFBA73] rounded"
                      />
                      <div>
                        <div className="text-xs font-semibold leading-snug">{srv.label}</div>
                        <div className="text-[10px] text-[#DFBA73] uppercase tracking-wider mt-0.5 font-mono">
                          {srv.cat}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Number of Employee / Residence Visas */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                  <span>3. Expected Initial Visas / Work Permits:</span>
                </label>
                <span className="text-base font-bold font-mono text-[#DFBA73] bg-[#DFBA73]/15 px-3 py-0.5 rounded-full">
                  {visaCount} {visaCount === 1 ? 'Visa' : 'Visas'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                value={visaCount}
                onChange={(e) => setVisaCount(parseInt(e.target.value))}
                className="w-full accent-[#DFBA73] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0 (Setup Only)</span>
                <span>5 Visas</span>
                <span>10 Visas</span>
                <span>25+ Enterprise</span>
              </div>
            </div>

            {/* 4. Commercial Office Type */}
            <div>
              <label className="text-sm font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DFBA73]" />
                <span>4. Commercial Space / Office Arrangement:</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 mt-2 text-center">
                {[
                  { id: 'physical', label: 'Dedicated Office', sub: 'Independent lease' },
                  { id: 'serviced', label: 'Serviced Business Center', sub: 'Flexible workspace' },
                  { id: 'freezone', label: 'Free Zone / Virtual', sub: 'QFZA / QFC approved' }
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setOfficeType(opt.id)}
                    className={`p-2.5 rounded-lg border text-xs font-semibold transition-all ${
                      officeType === opt.id
                        ? 'bg-[#152033] border-[#DFBA73] text-white shadow-sm'
                        : 'bg-[#0B101C] border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>{opt.label}</div>
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">{opt.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Summary & Instant Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 border-2 border-[#C5A059]/40 relative overflow-hidden bg-gradient-to-b from-[#0F1626] to-[#0A0E18]">
              {/* Gold header */}
              <div className="border-b border-white/10 pb-5 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#DFBA73]">
                    ProBiz Custom Scope
                  </span>
                  <span className="badge-gold text-[10px]">Active Estimate</span>
                </div>
                <h3 className="text-xl font-bold text-white font-display mt-1">
                  {currentEntityObj.name}
                </h3>
                <div className="text-xs text-slate-400 mt-0.5">
                  Tailored Qatar Corporate Onboarding Bundle
                </div>
              </div>

              {/* Estimated Timetable */}
              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-[#080C16] border border-white/5">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide">Est. CR Issuance</div>
                  <div className="text-base font-bold font-mono text-[#DFBA73] mt-0.5">
                    {currentEntityObj.baseDays}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wide">Selected Services</div>
                  <div className="text-base font-bold font-mono text-white mt-0.5">
                    {selectedServices.length} Verticals
                  </div>
                </div>
              </div>

              {/* Included Scope Checklist */}
              <div className="mb-6 space-y-2">
                <div className="text-xs font-bold uppercase text-slate-300 tracking-wider mb-2">
                  Key Scope Elements:
                </div>
                {selectedServices.map((sid) => {
                  const sObj = SERVICE_ADDONS.find((x) => x.id === sid);
                  return (
                    <div key={sid} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{sObj?.label}</span>
                    </div>
                  );
                })}
                {visaCount > 0 && (
                  <div className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Work permit, Qatar ID (QID), and medical commission support for {visaCount} employee{visaCount > 1 ? 's' : ''}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-black" />
                  <span>Send Estimate to WhatsApp (+974)</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="btn-outline-gold w-full text-center py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#DFBA73]" />
                  <span>Request Official Itemized Proposal</span>
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-slate-400">
                  Direct consultation with senior business consultant. No obligation.
                </p>
              </div>

            </div>

            {/* Quick Contact Micro-card */}
            <div className="p-4 rounded-xl bg-[#0C121F] border border-white/5 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Senior PRO & Consultant on Call
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="font-mono font-bold text-[#DFBA73] hover:underline"
              >
                +974 4000 1977
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
