import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'PRICING & IOS', href: '#pricing' },
    { name: 'CALCULATOR', href: '#calculator' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3.5 bg-[#faf7f2]/92 backdrop-blur-md border-b border-[rgba(26,23,20,0.08)] shadow-sm' 
        : 'py-6 bg-gradient-to-b from-[#faf7f2] via-[#faf7f2]/90 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo (Digiryze Aesthetic Brand Identity) */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#1a1714] text-white flex items-center justify-center font-['IBM_Plex_Mono',monospace] font-bold text-xs shadow-md shadow-[#1a1714]/15 group-hover:bg-[#c4410c] transition-colors">
              GA
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-base tracking-tight text-[#1a1714]">
                Gaurav Associates
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-[9px] uppercase tracking-[0.2em] text-[#c4410c] font-semibold -mt-0.5">
                Private Limited
              </span>
            </div>
          </a>

          {/* Desktop Digiryze Monospace Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.22em] text-[#1a1714]/70">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#c4410c] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#c4410c] after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Gaurav%20Associates!%20I%20want%20to%20discuss%20a%20website/app%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-['IBM_Plex_Mono',monospace] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-full border border-emerald-200 transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => onOpenQuote({ name: 'Project Inquiry' })}
              className="digi-btn font-bold shadow-md hover:shadow-[#c4410c]/25"
            >
              <span>GET QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#1a1714] text-white hover:bg-[#c4410c] transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf7f2]/98 border-b border-[rgba(26,23,20,0.1)] px-5 pt-4 pb-7 space-y-4 shadow-xl backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-2 font-['IBM_Plex_Mono',monospace] text-xs tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[#1a1714] border-b border-[rgba(26,23,20,0.06)] hover:text-[#c4410c]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote({ name: 'Mobile Quick Inquiry' });
              }}
              className="w-full py-3 rounded-full bg-[#1a1714] text-white text-xs font-['IBM_Plex_Mono',monospace] font-bold tracking-widest"
            >
              GET QUOTE NOW →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
