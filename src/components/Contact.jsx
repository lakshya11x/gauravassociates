import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Starter Plan (₹5,999)',
    budget: '₹5,000 - ₹15,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Gaurav Associates! 🚀\nI would like to discuss a project with you:\nName: ${formData.name || 'Client'}\nService: ${formData.service}\nBudget: ${formData.budget}`
    );
    window.open(`https://wa.me/919828172321?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#faf7f2] border-t border-[rgba(26,23,20,0.1)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.25em] text-[#c4410c] uppercase">
            <span>07 / GET IN TOUCH</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-3xl sm:text-5xl text-[#1a1714] tracking-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="g-text">
              Exceptional Together
            </span>
          </h2>
          <p className="text-base text-[#1a1714]/70">
            Have a question or ready to launch your website or iOS/Android app? Message us now for a response within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Banner */}
            <div className="p-8 rounded-3xl bg-white border border-[rgba(26,23,20,0.12)] shadow-xl space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#1a1714]">Instant WhatsApp Consultation</h4>
                  <p className="text-xs text-emerald-700 font-semibold font-mono">Fastest response • Available Now</p>
                </div>
              </div>
              <p className="text-sm text-[#1a1714]/70">
                Skip filling forms and chat directly with our technical head regarding your website, iOS app, or custom requirements.
              </p>
              <button
                onClick={openWhatsAppDirect}
                className="w-full py-3.5 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-['IBM_Plex_Mono',monospace] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>START WHATSAPP CHAT (+91 98765 43210)</span>
              </button>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              
              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#c4410c] flex items-center justify-center shrink-0 border border-orange-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-wider text-stone-500 font-bold">Direct Phone Call</p>
                  <a href="tel:+919876543210" className="text-sm font-bold text-[#1a1714] hover:text-[#c4410c] transition">
                    +91 98765 43210
                  </a>
                  <p className="text-[10px] text-stone-500">Support Hours: 11 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-wider text-stone-500 font-bold">Official Email</p>
                  <a href="mailto:info@gauravassociates.in" className="text-sm font-bold text-[#1a1714] hover:text-[#c4410c] transition">
                    lakshyasharma11x@gmail.com
                  </a>
                  <p className="text-[10px] text-stone-500">Send RFP / Project Requirements</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[rgba(26,23,20,0.1)] flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-['IBM_Plex_Mono',monospace] text-[10px] uppercase tracking-wider text-stone-500 font-bold">Office Location</p>
                  <p className="text-xs font-bold text-[#1a1714]">
                    Gaurav Associates Private Limited
                  </p>
                  <p className="text-[11px] text-stone-500">Ajmer, India</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[rgba(26,23,20,0.12)] shadow-xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a1714]">Thank You, {formData.name || 'Friend'}!</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  We have received your inquiry for <strong>{formData.service}</strong>. Our lead consultant will reach out via phone/WhatsApp within 15 minutes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="digi-btn"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <h3 className="text-lg font-bold text-[#1a1714]">Send Project Brief</h3>
                  <span className="mono-chip bg-emerald-50 text-emerald-800 border-emerald-200">
                    <Sparkles className="w-3 h-3 inline mr-1" /> Quick Response
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Gaurav Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                      Service / Plan You Need *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c]"
                    >
                      <option value="Starter Plan (₹5,999)">Website: Starter Plan (₹5,999)</option>
                      <option value="Silver Plan (₹9,999)">Website: Silver Plan (₹9,999)</option>
                      <option value="Gold Plan (₹14,999)">Website: Gold Plan (₹14,999)</option>
                      <option value="Diamond Plan (Customized)">Website: Diamond Plan (Customized)</option>
                      <option value="iOS Starter App (₹24,999)">Mobile: iOS Starter App (₹24,999)</option>
                      <option value="Dual App Pro (iOS + Android) (₹39,999)">Mobile: Dual iOS + Android App (₹39,999)</option>
                      <option value="All-In-One Combo (Web + Apps)">Combo: Web + Android + iOS App (₹44,999)</option>
                      <option value="Custom Enterprise Solution">Custom Enterprise Application</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c]"
                  >
                    <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 (Website Plans)</option>
                    <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (iOS / Android Apps)</option>
                    <option value="₹35,000 - ₹60,000">₹35,000 - ₹60,000 (Combo Pack)</option>
                    <option value="₹60,000+">₹60,000+ (Enterprise Full-Stack)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1a1714] mb-1.5">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your business, features needed, or design preferences..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7f2] border border-[rgba(26,23,20,0.1)] text-sm text-[#1a1714] focus:outline-none focus:border-[#c4410c] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="digi-btn digi-btn-grad w-full py-4 font-bold text-white shadow-xl"
                  >
                    {loading ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT PROJECT INQUIRY</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-stone-500 mt-2 flex items-center justify-center gap-1 font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your information is strictly private and NDA protected.</span>
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
