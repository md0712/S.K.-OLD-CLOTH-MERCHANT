import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, ExternalLink } from 'lucide-react';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function GalleryLightbox({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen || !item) return null;

  const whatsappUrl = getWhatsAppUrl({
    customText: `Hello S.K. Old Cloth Merchant, I saw this image "${item.title}" (${item.category}) in your gallery. Is this current stock available for wholesale supply?`
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content wrapper */}
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[75vh] bg-black">
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain mx-auto"
          />
        </div>

        {/* Caption & WhatsApp Quote */}
        <div className="w-full mt-4 p-4 rounded-xl bg-white/10 backdrop-blur-md text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase bg-emerald-500 text-black">
                {item.category}
              </span>
              <h4 className="font-serif text-lg font-bold">{item.title}</h4>
            </div>
            <p className="text-xs text-gray-300 max-w-xl">{item.description}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire This Lot</span>
          </a>
        </div>
      </div>
    </div>
  );
}
