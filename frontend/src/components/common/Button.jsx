import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  target,
  rel,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
  }[size] || 'text-sm px-5 py-2.5 gap-2';

  const variantClasses = {
    primary:
      'bg-[#0d2818] text-white hover:bg-[#143e26] active:bg-[#081b10] border border-[#143e26] shadow-sm hover:shadow-md focus:ring-[#0d2818]',
    secondary:
      'bg-[#f4f0e6] text-[#0d2818] hover:bg-[#eae3d2] active:bg-[#ded5c0] border border-[#e2d9c5] shadow-xs focus:ring-[#0d2818]',
    outline:
      'bg-transparent text-[#0d2818] border border-[#0d2818]/30 hover:border-[#0d2818] hover:bg-[#0d2818]/5 active:bg-[#0d2818]/10 focus:ring-[#0d2818]',
    outlineLight:
      'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 active:bg-white/15 focus:ring-white',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1caa50] border border-[#20ba59] shadow-sm hover:shadow-md focus:ring-[#25D366]',
    darkGreen:
      'bg-[#16422b] text-white hover:bg-[#103422] border border-[#1e5839] shadow-sm focus:ring-[#16422b]',
    ghost:
      'bg-transparent text-[#0d2818] hover:bg-[#0d2818]/5 active:bg-[#0d2818]/10 focus:ring-[#0d2818]',
  }[variant] || '';

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const renderContent = () => (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}
