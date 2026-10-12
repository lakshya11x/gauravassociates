import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function FloatingActions({ onOpenQuote }) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi%20Gaurav%20Associates!%20I%20want%20to%20build%20a%20website/app', '_blank');
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Quote Pill */}
      <button
        onClick={() => onOpenQuote({ name: 'Fast Quote Inquiry' })}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-lg text-xs font-bold hover:scale-105 transition-all"
      >
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>Plans from ₹5,999</span>
      </button>

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={handleWhatsApp}
        className="pointer-events-auto flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-slate-950 text-emerald-500 group-hover:rotate-12 transition-transform" />
        <span className="hidden md:inline tracking-wide">WhatsApp Us</span>
      </button>

    </aside>
  );
}
