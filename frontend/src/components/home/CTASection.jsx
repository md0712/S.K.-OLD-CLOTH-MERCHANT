import React from 'react';
import { MessageSquare, Phone, Send, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function CTASection({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <section className="py-20 sm:py-24 bg-[#081a10] text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-[circle_at_top_right] from-emerald-600/15 via-transparent to-transparent pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-emerald-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>WHOLESALE & RETAIL SUPPLY DESK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Looking for Quality Used Clothing in Bulk?
          </h2>

          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            Tell us what you need. Our team will help you with available categories, stock and pricing.
          </p>

          {/* Three Action Buttons as required */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto font-semibold shadow-md"
              icon={MessageSquare}
            >
              WhatsApp Us
            </Button>

            <Button
              href={`tel:${COMPANY.phoneRaw}`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-semibold text-[#0d2818]"
              icon={Phone}
            >
              Call Now
            </Button>

            <Button
              onClick={() => onOpenQuoteModal()}
              variant="outlineLight"
              size="lg"
              className="w-full sm:w-auto font-medium"
              icon={Send}
            >
              Send Enquiry
            </Button>
          </div>

          <p className="text-xs text-gray-400 pt-4">
            📍 Choolai, Chennai – 600112 • Direct Phone: {COMPANY.phone} • Response within business hours
          </p>
        </div>
      </Container>
    </section>
  );
}
