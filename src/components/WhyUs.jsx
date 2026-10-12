import React from 'react';
import { 
  Zap, 
  Apple, 
  ShieldCheck, 
  BadgePercent, 
  Headphones, 
  Code
} from 'lucide-react';

export default function WhyUs() {
  const highlights = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      desc: 'Our Starter Website is delivered within 48 hours! We respect deadlines with precision planning and agile sprints.',
      color: 'text-amber-600 bg-amber-50 border-amber-200'
    },
    {
      icon: Apple,
      title: 'Guaranteed App Store Approval',
      desc: 'We engineer iOS apps strictly complying with Apple HIG guidelines and ensure seamless publication to the App Store.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: BadgePercent,
      title: 'Honest & Transparent Rates',
      desc: 'Clear upfront pricing starting from ₹5,999 with zero hidden costs. Complete breakdown of hosting, domain and maintenance.',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
    },
    {
      icon: Code,
      title: '100% Source Code Ownership',
      desc: 'No vendor lock-in. You receive full GitHub repository rights, administrative credentials, and database ownership.',
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      icon: ShieldCheck,
      title: 'Free Domain & Hosting',
      desc: 'All website packages include 1 year of high-speed cloud hosting, SSL encryption, and domain registration.',
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200'
    },
    {
      icon: Headphones,
      title: 'Dedicated Human Support',
      desc: 'Direct phone and WhatsApp technical support (11 AM - 6 PM IST daily or 24/7 priority for enterprise accounts).',
      color: 'text-rose-600 bg-rose-50 border-rose-200'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Hundreds of Businesses Choose <br className="hidden sm:inline" />
            <span className="serif-highlight text-4xl sm:text-6xl font-normal">
              Gaurav Associates
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We bridge the gap between expensive agencies and unreliable freelancers by offering agency-grade code at startup-friendly prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-300 transition duration-300 space-y-4 hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Box */}
        <div className="mt-16 rounded-3xl bg-blue-600 text-white p-8 sm:p-10 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-bold">Ready to take your business online?</h4>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Get in touch today and have your working website prototype in 48 hours or your iOS app designed this week.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20Gaurav%20Associates,%20I%20am%20interested%20in%20building%20a%20website%20or%20mobile%20app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white text-blue-600 font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-blue-50 transition-all whitespace-nowrap"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
