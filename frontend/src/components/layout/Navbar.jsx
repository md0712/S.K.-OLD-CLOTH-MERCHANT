import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  ArrowRight,
  Layers,
  Shirt,
  Sparkles,
  Smile,
  Shield,
  Box,
  ShoppingBag,
  Truck,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY } from '../../data/company';
import { NAV_LINKS } from '../../data/navigation';
import MobileMenu from './MobileMenu';

// Map icons to sub-items
function getSubItemIcon(name) {
  switch (name) {
    case 'All Collections':
      return Layers;
    case 'Men’s Clothing':
      return Shirt;
    case 'Women’s Clothing':
      return Sparkles;
    case 'Kids’ Clothing':
      return Smile;
    case 'Jackets & Hoodies':
      return Shield;
    case 'Garments & Fabric':
      return Box;
    case 'Shoes & Accessories':
      return ShoppingBag;
    case 'Wholesale & Retail Supply':
      return Truck;
    case 'Quality & 9-Step Process':
      return CheckCircle2;
    case 'Internship & Training':
      return GraduationCap;
    default:
      return Layers;
  }
}

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.search]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-xs border-b border-[#e5decb] py-3'
            : 'bg-white border-b border-[#eee7da] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            {/* 1. Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 min-w-0 max-w-[calc(100%-54px)] sm:max-w-none focus:outline-none focus:ring-0 select-none group"
            >
              {/* Official Brand Logo Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 flex items-center justify-center shadow-xs border border-emerald-900/15 group-hover:border-emerald-700/40 group-hover:shadow-sm transition-all shrink-0 overflow-hidden">
                <img
                  src="/logo.png"
                  alt={COMPANY.name}
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col min-w-0">
                <span className="font-serif text-[15px] sm:text-lg lg:text-[18px] xl:text-[20px] font-bold tracking-tight text-[#0d2818] leading-tight truncate sm:whitespace-nowrap group-hover:text-[#184c34] transition-colors">
                  {COMPANY.name}
                </span>
                <span className="text-[9.5px] sm:text-[11px] font-semibold text-[#5a6e60] tracking-wider uppercase truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none">
                  Quality Used Clothing • Wholesale & Retail
                </span>
              </div>
            </Link>

            {/* 2. Desktop Navigation with Dropdowns */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center justify-center gap-1 xl:gap-2.5 2xl:gap-4 flex-1 min-w-0"
            >
              {NAV_LINKS.map((link) => {
                const hasDropdown = Boolean(link.dropdown && link.dropdown.length > 0);
                const isDropdownOpen = openDropdown === link.name;

                // Standard Link (No Dropdown)
                if (!hasDropdown) {
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `whitespace-nowrap text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-semibold transition-colors duration-150 py-2 px-2.5 rounded-lg focus:outline-none select-none relative ${
                          isActive
                            ? 'text-[#0d2818]'
                            : 'text-gray-600 hover:text-[#0d2818] hover:bg-[#faf7f0]'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <span className="relative pb-1">
                          {link.name}
                          {isActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0d2818] rounded-full" />
                          )}
                        </span>
                      )}
                    </NavLink>
                  );
                }

                // Dropdown Nav Link
                const isCurrentParentActive =
                  location.pathname === link.path ||
                  (link.dropdown && link.dropdown.some((sub) => location.pathname === sub.path.split('?')[0]));

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center">
                      <NavLink
                        to={link.path}
                        className={`inline-flex items-center gap-1 whitespace-nowrap text-[13px] xl:text-[13.5px] 2xl:text-[14px] font-semibold transition-colors duration-150 py-2 px-2.5 rounded-lg focus:outline-none select-none relative ${
                          isCurrentParentActive
                            ? 'text-[#0d2818]'
                            : 'text-gray-600 hover:text-[#0d2818] hover:bg-[#faf7f0]'
                        }`}
                      >
                        <span className="relative pb-1">
                          {link.name}
                          {isCurrentParentActive && (
                            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0d2818] rounded-full" />
                          )}
                        </span>
                      </NavLink>

                      {/* Dropdown Toggle Trigger Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(isDropdownOpen ? null : link.name);
                        }}
                        className="p-1 -ml-1 text-gray-500 hover:text-[#0d2818] focus:outline-none rounded cursor-pointer"
                        aria-expanded={isDropdownOpen}
                        aria-label={`Toggle ${link.name} menu`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-emerald-700 ${
                            isDropdownOpen ? 'rotate-180 text-[#0d2818]' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Dropdown Menu Container */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className={`absolute top-full pt-2 z-50 ${
                            link.name === 'Our Products'
                              ? 'left-1/2 -translate-x-1/2 w-[540px]'
                              : 'left-0 w-[360px]'
                          }`}
                        >
                          {/* Inner Card */}
                          <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-[#e5decb] shadow-2xl p-4 overflow-hidden">
                            {/* Dropdown Header */}
                            <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
                              <span className="text-xs font-bold text-[#0d2818] uppercase tracking-wider flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span>{link.name} Overview</span>
                              </span>
                              <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                {link.name === 'Our Products' ? 'A-Grade Bales' : 'Chennai Hub'}
                              </span>
                            </div>

                            {/* Dropdown Items Grid */}
                            <div
                              className={
                                link.name === 'Our Products'
                                  ? 'grid grid-cols-2 gap-1.5'
                                  : 'space-y-1'
                              }
                            >
                              {link.dropdown.map((subItem) => {
                                const IconComponent = getSubItemIcon(subItem.name);
                                return (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    onClick={() => setOpenDropdown(null)}
                                    className="p-2.5 rounded-xl hover:bg-[#f6f2e9] transition-all group/sub flex items-start gap-2.5 focus:outline-none"
                                  >
                                    <div className="w-7 h-7 rounded-lg bg-emerald-900/5 group-hover/sub:bg-[#0d2818] group-hover/sub:text-white text-emerald-700 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                                      <IconComponent className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between gap-1">
                                        <span className="text-xs font-bold text-gray-900 group-hover/sub:text-[#0d2818] leading-tight">
                                          {subItem.name}
                                        </span>
                                        {subItem.badge && (
                                          <span
                                            className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                                              subItem.badge === 'New'
                                                ? 'bg-[#00C98D]/20 text-emerald-800'
                                                : 'bg-emerald-100/70 text-emerald-800'
                                            }`}
                                          >
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-gray-500 truncate leading-normal mt-0.5">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Bottom Card Footer Action */}
                            <div className="mt-3 pt-2.5 border-t border-gray-100 bg-[#faf8f4] -mx-4 -mb-4 px-4 py-2.5 flex items-center justify-between">
                              <span className="text-[11px] text-gray-600 font-medium">
                                {link.name === 'Our Products'
                                  ? 'Looking for bulk wholesale pricing?'
                                  : 'Need a custom consignment or advice?'}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  onOpenQuoteModal();
                                }}
                                className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                              >
                                <span>Get a Quote</span>
                                <ArrowRight className="w-3 h-3 text-emerald-600" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* 3. Right Action: "Get a Quote" */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#0d2818] hover:bg-[#16422b] text-white font-semibold text-xs sm:text-sm shadow-xs hover:shadow transition-all duration-200 border border-[#143e26] cursor-pointer whitespace-nowrap focus:outline-none focus:ring-0"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-800 hover:text-[#0d2818] hover:bg-gray-100 transition-colors focus:outline-none focus:ring-0 border border-gray-200/60"
                aria-label="Toggle navigation menu"
              >
                <div className="w-5 h-4.5 flex flex-col justify-between items-center">
                  <span
                    className={`h-0.5 w-5 bg-[#0d2818] rounded-full transition-transform duration-300 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[#0d2818] rounded-full transition-opacity duration-200 ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-5 bg-[#0d2818] rounded-full transition-transform duration-300 ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer with Accordion Support */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenQuoteModal={() => {
          setMobileMenuOpen(false);
          onOpenQuoteModal();
        }}
      />
    </>
  );
}
