'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const loadingMessages: Record<string, string> = {
  '/': 'Welcome to Online Today',
  '/signup': 'Ready to go live?',
  '/faq': 'We have answers',
  '/social': 'Find us everywhere',
  '/terms': 'The important stuff',
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setPrevPath(pathname);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPath]);

  const message = loadingMessages[pathname] || 'Loading...';

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] flex flex-col items-center justify-center"
            style={{ background: 'var(--dark-900)' }}
          >
            {/* Animated blobs */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,0,80,0.3) 0%, transparent 70%)',
                  top: '20%',
                  left: '10%',
                }}
                animate={{
                  x: [0, 80, 0],
                  y: [0, -40, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(0,242,234,0.2) 0%, transparent 70%)',
                  bottom: '20%',
                  right: '10%',
                }}
                animate={{
                  x: [0, -60, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.1 }}
              />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-6 relative z-10"
            >
              <Logo size="lg" />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-sm font-medium tracking-widest uppercase"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {message}
              </motion.p>
              {/* Loading bar */}
              <div className="w-48 h-0.5 rounded-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--neon-pink), var(--neon-cyan))' }}
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      >
        {children}
      </motion.main>
    </>
  );
}
