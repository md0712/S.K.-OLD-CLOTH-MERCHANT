import React from 'react';
import Container from '../components/common/Container';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import { COMPANY } from '../data/company';
import { MapPin, Phone, Mail, Clock, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-12 sm:py-16">
      {/* Banner */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <span>DIRECT WHOLESALE & RETAIL COMMUNICATION</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact S.K. OLD CLOTH MERCHANT
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              Connect directly with our wholesale supply desk in Choolai, Chennai. Inquire about current bale inventory, request price quotes, or schedule a warehouse visit.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Main 2-column contact section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Location & Map Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#eae3d2] shadow-xs mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                CENTRAL LOCATION
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0d2818]">
                Visit Our Warehouse in Choolai, Chennai
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                📍 {COMPANY.address}
              </p>
            </div>

            <a
              href={COMPANY.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#0d2818] text-white text-xs font-semibold hover:bg-[#16422b] transition-colors shrink-0"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Embedded Interactive Map */}
          <div className="rounded-2xl overflow-hidden aspect-21/9 min-h-[300px] bg-gray-100 border border-gray-200 relative">
            <iframe
              title={`${COMPANY.name} Choolai Chennai Location`}
              src="https://maps.google.com/maps?q=No.+1%2F34%2C+A-Block%2C+Kandappa+Street%2C+Choolai%2C+Chennai+-+600112&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Quick FAQ Grid */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl font-bold text-[#0d2818] mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-5 rounded-2xl bg-white border border-[#eae3d2]">
              <h4 className="font-semibold text-sm text-[#0d2818] mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Can I visit the warehouse to inspect stock?</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Yes! We welcome buyers during operational hours (9:30 AM to 8:30 PM, Mon–Sat) in Choolai, Chennai. Please call or WhatsApp ahead so our team can stage sample bales for you.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#eae3d2]">
              <h4 className="font-semibold text-sm text-[#0d2818] mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>What is the minimum wholesale order?</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our wholesale bale supply starts from just 1 compressed bale (approx. 40kg to 50kg) for trial orders. For bulk discounts, 5+ bales or full lorry loads are available.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#eae3d2]">
              <h4 className="font-semibold text-sm text-[#0d2818] mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Do you deliver outside Chennai?</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Yes. We regularly dispatch consignments to Madurai, Coimbatore, Salem, Tiruchirappalli, Tirunelveli, and neighboring southern states via reliable parcel freight services.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#eae3d2]">
              <h4 className="font-semibold text-sm text-[#0d2818] mb-1 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>How are payments handled?</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We accept direct bank transfers (NEFT/RTGS/IMPS), UPI, and in-person settlements at our Choolai office before dispatch.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
