import React, { useState } from 'react';
import { X, Check, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderModal({ isOpen, onClose, plan }) {
  if (!isOpen || !plan) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  const handleWhatsAppOrder = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    const text = encodeURIComponent(
      `Hello Gaurav Associates! 🚀\nI would like to order / inquire about the following plan:\n` +
      `• Plan: ${plan.name}\n` +
      `• Price: ${plan.price || 'Custom'}\n` +
      `• Delivery Timeline: ${plan.deliveryTime || 'Standard'}\n` +
      `• My Name: ${name || 'Prospective Client'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• Notes: ${notes || 'Ready to start'}\n\n` +
      `Please let me know the onboarding steps!`
    );

    window.open(`https://wa.me/919828172321?text=${text}`, '_blank');
    onClose();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      onClose();
      setSent(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 text-slate-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Rainbow top bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-10 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Order Inquiry Received!</h3>
            <p className="text-xs text-slate-600">
              Our engineering lead will call/WhatsApp you shortly regarding <strong>{plan.name}</strong>.
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5 pt-2">
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-blue-600">
                Selected Package
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                {plan.name}
              </h3>
              
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-bold text-blue-600 font-sans">
                  {plan.price || 'Custom Quote'}
                </span>
                {plan.originalPrice && plan.originalPrice !== 'Custom Quote' && (
                  <span className="text-xs line-through text-slate-400">
                    {plan.originalPrice}
                  </span>
                )}
                {plan.deliveryTime && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                    ⏱ {plan.deliveryTime}
                  </span>
                )}
              </div>
            </div>

            {/* Quick Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9828172321"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Special Notes / Brand Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Need payment gateway, specific domain name, or iOS app features..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Instant Order on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry to Team</span>
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Domain & SSL Included</span>
              </span>
              <span>100% Code Ownership</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
