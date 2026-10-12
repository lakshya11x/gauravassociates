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

    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Calculate Your Custom <br />
            <span className="serif-highlight text-4xl sm:text-6xl font-normal">
              Website & App Investment
            </span>
          </h2>
          <p className="text-sm text-slate-600">
            Customize platform, screens, and features to receive an instant transparent cost breakdown.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 space-y-7 shadow-xl">
            
            {/* Step 1: Select Platform */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
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
                          ? 'bg-blue-50 border-blue-500 text-blue-950 shadow-sm'
                          : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
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
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Number of Pages / Screens
                </label>
                <span className="text-sm font-bold text-blue-600 font-mono">
                  {screens} Screens/Pages
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                value={screens}
                onChange={(e) => setScreens(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>Starter (4-6 pages)</span>
                <span>Medium (10-15)</span>
                <span>Enterprise (20-30+)</span>
              </div>
            </div>

            {/* Step 3: Features Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
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
                          ? 'bg-blue-50/60 border-blue-300 text-slate-900'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-xs ${
                          checked ? 'bg-blue-600 text-white' : 'border border-slate-300'
                        }`}>
                          {checked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-semibold">{feat.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-blue-600 font-bold">
                        +₹{feat.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Price & Timeline Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">Estimated Investment</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-emerald-50 text-emerald-800 font-extrabold border border-emerald-200">
                Instant Estimate
              </span>
            </div>

            {/* Big Price Display */}
            <div>
              <p className="text-xs text-slate-500">Total All-Inclusive Estimate</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-sans tracking-tight">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-blue-600 font-bold">INR</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Includes full design, code ownership, domain setup, hosting & maintenance support.
              </p>
            </div>

            {/* Delivery Timeline Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Estimated Delivery Time:</span>
              </div>
              <span className="font-bold text-emerald-700 font-mono text-sm">
                ~{totalDays} Working Days
              </span>
            </div>

            {/* Breakdown summary */}
            <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4">
              <div className="flex justify-between">
                <span>Selected Package:</span>
                <span className="text-slate-900 font-bold">{currentPlatform.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Pages/Screens:</span>
                <span className="text-slate-900 font-bold">{screens} screens</span>
              </div>
              <div className="flex justify-between">
                <span>Features Included:</span>
                <span className="text-slate-900 font-bold">
                  {Object.values(selectedFeatures).filter(Boolean).length} addons
                </span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>1-Year Domain & Cloud Hosting:</span>
                <span className="font-bold">FREE INCLUDED</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Lock Price on WhatsApp (Instant)</span>
              </button>

              <button
                onClick={() => onOpenQuote({
                  name: `Custom Estimate: ${currentPlatform.name}`,
                  price: `₹${totalPrice.toLocaleString('en-IN')}`,
                  deliveryTime: `${totalDays} Days`,
                  screens: screens,
                })}
                className="w-full py-3 px-4 rounded-full font-bold text-xs text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/70 border border-blue-200 flex items-center justify-center gap-2 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Book Consultation With Engineer</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
