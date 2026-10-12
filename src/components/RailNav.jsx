import React, { useEffect, useState } from 'react';

export default function RailNav({ activeSection }) {
  const sections = [
    { id: 'home', label: '01 · HERO' },
    { id: 'services', label: '02 · SERVICES' },
    { id: 'pricing', label: '03 · PRICING & IOS' },
    { id: 'calculator', label: '04 · CALCULATOR' },
    { id: 'portfolio', label: '05 · PORTFOLIO' },
    { id: 'why-us', label: '06 · WHY GA' },
    { id: 'about', label: '07 · ABOUT' },
    { id: 'contact', label: '08 · CONTACT' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Chapter Floating Rail (Signature Digiryze element) */}
      <aside 
        id="rail" 
        className="fixed left-4 xl:left-7 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1.5 p-3.5 rounded-2xl bg-[#211b16] text-[#efe9e1] shadow-2xl shadow-stone-950/40 border border-stone-800/80 min-w-[172px] backdrop-blur-md"
      >
        {/* Rail Top Branding */}
        <div className="pb-2 border-b border-stone-800/80 mb-1">
          <div className="flex items-center justify-between">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xs tracking-tight text-white">
              GA<span className="text-[#fb923c] font-black">[OS]</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <span className="font-['IBM_Plex_Mono',monospace] text-[9px] tracking-widest text-stone-500 block uppercase mt-0.5">
            AGENCY OS · V2.4
          </span>
        </div>

        {/* Section Links */}
        <div className="space-y-1">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`w-full text-left font-['IBM_Plex_Mono',monospace] text-[10px] tracking-[0.16em] uppercase px-2 py-1 rounded transition-all flex items-center justify-between ${
                  isActive
                    ? 'text-white font-semibold bg-stone-800/90 border-l-2 border-[#fb923c] pl-2.5 translate-x-1'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900/40'
                }`}
              >
                <span>{sec.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#fb923c]"></span>}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Right Progress Dots (Signature Digiryze element) */}
      <div 
        id="progress" 
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5"
      >
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2 h-5 bg-[#c4410c] shadow-lg shadow-[#c4410c]/40'
                  : 'w-1.5 h-1.5 bg-stone-400/40 hover:bg-stone-600'
              }`}
              title={sec.label}
            />
          );
        })}
      </div>
    </>
  );
}
