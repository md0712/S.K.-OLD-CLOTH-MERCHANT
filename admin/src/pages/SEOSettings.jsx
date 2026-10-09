import React from 'react';
import { Search, Globe, CheckCircle } from 'lucide-react';

export default function SEOSettings() {
  return (
    <div className="p-6 sm:p-8 space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">SEO & Metadata Configuration</h2>
        <p className="text-xs text-gray-500">Search engine optimization and structured schema settings</p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4 text-xs">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Target Keywords</label>
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'used clothes supplier in Chennai',
              'old cloth wholesale Chennai',
              'second hand clothes wholesale Chennai',
              'used clothing supplier Tamil Nadu',
              'used garments wholesale Chennai',
              'clothing bale supplier Chennai'
            ].map((kw, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <label className="block font-semibold text-gray-700 mb-1">Schema Type</label>
          <input
            type="text"
            readOnly
            value="schema.org/WholesaleStore (LocalBusiness)"
            className="w-full px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 outline-none"
          />
        </div>

        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 space-y-1">
          <p className="font-semibold text-gray-900 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Search Engine Readiness Status: Active</span>
          </p>
          <p>Sitemap generated at <code className="text-emerald-700">/sitemap.xml</code></p>
          <p>Robots directives active at <code className="text-emerald-700">/robots.txt</code></p>
        </div>
      </div>
    </div>
  );
}
