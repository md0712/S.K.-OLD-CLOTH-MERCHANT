import React from 'react';
import { Check, ShieldCheck, TrendingDown, Layers, Box, RefreshCw, Users2 } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'Quality Checked Stock',
    desc: 'Each lot is rigorously sorted by our experienced staff to remove damaged, heavily stained, or defective garments, ensuring superior usable percentage.'
  },
  {
    icon: TrendingDown,
    title: 'Competitive Pricing',
    desc: 'Direct wholesale rates and streamlined Chennai warehousing let us offer maximum profit margins for retail shopkeepers and secondhand market stalls.'
  },
  {
    icon: Layers,
    title: 'Wide Product Range',
    desc: 'From men’s casual shirts and heavy denims to women’s floral tops, children’s summer wear, winter fleeces, and textile bales — all in one location.'
  },
  {
    icon: Box,
    title: 'Bulk Order Support',
    desc: 'Robust storage capacity and rapid baling allow us to satisfy high-volume continuous orders from multiple lorry loads to regional distribution consignments.'
  },
  {
    icon: RefreshCw,
    title: 'Reliable Supply',
    desc: 'Continuous inflow of fresh lots guarantees consistent availability so your retail business never suffers from stock shortages or delayed shipments.'
  },
  {
    icon: Users2,
    title: 'Customer-Focused Service',
    desc: 'Honest grade classification, photo & video verification over WhatsApp, straightforward terms, and transparent communication build lasting partnerships.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5] border-b border-[#eee8dc]">
      <Container>
        <SectionTitle
          badge="WHY CHOOSE US"
          title="The Preferred Used Clothing Supplier in Chennai"
          subtitle="Discover why leading retail garment vendors and bulk buyers choose S.K. Old Cloth Merchant as their long-term supply partner."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ADVANTAGES.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#eae3d2] hover-lift group relative overflow-hidden"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0d2818]/8 text-[#0d2818] group-hover:bg-[#0d2818] group-hover:text-emerald-300 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0d2818] tracking-tight">
                    {adv.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {adv.desc}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
