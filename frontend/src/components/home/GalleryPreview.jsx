import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import GalleryGrid from '../gallery/GalleryGrid';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

export default function GalleryPreview() {
  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#eee8dc]" id="gallery-preview">
      <Container>
        <SectionTitle
          badge="OUR VISUAL SHOWCASE"
          title="A Glimpse of Our Stock & Infrastructure"
          subtitle="Explore authentic photography of our warehouse, clothing bales, sorting routine, and commercial fleet."
        />

        {/* Gallery Grid with filters & lightbox */}
        <GalleryGrid limit={8} />

        <div className="mt-14 text-center">
          <Button
            to="/gallery"
            variant="primary"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            View Complete Photo Gallery (16+ Images)
          </Button>
        </div>
      </Container>
    </section>
  );
}
