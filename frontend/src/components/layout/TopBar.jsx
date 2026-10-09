import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../../data/company';

export default function TopBar() {
  return (
    <div className="bg-[#081a10] text-[#e5e0d3] text-xs py-2 border-b border-emerald-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Contact Info Items */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
            title="Call S.K. Old Cloth Merchant"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{COMPANY.phone}</span>
          </a>

          <span className="hidden sm:inline text-emerald-900">•</span>

          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            title="Email S.K. Old Cloth Merchant"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-none">{COMPANY.email}</span>
          </a>

          <span className="hidden md:inline text-emerald-900">•</span>

          <a
            href={COMPANY.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            title="View Location on Google Maps"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{COMPANY.location}</span>
          </a>
        </div>

        {/* Right Info: Business Hours & Trust Badge */}
        <div className="hidden lg:flex items-center gap-4 text-[11px] text-[#c9c2b3]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>Mon–Sat: 9:30 AM – 8:30 PM</span>
          </div>
          <span className="text-emerald-900">•</span>
          <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chennai Wholesale Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
