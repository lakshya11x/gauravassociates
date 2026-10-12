import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  Apple, 
  ShoppingBag, 
  CreditCard,
  Zap,
  TrendingUp,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenQuote }) {
  const [activeAppTab, setActiveAppTab] = useState('ecommerce');
  const [notification, setNotification] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleSimulateAction = (title) => {
    setNotification(title);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5, x: 0.7 }
    });
    setTimeout(() => setNotification(false), 3500);
  };

  const techIcons = [
    { name: 'React', color: 'text-cyan-500' },
    { name: 'Swift (iOS)', color: 'text-orange-500' },
    { name: 'SwiftUI', color: 'text-blue-500' },
    { name: 'Flutter', color: 'text-sky-500' },
    { name: 'Next.js', color: 'text-slate-900' },
    { name: 'Android / Kotlin', color: 'text-emerald-500' },
    { name: 'Tailwind CSS', color: 'text-cyan-500' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Apple App Store', color: 'text-indigo-600' },
    { name: 'Google Play', color: 'text-emerald-600' },
    { name: 'UPI & Razorpay', color: 'text-blue-600' },
    { name: 'AWS Cloud', color: 'text-amber-500' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#faf7f2] film-grain">
      
      {/* Digiryze Soft Aurora Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.14),transparent_65%)] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.10),rgba(139,92,246,0)_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Digiryze Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.28em] text-[#c4410c] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4410c] animate-ping"></span>
              <span>01 / GA DIGITAL STUDIO</span>
              <span className="text-stone-300">|</span>
              <span className="text-[#1a1714]/60">PLANS FROM ₹5,999 & IOS APPS</span>
            </div>

            {/* Headline with Digiryze Sunset Gradient */}
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-4xl sm:text-6xl lg:text-[4.2rem] text-[#1a1714] tracking-[-0.025em] leading-[1.08]">
              Transforming Ideas Into <br />
              <span className="g-text">
                World-Class Websites & iOS Apps
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#1a1714]/70 max-w-xl font-light leading-relaxed">
              We design and engineer high-performance responsive websites starting at 
              <strong className="text-[#1a1714] font-semibold"> ₹5,999 delivered in 48 hours</strong>, 
              native <strong className="text-[#c4410c] font-semibold">Apple App Store iOS applications</strong>, 
              and custom digital software. Free 1-year cloud hosting, domain setup, and code ownership included.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="digi-btn digi-btn-grad font-bold shadow-xl text-white"
              >
                <span>VIEW PLANS (FROM ₹5,999)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-['IBM_Plex_Mono',monospace] font-bold tracking-widest text-[#1a1714] bg-[#faf7f2] border border-[rgba(26,23,20,0.25)] hover:border-[#c4410c] hover:text-[#c4410c] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#fb923c]" />
                <span>CALCULATE CUSTOM COST</span>
              </a>
            </div>

            {/* Digiryze Command Chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(196,65,12,0.06)] border border-[rgba(196,65,12,0.22)] font-['IBM_Plex_Mono',monospace] text-[11px] text-[#9a3412]">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#c4410c] to-[#ec4899] shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
              <span>gaurav: <b>launch_production --speed=48h --ios=native</b></span>
            </div>

            {/* Digiryze Mono Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="mono-chip bg-emerald-50 text-emerald-800 border-emerald-200">
                ✓ 48-Hour Rapid Delivery
              </span>
              <span className="mono-chip bg-blue-50 text-blue-800 border-blue-200">
                ✓ Native iOS App Store Ready
              </span>
              <span className="mono-chip bg-amber-50 text-amber-900 border-amber-200">
                ✓ 1-Year Domain & Cloud Hosting Free
              </span>
              <span className="mono-chip bg-purple-50 text-purple-900 border-purple-200">
                ✓ 100% Full Source Code Rights
              </span>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-[rgba(26,23,20,0.1)] flex flex-wrap items-center gap-6 sm:gap-9">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a1714] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-[#faf7f2]">GS</div>
                  <div className="w-8 h-8 rounded-full bg-[#c4410c] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-[#faf7f2]">RK</div>
                  <div className="w-8 h-8 rounded-full bg-[#ec4899] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-[#faf7f2]">PA</div>
                  <div className="w-8 h-8 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-[#faf7f2]">VM</div>
                </div>
                <div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-[#1a1714] ml-1">4.9</span>
                  </div>
                  <p className="font-['IBM_Plex_Mono',monospace] text-[9px] uppercase tracking-widest text-[#1a1714]/50">
                    98% SATISFACTION
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-[rgba(26,23,20,0.12)]"></div>

              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base text-[#1a1714]">
                  500+ Projects
                </p>
                <p className="font-['IBM_Plex_Mono',monospace] text-[9px] uppercase tracking-widest text-[#1a1714]/50">
                  DELIVERED ON TIME
                </p>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-[rgba(26,23,20,0.12)]"></div>

              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-base text-[#c4410c]">
                  ₹5,999
                </p>
                <p className="font-['IBM_Plex_Mono',monospace] text-[9px] uppercase tracking-widest text-[#1a1714]/50">
                  STARTER ENTRY
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: The Titanium iPhone 16 Pro Mockup (Retained As Requested!) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Mesh */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#c4410c]/15 via-[#ec4899]/15 to-[#8b5cf6]/15 rounded-[50px] blur-2xl opacity-75 animate-pulse-slow"></div>

            {/* Phone Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Titanium iPhone Frame */}
              <div className="iphone-frame shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                
                {/* iPhone Screen */}
                <div className="iphone-screen flex flex-col justify-between">
                  
                  {/* Dynamic Island */}
                  <div className="dynamic-island w-[110px]">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span className="text-[8px] font-bold text-emerald-400">Live</span>
                    </div>
                  </div>

                  {/* Top Status Bar (Inside Screen) */}
                  <div className="pt-2 px-5 pb-1 flex items-center justify-between text-[11px] font-bold text-slate-900 border-b border-slate-100 bg-slate-50/80">
                    <span>9:41</span>
                    <div className="flex items-center gap-1 text-[9px] text-slate-600">
                      <span>5G</span>
                      <span>100%</span>
                    </div>
                  </div>

                  {/* App Screen Content */}
                  <div className="p-4 space-y-3.5 flex-1 overflow-hidden bg-white">
                    
                    {/* Simulated Floating Notification Banner */}
                    {notification && (
                      <div className="p-2.5 rounded-2xl bg-[#1a1714] text-white shadow-xl text-xs flex items-center gap-2.5 animate-fadeIn">
                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <div className="text-[11px] leading-tight">
                          <p className="font-bold text-emerald-300">Success!</p>
                          <p className="text-slate-300">{notification}</p>
                        </div>
                      </div>
                    )}

                    {/* App Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase font-['IBM_Plex_Mono',monospace] font-bold tracking-wider text-[#c4410c]">
                          Gaurav Associates Studio
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900">
                          Digital Store & App
                        </h4>
                      </div>
                      <button 
                        onClick={() => setLiked(!liked)} 
                        className={`p-2 rounded-xl border transition ${
                          liked ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${liked ? 'fill-rose-500' : ''}`} />
                      </button>
                    </div>

                    {/* Interactive App Mode Switcher */}
                    <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-100 text-[10px] font-bold text-center">
                      <button
                        onClick={() => setActiveAppTab('ecommerce')}
                        className={`py-1.5 rounded-lg transition ${
                          activeAppTab === 'ecommerce' ? 'bg-white text-[#c4410c] shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Store
                      </button>
                      <button
                        onClick={() => setActiveAppTab('health')}
                        className={`py-1.5 rounded-lg transition ${
                          activeAppTab === 'health' ? 'bg-white text-[#c4410c] shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Health
                      </button>
                      <button
                        onClick={() => setActiveAppTab('fintech')}
                        className={`py-1.5 rounded-lg transition ${
                          activeAppTab === 'fintech' ? 'bg-white text-[#c4410c] shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Fintech
                      </button>
                    </div>

                    {/* Tab 1: E-Commerce Demo */}
                    {activeAppTab === 'ecommerce' && (
                      <div className="space-y-2.5 animate-fadeIn">
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1a1714] to-[#2c241e] text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider text-[#fb923c]">FEATURED WEB PLAN</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-lg font-bold">Starter Plan</span>
                            <span className="text-base font-extrabold text-[#fb923c]">₹5,999</span>
                          </div>
                          <p className="text-[10px] text-stone-300">4-6 Pages • 2 Days Delivery • Free Domain</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                            <span>Native iOS Mobile App</span>
                            <span className="text-[#c4410c]">₹24,999</span>
                          </div>
                          <p className="text-[10px] text-slate-500">Apple App Store Approval • Push Alerts • APNs</p>
                          <button
                            onClick={() => handleSimulateAction('Added iOS App to cart!')}
                            className="w-full py-2.5 rounded-xl bg-[#1a1714] hover:bg-[#c4410c] text-white text-[11px] font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition active:scale-95"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Tap to Test Order</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Healthcare Demo */}
                    {activeAppTab === 'health' && (
                      <div className="space-y-2.5 animate-fadeIn">
                        <div className="p-3.5 rounded-2xl bg-emerald-700 text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider text-emerald-200">Doctor Telemedicine</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-base font-bold">Video Consultation</span>
                            <span className="text-xs bg-emerald-800/80 px-2 py-0.5 rounded-full font-mono">HIPAA</span>
                          </div>
                          <p className="text-[10px] text-emerald-100">Prescription Sync • Hindi & English Support</p>
                        </div>

                        <button
                          onClick={() => handleSimulateAction('Appointment Booked on iOS App!')}
                          className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                        >
                          <span>Simulate Doctor Booking</span>
                        </button>
                      </div>
                    )}

                    {/* Tab 3: Fintech Demo */}
                    {activeAppTab === 'fintech' && (
                      <div className="space-y-2.5 animate-fadeIn">
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider text-purple-100">Portfolio Net Worth</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-xl font-bold">₹4,82,500</span>
                            <span className="text-xs font-bold text-emerald-300 flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" /> +18.4%
                            </span>
                          </div>
                          <p className="text-[10px] text-purple-100">Biometric FaceID Login • Bank Security</p>
                        </div>

                        <button
                          onClick={() => handleSimulateAction('UPI Payment Processed via Razorpay!')}
                          className="w-full py-2.5 rounded-xl bg-[#1a1714] text-white text-[11px] font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95"
                        >
                          <CreditCard className="w-3.5 h-3.5 text-[#fb923c]" />
                          <span>Test Apple Pay / UPI</span>
                        </button>
                      </div>
                    )}

                  </div>

                  {/* App Bottom Bar */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-around text-slate-400 text-xs">
                    <button className="text-[#c4410c] font-bold flex flex-col items-center text-[10px]">
                      <Globe className="w-4 h-4" />
                      <span>Home</span>
                    </button>
                    <button className="hover:text-[#c4410c] flex flex-col items-center text-[10px]">
                      <Apple className="w-4 h-4" />
                      <span>iOS Apps</span>
                    </button>
                    <button className="hover:text-[#c4410c] flex flex-col items-center text-[10px]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Plans</span>
                    </button>
                  </div>

                </div>

              </div>

              {/* Floating Badge 1: 48-Hour Rapid Delivery */}
              <div className="absolute -top-4 -left-6 z-20 hidden sm:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.12)] shadow-xl animate-float">
                <div className="w-8 h-8 rounded-xl bg-[#c4410c] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ⚡
                </div>
                <div className="text-left font-['IBM_Plex_Mono',monospace]">
                  <span className="text-xs font-bold text-[#1a1714] block">48-Hour Delivery</span>
                  <span className="text-[10px] text-[#1a1714]/60">Starter Plan ₹5,999</span>
                </div>
              </div>

              {/* Floating Badge 2: Apple App Store Approved */}
              <div className="absolute -bottom-4 -right-4 z-20 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.12)] shadow-xl animate-float-reverse">
                <div className="w-8 h-8 rounded-xl bg-[#1a1714] text-white flex items-center justify-center">
                  <Apple className="w-4 h-4" />
                </div>
                <div className="text-left font-['IBM_Plex_Mono',monospace]">
                  <span className="text-xs font-bold text-[#1a1714] block">iOS Native Apps</span>
                  <span className="text-[10px] text-emerald-700 font-bold">App Store Approved</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Infinite Moving Tech Marquee */}
        <div className="mt-20 pt-10 border-t border-[rgba(26,23,20,0.1)] overflow-hidden">
          <p className="text-center font-['IBM_Plex_Mono',monospace] text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#1a1714]/40 mb-6">
            Technologies & Frameworks We Master
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 font-['IBM_Plex_Mono',monospace] text-xs font-bold text-[#1a1714] py-2">
              {[...techIcons, ...techIcons].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] shadow-sm hover:border-[#c4410c] transition"
                >
                  <span className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
