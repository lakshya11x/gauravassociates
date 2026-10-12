import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientReviews } from '../data/pricingData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Trusted by Entrepreneurs & Companies
          </h2>
          <p className="text-sm text-slate-600">
            Hear from business founders who launched websites and mobile apps with Gaurav Associates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
