import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Check, MessageSquare, Search, Sparkles, Box, Tag, ArrowRight } from 'lucide-react';

export default function Products({ onOpenQuoteModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.categoryId === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16">
      {/* Header Banner */}
      <section className="bg-[#081a10] text-white py-16 sm:py-20 mb-12">
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider mb-4">
              <span>CURRENT WAREHOUSE STOCK • GRADE A</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Our Products & Clothing Bales
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              High-quality sorted pre-owned clothing, compressed bale inventory, and individual category selections ready for wholesale dispatch and retail purchase.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        {/* Controls Bar: Category Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0d2818] text-white shadow-xs'
                  : 'bg-white text-gray-700 hover:bg-[#f4f0e6] border border-gray-200'
              }`}
            >
              All Categories
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0d2818] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-[#f4f0e6] border border-gray-200'
                }`}
              >
                {cat.shortName}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items, fabrics, bales..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:border-[#0d2818] focus:ring-1 focus:ring-[#0d2818] outline-none"
            />
          </div>
        </div>

        {/* Category Description Banner if single category selected */}
        {activeCategory !== 'all' && (
          (() => {
            const currentCat = CATEGORIES.find((c) => c.id === activeCategory);
            if (!currentCat) return null;
            return (
              <div className="p-6 rounded-2xl bg-[#f4f0e6] border border-[#e2d9c5] mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                    Category Overview
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#0d2818]">
                    {currentCat.name}
                  </h3>
                  <p className="text-sm text-gray-700 mt-1 max-w-2xl">
                    {currentCat.description}
                  </p>
                  <div className="text-xs text-gray-600 mt-2 font-medium">
                    📦 Standard Bale: <span className="font-semibold text-gray-900">{currentCat.baleSpecs}</span>
                  </div>
                </div>

                <Button
                  onClick={() => onOpenQuoteModal(currentCat.name)}
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Quote for {currentCat.shortName}
                </Button>
              </div>
            );
          })()
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-gray-500 text-base mb-4">
              No products found matching "{searchQuery}".
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              variant="secondary"
              size="sm"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappUrl = getWhatsAppUrl({
                category: product.categoryName,
                product: product.name
              });

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#eae3d2] shadow-xs hover-lift flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.name} S.K. Old Cloth Merchant`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-xs text-[#0d2818] shadow-xs">
                          <Sparkles className="w-3 h-3 text-emerald-600" />
                          {product.grade}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-black/75 text-white backdrop-blur-xs">
                          {product.baleWeight} Bale
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                        {product.categoryName}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#0d2818] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#faf8f5] border border-gray-100 text-xs mb-4">
                        <div>
                          <span className="text-gray-500 block">Est. Pieces:</span>
                          <span className="font-semibold text-gray-800">{product.estPieces}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Dispatch Status:</span>
                          <span className="font-semibold text-emerald-800">{product.wholesaleAvailability}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {product.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-2 border-t border-gray-100 bg-[#fdfcfa] flex items-center gap-3">
                    <Button
                      onClick={() => onOpenQuoteModal(`${product.name} (${product.categoryName})`)}
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Enquire Price
                    </Button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors"
                      title="Direct WhatsApp chat for this product"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#f4f0e6] border border-[#e2d9c5] text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-[#0d2818] mb-2">
            Looking for Custom Assorted Bales or Specific Garment Grades?
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            We can prepare tailored mixed lots according to your target price point and local retail demographic.
          </p>
          <Button
            onClick={() => onOpenQuoteModal('Custom Assorted Bales')}
            variant="primary"
            size="md"
          >
            Speak with Wholesale Desk
          </Button>
        </div>
      </Container>
    </div>
  );
}
