import { COMPANY } from '../data/company';

/**
 * Generates dynamic WhatsApp chat URLs with contextual pre-filled messages
 */
export function getWhatsAppUrl({ category, product, type = 'general', customText = '' } = {}) {
  const baseNumber = COMPANY.phoneRaw;
  let message = '';

  if (customText) {
    message = customText;
  } else if (type === 'wholesale') {
    message = `Hello S.K. Old Cloth Merchant, I am interested in wholesale bulk clothing supply${
      category ? ` for ${category}` : ''
    }. Please share current bale availability, minimum order quantity, and pricing details.`;
  } else if (type === 'retail') {
    message = `Hello S.K. Old Cloth Merchant, I am looking to purchase retail selections of used clothing${
      category ? ` (${category})` : ''
    }. Please share available pieces and store visit timings in Choolai, Chennai.`;
  } else if (type === 'quote') {
    message = `Hello S.K. Old Cloth Merchant, I would like to request a quotation for used clothing stock${
      category ? ` - Category: ${category}` : ''
    }. My requirements are for regular supply in Tamil Nadu.`;
  } else if (type === 'internship') {
    message = `Hello S.K. Old Cloth Merchant, I would like to apply for the Internship & Practical Training Program at your Choolai, Chennai warehouse. Please share details regarding available tracks, batch dates, and application steps.`;
  } else if (product || category) {
    const item = product || category;
    message = `Hello S.K. Old Cloth Merchant, I am interested in your "${item}" collection. Please share available stock, grading details, wholesale bale pricing, and pictures.`;
  } else {
    // Default message specified in requirements
    message = `Hello S.K. Old Cloth Merchant, I am interested in used clothing. Please share available categories, stock, pricing and wholesale details.`;
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${baseNumber}?text=${encodedMessage}`;
}

export function openWhatsApp(params) {
  const url = getWhatsAppUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}
