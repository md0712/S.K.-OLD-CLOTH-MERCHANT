import React from 'react';
import { Settings as SettingsIcon, ShieldCheck, Key } from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">System & Admin Settings</h2>
        <p className="text-xs text-gray-500">Security preferences and administrator account details</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4 text-xs">
        <h3 className="font-bold text-gray-900 text-sm">Administrator Account</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Admin Email</label>
            <input
              type="text"
              readOnly
              value="admin@skoldclothmerchant.com"
              className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 outline-none"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Access Role</label>
            <input
              type="text"
              readOnly
              value="Super Administrator (Full Rights)"
              className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-900">Backend API Gateway</p>
            <p className="text-gray-500 text-[11px]">Express.js REST Service running on port 5000</p>
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
            Connected
          </span>
        </div>
      </div>
    </div>
  );
}
