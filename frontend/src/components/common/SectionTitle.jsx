import React from 'react';

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
  titleClassName = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            dark
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
              : 'bg-[#16422b]/10 text-[#16422b] border border-[#16422b]/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {badge}
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-4.5xl font-bold tracking-tight leading-tight mb-4 ${
          dark ? 'text-white' : 'text-[#0d2818]'
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            dark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
