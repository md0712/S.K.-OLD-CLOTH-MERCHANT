import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function WhatsAppButton({ category, product }) {
  const whatsappUrl = getWhatsAppUrl({ category, product, type: 'general' });

  return (
    <div className="fixed bottom-5 sm:bottom-7 right-4 sm:right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="mr-3 hidden md:block px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Wholesale Desk
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S.K. Old Cloth Merchant on WhatsApp"
        className="relative w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75" />
        <MessageSquare className="w-6 h-6 relative z-10 fill-current" />
      </a>
    </div>
  );
}
