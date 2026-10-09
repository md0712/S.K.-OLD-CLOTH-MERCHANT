import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  MessageSquareText,
  Package,
  Layers,
  Image,
  TrendingUp,
  Clock,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      const data = await api.getDashboardStats();
      setStats(data);
      setLoading(false);
    }
    loadStats();
  }, []);

  if (loading) {
    return <div className="p-8 text-gray-500">Loading dashboard metrics...</div>;
  }

  const statCards = [
    {
      title: 'Total Enquiries',
      value: stats?.totalEnquiries || 0,
      icon: MessageSquareText,
      color: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      title: 'New / Pending Leads',
      value: stats?.newEnquiries || 0,
      icon: Clock,
      color: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      title: 'Active Products',
      value: stats?.totalProducts || 9,
      icon: Package,
      color: 'bg-blue-50 text-blue-800 border-blue-200'
    },
    {
      title: 'Product Categories',
      value: stats?.totalCategories || 6,
      icon: Layers,
      color: 'bg-purple-50 text-purple-800 border-purple-200'
    }
  ];

  return (
    <div className="p-6 sm:p-8 space-y-8">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {c.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{c.value}</p>
              </div>
              <div className={`p-3 rounded-xl border ${c.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Access & Recent Enquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Enquiries (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
            <div>
              <h3 className="font-bold text-gray-900">Recent Customer Enquiries</h3>
              <p className="text-xs text-gray-500">Incoming requests from website enquiry forms</p>
            </div>
            <Link
              to="/enquiries"
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
            >
              <span>View All</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 font-semibold uppercase">
                  <th className="py-2.5 px-3">Customer</th>
                  <th className="py-2.5 px-3">Phone</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Quantity</th>
                  <th className="py-2.5 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(stats?.recentEnquiries || []).length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-6 text-center text-gray-400">
                      No customer enquiries logged yet.
                    </td>
                  </tr>
                ) : (
                  stats.recentEnquiries.map((e) => (
                    <tr key={e.id} className="hover:bg-gray-50/50">
                      <td className="py-3 px-3">
                        <div className="font-semibold text-gray-900">{e.name}</div>
                        <div className="text-[10px] text-gray-400">{e.businessName || 'Direct Buyer'}</div>
                      </td>
                      <td className="py-3 px-3 text-gray-700">{e.phone}</td>
                      <td className="py-3 px-3 text-gray-700 font-medium">{e.category}</td>
                      <td className="py-3 px-3 text-gray-600">{e.quantity}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            e.status === 'new'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {e.status || 'new'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Operations (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#0d2818] text-white rounded-2xl p-6 shadow-xs border border-emerald-900">
            <h4 className="font-bold text-sm mb-1">Wholesale Quick Desk</h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              Direct links to manage products, update bale specifications, or view current stock.
            </p>
            <div className="space-y-2 text-xs">
              <Link
                to="/products"
                className="block p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors font-medium text-emerald-300"
              >
                + Add / Edit Clothing Bales
              </Link>
              <Link
                to="/content"
                className="block p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors font-medium text-emerald-300"
              >
                ⚙ Update Homepage & Phone Details
              </Link>
              <Link
                to="/gallery"
                className="block p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors font-medium text-emerald-300"
              >
                🖼 Manage Warehouse Images
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
