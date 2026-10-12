import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  Smartphone, 
  Globe, 
  Apple, 
  MessageCircle,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PriceCalculator({ onOpenQuote }) {
  const [platform, setPlatform] = useState('both');
  const [screens, setScreens] = useState(8);
  const [selectedFeatures, setSelectedFeatures] = useState({
    auth: true,
    payments: true,
    notifications: true,
    adminPanel: true,
    seo: false,
    storePublishing: true,
    whatsappChat: true,
  });

  const platformBasePrices = {
    web: { name: 'Dynamic Website Only', base: 5999, days: 5 },
    ios: { name: 'Native iOS App (iPhone & iPad)', base: 24999, days: 15 },
    android: { name: 'Native Android App (Play Store)', base: 19999, days: 12 },
    'dual-mobile': { name: 'Dual App (iOS + Android)', base: 34999, days: 22 },
    both: { name: 'Full Suite (Website + iOS + Android)', base: 44999, days: 25 },
  };

  const featureList = [
    { id: 'auth', name: 'User Login & OTP / Social Auth', price: 2500, days: 2 },
    { id: 'payments', name: 'Payment Gateway (UPI, Cards, NetBanking)', price: 3000, days: 2 },
    { id: 'notifications', name: 'Apple APNs & Android Push Alerts', price: 2500, days: 1 },
    { id: 'adminPanel', name: 'Admin Control Dashboard & CMS', price: 4500, days: 3 },
    { id: 'storePublishing', name: 'App Store & Play Store Deployment', price: 3500, days: 2 },
    { id: 'seo', name: 'Full SEO Optimization & Indexing', price: 2000, days: 1 },
    { id: 'whatsappChat', name: 'Direct WhatsApp CRM & Live Chat Sync', price: 1500, days: 1 },
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const screenAddonCost = Math.max(0, screens - 5) * 1000;
  const screenAddonDays = Math.ceil(Math.max(0, screens - 5) / 3);

  const featuresCost = featureList.reduce((acc, feat) => {
    return selectedFeatures[feat.id] ? acc + feat.price : acc;
  }, 0);

  const featuresDays = featureList.reduce((acc, feat) => {
    return selectedFeatures[feat.id] ? acc + feat.days : acc;
  }, 0);

  const currentPlatform = platformBasePrices[platform];
  const totalPrice = currentPlatform.base + screenAddonCost + featuresCost;
  const totalDays = Math.max(currentPlatform.days, Math.round(currentPlatform.days + screenAddonDays + (featuresDays * 0.4)));

  const handleSendToWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const activeFeatNames = featureList
      .filter((f) => selectedFeatures[f.id])
      .map((f) => f.name)
      .join(', ');

    const message = encodeURIComponent(
      `Hello Gaurav Associates! 👋\nI calculated a project quote on your website:\n` +
      `• Platform: ${currentPlatform.name}\n` +
      `• Screens/Pages: ${screens}\n` +
      `• Addons: ${activeFeatNames}\n` +
      `• Estimated Price: ₹${totalPrice.toLocaleString('en-IN')}\n` +
      `• Timeline: ${totalDays} Days\n\n` +
      `Please let me know how we can proceed!`
    );

    window.open(`https://wa.me/919828172321?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>03 / COST ESTIMATOR</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714]">
            Calculate Your Custom <br />
            <span className="g-text">
              Website & App Investment
            </span>
          </h2>
          <p className="text-sm text-[#1a1714]/70">
            Customize platform, screens, and features to receive an instant transparent cost breakdown.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[rgba(26,23,20,0.12)] space-y-7 shadow-xl">
            
            {/* Step 1: Select Platform */}
            <div>
              <label className="block font-['IBM_Plex_Mono',monospace] text-xs font-bold uppercase tracking-wider text-[#1a1714] mb-3">
                1. Select Platform
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'web', label: 'Website Only', icon: Globe },
                  { id: 'ios', label: 'iOS App (iPhone/iPad)', icon: Apple },
                  { id: 'android', label: 'Android App', icon: Smartphone },
                  { id: 'dual-mobile', label: 'iOS + Android Dual', icon: Smartphone },
                  { id: 'both', label: 'Web + iOS + Android (Suite)', icon: Sparkles, colSpan: 'col-span-2 sm:col-span-2' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = platform === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        item.colSpan || ''
                      } ${
                        isSelected
                          ? 'bg-[#1a1714] border-[#1a1714] text-white shadow-md'
                          : 'bg-[#faf7f2] border-[rgba(26,23,20,0.1)] text-[#1a1714]/70 hover:text-[#1a1714]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#fb923c]' : 'text-stone-400'}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#fb923c]"></span>}
                      </div>
                      <span className="text-xs font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Screen / Page Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-['IBM_Plex_Mono',monospace] text-xs font-bold uppercase tracking-wider text-[#1a1714]">
                  2. Number of Pages / Screens
                </label>
                <span className="text-sm font-bold text-[#c4410c] font-mono">
                  {screens} Screens/Pages
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                value={screens}
                onChange={(e) => setScreens(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#c4410c]"
              />
              <div className="flex justify-between font-['IBM_Plex_Mono',monospace] text-[10px] text-stone-500 mt-1">
                <span>Starter (4-6 pages)</span>
                <span>Medium (10-15)</span>
                <span>Enterprise (20-30+)</span>
              </div>
            </div>

            {/* Step 3: Features Checklist */}
            <div>
              <label className="block font-['IBM_Plex_Mono',monospace] text-xs font-bold uppercase tracking-wider text-[#1a1714] mb-3">
                3. Choose Required Features & Addons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureList.map((feat) => {
                  const checked = selectedFeatures[feat.id];
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                        checked
                          ? 'bg-[#faf7f2] border-[#c4410c] text-[#1a1714]'
                          : 'bg-white border-[rgba(26,23,20,0.1)] text-[#1a1714]/60 hover:border-stone-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                          checked ? 'bg-[#c4410c] text-white' : 'border border-stone-300'
                        }`}>
                          {checked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-semibold">{feat.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#c4410c] font-bold">
                        +₹{feat.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Price & Timeline Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-[rgba(26,23,20,0.12)] shadow-2xl relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <span className="font-['IBM_Plex_Mono',monospace] text-xs uppercase font-bold text-stone-500 tracking-wider">
                ESTIMATED INVESTMENT
              </span>
              <span className="mono-chip bg-emerald-50 text-emerald-800 border-emerald-200">
                INSTANT QUOTE
              </span>
            </div>

            {/* Big Price Display */}
            <div>
              <p className="font-['IBM_Plex_Mono',monospace] text-xs text-stone-500">TOTAL ALL-INCLUSIVE ESTIMATE</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#1a1714] font-sans tracking-tight">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#c4410c] font-bold font-mono">INR</span>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Includes full design, code ownership, domain setup, hosting & maintenance support.
              </p>
            </div>

            {/* Delivery Timeline Box */}
            <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.08)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#1a1714]">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Estimated Delivery Time:</span>
              </div>
              <span className="font-bold text-emerald-700 font-mono text-sm">
                ~{totalDays} Working Days
              </span>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-4 font-['IBM_Plex_Mono',monospace]">
              <div className="flex justify-between">
                <span>Selected Package:</span>
                <span className="text-[#1a1714] font-bold">{currentPlatform.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Pages/Screens:</span>
                <span className="text-[#1a1714] font-bold">{screens} screens</span>
              </div>
              <div className="flex justify-between">
                <span>Features Included:</span>
                <span className="text-[#1a1714] font-bold">
                  {Object.values(selectedFeatures).filter(Boolean).length} addons
                </span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>1-Year Domain & Cloud Hosting:</span>
                <span>FREE INCLUDED</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-full font-['IBM_Plex_Mono',monospace] font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>LOCK PRICE ON WHATSAPP (INSTANT)</span>
              </button>

              <button
                onClick={() => onOpenQuote({
                  name: `Custom Estimate: ${currentPlatform.name}`,
                  price: `₹${totalPrice.toLocaleString('en-IN')}`,
                  deliveryTime: `${totalDays} Days`,
                  screens: screens,
                })}
                className="w-full py-3 px-4 rounded-full font-['IBM_Plex_Mono',monospace] font-bold text-xs text-[#1a1714] bg-[#faf7f2] hover:bg-stone-200 border border-[rgba(26,23,20,0.12)] flex items-center justify-center gap-2 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>BOOK CONSULTATION WITH ENGINEER</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
