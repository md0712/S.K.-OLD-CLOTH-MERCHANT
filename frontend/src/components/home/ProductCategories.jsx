import React from 'react';
import { CATEGORIES } from '../../data/categories';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ProductCard from '../products/ProductCard';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

export default function ProductCategories({ onOpenQuoteModal }) {
  return (
    <section className="py-20 sm:py-24 bg-[#f6f3eb]" id="products-section">
      <Container>
        <SectionTitle
          badge="OUR PRODUCTS"
          title="Wide Range of Used Clothing"
          subtitle="Quality pre-owned clothing for different customer needs."
        />

        {/* 6 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <ProductCard
              key={category.id}
              category={category}
              onSelectQuote={onOpenQuoteModal}
            />
          ))}
        </div>

        {/* Bottom Catalog CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/products"
            variant="primary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Complete Wholesale Catalog
          </Button>
          <p className="text-xs text-gray-500 mt-3">
            Wholesale compressed bales (40kg - 60kg) & selected retail pieces available daily in Choolai, Chennai.
          </p>
        </div>
      </Container>
    </section>
  );
}
