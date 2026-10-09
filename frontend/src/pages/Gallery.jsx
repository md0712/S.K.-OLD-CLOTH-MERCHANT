import React from 'react';
import Container from '../components/common/Container';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { Camera, Sparkles } from 'lucide-react';

export default function Gallery() {
  return (
    <div className="py-12 sm:py-16">
      {/* Header Banner */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <Camera className="w-3.5 h-3.5" />
              <span>AUTHENTIC WAREHOUSE PHOTOGRAPHY</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Photo Gallery & Stock Showcase
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              Explore authentic high-resolution images of our clothing bales, sorted collections, packing operations, and transport vehicles in Choolai, Chennai.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section with Category Filters & Lightbox */}
      <Container>
        <GalleryGrid />

        <div className="mt-16 p-6 rounded-2xl bg-[#faf8f5] border border-gray-200 text-center text-xs text-gray-500 max-w-2xl mx-auto">
          Tip: Click on any photo to expand into high-definition view with image specifications and a one-click WhatsApp quotation option.
        </div>
      </Container>
    </div>
  );
}
