import React from 'react';
import Container from '../components/common/Container';
import { COMPANY } from '../data/company';

export default function PrivacyPolicy() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#eae3d2] shadow-xs">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d2818] mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500 mb-8">
            Last Updated: 2026 • S.K. OLD CLOTH MERCHANT
          </p>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>
              At <strong>{COMPANY.name}</strong>, accessible from skoldclothmerchant.com, we prioritize the privacy of our visitors and trade clients. This Privacy Policy details the types of information we collect and how we utilize it.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">1. Information We Collect</h3>
            <p>
              When you submit a wholesale enquiry form or contact us via WhatsApp, we collect information including your name, business name, phone number, location, and cloth category requirements.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">2. Use of Information</h3>
            <p>
              Your contact details are strictly used to fulfill your quotation request, respond to enquiries, confirm dispatch orders, and communicate stock arrival updates. We do not sell or rent customer details to third parties.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">3. Direct Communications</h3>
            <p>
              Communications initiated through WhatsApp are governed by WhatsApp’s standard end-to-end encrypted protocol.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">4. Contact Us</h3>
            <p>
              If you have questions regarding this Privacy Policy, please email us at <strong>{COMPANY.email}</strong> or visit our office at {COMPANY.location}.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
