'use client';

import Link from 'next/link';
import Logo from './Logo';
import { MessageCircle } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/signup', label: 'Join Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/social', label: 'Our Socials' },
  { href: '/terms', label: 'Terms & Conditions' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--neon-pink), var(--neon-cyan), transparent)' }}
      />
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,0,80,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              TikTok&apos;s most supportive creator agency. We grow with you, not above you.
            </p>
            <p className="text-white/25 text-xs">
              Online2day Ltd · Registered in England & Wales
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-white/80 font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-neon-pink opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'var(--neon-pink)' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white/80 font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Get in Touch
            </h3>
            <p className="text-white/40 text-sm mb-4 leading-relaxed">
              Have questions? We&apos;re on WhatsApp and ready to help you on your creator journey.
            </p>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 text-sm transition-all duration-300"
            >
              <MessageCircle size={15} style={{ color: '#25D366' }} />
              Message on WhatsApp
            </a>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-white/25 text-xs">Trading as Online Today</p>
              <p className="text-white/25 text-xs mt-1">
                <a href="https://online2day.com" className="hover:text-white/50 transition-colors">online2day.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Online2day Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-white/20 text-xs">Built for creators.</span>
            <span
              className="text-xs font-bold"
              style={{
                background: 'linear-gradient(135deg, var(--neon-pink), var(--neon-cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Go live. Go big.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
