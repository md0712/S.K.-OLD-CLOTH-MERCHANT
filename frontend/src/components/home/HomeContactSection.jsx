import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import ContactInfo from '../contact/ContactInfo';
import ContactForm from '../contact/ContactForm';

export default function HomeContactSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#faf8f5]" id="contact-section">
      <Container>
        <SectionTitle
          badge="GET IN TOUCH"
          title="Contact S.K. Old Cloth Merchant"
          subtitle="Direct phone, WhatsApp, and form inquiry for wholesale bales and retail availability in Chennai."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right: Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
