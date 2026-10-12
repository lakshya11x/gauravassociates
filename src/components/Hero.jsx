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
  Play, 
  CreditCard,
  Zap,
  ShoppingBag,
  Bell,
  Heart,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ onOpenQuote }) {
  const [activeAppTab, setActiveAppTab] = useState('ecommerce'); // 'ecommerce' | 'health' | 'fintech'
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
    { name: 'Tailwind CSS', color: 'text-cyan-400' },
    { name: 'Node.js', color: 'text-green-600' },
    { name: 'Apple App Store', color: 'text-indigo-600' },
    { name: 'Google Play', color: 'text-emerald-600' },
    { name: 'UPI & Razorpay', color: 'text-blue-600' },
    { name: 'AWS Cloud', color: 'text-amber-500' },
  ];

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#fcfbf9] agency-grid">
      
      {/* Smooth Ambient Colorful Orbs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300/25 via-indigo-200/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-5 w-[550px] h-[550px] bg-gradient-to-br from-pink-300/25 via-purple-200/20 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-gradient-to-tr from-amber-200/20 to-emerald-200/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs sm:text-sm font-semibold text-blue-900 shadow-sm animate-float">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Gaurav Associates Private Limited</span>
              <span className="text-slate-400">•</span>
              <span className="text-blue-700">Websites from ₹5,999 & iOS Apps</span>
            </div>

            {/* Giant Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              Transforming Ideas Into <br />
              <span className="shimmer-text">
                World-Class Websites & iOS Apps
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We design and engineer high-performance responsive websites starting at 
              <strong className="text-slate-900 font-bold"> ₹5,999 delivered in 48 hours</strong>, 
              native <strong className="text-blue-600 font-bold">Apple App Store iOS applications</strong>, 
              and full-stack software. Free 1-year cloud hosting, domain setup, and code ownership included.
            </p>

            {/* Primary Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Plans & Prices (From ₹5,999)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Calculate Custom Cost</span>
              </a>
            </div>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>48-Hour Rapid Delivery</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200">
                <Apple className="w-3.5 h-3.5 text-blue-600" />
                <span>Native iOS App Store Ready</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>1-Year Domain & Hosting Free</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-200">
                <Check className="w-3.5 h-3.5 text-purple-600" />
                <span>100% Code Ownership</span>
              </span>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center gap-6 sm:gap-9">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">GS</div>
                  <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">RK</div>
                  <div className="w-9 h-9 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">PA</div>
                  <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">VM</div>
                </div>
                <div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-extrabold text-slate-900 ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    500+ Happy Clients
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

              <div>
                <p className="font-extrabold text-lg text-slate-900">500+ Projects</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Delivered on Time</p>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

              <div>
                <p className="font-extrabold text-lg text-blue-600">₹5,999</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Starting Price</p>
              </div>
            </div>

          </div>

          {/* Right Column: Stunning Interactive Titanium iPhone 16 Pro + Live Device Showcase */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Glowing Backdrop Mesh */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[50px] blur-2xl opacity-70 animate-pulse-slow"></div>

            {/* Showcase Container */}
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
                  <div className="p-4 space-y-3.5 flex-1 overflow-hidden">
                    
                    {/* Simulated Floating Notification Banner */}
                    {notification && (
                      <div className="p-2.5 rounded-2xl bg-slate-900 text-white shadow-xl text-xs flex items-center gap-2.5 animate-fadeIn">
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
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-blue-600">
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
                          activeAppTab === 'ecommerce' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Store
                      </button>
                      <button
                        onClick={() => setActiveAppTab('health')}
                        className={`py-1.5 rounded-lg transition ${
                          activeAppTab === 'health' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Health
                      </button>
                      <button
                        onClick={() => setActiveAppTab('fintech')}
                        className={`py-1.5 rounded-lg transition ${
                          activeAppTab === 'fintech' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600'
                        }`}
                      >
                        Fintech
                      </button>
                    </div>

                    {/* Tab 1: E-Commerce Demo */}
                    {activeAppTab === 'ecommerce' && (
                      <div className="space-y-2.5 animate-fadeIn">
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-blue-200">Featured Website Plan</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-lg font-black">Starter Web Plan</span>
                            <span className="text-base font-extrabold text-amber-300">₹5,999</span>
                          </div>
                          <p className="text-[10px] text-blue-100">4-6 Pages • 2 Days Delivery • Free Domain</p>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                            <span>Native iOS Mobile App</span>
                            <span className="text-blue-600">₹24,999</span>
                          </div>
                          <p className="text-[10px] text-slate-500">Apple App Store Approval • Push Alerts • APNs</p>
                          <button
                            onClick={() => handleSimulateAction('Added iOS App to cart!')}
                            className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
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
                        <div className="p-3 rounded-2xl bg-emerald-600 text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-200">Doctor Telemedicine</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-base font-black">Video Consultation</span>
                            <span className="text-xs bg-emerald-700/80 px-2 py-0.5 rounded-full">HIPAA Ready</span>
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
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white space-y-1 shadow-md">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-purple-200">Portfolio Net Worth</span>
                          <div className="flex items-baseline justify-between">
                            <span className="text-xl font-black">₹4,82,500</span>
                            <span className="text-xs font-bold text-emerald-300 flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" /> +18.4%
                            </span>
                          </div>
                          <p className="text-[10px] text-purple-200">Biometric FaceID Login • Bank Grade Security</p>
                        </div>

                        <button
                          onClick={() => handleSimulateAction('UPI Payment Processed via Razorpay!')}
                          className="w-full py-2 rounded-xl bg-slate-900 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 active:scale-95"
                        >
                          <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                          <span>Test Apple Pay / UPI</span>
                        </button>
                      </div>
                    )}

                  </div>

                  {/* App Bottom Bar */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center justify-around text-slate-400 text-xs">
                    <button className="text-blue-600 font-bold flex flex-col items-center text-[10px]">
                      <Globe className="w-4 h-4" />
                      <span>Home</span>
                    </button>
                    <button className="hover:text-blue-600 flex flex-col items-center text-[10px]">
                      <Apple className="w-4 h-4" />
                      <span>iOS Apps</span>
                    </button>
                    <button className="hover:text-blue-600 flex flex-col items-center text-[10px]">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Plans</span>
                    </button>
                  </div>

                </div>

              </div>

              {/* Floating Badge 1: 48-Hour Rapid Launch */}
              <div className="absolute -top-4 -left-6 z-20 hidden sm:inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 animate-float">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-sm">
                  ⚡
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block">48-Hour Delivery</span>
                  <span className="text-[10px] text-slate-500">Starter Plan ₹5,999</span>
                </div>
              </div>

              {/* Floating Badge 2: Apple App Store Approved */}
              <div className="absolute -bottom-4 -right-4 z-20 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 animate-float-reverse">
                <div className="w-8 h-8 rounded-xl bg-slate-950 text-white flex items-center justify-center">
                  <Apple className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-900 block">iOS Native Apps</span>
                  <span className="text-[10px] text-emerald-600 font-bold">App Store Approved</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Infinite Animated Tech Marquee */}
        <div className="mt-20 pt-10 border-t border-slate-200/80 overflow-hidden">
          <p className="text-center text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-6">
            Technologies & Frameworks We Master
          </p>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee flex items-center gap-8 text-xs font-bold text-slate-700 py-2">
              {[...techIcons, ...techIcons].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 transition"
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
