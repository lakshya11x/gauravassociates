import React from 'react';
import { 
  Globe, 
  Apple, 
  Smartphone, 
  ShoppingBag, 
  Database, 
  Code2, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const services = [
    {
      icon: Globe,
      badge: 'Starts at ₹5,999',
      title: 'High-Performance Web Development',
      description: 'Ultra-fast, mobile-responsive websites built with modern React, Next.js, and Tailwind CSS. Includes 1-year hosting, domain, SSL, and lead generation forms.',
      features: ['2 to 5 Days Delivery', 'Mobile & Tablet 100% Fluid', 'Free Domain & Cloud Hosting', 'Basic to Full SEO Optimization'],
      accent: 'border-blue-200 bg-blue-50/60 text-blue-700',
    },
    {
      icon: Apple,
      badge: 'Dedicated iOS',
      title: 'Native iOS Application Development',
      description: 'Sophisticated iPhone and iPad applications engineered with Swift, SwiftUI or Flutter. Full compliance with Apple Human Interface Guidelines and App Store approval.',
      features: ['Apple App Store Submission', 'Push Notifications (APNs)', 'FaceID / Biometric Security', 'Smooth 60fps Micro-animations'],
      accent: 'border-orange-200 bg-orange-50/60 text-[#c4410c]',
    },
    {
      icon: Smartphone,
      badge: 'Dual Platform',
      title: 'Android & Cross-Platform Apps',
      description: 'Reach 100% of the mobile market with high-performance apps deployed to both Google Play Store and Apple App Store with unified backend management.',
      features: ['Google Play & App Store Ready', 'Realtime Database & Firebase', 'UPI, Cards & Razorpay Integration', 'Offline Sync & Fast Caching'],
      accent: 'border-purple-200 bg-purple-50/60 text-purple-700',
    },
    {
      icon: ShoppingBag,
      badge: 'High Conversion',
      title: 'E-Commerce Web & App Stores',
      description: 'Complete digital commerce suites with product catalogs, shopping cart, coupon codes, automated inventory tracking, and payment gateways.',
      features: ['One-Click Checkout', 'Abandoned Cart Recovery', 'Order Tracking & SMS/WhatsApp', 'Unified Web + App Admin'],
      accent: 'border-emerald-200 bg-emerald-50/60 text-emerald-700',
    },
    {
      icon: Database,
      badge: 'Custom Architecture',
      title: 'Enterprise Portals & Custom APIs',
      description: 'Robust backend systems, CRM integrations, ERP dashboards, and automated business workflows designed specifically for scaling organizations.',
      features: ['Scalable Cloud Infrastructure', 'Role-Based Access Control', 'REST & GraphQL API Endpoints', 'Automated Daily Backups'],
      accent: 'border-amber-200 bg-amber-50/60 text-amber-800',
    },
    {
      icon: Code2,
      badge: 'Full Code Rights',
      title: 'UI/UX Design & Brand Prototyping',
      description: 'World-class interactive Figma prototypes, brand guidelines, and design systems tailored to engage users and maximize your sales conversions.',
      features: ['Interactive Wireframes', 'Design System & Assets', 'User Journey Mapping', '100% IP & Source Code Ownership'],
      accent: 'border-rose-200 bg-rose-50/60 text-rose-700',
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>02 / SPECIALIZED CAPABILITIES</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight">
            Complete Digital Engineering For <br className="hidden sm:inline" />
            <span className="g-text">
              Web, iOS & Android
            </span>
          </h2>
          <p className="text-base text-[#1a1714]/70">
            Whether you need a quick-launch business website in 2 days or a full-scale iOS application on the Apple App Store, Gaurav Associates handles design, coding, testing, and deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="digi-card p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${service.accent} transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="mono-chip">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1714] group-hover:text-[#c4410c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#1a1714]/70 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-[rgba(26,23,20,0.08)] space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#1a1714]/80">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[rgba(26,23,20,0.08)]">
                  <button
                    onClick={() => onOpenQuote({ name: service.title })}
                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-['IBM_Plex_Mono',monospace] font-bold uppercase tracking-wider text-[#1a1714] hover:text-[#c4410c] transition"
                  >
                    <span>Request Details for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
