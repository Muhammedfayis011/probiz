import React from 'react';
import PageHero from './PageHero';
import WhyChooseUs from './WhyChooseUs';
import FaqSection from './FaqSection';
import { DollarSign, Globe, Shield, TrendingUp } from 'lucide-react';

const QATAR_INCENTIVES = [
  {
    icon: DollarSign,
    title: 'Zero Personal Income Tax',
    desc: 'Qatar levies 0% personal income tax, no capital gains tax on individuals, and zero withholding tax on personal dividends.'
  },
  {
    icon: Shield,
    title: '100% Foreign Company Ownership',
    desc: 'Under Foreign Investment Law No. 1 of 2019, international investors can own 100% of their business across most major commercial and service sectors.'
  },
  {
    icon: TrendingUp,
    title: '100% Capital Repatriation',
    desc: 'Complete freedom to transfer capital, profits, and proceeds abroad in freely convertible currencies without currency exchange restrictions.'
  },
  {
    icon: Globe,
    title: 'Strategic Hub & Global Connectivity',
    desc: 'Direct global shipping through Hamad Port and premier global aviation connectivity via Qatar Airways and Hamad International Airport (HIA).'
  }
];

export default function WhyQatarPage({ onBackToHome, onOpenQuote }) {
  return (
    <div className="bg-[#0D0D0D] text-slate-100 min-h-screen">
      <PageHero
        breadcrumb="Why Qatar"
        badge="Strategic Investment Destination"
        title="Why Invest in Qatar."
        highlight="The Gateway to GCC Growth."
        subtitle="Ranked among the world's most stable, prosperous, and investor-friendly economies. Benefit from a tax-efficient ecosystem backed by Qatar National Vision 2030."
        onBackToHome={onBackToHome}
      />

      {/* 4 Pillars of Qatar Advantage */}
      <section className="py-16 bg-[#080B12] border-b border-white/5">
        <div className="probiz-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-gold mb-2 inline-flex">Macroeconomic Incentives</div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Key Advantages of the Qatar Business Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {QATAR_INCENTIVES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0D1322] border border-[#C5A059]/20 hover:border-[#DFBA73]/40 transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#DFBA73]/15 border border-[#DFBA73]/30 flex items-center justify-center text-[#DFBA73] mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose ProBiz Section */}
      <WhyChooseUs onOpenQuote={onOpenQuote} />

      {/* Comprehensive FAQs */}
      <FaqSection onOpenQuote={onOpenQuote} />
    </div>
  );
}
