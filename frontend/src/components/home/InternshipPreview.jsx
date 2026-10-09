import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../common/Container';
import { GraduationCap, Award, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InternshipPreview() {
  return (
    <section className="py-14 sm:py-18 bg-[#f5f1e8] border-y border-[#e5decb]">
      <Container>
        <div className="bg-[#063B30] rounded-3xl p-6 sm:p-10 lg:p-12 text-white relative overflow-hidden shadow-xl border border-[#00C98D]/25">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C98D]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#00C98D]/20 text-[#00C98D] border border-[#00C98D]/30 uppercase tracking-widest">
                <GraduationCap className="w-3.5 h-3.5 text-[#00C98D]" />
                <span>ACADEMIC FIELD TRAINING • CHENNAI</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
                Internship in Circular Fashion & Textile Logistics
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-light max-w-xl">
                Are you a fashion design, textile, or business student looking for hands-on warehouse experience? Join S.K. Old Cloth Merchant's training initiative to master garment grading, hydraulic baling machinery, and circular economy supply chains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D] shrink-0" />
                  <span>Official Certificate & Letter of Recommendation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D] shrink-0" />
                  <span>Direct warehouse floor mentoring in Choolai</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D] shrink-0" />
                  <span>4 to 12 Weeks flexible batch durations</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00C98D] shrink-0" />
                  <span>NOC & college academic credit support</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/internship"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C98D] hover:bg-[#00b07a] text-[#063B30] font-bold text-sm shadow-md transition-all duration-200"
                >
                  <span>Explore Tracks & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Mini Bento Card (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00C98D] uppercase tracking-wider">Track 01</span>
                  <span className="text-[11px] text-gray-300">4-8 Weeks</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">Sustainable Garment Grading</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Natural/synthetic fiber analysis, A-Grade vs B-Grade sorting criteria, defect inspection.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00C98D] uppercase tracking-wider">Track 02</span>
                  <span className="text-[11px] text-gray-300">4-12 Weeks</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">Supply Chain & Bale Logistics</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Bulk intake, high-pressure baling machinery operations, warehouse stock management.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00C98D] uppercase tracking-wider">Track 03</span>
                  <span className="text-[11px] text-gray-300">4-8 Weeks</span>
                </div>
                <h4 className="font-serif text-base font-bold text-white">B2B Merchandising & Thrift Resale</h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Wholesale margins, thrift bundle curation, and B2B client order fulfillment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
