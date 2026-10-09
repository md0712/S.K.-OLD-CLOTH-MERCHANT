import React from 'react';
import Hero from '../components/home/Hero';
import TrustCards from '../components/home/TrustCards';
import ProductCategories from '../components/home/ProductCategories';
import AboutPreview from '../components/home/AboutPreview';
import ProcessTimeline from '../components/process/ProcessTimeline';
import WholesaleRetail from '../components/home/WholesaleRetail';
import GalleryPreview from '../components/home/GalleryPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import InternshipPreview from '../components/home/InternshipPreview';
import CTASection from '../components/home/CTASection';
import HomeContactSection from '../components/home/HomeContactSection';

export default function Home({ onOpenQuoteModal }) {
  return (
    <div>
      {/* 3. Hero Section */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* 4. Trust / USP Section */}
      <TrustCards />

      {/* 5. Products Section */}
      <ProductCategories onOpenQuoteModal={onOpenQuoteModal} />

      {/* 6. Featured Warehouse Section (Split Layout & Stats) */}
      <AboutPreview />

      {/* 7. Quality & Process Timeline (9-Step) */}
      <ProcessTimeline />

      {/* 8. Wholesale & Retail Section (Two Large Panels) */}
      <WholesaleRetail onOpenQuoteModal={onOpenQuoteModal} />

      {/* 9. Gallery Bento/Masonry Preview */}
      <GalleryPreview />

      {/* 10. Why Choose Us (6 Advantages) */}
      <WhyChooseUs />

      {/* 10B. Internship & Academic Training Program Preview */}
      <InternshipPreview />

      {/* 11. Business CTA */}
      <CTASection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 12. Contact Section */}
      <HomeContactSection />
    </div>
  );
}
