'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Globe, LinkIcon } from 'lucide-react';

// TikTok SVG icon
const TikTokIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l-.01-8.42a8.16 8.16 0 004.77 1.52V5.01a4.85 4.85 0 01-1-.32z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const platforms = [
  {
    name: 'TikTok',
    handle: '@onlinetodayagency',
    description:
      'Our main home. Watch creators go live, see behind-the-scenes content, and keep up with everything happening at the agency. This is where the magic happens.',
    icon: TikTokIcon,
    gradient: 'linear-gradient(135deg, #010101 0%, #FF0050 50%, #00F2EA 100%)',
    glowColor: 'rgba(255,0,80,0.3)',
    borderColor: 'rgba(255,0,80,0.3)',
    tag: 'Main Platform',
    tagColor: 'var(--neon-pink)',
    comingSoon: false,
    href: 'https://www.tiktok.com/@onlinetodayagency?is_from_webapp=1&sender_device=pc',
  },
  {
    name: 'Instagram',
    handle: '@online_today_agency',
    description:
      'Creator highlights, tips for going live, and gorgeous content from our creator community. Follow us for daily inspiration and behind-the-scenes from the agency.',
    icon: InstagramIcon,
    gradient: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    glowColor: 'rgba(225,48,108,0.25)',
    borderColor: 'rgba(225,48,108,0.3)',
    tag: 'Daily Content',
    tagColor: '#E1306C',
    comingSoon: false,
    href: 'https://www.instagram.com/online_today_agency/',
  },
  {
    name: 'YouTube',
    handle: '@Online2day-agency',
    description:
      'Long-form tutorials, creator success stories, and in-depth guides on OBS, TikTok algorithm tips, and how to grow your brand. Subscribe and level up your knowledge.',
    icon: YouTubeIcon,
    gradient: 'linear-gradient(135deg, #1a1a1a, #FF0000)',
    glowColor: 'rgba(255,0,0,0.2)',
    borderColor: 'rgba(255,0,0,0.3)',
    tag: 'Tutorials',
    tagColor: '#FF0000',
    comingSoon: false,
    href: 'https://www.youtube.com/@Online2day-agency',
  },
  {
    name: 'X (Twitter)',
    handle: '@online2day',
    description:
      'Quick tips, creator news, and real-time updates from the agency. We tweet insights on TikTok trends, creator strategies, and celebrate wins with our community.',
    icon: XIcon,
    gradient: 'linear-gradient(135deg, #1a1a1a, #1DA1F2)',
    glowColor: 'rgba(29,161,242,0.2)',
    borderColor: 'rgba(29,161,242,0.3)',
    tag: 'News & Tips',
    tagColor: '#1DA1F2',
    comingSoon: true,
  },
  {
    name: 'Facebook',
    handle: 'Online Today Agency',
    description:
      'Community group for our creators and fans. Ask questions, share wins, support other creators, and stay connected to everything happening in the Online Today family.',
    icon: FacebookIcon,
    gradient: 'linear-gradient(135deg, #1a1a1a, #1877F2)',
    glowColor: 'rgba(24,119,242,0.2)',
    borderColor: 'rgba(24,119,242,0.3)',
    tag: 'Community',
    tagColor: '#1877F2',
    comingSoon: true,
  },
  {
    name: 'Website',
    handle: 'online2day.com',
    description:
      "You're already here — but bookmark us! This is your home base for agency info, the creator signup, terms and conditions, and the FAQ.",
    icon: Globe,
    gradient: 'linear-gradient(135deg, rgba(0,242,234,0.2), rgba(155,93,229,0.2))',
    glowColor: 'rgba(0,242,234,0.2)',
    borderColor: 'rgba(0,242,234,0.3)',
    tag: 'HQ',
    tagColor: 'var(--neon-cyan)',
    comingSoon: false,
    href: 'https://online2day.com',
  },
];

export default function SocialPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-24 pb-32">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,0,80,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 30% at 80% 80%, rgba(0,242,234,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <LinkIcon size={14} style={{ color: 'var(--neon-pink)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60" style={{ fontFamily: 'Space Mono, monospace' }}>
              Find us online
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            We&apos;re{' '}
            <span className="gradient-text">everywhere</span>
            <br />
            you are
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Follow us across platforms for creator tips, agency updates, live highlights, and community moments.
            Each platform has its own flavour — find your favourite.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span
              className="text-xs text-white/40"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              TikTok, Instagram, and YouTube are live
            </span>
          </div>
        </motion.div>

        {/* Platform cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden card-hover"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${platform.borderColor}`,
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-1 w-full"
                style={{ background: platform.gradient }}
              />

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${platform.glowColor}, transparent 70%)`,
                }}
              />

              <div className="p-6 relative z-10">
                {/* Icon & tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                    style={{ background: platform.gradient, boxShadow: `0 0 20px ${platform.glowColor}` }}
                  >
                    <platform.icon size={26} />
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                    style={{
                      background: `${platform.tagColor}15`,
                      color: platform.tagColor,
                      border: `1px solid ${platform.tagColor}30`,
                      fontFamily: 'Space Mono, monospace',
                    }}
                  >
                    {platform.tag}
                  </span>
                </div>

                {/* Info */}
                <h3
                  className="text-white font-black text-xl mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {platform.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: platform.tagColor, fontFamily: 'Space Mono, monospace' }}
                >
                  {platform.handle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {platform.description}
                </p>

                {/* CTA */}
                {platform.comingSoon ? (
                  <div
                    className="flex items-center gap-2 text-sm text-white/25 px-4 py-2.5 rounded-full border border-white/5"
                    style={{ fontFamily: 'Space Mono, monospace' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-400/40 animate-pulse" />
                    Link coming soon
                  </div>
                ) : (
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
                    style={{
                      color: platform.tagColor,
                      borderColor: `${platform.tagColor}40`,
                      background: `${platform.tagColor}10`,
                      fontFamily: 'Syne, sans-serif',
                    }}
                  >
                    Visit
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p
            className="text-white/30 text-sm"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            More channels are being added by the team. Come back soon or reach out on WhatsApp.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
