import React from 'react';
import Container from '../components/common/Container';
import { COMPANY } from '../data/company';

export default function Terms() {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#eae3d2] shadow-xs">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0d2818] mb-4">
            Terms & Conditions of Supply
          </h1>
          <p className="text-xs text-gray-500 mb-8">
            Last Updated: 2026 • S.K. OLD CLOTH MERCHANT
          </p>

          <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>{COMPANY.name}</strong>. By accessing our website, purchasing our wholesale bales, or ordering retail products, you agree to these operational terms.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">1. Nature of Used Clothing</h3>
            <p>
              All products supplied are pre-owned / used garments unless specifically labeled as export surplus. While stock is thoroughly inspected and graded into Grade A standards, natural minor variations in wash, wear, and sizing are inherent to second-hand goods.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">2. Bales and Inspection</h3>
            <p>
              Wholesale compressed bales are sealed with industrial strapping. Buyers are encouraged to inspect sample unbundled pieces at our Choolai, Chennai warehouse prior to finalizing bulk shipments.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">3. Dispatch & Freight</h3>
            <p>
              Freight charges from Chennai to customer destination are settled according to standard commercial carrier rates. S.K. Old Cloth Merchant oversees careful loading and handoff to the transport company.
            </p>

            <h3 className="font-serif text-xl font-bold text-[#0d2818]">4. Governing Law</h3>
            <p>
              Any disputes are subject to the jurisdiction of the courts of Chennai, Tamil Nadu, India.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
