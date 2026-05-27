'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap } from 'lucide-react';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/signup', label: 'Join Us' },
  { href: '/faq', label: 'FAQ' },
  { href: '/social', label: 'Socials' },
  { href: '/terms', label: 'T&Cs' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark py-3 shadow-2xl' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
              <Logo size="sm" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                      active
                        ? 'text-white'
                        : 'text-white/50 hover:text-white'
                    }`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {active && (
                      <motion.span
                        layoutId="navPill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA button */}
            <a
              href="https://www.tiktok.com/t/ZSx8bM74C/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex btn-primary text-sm py-2.5 px-5"
            >
              <Zap size={14} />
              Join Now
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-10 p-2 rounded-lg glass text-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 3%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 3%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 3%)' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: 'var(--dark-800)' }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, var(--neon-pink) 0%, transparent 70%)' }}
              />
              <div
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, var(--neon-cyan) 0%, transparent 70%)' }}
              />
            </div>

            <div className="flex flex-col justify-center items-center h-full gap-6 px-8 relative">
              <Logo size="lg" />
              <div className="w-16 h-px my-4" style={{ background: 'linear-gradient(90deg, transparent, var(--neon-pink), transparent)' }} />
              <nav className="flex flex-col items-center gap-2 w-full max-w-xs">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.07 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-center w-full py-4 px-6 rounded-2xl text-xl font-bold tracking-wide transition-all duration-300 ${
                          active
                            ? 'text-white bg-white/10 border border-white/15'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {active && (
                          <span
                            className="w-2 h-2 rounded-full mr-3 animate-pulse"
                            style={{ background: 'var(--neon-pink)' }}
                          />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <a
                  href="https://www.tiktok.com/t/ZSx8bM74C/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base px-10 py-4"
                >
                  <Zap size={16} />
                  Join the Agency
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
