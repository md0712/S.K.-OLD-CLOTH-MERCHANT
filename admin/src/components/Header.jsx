import React from 'react';
import { api } from '../services/api';
import { User, Bell } from 'lucide-react';

export default function Header({ title }) {
  const user = api.getUser();

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#0d2818] text-white flex items-center justify-center text-xs font-bold">
            {user?.name?.[0] || 'A'}
          </div>
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-gray-900 leading-tight">
              {user?.name || 'Admin'}
            </div>
            <div className="text-[10px] text-gray-500">{user?.email || 'admin@skoldclothmerchant.com'}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
