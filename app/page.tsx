'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Zap,
  Users,
  TrendingUp,
  Shield,
  Globe,
  MessageCircle,
  PlayCircle,
  ChevronRight,
  Star,
  Wifi,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const features = [
  {
    icon: Shield,
    color: 'var(--neon-pink)',
    title: 'Violation Support',
    description:
      'Got a ban or violation? We step in immediately. Our team knows the TikTok system inside out.',
  },
  {
    icon: TrendingUp,
    color: 'var(--neon-cyan)',
    title: 'Grow at Your Pace',
    description:
      'No follower minimums. Whether you have 50 or 50,000 — we invest in your journey from day one.',
  },
  {
    icon: PlayCircle,
    color: 'var(--neon-purple)',
    title: 'OBS Live Setup',
    description:
      'Want a professional streaming setup? We&apos;ll guide you through OBS from installation to going live.',
  },
  {
    icon: Globe,
    color: '#FFE600',
    title: 'Your Own Website',
    description:
      'Get a professional site for just £59.99/yr + domain. Tier B+ creators with 10k diamonds get it FREE.',
  },
  {
    icon: Users,
    color: 'var(--neon-green)',
    title: 'Real Community',
    description:
      'Be part of a network of creators who share tips, celebrate wins, and support each other live.',
  },
  {
    icon: MessageCircle,
    color: 'var(--neon-pink)',
    title: 'WhatsApp Support',
    description:
      'Have a question at 11pm? Reach us on WhatsApp. Real people, real help, real fast.',
  },
];

