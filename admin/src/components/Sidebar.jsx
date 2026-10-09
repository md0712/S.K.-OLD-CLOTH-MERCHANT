import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  MessageSquareText,
  Package,
  Layers,
  Image,
  FileEdit,
  Search,
  Settings,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { api } from '../services/api';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Enquiries', path: '/enquiries', icon: MessageSquareText },
  { name: 'Products', path: '/products', icon: Package },
  { name: 'Categories', path: '/categories', icon: Layers },
  { name: 'Gallery', path: '/gallery', icon: Image },
  { name: 'Website Content', path: '/content', icon: FileEdit },
  { name: 'SEO Settings', path: '/seo', icon: Search },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    api.logout();
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-[#0d2818] text-white flex flex-col shrink-0 min-h-screen">
      {/* Brand Header */}
      <div className="p-5 border-b border-emerald-900/60 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-serif text-sm border border-emerald-500/30">
          SK
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-tight leading-tight">
            S.K. OLD CLOTH
          </h1>
          <p className="text-[10px] text-emerald-400 font-medium">
            Admin Portal • Chennai
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-3 space-y-1 flex-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                  isActive
                    ? 'bg-emerald-500 text-[#0d2818]'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-emerald-900/60 space-y-2">
        <a
          href="http://localhost:5173"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-emerald-300 hover:bg-white/5 transition-colors"
        >
          <span>View Live Website</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-red-300 hover:bg-red-500/20 transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
