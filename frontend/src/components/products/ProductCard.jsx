import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductCard({ category, onSelectQuote }) {
  const whatsappUrl = getWhatsAppUrl({ category: category.name });

  // Clean bale spec text without cut-off
  const shortBaleSpec = category.baleSpecs
    ? category.baleSpecs.split('|')[0].trim()
    : '45kg - 55kg compressed bales';

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#eae3d2] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out group flex flex-col justify-between">
      <div>
        {/* Clean Image Container without Text Overlay */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={category.image}
            alt={`${category.name} - S.K. Old Cloth Merchant`}
            className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Floating Minimal Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-md text-[#0d2818] shadow-sm border border-black/5">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>{category.grade || 'Grade A'}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#0d2818]/90 backdrop-blur-md text-emerald-300 shadow-sm border border-emerald-600/30">
              <Package className="w-3 h-3 text-emerald-400" />
              <span>Bale Stock</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Category Title */}
          <h3 className="font-serif text-2xl font-bold tracking-tight text-[#0d2818] group-hover:text-emerald-800 transition-colors">
            {category.name}
          </h3>

          {/* Subtitle / Tagline */}
          <p className="text-xs font-semibold text-emerald-700 tracking-wide uppercase mt-1 mb-2.5">
            {category.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4 font-light">
            {category.description}
          </p>

          {/* Clean 2-Column Key Items List */}
          <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-xs text-gray-700 font-medium py-3 border-t border-gray-100">
            {category.items.slice(0, 4).map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>

          {/* Bale Spec Strip */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2.5 border-t border-gray-100">
            <span className="font-medium text-[#1c2e24] truncate pr-2">
              📦 {shortBaleSpec}
            </span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md text-[11px] shrink-0">
              In Stock
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-gray-100 bg-[#faf8f5]/60 flex items-center gap-2.5">
        <Link
          to={`/products?category=${category.id}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#0d2818] text-[#0d2818] hover:bg-[#0d2818] hover:text-white text-xs font-bold transition-all"
        >
          <span>View Collection</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs hover:shadow-md"
          title={`Enquire on WhatsApp about ${category.name}`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Quick Quote</span>
        </a>
      </div>
    </div>
  );
}
