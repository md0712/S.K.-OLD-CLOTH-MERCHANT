import React from 'react';

export default function Loader({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3">
      <div className="relative w-10 h-10">
        <div className="w-10 h-10 rounded-full border-3 border-emerald-900/20 border-t-[#0d2818] animate-spin" />
      </div>
      {text && <p className="text-sm text-gray-500 font-medium">{text}</p>}
    </div>
  );
}
