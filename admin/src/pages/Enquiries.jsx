import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { MessageSquare, Phone, Download, Search, CheckCircle, Clock, Trash2 } from 'lucide-react';

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function loadEnquiries() {
    setLoading(true);
    const data = await api.getEnquiries();
    setEnquiries(data);
    setLoading(false);
  }

  const handleStatusChange = async (id, newStatus) => {
    await api.updateEnquiryStatus(id, newStatus);
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const filtered = enquiries.filter(e => {
    const matchesFilter = filter === 'all' || e.status === filter;
    const matchesSearch =
      search === '' ||
      e.name?.toLowerCase().includes(search.toLowerCase()) ||
      e.phone?.includes(search) ||
      e.category?.toLowerCase().includes(search.toLowerCase()) ||
      e.location?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Business', 'Phone', 'WhatsApp', 'Category', 'Quantity', 'Location', 'Status', 'Message'];
    const rows = filtered.map(e => [
      e.id,
      e.createdAt || '',
      `"${e.name || ''}"`,
      `"${e.businessName || ''}"`,
      `"${e.phone || ''}"`,
      `"${e.whatsapp || ''}"`,
      `"${e.category || ''}"`,
      `"${e.quantity || ''}"`,
      `"${e.location || ''}"`,
      e.status || 'new',
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sk_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 sm:p-8 space-y-6">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Customer Enquiries</h2>
          <p className="text-xs text-gray-500">Track and respond to incoming wholesale and retail leads</p>
        </div>

        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 transition-colors shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Export to CSV</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {['all', 'new', 'contacted', 'quoted', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                filter === status
                  ? 'bg-[#0d2818] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, phone, city..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-[#0d2818]"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/80 border-b border-gray-200 text-gray-600 font-bold uppercase">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Customer Details</th>
                <th className="py-3 px-4">Category & Qty</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Message</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-gray-400">
                    No enquiries match the selected filter.
                  </td>
                </tr>
              ) : (
                filtered.map((e) => {
                  const rawPhone = (e.whatsapp || e.phone || '').replace(/\D/g, '');
                  const waUrl = rawPhone
                    ? `https://wa.me/${rawPhone}?text=${encodeURIComponent(
                        `Hello ${e.name}, this is S.K. Old Cloth Merchant Chennai following up on your enquiry for ${e.category}.`
                      )}`
                    : null;

                  return (
                    <tr key={e.id} className="hover:bg-gray-50/60">
                      <td className="py-3 px-4 text-gray-500 whitespace-nowrap">
                        {e.createdAt ? new Date(e.createdAt).toLocaleDateString() : 'Recent'}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-gray-900">{e.name}</div>
                        <div className="text-[11px] text-gray-500">{e.businessName || 'Direct'}</div>
                        <div className="text-[11px] text-emerald-800 font-semibold">{e.phone}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-gray-800">{e.category}</div>
                        <div className="text-[11px] text-gray-500">{e.quantity}</div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {e.location || 'Chennai'}
                      </td>
                      <td className="py-3 px-4 max-w-xs truncate text-gray-600">
                        {e.message || '—'}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={e.status || 'new'}
                          onChange={(ev) => handleStatusChange(e.id, ev.target.value)}
                          className={`px-2 py-1 rounded-lg text-[11px] font-semibold border outline-none ${
                            e.status === 'new'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : e.status === 'contacted'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="completed">Completed</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          {waUrl && (
                            <a
                              href={waUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors"
                              title="Chat with Customer on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <a
                            href={`tel:${e.phone}`}
                            className="p-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                            title="Call Customer"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
