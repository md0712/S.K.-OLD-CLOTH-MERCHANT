import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Warehouse, MapPin, Building2 } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { COMPANY } from '../../data/company';

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-24 bg-white border-y border-[#eee8dc]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Large Warehouse Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#e5decb] bg-gray-100">
              <img
                src="/images/about/warehouse-stock.jpg"
                alt="S.K. Old Cloth Merchant Warehouse Bales Stacked in Choolai Chennai"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Float Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    S.K. OLD CLOTH MERCHANT
                  </div>
                  <div className="font-serif font-bold text-gray-900 text-sm sm:text-base">
                    Central Storage & Baling Warehouse
                  </div>
                </div>
                <div className="px-3 py-1 rounded-xl bg-[#0d2818] text-white text-xs font-semibold shrink-0">
                  Choolai, Chennai
                </div>
              </div>
            </div>

            {/* Decorative background accent blob */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#f4f0e6] rounded-full filter blur-2xl -z-10 opacity-70" />
          </div>

          {/* Right: Content & Statistics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#16422b]/10 text-[#16422b] border border-[#16422b]/20">
              <Warehouse className="w-3.5 h-3.5" />
              <span>ABOUT S.K. OLD CLOTH MERCHANT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight text-[#0d2818] leading-tight">
              Reliable Stock. Professional Handling.
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              From receiving and checking stock to sorting, grading, packing and dispatch, every stage is handled with care.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              Based in Choolai, Chennai, S.K. Old Cloth Merchant is a dedicated wholesale and retail supplier specializing in used clothing and textile garments. Established in 2017, we have earned customer trust through transparent grading, competitive pricing, and steady bale inventory.
            </p>

            {/* Small Statistics Grid (2017 Established, Quality Checked Stock, Wholesale & Retail Supply, Chennai Based) */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#eae3d2] hover:border-[#16422b]/30 transition-colors">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0d2818]">
                  2017
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                  Established
                </div>
                <div className="text-[11px] text-gray-500">Over 9 years of trusted supply</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#eae3d2] hover:border-[#16422b]/30 transition-colors">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">
                  Quality Checked
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                  Stock
                </div>
                <div className="text-[11px] text-gray-500">Manual piece-by-piece sorting</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#eae3d2] hover:border-[#16422b]/30 transition-colors">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0d2818]">
                  Wholesale & Retail
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                  Supply
                </div>
                <div className="text-[11px] text-gray-500">Bales & hand-picked pieces</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#eae3d2] hover:border-[#16422b]/30 transition-colors">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">
                  Chennai
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-800 mt-0.5">
                  Based
                </div>
                <div className="text-[11px] text-gray-500">Centrally located in Choolai</div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <Button
                to="/about"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Learn More About Our Operations
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
