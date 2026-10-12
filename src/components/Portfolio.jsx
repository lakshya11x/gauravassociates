import React, { useState } from 'react';
import { ExternalLink, Star, Globe, Apple } from 'lucide-react';
import { portfolioProjects } from '../data/pricingData';

export default function Portfolio({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'iOS Application', 'Website', 'Dual Mobile Apps', 'Web & Mobile Suite'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'iOS Application' && p.category.includes('iOS')));

  return (
    <section id="portfolio" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>04 / PROVEN TRACK RECORD</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight">
            Recent Featured <br className="hidden sm:inline" />
            <span className="g-text">
              Web & App Deployments
            </span>
          </h2>
          <p className="text-base text-[#1a1714]/70">
            Explore live applications and websites launched by Gaurav Associates across diverse sectors.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-['IBM_Plex_Mono',monospace] text-xs font-bold tracking-widest transition-all ${
                  activeFilter === filter
                    ? 'bg-[#1a1714] text-white shadow-md'
                    : 'bg-white text-[#1a1714]/70 hover:text-[#1a1714] border border-[rgba(26,23,20,0.12)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="digi-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-video overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-['IBM_Plex_Mono',monospace] font-bold text-[#1a1714] shadow-sm border border-[rgba(26,23,20,0.08)] flex items-center gap-1.5">
                      {project.category.includes('iOS') ? <Apple className="w-3.5 h-3.5 text-[#c4410c]" /> : <Globe className="w-3.5 h-3.5 text-[#c4410c]" />}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-amber-600 shadow-sm border border-[rgba(26,23,20,0.08)]">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-xl font-bold text-[#1a1714] group-hover:text-[#c4410c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#1a1714]/70 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="mono-chip text-[9px] py-1 px-2.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onOpenQuote({ name: `Similar to ${project.title}` })}
                  className="w-full py-2.5 px-4 rounded-full bg-[#faf7f2] hover:bg-[#1a1714] hover:text-white text-[#1a1714] font-['IBM_Plex_Mono',monospace] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 border border-[rgba(26,23,20,0.12)] transition"
                >
                  <span>Build A Similar Solution</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
