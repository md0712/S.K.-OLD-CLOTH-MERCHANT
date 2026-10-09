import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { COMPANY } from '../../data/company';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function MobileBottomBar({ onOpenQuoteModal }) {
  const whatsappUrl = getWhatsAppUrl({ type: 'general' });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 px-3 py-2 shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#f4f0e6] text-[#0d2818] rounded-xl text-xs font-semibold hover:bg-[#eae3d2] active:scale-95 transition-all border border-[#ded5c0]"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#0d2818]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#25D366] text-white rounded-xl text-xs font-semibold hover:bg-[#20ba59] active:scale-95 transition-all shadow-xs"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Enquiry Button */}
        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 bg-[#0d2818] text-white rounded-xl text-xs font-semibold hover:bg-[#16422b] active:scale-95 transition-all shadow-xs"
        >
          <FileText className="w-4 h-4 mb-0.5 text-emerald-400" />
          <span>Enquiry</span>
        </button>
      </div>
    </div>
  );
}
