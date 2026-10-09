import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { PROCESS_STEPS } from '../data/process';
import { CheckCircle2, ShieldAlert, ShieldCheck, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { COMPANY } from '../data/company';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function QualityProcess({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <div className="py-12 sm:py-16">
      {/* Banner */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <span>9-STAGE COMPREHENSIVE WORKFLOW</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Quality Assurance & Handling Process
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              How S.K. Old Cloth Merchant turns raw garment intake into graded, uniform, and cleanly packaged clothing bales ready for profitable retail resale.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Intro Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-[#eae3d2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0d2818] mb-1">
              Zero Defect Tolerance
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Garments with major tears, burnt holes, permanent chemical stains, or missing zippers are sorted out from Grade A inventory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#eae3d2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0d2818] mb-1">
              True Weight Guarantee
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every bale is weighed on certified digital platform scales and tagged with exact kilograms before dispatch.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#eae3d2] shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#0d2818] mb-1">
              Weather-Proof Strapping
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Industrial density compression with tear-resistant poly covers guards stock against rain, dirt, and transit friction.
            </p>
          </div>
        </div>

        {/* 9 Process Stages Detail List */}
        <div className="space-y-12 mb-20">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-3xl border border-[#eae3d2] shadow-xs ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Col (5 cols) */}
              <div
                className={`lg:col-span-5 relative rounded-2xl overflow-hidden aspect-16/10 bg-gray-100 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={step.image}
                  alt={`${step.step} ${step.title} - S.K. Old Cloth Merchant Process`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl text-xs font-bold bg-[#0d2818] text-emerald-300 shadow-md">
                  STAGE {step.step}
                </div>
              </div>

              {/* Text Col (7 cols) */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-widest">
                  {step.tagline}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0d2818]">
                  {step.step} — {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">
                    Key Quality Checklist:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {step.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#081a10] text-white text-center max-w-4xl mx-auto border border-emerald-900">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Ready to Partner with Chennai's Most Rigorous Cloth Supplier?
          </h3>
          <p className="text-sm text-gray-300 max-w-lg mx-auto mb-6">
            Contact us today to discuss bale requirements, schedule a warehouse inspection, or receive our latest stock catalog.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              variant="whatsapp"
              size="md"
              icon={MessageSquare}
            >
              WhatsApp Us
            </Button>
            <Button
              href={`tel:${COMPANY.phoneRaw}`}
              variant="secondary"
              size="md"
              icon={Phone}
            >
              Call {COMPANY.phone}
            </Button>
            <Button
              onClick={() => onOpenQuoteModal()}
              variant="outlineLight"
              size="md"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
