'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export default function Logo({ size = 'md', variant = 'full' }: LogoProps) {
  const sizes = {
    sm: { width: 120, iconSize: 32, fontSize: 18 },
    md: { width: 160, iconSize: 40, fontSize: 22 },
    lg: { width: 220, iconSize: 56, fontSize: 30 },
  };

  const { iconSize, fontSize } = sizes[size];

  if (variant === 'icon') {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0050" />
            <stop offset="100%" stopColor="#00F2EA" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0050" />
            <stop offset="50%" stopColor="#9B5DE5" />
            <stop offset="100%" stopColor="#00F2EA" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Background circle */}
        <circle cx="28" cy="28" r="28" fill="#0A0A10" />
        {/* Outer ring */}
        <circle cx="28" cy="28" r="26" fill="none" stroke="url(#logoGrad2)" strokeWidth="2" />
        {/* Lightning bolt / play hybrid */}
        <path
          d="M32 8 L18 30 L26 30 L20 50 L38 26 L30 26 L36 8 Z"
          fill="url(#logoGrad1)"
          filter="url(#glow)"
        />
      </svg>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad1Full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0050" />
            <stop offset="100%" stopColor="#00F2EA" />
          </linearGradient>
          <linearGradient id="logoGrad2Full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF0050" />
            <stop offset="50%" stopColor="#9B5DE5" />
            <stop offset="100%" stopColor="#00F2EA" />
          </linearGradient>
          <filter id="glowFull">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="28" cy="28" r="28" fill="#0A0A10" />
        <circle cx="28" cy="28" r="26" fill="none" stroke="url(#logoGrad2Full)" strokeWidth="2" />
        <path
          d="M32 8 L18 30 L26 30 L20 50 L38 26 L30 26 L36 8 Z"
          fill="url(#logoGrad1Full)"
          filter="url(#glowFull)"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          style={{ fontFamily: 'Syne, sans-serif', fontSize: fontSize, fontWeight: 800 }}
          className="gradient-text tracking-tight"
        >
          Online
        </span>
        <span
          style={{ fontFamily: 'Syne, sans-serif', fontSize: fontSize * 0.75, fontWeight: 500 }}
          className="text-white/60 tracking-widest uppercase"
        >
          Today
        </span>
      </div>
    </div>
  );
}
