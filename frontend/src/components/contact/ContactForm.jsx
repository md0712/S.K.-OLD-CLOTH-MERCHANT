import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { COMPANY } from '../../data/company';
import { openWhatsApp } from '../../utils/whatsapp';

export default function ContactForm({ initialCategory = '', onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    whatsapp: '',
    category: initialCategory || 'Men’s Clothing',
    quantity: '1 - 5 Bales',
    location: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    setLoading(true);

    try {
      // Post to backend API if available, fallback gracefully
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(() => null);

      // Save locally to localStorage so it works even standalone or offline
      try {
        const stored = JSON.parse(localStorage.getItem('sk_enquiries') || '[]');
        stored.unshift({
          ...formData,
          id: Date.now(),
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('sk_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.error('LocalStorage write error', err);
      }

      setSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setError('Unable to submit enquiry right now. Please message directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppForward = () => {
    const text = `*New Business Enquiry - S.K. Old Cloth Merchant*\n\n*Name:* ${formData.name}\n*Business:* ${formData.businessName || 'N/A'}\n*Phone:* ${formData.phone}\n*Category:* ${formData.category}\n*Quantity:* ${formData.quantity}\n*Location:* ${formData.location || 'Chennai'}\n*Message:* ${formData.message || 'Please provide quotation & bale pictures.'}`;
    openWhatsApp({ customText: text });
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-emerald-900/10 shadow-sm text-center">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#0d2818] mb-2">
          Enquiry Received!
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md mx-auto">
          Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Our wholesale team at Choolai will review your requirement for <span className="font-semibold text-gray-800">{formData.category}</span> and get back to you shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppForward}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20ba59] transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Copy to WhatsApp Now</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                businessName: '',
                phone: '',
                whatsapp: '',
                category: 'Men’s Clothing',
                quantity: '1 - 5 Bales',
                location: '',
                message: ''
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#eae3d2] shadow-sm space-y-4"
    >
      <div className="border-b border-gray-100 pb-3 mb-2">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0d2818]">
          Send Wholesale / Retail Enquiry
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Tell us your quantity & category requirements. We respond promptly during business hours.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Shakir Ahmed"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
          />
        </div>

        {/* Business Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Business / Shop Name
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Royal Cloth Stores"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 94443 53151"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="e.g. Same as phone"
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Product Category */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Product Category <span className="text-red-500">*</span>
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none bg-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
            <option value="Mixed Bales / General Stock">Mixed Bales / General Stock</option>
            <option value="Retail Selection Only">Retail Selection Only</option>
          </select>
        </div>

        {/* Quantity Required */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            Quantity Required
          </label>
          <select
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none bg-white"
          >
            <option value="Sample Pieces (Retail)">Sample Pieces (Retail)</option>
            <option value="1 - 5 Bales (Trial Wholesale)">1 - 5 Bales (Trial Wholesale)</option>
            <option value="6 - 20 Bales (Regular Bulk)">6 - 20 Bales (Regular Bulk)</option>
            <option value="20+ Bales (Lorry / Container Load)">20+ Bales (Lorry / Container Load)</option>
            <option value="Regular Monthly Contract">Regular Monthly Contract</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Delivery Location / City
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Choolai, Chennai / Madurai / Salem"
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Message & Specific Requests
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please specify particular sizes, grades, or questions..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-[#0d2818] hover:bg-[#153e26] text-white font-semibold text-sm transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4 text-emerald-400" />
        <span>{loading ? 'Submitting Enquiry...' : 'Send Enquiry'}</span>
      </button>

      <div className="text-center pt-1">
        <button
          type="button"
          onClick={handleWhatsAppForward}
          className="text-xs text-emerald-800 hover:text-emerald-950 font-medium inline-flex items-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Prefer direct WhatsApp? Click here to chat now</span>
        </button>
      </div>
    </form>
  );
}
