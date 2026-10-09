import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/contact/WhatsAppButton';
import QuoteModal from './components/contact/QuoteModal';
import ScrollToTop from './components/common/ScrollToTop';
import PageLoader from './components/common/PageLoader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import WholesaleRetail from './pages/WholesaleRetail';
import QualityProcess from './pages/QualityProcess';
import Internship from './pages/Internship';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState('');

  const handleOpenQuoteModal = (category = '') => {
    setQuoteCategory(category);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteCategory('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c2e24]">
      {/* 0. Fullscreen Page Loading Animation with Brand Logo */}
      <PageLoader />

      <ScrollToTop />

      {/* 1. Top Contact Bar */}
      <TopBar />

      {/* 2. Sticky Navbar with "Get a Quote" */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Pages View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<About onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/products" element={<Products onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/wholesale-retail" element={<WholesaleRetail onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/quality-process" element={<QualityProcess onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/internship" element={<Internship onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {/* 13. Dark Forest Green Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        category={quoteCategory}
      />
    </div>
  );
}
