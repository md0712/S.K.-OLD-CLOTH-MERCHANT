import React from 'react';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function Hero({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <section className="relative min-h-[calc(100vh-112px)] lg:h-[calc(100vh-112px)] flex flex-col justify-between overflow-hidden bg-[#07160d]">
      {/* Background Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/warehouse-hero.jpg"
          alt="S.K. Old Cloth Merchant Wholesale Warehouse - Clothing Bales & Apparel"
          className="w-full h-full object-cover object-center filter brightness-[0.85] transform scale-102"
        />
        {/* Layered Cinematic Vignette & Deep Forest Tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06140b]/92 via-[#07180e]/82 to-[#040e07]/96" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#06140b]/50 to-[#030b05]/90" />
      </div>

      {/* Spacer to balance vertical centering */}
      <div className="hidden lg:block h-2" />

      {/* Main Hero Content - Modern Display Typography */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-0 text-center text-white my-auto">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>TRUST • QUALITY • AFFORDABLE</span>
        </div>

        {/* Brand Name - Modern Bold Geometric Sans (Outfit) */}
        <h1 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3 uppercase leading-[1.08] drop-shadow-md">
          {COMPANY.name}
        </h1>

        {/* Tagline - Emerald Gradient Subheading */}
        <div className="inline-block font-outfit font-bold tracking-wide text-base sm:text-xl md:text-2xl uppercase mb-3 bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-300 bg-clip-text text-transparent leading-snug">
          “Quality Used Clothing for Wholesale & Retail”
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200/95 max-w-xl mx-auto mb-7 leading-relaxed font-normal">
          Your reliable partner for quality pre-owned clothing, bulk supply and retail requirements in Chennai.
        </p>

        {/* Call to Actions - Elevated Modern Style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-outfit">
          <Button
            to="/products"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto shadow-lg font-extrabold tracking-wide uppercase text-xs sm:text-sm text-[#0d2818] bg-white hover:bg-emerald-50 px-6 py-3.5 rounded-xl transition-all"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Collection
          </Button>

          <Button
            href={whatsappUrl}
            target="_blank"
            variant="whatsapp"
            size="md"
            className="w-full sm:w-auto shadow-lg shadow-[#25D366]/20 font-extrabold tracking-wide uppercase text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all"
            icon={MessageSquare}
          >
            WhatsApp Us
          </Button>

          <Button
            onClick={onOpenQuoteModal}
            variant="outlineLight"
            size="md"
            className="w-full sm:w-auto font-bold tracking-wide uppercase text-xs sm:text-sm px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border-white/25 text-white backdrop-blur-md transition-all"
          >
            Request Instant Quote
          </Button>
        </div>
      </div>

      {/* Bottom Highlights Bar - Modern Sans Typography & Glassmorphism */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-6 pt-2">
        <div className="bg-[#06140b]/80 backdrop-blur-xl rounded-2xl border border-emerald-500/25 py-3.5 sm:py-4 px-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center md:divide-x md:divide-white/10 shadow-2xl">
          <div className="p-1">
            <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">Est. 2017</div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">Chennai Wholesale Hub</div>
          </div>
          <div className="p-1">
            <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">Grade A</div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">Hand Inspected & Sorted</div>
          </div>
          <div className="p-1">
            <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">Bale Supply</div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">40kg – 55kg Compressed</div>
          </div>
          <div className="p-1">
            <div className="text-xl sm:text-2xl font-black text-white font-outfit tracking-tight">Direct Dispatch</div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">Safe Tamil Nadu Transit</div>
          </div>
        </div>
      </div>
    </section>
  );
}
