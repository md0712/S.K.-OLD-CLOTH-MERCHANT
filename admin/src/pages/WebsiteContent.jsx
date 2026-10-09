import React, { useState } from 'react';
import { Save, CheckCircle } from 'lucide-react';

export default function WebsiteContent() {
  const [saved, setSaved] = useState(false);
  const [content, setContent] = useState({
    businessName: 'S.K. OLD CLOTH MERCHANT',
    tagline: 'Quality Used Clothing • Wholesale & Retail',
    brandMessage: 'Trusted Quality. Affordable Prices. Reliable Supply.',
    phone: '+91 94443 53151',
    email: 'skoldclothsupplier@gmail.com',
    location: 'Choolai, Chennai – 600112',
    heroTitle: 'TRUST • QUALITY • AFFORDABLE',
    heroDescription: 'Your reliable partner for quality pre-owned clothing, bulk supply and retail requirements in Chennai.'
  });

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Website Content CMS</h2>
        <p className="text-xs text-gray-500">Edit core business messages, phone numbers, and hero statements</p>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-200 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Website content updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={content.businessName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Tagline</label>
            <input
              type="text"
              name="tagline"
              value={content.tagline}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={content.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Official Email</label>
            <input
              type="email"
              name="email"
              value={content.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Warehouse Location</label>
          <input
            type="text"
            name="location"
            value={content.location}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Hero Description</label>
          <textarea
            rows={3}
            name="heroDescription"
            value={content.heroDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-xl border border-gray-200 outline-none"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-[#0d2818] text-white font-semibold text-xs hover:bg-[#16422b] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Save Changes</span>
        </button>
      </form>
    </div>
  );
}
