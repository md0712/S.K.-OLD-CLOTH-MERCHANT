import React from 'react';
import { CheckCircle2, Tag, Truck, Handshake } from 'lucide-react';
import Container from '../common/Container';

const TRUST_ITEMS = [
  {
    icon: CheckCircle2,
    title: 'QUALITY CHECKED',
    description: 'Carefully checked and sorted clothing.',
    highlight: 'Rigorous 1-by-1 Inspection'
  },
  {
    icon: Tag,
    title: 'COMPETITIVE PRICES',
    description: 'Affordable pricing for wholesale and retail.',
    highlight: 'Direct Wholesale Rates'
  },
  {
    icon: Truck,
    title: 'TIMELY DELIVERY',
    description: 'Safe and reliable order dispatch.',
    highlight: 'Lorry & Van Logistics'
  },
  {
    icon: Handshake,
    title: 'LONG-TERM PARTNERSHIP',
    description: 'Building lasting customer relationships.',
    highlight: 'Trusted Since 2017'
  }
];

export default function TrustCards() {
  return (
    <section className="py-14 sm:py-16 bg-[#faf8f5] border-b border-[#eee8dc]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e8e2d4] hover-lift group relative overflow-hidden"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-[#0d2818] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-xl bg-[#0d2818]/8 group-hover:bg-[#0d2818] text-[#0d2818] group-hover:text-emerald-300 flex items-center justify-center transition-all duration-300 mb-5">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>

                <span className="text-[10px] font-semibold tracking-wider text-emerald-800 uppercase block mb-1">
                  {item.highlight}
                </span>

                <h3 className="font-serif text-lg font-bold text-[#0d2818] tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
