import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import PriceCalculator from './components/PriceCalculator';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import FloatingActions from './components/FloatingActions';

function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenQuote = (plan = null) => {
    setSelectedPlan(plan || { name: 'Custom Project Consultation', price: '₹5,999+', deliveryTime: '2-5 Days' });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="bg-[#fcfbf9] text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-x-hidden">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenQuote={handleOpenQuote} 
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenQuote={handleOpenQuote} 
        />

        <Services 
          onOpenQuote={handleOpenQuote} 
        />

        <Pricing 
          onOpenQuote={handleOpenQuote} 
        />

        <PriceCalculator 
          onOpenQuote={handleOpenQuote} 
        />

        <Portfolio 
          onOpenQuote={handleOpenQuote} 
        />

        <WhyUs />

        <About />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order / Booking Modal */}
      <OrderModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        plan={selectedPlan}
      />

      {/* Floating Action Pill */}
      <FloatingActions 
        onOpenQuote={handleOpenQuote} 
      />
    </div>
  );
}

export default App;
