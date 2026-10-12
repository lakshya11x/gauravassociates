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
      color: 'text-[#c4410c] bg-orange-50 border-orange-200'
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
    <section id="why-us" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>06 / WHY GAURAV ASSOCIATES</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight">
            Why Hundreds of Businesses Choose <br className="hidden sm:inline" />
            <span className="g-text">
              Our Digital Studio
            </span>
          </h2>
          <p className="text-base text-[#1a1714]/70">
            We bridge the gap between expensive agencies and unreliable freelancers by offering agency-grade code at startup-friendly prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="digi-card p-8 space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1714]">{item.title}</h3>
                <p className="text-sm text-[#1a1714]/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Box */}
        <div className="mt-16 rounded-3xl bg-[#1a1714] text-white p-8 sm:p-10 text-center sm:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h4 className="text-xl sm:text-2xl font-bold">Ready to take your business online?</h4>
            <p className="text-sm text-stone-300 max-w-xl font-light">
              Get in touch today and have your working website prototype in 48 hours or your iOS app designed this week.
            </p>
          </div>
          <a
            href="https://wa.me/919828172321?text=Hi%20Gaurav%20Associates,%20I%20am%20interested%20in%20building%20a%20website%20or%20mobile%20app"
            target="_blank"
            rel="noopener noreferrer"
            className="digi-btn digi-btn-grad text-white font-bold whitespace-nowrap"
          >
            CHAT ON WHATSAPP →
          </a>
        </div>

      </div>
    </section>
  );
}
