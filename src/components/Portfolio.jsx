import React, { useState } from 'react';
import { ExternalLink, Star, Smartphone, Globe, Apple } from 'lucide-react';
import { portfolioProjects } from '../data/pricingData';

export default function Portfolio({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'iOS Application', 'Website', 'Dual Mobile Apps', 'Web & Mobile Suite'];

  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || (activeFilter === 'iOS Application' && p.category.includes('iOS')));

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Recent Featured <br className="hidden sm:inline" />
            <span className="serif-highlight text-4xl sm:text-6xl font-normal">
              Web & App Deployments
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Explore live applications and websites launched by Gaurav Associates across diverse sectors.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
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
              className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200 flex items-center gap-1.5">
                      {project.category.includes('iOS') ? <Apple className="w-3.5 h-3.5 text-blue-600" /> : <Globe className="w-3.5 h-3.5 text-blue-600" />}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-amber-600 shadow-sm border border-slate-200">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>{project.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700"
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
                  className="w-full py-2.5 px-4 rounded-full bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 hover:border-blue-200 transition"
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
