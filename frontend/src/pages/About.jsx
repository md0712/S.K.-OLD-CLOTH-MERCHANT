import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { COMPANY } from '../data/company';
import { Warehouse, ShieldCheck, CheckCircle2, MapPin, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function About({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <div className="py-12 sm:py-16">
      {/* Page Header */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12 sm:mb-16">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <span>ESTABLISHED 2017 • CHENNAI</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About S.K. OLD CLOTH MERCHANT
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              Your dependable wholesale and retail supply partner for pre-owned clothing, bulk clothing bales, and sorted textile materials based in Choolai, Chennai.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content & Story */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d2818] leading-tight">
              A Legacy of Quality, Trust & Reliable Bulk Supply in Chennai
            </h2>

            <p className="text-base text-gray-700 leading-relaxed">
              Founded in 2017, <strong className="text-gray-900 font-semibold">{COMPANY.name}</strong> operates out of Choolai, a historic wholesale textile district in Central Chennai. Over the years, we have grown into one of the region’s premier destinations for traders, shop owners, exporters, and individual buyers seeking high-grade second-hand garments.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed">
              We specialize in importing, unbundling, sorting, grading, and repacking used clothing into compressed bales and retail bundles. Every lot that enters our warehouse is inspected for usable condition, color life, and fabric strength.
            </p>

            <div className="p-5 rounded-2xl bg-[#f4f0e6] border border-[#e2d9c5]">
              <div className="font-serif italic text-base sm:text-lg text-[#0d2818] font-medium mb-1">
                “{COMPANY.brandMessage}”
              </div>
              <div className="text-xs text-emerald-800 font-semibold">
                — Core Philosophy of S.K. Old Cloth Merchant
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0d2818]">Strict Sorting Discipline</h4>
                  <p className="text-xs text-gray-500">Separating Grade A stock from unusable seconds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#0d2818]">Transparent Bale Weights</h4>
                  <p className="text-xs text-gray-500">Every bale verified and labeled accurately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/images/about/warehouse-stock.jpg"
                alt="S.K. Old Cloth Merchant Central Stock Facility"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                  Central Warehouse Facility
                </div>
                <div className="font-serif text-lg sm:text-xl font-bold">
                  {COMPANY.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Pillars */}
        <div className="mb-20">
          <SectionTitle
            badge="OUR PRINCIPLES"
            title="How We Do Business"
            subtitle="Building enduring relationships with clothing traders through unwavering integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-[#eae3d2] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0d2818] text-emerald-400 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0d2818] mb-2">
                Honest Grade Grading
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We never compromise on grade definitions. Grade A garments are strictly separated and packaged so our wholesale partners get exactly what they paid for.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#eae3d2] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0d2818] text-emerald-400 flex items-center justify-center mb-5">
                <Warehouse className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0d2818] mb-2">
                Large-Scale Storage
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our Choolai warehouse maintains ready inventory of all seasonal categories including men's, women's, kids', denims, and fabric bales to fulfill orders on the same day.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#eae3d2] shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#0d2818] text-emerald-400 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0d2818] mb-2">
                Strategic Chennai Hub
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Positioned in Central Chennai close to major transport hubs and parcel offices, enabling swift, low-cost freight dispatch across Tamil Nadu, Andhra Pradesh, and Karnataka.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="rounded-3xl bg-[#081a10] text-white p-8 sm:p-12 text-center max-w-4xl mx-auto border border-emerald-900">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Visit Our Warehouse in Choolai or Call for Stock Status
          </h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
            We welcome shopkeepers, bulk traders, and new business owners to visit our facility and inspect current bale lots in person.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={whatsappUrl}
              target="_blank"
              variant="whatsapp"
              size="md"
              icon={MessageSquare}
            >
              WhatsApp Supply Desk
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
              Request Price List
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
