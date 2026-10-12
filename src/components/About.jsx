import React from 'react';
import { Target, ShieldCheck, Award, CheckCircle } from 'lucide-react';

export default function About() {
  const techStack = [
    { name: 'React & Next.js', role: 'Frontend & SEO' },
    { name: 'Swift & SwiftUI', role: 'Native iOS Apps' },
    { name: 'Flutter & Dart', role: 'Cross-Platform Apps' },
    { name: 'Kotlin', role: 'Native Android' },
    { name: 'Tailwind CSS', role: 'Modern UI/UX' },
    { name: 'Node.js & Express', role: 'High Speed APIs' },
    { name: 'PostgreSQL & MongoDB', role: 'Scalable Databases' },
    { name: 'AWS & Cloudflare', role: 'Hosting & CDN' },
  ];

  return (
    <section id="about" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
              <span>05 / ABOUT THE STUDIO</span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight leading-tight">
              Engineering Digital Products <br />
              <span className="g-text">
                Built For Real Scale
              </span>
            </h2>

            <p className="text-base text-[#1a1714]/80 leading-relaxed font-light">
              At <strong>Gaurav Associates Private Limited</strong>, we believe every business deserves a sleek, lightning-fast digital footprint without paying astronomical agency fees.
            </p>

            <p className="text-sm text-[#1a1714]/70 leading-relaxed font-light">
              From our rapid <strong>Starter Plan at ₹5,999</strong> crafted in 2 days to native <strong>iOS & Android applications</strong> featured on the Apple App Store, our engineering team handles every step: UI/UX design, cloud architecture, secure database connections, and full lifecycle deployment.
            </p>

            {/* Core Values Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] shadow-sm">
                <Target className="w-5 h-5 text-[#c4410c] mb-2" />
                <h4 className="text-sm font-bold text-[#1a1714]">Precision & Speed</h4>
                <p className="text-xs text-[#1a1714]/60 mt-1">2-Day deliveries with zero compromise on code quality.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#c4410c] mb-2" />
                <h4 className="text-sm font-bold text-[#1a1714]">Full Transparency</h4>
                <p className="text-xs text-[#1a1714]/60 mt-1">Fixed costs, clear deliverables, and 100% code ownership.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] shadow-sm">
                <Award className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-[#1a1714]">Apple iOS Certified</h4>
                <p className="text-xs text-[#1a1714]/60 mt-1">Strict compliance with App Store guidelines & review.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Tech Stack & Experience */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[rgba(26,23,20,0.12)] space-y-6 shadow-xl">
            <div>
              <span className="font-['IBM_Plex_Mono',monospace] text-[10px] font-bold uppercase tracking-widest text-[#c4410c]">OUR CORE TECH STACK</span>
              <h3 className="text-xl font-bold text-[#1a1714] mt-1">Modern & Robust Tools</h3>
              <p className="text-xs text-[#1a1714]/60 mt-1">We build with future-proof frameworks that scale effortlessly.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[rgba(26,23,20,0.08)] shadow-sm"
                >
                  <p className="text-xs font-bold text-[#1a1714]">{tech.name}</p>
                  <p className="text-[10px] text-[#c4410c] font-mono mt-0.5">{tech.role}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#1a1714]/80">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>NDA & IP Security Protected</span>
              </span>
              <span className="text-[#c4410c] font-mono font-bold">100% In-House Dev</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
