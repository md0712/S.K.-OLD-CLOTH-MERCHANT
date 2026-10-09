import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Phone, ArrowRight, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../data/navigation';
import { COMPANY } from '../../data/company';

export default function MobileMenu({ isOpen, onClose, onOpenQuoteModal }) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (name) => {
    setExpandedSections((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Drawer with slide-in animation */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-[#f9f8f4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-emerald-900/15 shrink-0 overflow-hidden">
                  <img
                    src="/logo.png"
                    alt={COMPANY.name}
                    className="w-full h-full object-contain filter drop-shadow-xs"
                  />
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-[#0d2818] leading-tight">
                    {COMPANY.name}
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">
                    Choolai, Chennai – 600112
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links with Staggered Fade & Accordion */}
            <div className="py-4 px-3 flex-1 space-y-1">
              {NAV_LINKS.map((link, idx) => {
                const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
                const isExpanded = Boolean(expandedSections[link.name]);

                if (!hasDropdown) {
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, duration: 0.2 }}
                    >
                      <NavLink
                        to={link.path}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? 'bg-[#0d2818] text-white shadow-sm'
                              : 'text-gray-800 hover:bg-[#f4f0e6] hover:text-[#0d2818]'
                          }`
                        }
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-50" />
                      </NavLink>
                    </motion.div>
                  );
                }

                // Dropdown Accordion Item
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.2 }}
                    className="rounded-xl overflow-hidden border border-gray-100 bg-[#faf8f4]/60"
                  >
                    {/* Header Row - Full Row Tap Friendly */}
                    <div
                      onClick={() => toggleSection(link.name)}
                      className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-[#f4efe6] active:bg-[#ede5d6] transition-colors select-none"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        {link.name}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">
                          {link.dropdown.length} items
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 text-emerald-800 ${
                            isExpanded ? 'rotate-180 text-[#0d2818]' : ''
                          }`}
                        />
                      </div>
                    </div>

                    {/* Sub-Items Accordion Drawer */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden bg-white border-t border-gray-100 px-2 py-2 space-y-1"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={onClose}
                              className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#f4efe6] hover:text-[#0d2818] transition-colors"
                            >
                              <div className="min-w-0 pr-2">
                                <div className="text-gray-900 font-bold truncate">
                                  {subItem.name}
                                </div>
                                <div className="text-[10px] text-gray-500 truncate font-normal">
                                  {subItem.description}
                                </div>
                              </div>
                              {subItem.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                                  {subItem.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="p-5 border-t border-gray-100 bg-[#faf9f6] space-y-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-4 bg-[#0d2818] text-white rounded-xl font-semibold text-sm hover:bg-[#153e26] transition-colors shadow-sm text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Wholesale Quote</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="w-full py-2.5 px-4 bg-white border border-gray-200 text-gray-800 rounded-xl font-medium text-xs hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Call Us: {COMPANY.phone}</span>
              </a>

              <div className="pt-2 text-[11px] text-gray-500 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Established 2017 • Chennai Hub</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
