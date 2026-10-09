import React from 'react';
import { Layers } from 'lucide-react';

const CATEGORIES = [
  { id: '1', name: "Men’s Clothing", items: 'T-Shirts, Shirts, Jeans, Trousers, Casual Wear', status: 'Active' },
  { id: '2', name: "Women’s Clothing", items: 'Tops, Dresses, Jeans, Leggings, Casual Wear', status: 'Active' },
  { id: '3', name: "Kids’ Clothing", items: 'T-Shirts, Dresses, Shorts, Jeans, Kids Wear', status: 'Active' },
  { id: '4', name: "Jackets & Hoodies", items: 'Jackets, Sweatshirts, Hoodies, Fleeces, Winter Wear', status: 'Active' },
  { id: '5', name: "Garments & Fabric", items: 'Mixed Bales, Cotton, Denim, Polyester, Textile Materials', status: 'Active' },
  { id: '6', name: "Shoes & Accessories", items: 'Footwear, Bags, Belts, Caps, Accessories', status: 'Active' }
];

export default function Categories() {
  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Categories Management</h2>
        <p className="text-xs text-gray-500">6 Core clothing product categories configured</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase">
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Sub-Categories / Items</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {CATEGORIES.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50/50">
                <td className="py-3.5 px-4 font-bold text-gray-900">{c.name}</td>
                <td className="py-3.5 px-4 text-gray-600">{c.items}</td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
