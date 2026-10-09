import React, { useState } from 'react';
import { Package, Plus, Sparkles } from 'lucide-react';

const INITIAL_PRODUCTS = [
  { id: '1', name: "Men's Branded T-Shirts Bale", category: "Men's Clothing", weight: '45 kg', pieces: '180 - 210 pcs', grade: 'Grade A', status: 'In Stock' },
  { id: '2', name: "Men's Denim Jeans Bales", category: "Men's Clothing", weight: '50 kg', pieces: '75 - 90 pcs', grade: 'Grade A', status: 'In Stock' },
  { id: '3', name: "Women's Western Tops & Blouses", category: "Women's Clothing", weight: '45 kg', pieces: '200 - 240 pcs', grade: 'Grade A', status: 'In Stock' },
  { id: '4', name: "Kids' Mixed Summer Wear", category: "Kids' Clothing", weight: '40 kg', pieces: '240 - 280 pcs', grade: 'Grade A', status: 'In Stock' },
  { id: '5', name: "Winter Hoodies & Zip Sweatshirts", category: 'Jackets & Hoodies', weight: '45 kg', pieces: '70 - 85 pcs', grade: 'Grade A', status: 'In Stock' },
  { id: '6', name: "Denim & Pure Cotton Fabric Bales", category: 'Garments & Fabric', weight: '60 kg', pieces: 'Bulk Bale', grade: 'Industrial', status: 'In Stock' }
];

export default function Products() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <div className="p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Product Management</h2>
          <p className="text-xs text-gray-500">Manage catalog clothing items, bale specifications and stock availability</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 font-bold uppercase">
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Bale Weight</th>
              <th className="py-3 px-4">Est. Pieces</th>
              <th className="py-3 px-4">Grade</th>
              <th className="py-3 px-4">Stock Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/50">
                <td className="py-3.5 px-4 font-semibold text-gray-900">{p.name}</td>
                <td className="py-3.5 px-4 text-gray-600">{p.category}</td>
                <td className="py-3.5 px-4 text-gray-800 font-medium">{p.weight}</td>
                <td className="py-3.5 px-4 text-gray-600">{p.pieces}</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    <Sparkles className="w-2.5 h-2.5" />
                    {p.grade}
                  </span>
                </td>
                <td className="py-3.5 px-4">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {p.status}
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
