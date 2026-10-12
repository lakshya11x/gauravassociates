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
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: Apple,
      badge: 'Dedicated iOS',
      title: 'Native iOS Application Development',
      description: 'Sophisticated iPhone and iPad applications engineered with Swift, SwiftUI or Flutter. Full compliance with Apple Human Interface Guidelines and App Store approval.',
      features: ['Apple App Store Submission', 'Push Notifications (APNs)', 'FaceID / Biometric Security', 'Smooth 60fps Micro-animations'],
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      icon: Smartphone,
      badge: 'Dual Platform',
      title: 'Android & Cross-Platform Apps',
      description: 'Reach 100% of the mobile market with high-performance apps deployed to both Google Play Store and Apple App Store with unified backend management.',
      features: ['Google Play & App Store Ready', 'Realtime Database & Firebase', 'UPI, Cards & Razorpay Integration', 'Offline Sync & Fast Caching'],
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: ShoppingBag,
      badge: 'High Conversion',
      title: 'E-Commerce Web & App Stores',
      description: 'Complete digital commerce suites with product catalogs, shopping cart, coupon codes, automated inventory tracking, and payment gateways.',
      features: ['One-Click Checkout', 'Abandoned Cart Recovery', 'Order Tracking & SMS/WhatsApp', 'Unified Web + App Admin'],
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: Database,
      badge: 'Custom Architecture',
      title: 'Enterprise Portals & Custom APIs',
      description: 'Robust backend systems, CRM integrations, ERP dashboards, and automated business workflows designed specifically for scaling organizations.',
      features: ['Scalable Cloud Infrastructure', 'Role-Based Access Control', 'REST & GraphQL API Endpoints', 'Automated Daily Backups'],
      iconBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    },
    {
      icon: Code2,
      badge: 'Full Code Rights',
      title: 'UI/UX Design & Brand Prototyping',
      description: 'World-class interactive Figma prototypes, brand guidelines, and design systems tailored to engage users and maximize your sales conversions.',
      features: ['Interactive Wireframes', 'Design System & Assets', 'User Journey Mapping', '100% IP & Source Code Ownership'],
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Digital Engineering For <br className="hidden sm:inline" />
            <span className="serif-highlight text-4xl sm:text-6xl font-normal">
              Web, iOS & Android
            </span>
          </h2>
          <p className="text-base text-slate-600">
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
                className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${service.iconBg} transition-transform group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuote({ name: service.title })}
                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-700 group-hover:text-blue-600 transition"
                  >
                    <span>Request Details for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
