import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

export default function QuoteModal({ isOpen, onClose, category = '' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl z-10 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0d2818] text-white flex items-center justify-between border-b border-emerald-900">
          <div>
            <h3 className="font-serif text-xl font-bold">Request a Quotation</h3>
            <p className="text-xs text-emerald-300">S.K. Old Cloth Merchant • Choolai, Chennai</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <ContactForm initialCategory={category} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