const stats = [
  { value: '0', label: 'Follower minimum', suffix: '' },
  { value: '1.5', label: 'Hours live per session', suffix: 'hrs' },
  { value: '15', label: 'Day cooling off period', suffix: 'days' },
  { value: '£59', label: 'Website per year', suffix: '' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Main gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,0,80,0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 90% 60%, rgba(0,242,234,0.12) 0%, transparent 50%), radial-gradient(ellipse 50% 40% at 10% 70%, rgba(155,93,229,0.1) 0%, transparent 50%)',
            }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Floating orbs */}
          {[
            { size: 400, top: '10%', left: '-5%', color: 'rgba(255,0,80,0.08)', delay: 0 },
            { size: 300, top: '60%', right: '-5%', color: 'rgba(0,242,234,0.07)', delay: 2 },
            { size: 200, top: '40%', left: '60%', color: 'rgba(155,93,229,0.09)', delay: 4 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: (orb as { left?: string }).left,
                right: (orb as { right?: string }).right,
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              }}
              animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Live badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--neon-pink)' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest text-white/70"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              TikTok Creator Agency
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.9] mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-white">Your Creator</span>
            <br />
            <span className="gradient-text">Journey Starts</span>
            <br />
            <span className="text-white">Online Today.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We&apos;re the agency that believes in you before the algorithm does. No follower
            minimums. Just consistency, community, and the right support to make you thrive on TikTok Live.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://www.tiktok.com/t/ZSx8bM74C/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              <Zap size={18} />
              Join the Agency Now
            </a>
            <Link href="/signup" className="btn-secondary text-base px-8 py-4">
              <PlayCircle size={18} />
              How It Works
            </Link>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 flex flex-col items-center gap-2"
          >
            <span className="text-white/20 text-xs uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
              Scroll to explore
            </span>
            <motion.div
              className="w-px h-12"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)' }}
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="relative py-5 overflow-hidden border-y border-white/5">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(255,0,80,0.05), rgba(0,242,234,0.05))' }}
        />
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(4)
            .fill(null)
            .map((_, i) =>
              ['GO LIVE', 'GET SUPPORTED', 'GROW YOUR BRAND', 'NO FOLLOWER MINIMUM', 'ONLINE TODAY', 'YOUR JOURNEY STARTS HERE', 'TIKTOK CREATOR AGENCY'].map(
                (text, j) => (
                  <span
                    key={`${i}-${j}`}
                    className="inline-flex items-center gap-6 px-8 text-sm font-bold uppercase tracking-widest"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: j % 2 === 0 ? 'rgba(255,255,255,0.15)' : 'var(--neon-pink)',
                    }}
                  >
                    {text}
                    <span className="text-white/10">◆</span>
                  </span>
                )
              )
            )}
        </div>
      </div>

      {/* ─── STATS ─── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 text-center group hover:border-white/10 transition-all"
            >
              <div
                className="text-4xl sm:text-5xl font-black mb-1"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'linear-gradient(135deg, var(--neon-pink), var(--neon-cyan))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-white/40 text-xs uppercase tracking-wide" style={{ fontFamily: 'Space Mono, monospace' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(155,93,229,0.05) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 mb-3" style={{ fontFamily: 'Space Mono, monospace' }}>
              What we offer
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Everything you need to{' '}
              <span className="gradient-text">go live</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group glass rounded-2xl p-6 card-hover"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${feature.color}20`, border: `1px solid ${feature.color}30` }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 mb-3" style={{ fontFamily: 'Space Mono, monospace' }}>
              Simple process
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Three steps to{' '}
              <span className="gradient-text">going live</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Click the join link',
                desc: 'Tap our TikTok signup link and connect your account to the agency. Takes less than 2 minutes.',
                color: 'var(--neon-pink)',
              },
              {
                step: '02',
                title: '15-day trial starts',
                desc: 'Your cooling off period begins. Get to know us, attend onboarding, and see if we\'re the right fit.',
                color: 'var(--neon-cyan)',
              },
              {
                step: '03',
                title: 'Go live & grow',
                desc: 'Start streaming with our support. We handle violations, help with OBS, and celebrate every milestone with you.',
                color: 'var(--neon-purple)',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 glass rounded-2xl p-6 group card-hover"
              >
                <div
                  className="text-4xl font-black opacity-20 group-hover:opacity-40 transition-opacity shrink-0 w-14"
                  style={{ fontFamily: 'Syne, sans-serif', color: item.color }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-lg mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="ml-auto shrink-0 self-center">
                  <ChevronRight size={20} className="text-white/20 group-hover:text-white/50 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL / CALLOUT ─── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,0,80,0.15) 0%, rgba(155,93,229,0.1) 50%, rgba(0,242,234,0.1) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(255,0,80,0.3) 0%, transparent 70%)' }}
              />
              <div
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(0,242,234,0.3) 0%, transparent 70%)' }}
              />
            </div>
            <div className="relative z-10 p-10 sm:p-16 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--neon-yellow)" style={{ color: 'var(--neon-yellow)' }} />
                ))}
              </div>
              <blockquote
                className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                &ldquo;We believe every creator has a story worth sharing. Our job is to give you the stage, the tools, and the confidence to tell it.&rdquo;
              </blockquote>
              <p className="text-white/40 text-sm uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
                — The Online Today Team
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.tiktok.com/t/ZSx8bM74C/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Zap size={16} />
                  Join the Agency
                </a>
                <Link href="/faq" className="btn-secondary">
                  Read our FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── WEBSITE OFFER ─── */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,230,0,0.04) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 mb-6"
            >
              <Globe size={14} style={{ color: '#FFE600' }} />
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400/70" style={{ fontFamily: 'Space Mono, monospace' }}>
                Exclusive Creator Benefit
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-black text-white mb-5"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Your own website for{' '}
              <span style={{ color: '#FFE600' }}>£59.99</span>
              <span className="text-white/40 text-2xl">/year</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
              We know building a personal brand online takes more than TikTok. That&apos;s why
              all new creators get a professional website at a fraction of the market price.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <div className="glass rounded-2xl p-6 flex-1 text-left">
                <div className="text-xs uppercase tracking-widest text-white/30 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>New Creators</div>
                <div className="text-3xl font-black text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>£59.99 <span className="text-lg font-normal text-white/40">/yr</span></div>
                <div className="text-white/40 text-sm">+ domain (£2.99–£11.99/yr)</div>
                <div className="mt-3 text-xs text-white/25 line-through">Normal price: £439.99+</div>
              </div>
              <div
                className="rounded-2xl p-6 flex-1 text-left"
                style={{ background: 'linear-gradient(135deg, rgba(255,230,0,0.15), rgba(255,0,80,0.1))', border: '1px solid rgba(255,230,0,0.2)' }}
              >
                <div className="text-xs uppercase tracking-widest text-yellow-400/60 mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>Tier B+ (10k+ diamonds)</div>
                <div className="text-3xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#FFE600' }}>FREE</div>
                <div className="text-white/40 text-sm">+ domain costs apply</div>
                <div className="mt-3 text-xs text-white/25">After 15-day cooling off period</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,0,80,0.15) 0%, transparent 60%)' }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <Wifi size={16} style={{ color: 'var(--neon-pink)' }} className="animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-white/40" style={{ fontFamily: 'Space Mono, monospace' }}>
              Ready to go live?
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Your audience is{' '}
            <span className="gradient-text">waiting.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Join Online Today and start your journey with the agency that puts you first.
            No minimums. All support.
          </p>
          <a
            href="https://www.tiktok.com/t/ZSx8bM74C/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5"
          >
            <Zap size={20} />
            Sign Up via TikTok Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}
