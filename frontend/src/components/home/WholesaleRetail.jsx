import React from 'react';
import { Layers, ShoppingBag, Check, ArrowRight, MessageSquare, Truck, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function WholesaleRetail({ onOpenQuoteModal }) {
  const wholesaleWhatsapp = getWhatsAppUrl({ type: 'wholesale' });
  const retailWhatsapp = getWhatsAppUrl({ type: 'retail' });

  return (
    <section className="py-20 sm:py-24 bg-[#0d2818] text-white relative overflow-hidden" id="wholesale-retail">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-700/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full filter blur-3xl pointer-events-none" />

      <Container>
        <SectionTitle
          badge="SUPPLY CHANNELS"
          title="Wholesale & Retail Solutions"
          subtitle="Tailored clothing supply models for bulk distributors, garment traders, and direct retail buyers."
          dark={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Panel 1: WHOLESALE */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/15 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group">
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-500/30">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400 text-[#0d2818]">
                  Bulk Buyers & Traders
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold tracking-tight text-white mb-3">
                WHOLESALE
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                High-volume, standardized bale supply engineered for garment shop owners, market vendors, and regional resellers across Tamil Nadu.
              </p>

              {/* Wholesale Points */}
              <ul className="space-y-3.5 mb-8">
                {[
                  'Bulk orders (40kg to 60kg compressed bales)',
                  'Bale supply with verified piece count & category',
                  'Regular stock replenishment with zero downtime',
                  'Competitive direct-from-source wholesale pricing',
                  'Reliable dispatch via vetted commercial logistics'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wholesale Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Button
                onClick={() => onOpenQuoteModal('Wholesale Bale Supply')}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto font-semibold text-[#0d2818]"
                icon={ArrowRight}
                iconPosition="right"
              >
                Request Wholesale Quote
              </Button>

              <Button
                href={wholesaleWhatsapp}
                target="_blank"
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto"
                icon={MessageSquare}
              >
                WhatsApp Wholesale
              </Button>
            </div>
          </div>

          {/* Panel 2: RETAIL */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-white/5 backdrop-blur-md border border-white/15 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between group">
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center border border-white/20">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-emerald-300 border border-white/20">
                  Direct Store & Select Lots
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold tracking-tight text-white mb-3">
                RETAIL
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Hand-picked, clean, and sorted clothing lots for individual store visitors and smaller quantity buyers seeking ready-to-sell or wear pieces.
              </p>

              {/* Retail Points */}
              <ul className="space-y-3.5 mb-8">
                {[
                  'Selected products hand-inspected for retail racks',
                  'Different clothing categories for Men, Women & Kids',
                  'Affordable prices with superior value for money',
                  'Quality used clothing ready for display & immediate wear',
                  'Walk-in inspection welcome at Choolai, Chennai hub'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retail Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <Button
                to="/products"
                variant="outlineLight"
                size="md"
                className="w-full sm:w-auto font-medium"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Retail Collection
              </Button>

              <Button
                href={retailWhatsapp}
                target="_blank"
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto"
                icon={MessageSquare}
              >
                Inquire Retail Lots
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
