import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Layers, ShoppingBag, Check, ArrowRight, MessageSquare, Truck, ShieldCheck, Box } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function WholesaleRetail({ onOpenQuoteModal }) {
  const wholesaleWhatsapp = getWhatsAppUrl({ type: 'wholesale' });
  const retailWhatsapp = getWhatsAppUrl({ type: 'retail' });

  return (
    <div className="py-12 sm:py-16">
      {/* Banner */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <span>B2B & B2C SUPPLY CHANNELS</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Wholesale & Retail Supply
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              Whether you need regular 10-ton lorry loads of compressed clothing bales or a curated batch of 100 shirts for your boutique rack, S.K. Old Cloth Merchant has you covered.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Dual Pillar Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Wholesale Pillar */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eae3d2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#0d2818] text-emerald-300 flex items-center justify-center mb-6">
                <Layers className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                High Volume Supply
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0d2818] mb-4">
                Wholesale Bale Supply
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Tailored for garment shop retailers, weekly market vendors, regional textile dealers, and export distributors. We supply standard hydraulically-pressed bales securely bound and labeled.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">📦 Bale Weights & Packaging</h4>
                  <p className="text-xs text-gray-600">Standard bales range from 40kg to 55kg. Water-resistant poly wrapping and high-tensile steel straps protect stock during transit.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">🚚 Fleet & Logistics</h4>
                  <p className="text-xs text-gray-600">Dispatch arranged via commercial transport operators, tempo services, and regional lorry parcel services across South India.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">💰 Tiered Wholesale Margins</h4>
                  <p className="text-xs text-gray-600">Transparent per-kilogram and per-bale pricing structures configured to maximize your retail resale profitability.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => onOpenQuoteModal('Wholesale Bales')}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
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

          {/* Retail Pillar */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eae3d2] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#16422b] text-white flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                Hand-Selected Lots
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0d2818] mb-4">
                Retail & Boutique Lots
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Designed for retail shopkeepers, thrifters, boutique owners, and direct consumers seeking individual garments, small batches, and ready-to-sell Grade A pieces.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">✨ Pre-Inspected Quality</h4>
                  <p className="text-xs text-gray-600">Every piece on our retail racks is hand-checked for clean collars, functional zippers, intact buttons, and modern cuts.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">👕 Diverse Categories</h4>
                  <p className="text-xs text-gray-600">Shop by piece across Men's T-Shirts, Shirts, Jeans, Women's Dresses, Kids Wear, Hoodies, and Footwear.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf8f5] border border-gray-100">
                  <h4 className="font-semibold text-sm text-[#0d2818] mb-1">📍 Choolai Store Visit</h4>
                  <p className="text-xs text-gray-600">Walk in to our Choolai, Chennai showroom during working hours (9:30 AM – 8:30 PM) to inspect and select in person.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <Button
                to="/products"
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Retail Categories
              </Button>
              <Button
                href={retailWhatsapp}
                target="_blank"
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto"
                icon={MessageSquare}
              >
                Inquire Retail Availability
              </Button>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#eae3d2] shadow-xs mb-16 overflow-x-auto">
          <h3 className="font-serif text-2xl font-bold text-[#0d2818] mb-6">
            Wholesale vs. Retail Feature Matrix
          </h3>
          <table className="w-full text-left text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 font-semibold text-xs uppercase tracking-wider">
                <th className="py-3 px-4">Parameters</th>
                <th className="py-3 px-4 text-[#0d2818]">Wholesale Channel</th>
                <th className="py-3 px-4 text-emerald-800">Retail Channel</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-gray-900">Minimum Order</td>
                <td className="py-3.5 px-4">1 Bale (approx. 45kg)</td>
                <td className="py-3.5 px-4">Single pieces or small bundles</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-gray-900">Packaging Format</td>
                <td className="py-3.5 px-4">Compressed bales with poly wrap & straps</td>
                <td className="py-3.5 px-4">Clean folded polythene packages / hangers</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-gray-900">Grading Inspection</td>
                <td className="py-3.5 px-4">Uniform grade per bale (Grade A / Mixed)</td>
                <td className="py-3.5 px-4">100% individual piece-by-piece verified</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-gray-900">Delivery / Dispatch</td>
                <td className="py-3.5 px-4">Lorry load, tempo, inter-city cargo freight</td>
                <td className="py-3.5 px-4">Store pickup & courier delivery</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-gray-900">Pricing Basis</td>
                <td className="py-3.5 px-4 font-semibold text-emerald-800">Direct bulk price per kg / per bale</td>
                <td className="py-3.5 px-4">Per piece affordable retail price</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
