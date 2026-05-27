/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        neon: {
          pink: '#FF0050',
          cyan: '#00F2EA',
          purple: '#9B5DE5',
          yellow: '#FFE600',
          green: '#00FF88',
        },
        dark: {
          900: '#050508',
          800: '#0A0A10',
          700: '#111118',
          600: '#1A1A26',
          500: '#222230',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,0,80,0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,242,234,0.15) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 20px rgba(255, 0, 80, 0.5), 0 0 60px rgba(255, 0, 80, 0.2)',
        'neon-cyan': '0 0 20px rgba(0, 242, 234, 0.5), 0 0 60px rgba(0, 242, 234, 0.2)',
        'neon-purple': '0 0 20px rgba(155, 93, 229, 0.5), 0 0 60px rgba(155, 93, 229, 0.2)',
        'card-glow': '0 0 0 1px rgba(255,255,255,0.05), 0 4px 40px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
