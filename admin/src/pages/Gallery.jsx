import React from 'react';
import { Image } from 'lucide-react';

const GALLERY = [
  { title: "Warehouse Bales", category: "Warehouse", src: "/images/gallery/warehouse-bales.jpg" },
  { title: "Men's Racks", category: "Men", src: "/images/gallery/mens-collection.jpg" },
  { title: "Women's Collection", category: "Women", src: "/images/gallery/womens-collection.jpg" },
  { title: "Kids' Clothing", category: "Kids", src: "/images/gallery/kids-collection.jpg" },
  { title: "Clothing Bales", category: "Bales", src: "/images/gallery/clothing-bales-ready.jpg" },
  { title: "Quality Checking", category: "Packing", src: "/images/gallery/quality-checking.jpg" },
  { title: "Safe Transport", category: "Dispatch", src: "/images/gallery/safe-transport.jpg" }
];

export default function Gallery() {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Gallery Management</h2>
        <p className="text-xs text-gray-500">Warehouse, bale and collection photographs displayed on the website</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {GALLERY.map((g, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs">
            <div className="aspect-4/3 bg-gray-100 overflow-hidden">
              <img src={g.src} alt={g.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-3">
              <span className="text-[10px] font-bold uppercase text-emerald-800">{g.category}</span>
              <p className="text-xs font-semibold text-gray-900 truncate">{g.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
