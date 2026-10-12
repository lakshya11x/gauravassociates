import React from 'react';
import { ArrowUp, Phone, Mail, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                GA
              </div>
              <div>
                <span className="text-base font-bold text-slate-900 tracking-tight">
                  Gaurav Associates
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                  Private Limited
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Premier web development and mobile application engineering company. Delivering dynamic responsive websites starting from ₹5,999, Apple App Store certified iOS applications, and custom enterprise software.
            </p>

            <div className="flex items-center gap-3 text-slate-500 text-[11px] pt-1">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> MCA & ISO Registered
              </span>
              <span>•</span>
              <span>100% Code Ownership</span>
            </div>
          </div>

          {/* Website Packages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Website Plans
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li><a href="#pricing" className="hover:text-blue-600 transition">Starter Plan (₹5,999 - 2 Days)</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Silver Plan (₹9,999 - 5 Days)</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Gold Plan (₹14,999 - 10-15 Days)</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Diamond Enterprise (Custom)</a></li>
              <li><a href="#calculator" className="hover:text-blue-600 transition text-blue-600 font-semibold">Custom Cost Calculator →</a></li>
            </ul>
          </div>

          {/* iOS & Mobile Apps */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              iOS & Mobile Apps
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li><a href="#pricing" className="hover:text-blue-600 transition">Native iOS App (iPhone/iPad)</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Apple App Store Publishing</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Android Mobile Apps</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">Dual App Suite (iOS + Android)</a></li>
              <li><a href="#pricing" className="hover:text-blue-600 transition">All-In-One Web + App Combo</a></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-600 transition">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="mailto:info@gauravassociates.in" className="hover:text-blue-600 transition">info@gauravassociates.in</a>
              </li>
              <li className="text-[11px] text-slate-500">
                Support Hours: 11 AM - 6 PM IST (24/7 for Gold/Diamond)
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 font-bold hover:bg-blue-50 transition"
                >
                  Request Call Back
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} Gaurav Associates Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Fast • Reliable • Modern Web & iOS Engineering</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 shadow-sm transition"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
