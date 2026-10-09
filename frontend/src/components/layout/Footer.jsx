import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { NAV_LINKS } from '../../data/navigation';
import { getWhatsAppUrl } from '../../utils/whatsapp';

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <footer className="bg-[#081a10] text-[#e8e4db] pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-emerald-900/40">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-0.5 flex items-center justify-center border border-emerald-700/50 shadow-xs shrink-0 overflow-hidden">
                <img
                  src="/logo.png"
                  alt={COMPANY.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-tight text-white leading-tight">
                  {COMPANY.name}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Chennai’s trusted hub for quality pre-owned clothing, bulk clothing bales, graded men’s, women’s & kids wear, and textile materials. Established in 2017.
            </p>

            <div className="pt-2">
              <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-xs text-emerald-300">
                "{COMPANY.brandMessage}"
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border border-emerald-800"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 hover:bg-pink-600 text-white flex items-center justify-center transition-colors border border-emerald-800"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-950 hover:bg-blue-600 text-white flex items-center justify-center transition-colors border border-emerald-800"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-emerald-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Highlights (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Men’s Clothing</li>
              <li>Women’s Clothing</li>
              <li>Kids’ Clothing</li>
              <li>Jackets & Hoodies</li>
              <li>Garments & Fabric</li>
              <li>Shoes & Accessories</li>
            </ul>
          </div>

          {/* Col 4: Contact & Warehouse (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Contact & Warehouse
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Choolai Warehouse</p>
                  <p className="text-xs text-gray-400">{COMPANY.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-emerald-300 transition-colors text-xs truncate"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 S.K. OLD CLOTH MERCHANT. All Rights Reserved.</p>

          {/* Agency Credit */}
          <p className="flex items-center gap-1 text-gray-400">
            <span>Created by</span>
            <a
              href="https://dmdigitallab.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 decoration-emerald-500/40 hover:decoration-emerald-300 transition-all"
            >
              DM Digital Labs
            </a>
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-200 transition-colors">
              Terms & Conditions
            </Link>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
