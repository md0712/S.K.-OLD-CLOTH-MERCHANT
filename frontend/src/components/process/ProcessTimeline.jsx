import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  ShieldCheck,
  Shirt,
  Warehouse,
  Box,
  Tag,
  ClipboardCheck,
  Truck,
  Handshake,
  ArrowRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../../data/process';
import Container from '../common/Container';
import Button from '../common/Button';

// Mapping visual icons to exact requirements
const ICON_MAP = {
  Layers,
  ShieldCheck,
  Shirt,
  Warehouse,
  Box,
  Tag,
  ClipboardCheck,
  Truck,
  Handshake
};

export default function ProcessTimeline({ limit = 9 }) {
  const steps = PROCESS_STEPS.slice(0, limit);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="process-timeline">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#0d2818]/5 text-emerald-800 border border-emerald-800/15 uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>S.K. OLD CLOTH MERCHANT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#0d2818] tracking-tight uppercase">
            QUALITY & PROCESS
          </h2>

          <p className="mt-3 text-lg sm:text-xl text-emerald-800 font-serif italic font-medium">
            “From Quality Checking to Safe Delivery”
          </p>

          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* ======================================================== */}
        {/* DESKTOP ALTERNATING ZIGZAG ROADMAP (md:block)             */}
        {/* ======================================================== */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          {/* Continuous Zigzag Connecting Line via SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 100 900"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 38 50 L 62 150 L 38 250 L 62 350 L 38 450 L 62 550 L 38 650 L 62 750 L 38 850"
              fill="none"
              stroke="#0d2818"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>

          {/* 9 Process Step Rows */}
          <div className="flex flex-col">
            {steps.map((item, idx) => {
              const isOdd = idx % 2 === 0; // 0, 2, 4, 6, 8 => left node at 38%
              const IconComponent = ICON_MAP[item.iconName] || Layers;
              const isLast = idx === steps.length - 1;

              return (
                <div
                  key={item.id}
                  className="relative h-44 lg:h-48 flex items-center justify-between"
                >
                  {/* ================= ODD ROW (01, 03, 05, 07, 09) ================= */}
                  {isOdd ? (
                    <>
                      {/* Left Content Block (Left of circle) */}
                      <motion.div
                        className="w-[34%] pl-4 pr-2 text-left z-10"
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: idx * 0.1 + 0.05 }}
                      >
                        <div className="text-3xl lg:text-4xl font-extrabold text-[#0d2818] font-serif tracking-tight">
                          {item.step}
                        </div>
                        <div className="text-base lg:text-lg font-bold text-[#143d28] uppercase tracking-wide mt-0.5">
                          {item.title}
                        </div>

                        {/* Green accent line under title extending to circle */}
                        <motion.div
                          className="h-[3px] bg-[#10b981] rounded-full my-2 w-full"
                          style={{ transformOrigin: 'left' }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                        />

                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </motion.div>

                      {/* Milestone Circle at 38% */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 z-20"
                        style={{ left: '38%', transform: 'translate(-50%, -50%)' }}
                      >
                        <motion.div
                          className={`w-20 h-20 rounded-full border-[3.5px] border-[#0d2818] bg-white shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110 group ${
                            isLast
                              ? 'shadow-[0_0_28px_rgba(16,185,129,0.55)] ring-4 ring-emerald-400/40'
                              : ''
                          }`}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.45, delay: idx * 0.1 }}
                        >
                          <IconComponent className="w-8 h-8 text-[#0d2818] group-hover:text-emerald-700 transition-colors" />
                        </motion.div>
                      </div>

                      {/* Right empty balance column */}
                      <div className="w-[34%]" />
                    </>
                  ) : (
                    /* ================= EVEN ROW (02, 04, 06, 08) ================= */
                    <>
                      {/* Left empty balance column */}
                      <div className="w-[34%]" />

                      {/* Milestone Circle at 62% */}
                      <div
                        className="absolute top-1/2 -translate-y-1/2 z-20"
                        style={{ left: '62%', transform: 'translate(-50%, -50%)' }}
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full border-[3.5px] border-[#0d2818] bg-white shadow-md flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.45, delay: idx * 0.1 }}
                        >
                          <IconComponent className="w-8 h-8 text-[#0d2818] group-hover:text-emerald-700 transition-colors" />
                        </motion.div>
                      </div>

                      {/* Right Content Block (Right of circle) */}
                      <motion.div
                        className="w-[34%] pl-2 pr-4 text-left z-10"
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: idx * 0.1 + 0.05 }}
                      >
                        <div className="text-3xl lg:text-4xl font-extrabold text-[#0d2818] font-serif tracking-tight">
                          {item.step}
                        </div>
                        <div className="text-base lg:text-lg font-bold text-[#143d28] uppercase tracking-wide mt-0.5">
                          {item.title}
                        </div>

                        {/* Green accent line under title extending to outer edge */}
                        <motion.div
                          className="h-[3px] bg-[#10b981] rounded-full my-2 w-full"
                          style={{ transformOrigin: 'left' }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.1 }}
                        />

                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE SINGLE VERTICAL TIMELINE (md:hidden)              */}
        {/* Layout: Icon → Step Number → Title → Description        */}
        {/* ======================================================== */}
        <div className="md:hidden relative px-2 py-4">
          {/* Vertical dark-green connecting line on the left side */}
          <motion.div
            className="absolute left-8 top-7 bottom-7 w-0.5 border-l-[2.5px] border-dashed border-[#0d2818]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />

          <div className="space-y-8 relative">
            {steps.map((item, idx) => {
              const IconComponent = ICON_MAP[item.iconName] || Layers;
              const isLast = idx === steps.length - 1;

              return (
                <motion.div
                  key={item.id}
                  className="flex items-start gap-4 relative"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  {/* Milestone Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-full border-[3px] border-[#0d2818] bg-white shadow-md flex items-center justify-center shrink-0 z-10 ${
                      isLast
                        ? 'shadow-[0_0_20px_rgba(16,185,129,0.5)] ring-3 ring-emerald-400/40'
                        : ''
                    }`}
                  >
                    <IconComponent className="w-6 h-6 text-[#0d2818]" />
                  </div>

                  {/* Horizontal green accent line */}
                  <div className="w-3.5 h-[2px] bg-[#10b981] mt-7 shrink-0" />

                  {/* Content: Step Number -> Title -> Description */}
                  <div className="flex-1 pt-1 pb-1">
                    <span className="text-2xl font-black text-[#0d2818] font-serif tracking-tight block">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-[#143d28] uppercase tracking-wide mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to Quality Process Page */}
        <div className="mt-16 text-center">
          <Button
            to="/quality-process"
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
          >
            Explore Complete 9-Stage Quality System
          </Button>
        </div>
      </Container>
    </section>
  );
}
