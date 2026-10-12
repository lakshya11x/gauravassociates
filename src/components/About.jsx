import React from 'react';
import { ShieldCheck, Target, Award, CheckCircle } from 'lucide-react';

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
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <span>About Gaurav Associates</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Engineering Digital Products <br />
              <span className="serif-highlight text-4xl sm:text-6xl font-normal">
                Built For Real Scale
              </span>
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              At <strong>Gaurav Associates Private Limited</strong>, we believe every business deserves a sleek, lightning-fast digital footprint without paying astronomical agency fees.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              From our rapid <strong>Starter Plan at ₹5,999</strong> crafted in 2 days to native <strong>iOS & Android applications</strong> featured on the Apple App Store, our engineering team handles every step: UI/UX design, cloud architecture, secure database connections, and full lifecycle deployment.
            </p>

            {/* Core Values Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Target className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Precision & Speed</h4>
                <p className="text-xs text-slate-600 mt-1">2-Day deliveries with zero compromise on code quality.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-blue-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Full Transparency</h4>
                <p className="text-xs text-slate-600 mt-1">Fixed costs, clear deliverables, and 100% code ownership.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <Award className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-slate-900">Apple iOS Certified</h4>
                <p className="text-xs text-slate-600 mt-1">Strict compliance with App Store guidelines & review.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Tech Stack & Experience */}
          <div className="lg:col-span-5 bg-slate-50/80 p-8 rounded-3xl border border-slate-200 space-y-6 shadow-lg">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Our Core Tech Stack</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Modern & Robust Tools</h3>
              <p className="text-xs text-slate-600 mt-1">We build with future-proof frameworks that scale effortlessly.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
                >
                  <p className="text-xs font-bold text-slate-900">{tech.name}</p>
                  <p className="text-[10px] text-blue-600 font-mono mt-0.5">{tech.role}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-700">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>NDA & IP Security Protected</span>
              </span>
              <span className="text-blue-600 font-bold font-mono">100% In-House Dev</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
