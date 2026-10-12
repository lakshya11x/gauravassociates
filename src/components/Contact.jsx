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
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="serif-highlight text-4xl sm:text-6xl font-normal">
              Exceptional Together
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have a question or ready to launch your website or iOS/Android app? Message us now for a response within 15 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Banner */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">Instant WhatsApp Consultation</h4>
                  <p className="text-xs text-emerald-700 font-semibold">Fastest response • Available Now</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                Skip filling forms and chat directly with our technical head regarding your website, iOS app, or custom requirements.
              </p>
              <button
                onClick={openWhatsAppDirect}
                className="w-full py-3.5 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Start WhatsApp Chat (+91 98765 43210)</span>
              </button>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Direct Phone Call</p>
                  <a href="tel:+919876543210" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition">
                    +91 98765 43210
                  </a>
                  <p className="text-[10px] text-slate-500">Support Hours: 11 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Official Email</p>
                  <a href="mailto:info@gauravassociates.in" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition">
                    info@gauravassociates.in
                  </a>
                  <p className="text-[10px] text-slate-500">Send RFP / Project Requirements</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Office Location</p>
                  <p className="text-xs font-bold text-slate-900">
                    Gaurav Associates Private Limited
                  </p>
                  <p className="text-[11px] text-slate-500">Cyber City, Tech Corridor, Delhi NCR, India</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank You, {formData.name || 'Friend'}!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  We have received your inquiry for <strong>{formData.service}</strong>. Our lead consultant will reach out via phone/WhatsApp within 15 minutes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900">Send Project Brief</h3>
                  <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Quick Turnaround
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Gaurav Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service / Plan You Need *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
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
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000 (Website Plans)</option>
                    <option value="₹15,000 - ₹35,000">₹15,000 - ₹35,000 (iOS / Android Apps)</option>
                    <option value="₹35,000 - ₹60,000">₹35,000 - ₹60,000 (Combo Pack)</option>
                    <option value="₹60,000+">₹60,000+ (Enterprise Full-Stack)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your business, features needed, or design preferences..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-blue-600 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
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
