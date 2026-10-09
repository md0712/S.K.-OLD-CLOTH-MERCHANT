import React, { useState } from 'react';
import { Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../../data/gallery';
import GalleryLightbox from './GalleryLightbox';

export default function GalleryGrid({ initialCategory = 'All', limit = null }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory || (item.categories && item.categories.includes(activeCategory));
  });

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;
  const currentItem = selectedIdx !== null ? displayItems[selectedIdx] : null;

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIdx(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#0d2818] text-white shadow-sm ring-2 ring-emerald-600/30'
                : 'bg-white text-gray-700 hover:bg-[#f4f0e6] border border-gray-200/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Modern High-End Gallery Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIdx(index)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-[#eae3d2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between"
          >
            {/* Top Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Floating Top Category Pill */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0d2818] shadow-sm border border-black/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" />
                  <span>{item.category}</span>
                </span>
              </div>

              {/* Top-Right Zoom Button */}
              <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-black/40 group-hover:bg-[#0d2818] text-white flex items-center justify-center backdrop-blur-md transition-all shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Card Body with Clean Typography */}
            <div className="p-4 flex-1 flex flex-col justify-between bg-white border-t border-gray-100">
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#0d2818] group-hover:text-emerald-800 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Subtle Action Strip */}
              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-emerald-800 font-semibold">
                <span>View Fullscreen</span>
                <span className="text-xs text-emerald-600 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={selectedIdx !== null}
        item={currentItem}
        onClose={() => setSelectedIdx(null)}
        onPrev={() => setSelectedIdx((prev) => (prev > 0 ? prev - 1 : displayItems.length - 1))}
        onNext={() => setSelectedIdx((prev) => (prev < displayItems.length - 1 ? prev + 1 : 0))}
        hasPrev={displayItems.length > 1}
        hasNext={displayItems.length > 1}
      />
    </div>
  );
}
