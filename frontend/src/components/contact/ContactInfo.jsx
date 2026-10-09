import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function ContactInfo() {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <div className="bg-[#0d2818] text-white rounded-2xl p-7 sm:p-9 shadow-sm border border-emerald-900 flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Direct Wholesale Office
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          Get in Touch with Our Choolai Hub
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          Whether you are an established garments retailer in Tamil Nadu, an upstart reseller, or an industrial textile buyer, our team is ready to assist you with current lot rates and dispatch schedules.
        </p>

        {/* Contact list */}
        <div className="space-y-5 text-sm">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Direct Phone & Desk</p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="text-base sm:text-lg font-semibold hover:text-emerald-300 transition-colors"
              >
                {COMPANY.phone}
              </a>
              <p className="text-xs text-emerald-400">Call for instant bale stock inquiry</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Official Email</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm sm:text-base font-semibold hover:text-emerald-300 transition-colors break-all"
              >
                {COMPANY.email}
              </a>
              <p className="text-xs text-gray-400">For quotations & formal contracts</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Warehouse & Store Location</p>
              <p className="text-sm font-semibold">{COMPANY.location}</p>
              <p className="text-xs text-gray-300 mt-0.5">Tamil Nadu, India</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Working Hours</p>
              <p className="text-sm font-medium">{COMPANY.workingHours}</p>
              <p className="text-xs text-gray-400">Sunday by prior appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-8 mt-8 border-t border-white/10 space-y-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Message on WhatsApp</span>
        </a>

        <div className="flex items-center gap-2 text-xs text-gray-300 justify-center">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Registered Chennai Cloth Supplier Since 2017</span>
        </div>
      </div>
    </div>
  );
}
