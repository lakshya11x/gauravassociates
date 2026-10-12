import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Clock, 
  Apple, 
  ArrowRight
} from 'lucide-react';
import { websitePlans, mobileAppPlans, comboPlans } from '../data/pricingData';

export default function Pricing({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('website');

  const getHeaderStyle = (id) => {
    switch (id) {
      case 'starter':
        return 'bg-[#1b2537] text-white';
      case 'silver':
        return 'bg-[#94a3b8] text-slate-900';
      case 'gold':
        return 'bg-[#eab308] text-slate-950 font-bold';
      case 'diamond':
        return 'bg-[#6366f1] text-white';
      default:
        return 'bg-slate-800 text-white';
    }
  };

  const getSubHeaderStyle = (id) => {
    switch (id) {
      case 'starter':
        return 'bg-[#141c2b] text-white';
      case 'silver':
        return 'bg-[#8292a6] text-slate-900';
      case 'gold':
        return 'bg-[#ca8a04] text-slate-950 font-bold';
      case 'diamond':
        return 'bg-[#4f46e5] text-white';
      default:
        return 'bg-slate-900 text-white';
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>02 / TRANSPARENT PRICING</span>
          </div>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight">
            Plans for Every Scale. <br className="hidden sm:inline" />
            <span className="g-text">
              Websites, iOS & Android Apps.
            </span>
          </h2>
          
          <p className="text-base text-[#1a1714]/70">
            No surprise add-ons. 1-Year cloud hosting, free domain, mobile responsiveness, and post-launch support included.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('website')}
              className={`px-6 py-2.5 rounded-full font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest transition-all ${
                activeTab === 'website'
                  ? 'bg-[#1a1714] text-white shadow-md'
                  : 'bg-white text-[#1a1714]/70 hover:text-[#1a1714] border border-[rgba(26,23,20,0.12)]'
              }`}
            >
              WEBSITE PLANS (FROM ₹5,999)
            </button>

            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-2.5 rounded-full font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest transition-all flex items-center gap-1.5 ${
                activeTab === 'mobile'
                  ? 'bg-[#1a1714] text-white shadow-md'
                  : 'bg-white text-[#1a1714]/70 hover:text-[#1a1714] border border-[rgba(26,23,20,0.12)]'
              }`}
            >
              <Apple className="w-4 h-4" />
              <span>IOS & ANDROID APPS</span>
            </button>

            <button
              onClick={() => setActiveTab('combo')}
              className={`px-6 py-2.5 rounded-full font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest transition-all ${
                activeTab === 'combo'
                  ? 'bg-[#1a1714] text-white shadow-md'
                  : 'bg-white text-[#1a1714]/70 hover:text-[#1a1714] border border-[rgba(26,23,20,0.12)]'
              }`}
            >
              ALL-IN-ONE COMBOS
            </button>
          </div>

          {/* iOS Addon Highlight Notice */}
          {activeTab === 'website' && (
            <div className="mt-4 p-3 rounded-2xl bg-white border border-[rgba(26,23,20,0.12)] max-w-2xl mx-auto flex items-center justify-between text-xs text-[#1a1714]/80 shadow-sm">
              <div className="flex items-center gap-2">
                <Apple className="w-4 h-4 text-[#c4410c]" />
                <span>
                  <strong>Need an iOS App Store App?</strong> Add a native iPhone/iPad app to any website tier!
                </span>
              </div>
              <button
                onClick={() => setActiveTab('mobile')}
                className="font-bold text-[#c4410c] hover:underline whitespace-nowrap ml-2"
              >
                View iOS Tiers →
              </button>
            </div>
          )}

        </div>

        {/* 1. WEBSITE PLANS (Matching user's reference image) */}
        {activeTab === 'website' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {websitePlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden bg-white text-slate-900 shadow-lg border border-[rgba(26,23,20,0.12)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular ? 'ring-2 ring-red-500 shadow-red-500/10' : ''
                }`}
              >
                {/* Popular Ribbon (Top Right) */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 z-20 overflow-hidden w-28 h-28 pointer-events-none">
                    <div className="absolute transform rotate-45 bg-red-600 text-white font-extrabold text-[10px] tracking-wider py-1 right-[-32px] top-[18px] w-[120px] text-center shadow-md uppercase">
                      Popular
                    </div>
                  </div>
                )}

                <div>
                  {/* Card Header Top */}
                  <div className={`p-4 text-center ${getHeaderStyle(plan.id)}`}>
                    <h3 className="text-xl font-bold tracking-tight">{plan.name}</h3>
                  </div>

                  {/* Card Price Bar */}
                  <div className={`py-3.5 px-4 text-center ${getSubHeaderStyle(plan.id)}`}>
                    {plan.id === 'diamond' ? (
                      <span className="text-2xl font-serif font-bold tracking-wide">
                        Customized
                      </span>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans">
                          {plan.price}
                        </span>
                        <span className="text-sm line-through opacity-70">
                          {plan.originalPrice}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Feature List */}
                  <div className="p-5 space-y-3 text-xs text-slate-700">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-slate-900 font-bold shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span className={`${feat.included ? 'text-slate-800 font-medium' : 'text-slate-400 line-through'}`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}

                    {/* iOS Specific line */}
                    <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-[#c4410c] font-semibold">
                      <Apple className="w-3.5 h-3.5 text-[#c4410c]" />
                      <span>
                        {plan.id === 'diamond' 
                          ? '✓ iOS App Included' 
                          : plan.id === 'gold' 
                          ? 'iOS App available as Add-on' 
                          : 'iOS App available upon request'}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenQuote(plan)}
                    className="w-full py-3 px-4 rounded-xl font-['IBM_Plex_Mono',monospace] font-bold text-xs uppercase tracking-wider text-white bg-[#1a1714] hover:bg-[#c4410c] transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-500 mt-2 font-mono">
                    ⏱ {plan.deliveryTime}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 2. DEDICATED iOS & ANDROID MOBILE APP PLANS */}
        {activeTab === 'mobile' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {mobileAppPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white border border-[rgba(26,23,20,0.12)] p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#c4410c] hover:shadow-2xl ${
                  plan.popular ? 'ring-2 ring-[#c4410c]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#c4410c] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md font-mono">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono-chip">
                      {plan.badge}
                    </span>
                    <span className="text-xs text-[#c4410c] font-mono font-bold">
                      {plan.discount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-5">{plan.subtitle}</p>

                  <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.08)] mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#1a1714] font-sans">{plan.price}</span>
                      <span className="text-sm line-through text-slate-400">{plan.originalPrice}</span>
                    </div>
                    <p className="text-[11px] text-emerald-700 mt-1 flex items-center gap-1 font-mono font-bold">
                      <Clock className="w-3.5 h-3.5" /> Timeline: {plan.deliveryTime}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 mb-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        {feat.included ? (
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feat.included ? 'text-slate-800 font-medium' : 'text-slate-400 line-through'}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(plan)}
                  className="w-full py-3.5 px-4 rounded-full font-['IBM_Plex_Mono',monospace] font-bold text-xs uppercase tracking-wider text-white bg-[#1a1714] hover:bg-[#c4410c] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Apple className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* 3. COMBO PACKS */}
        {activeTab === 'combo' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {comboPlans.map((plan) => (
              <div
                key={plan.id}
                className="relative rounded-3xl bg-white border border-[rgba(26,23,20,0.12)] p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="mono-chip">
                      ⭐ {plan.badge}
                    </span>
                    <span className="text-xs text-emerald-700 font-mono font-bold">
                      {plan.discount}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mb-6">{plan.subtitle}</p>

                  <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.08)] mb-6 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-[#c4410c] font-sans">{plan.price}</span>
                        <span className="text-sm line-through text-slate-400">{plan.originalPrice}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 font-mono">Full stack deployment</p>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 font-mono">⏱ {plan.deliveryTime}</span>
                  </div>

                  <div className="space-y-3 text-xs text-slate-700 mb-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium">{feat.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(plan)}
                  className="digi-btn digi-btn-grad w-full py-4 text-white font-bold"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
