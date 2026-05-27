'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Zap, Clock, CheckCircle2, ExternalLink, Video } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Click the Join Link',
    description:
      'Tap the button below to open our TikTok agency invite link. This takes you directly to TikTok where you can accept our invitation. It takes less than two minutes.',
    videoTitle: 'How to Join via TikTok Link',
    videoDesc: 'Watch a quick walkthrough of the TikTok agency join process',
    color: 'var(--neon-pink)',
    checkpoints: [
      'Open TikTok on your phone',
      'Tap the join link we provide',
      'Accept the agency invitation',
      'Your 15-day trial starts immediately',
    ],
  },
  {
    id: '02',
    title: 'Complete Your Onboarding',
    description:
      'Once you\'ve joined, we\'ll introduce you to the team, walk you through expectations, and get you set up. We want you to feel confident from day one — no creator is left in the dark.',
    videoTitle: 'Onboarding Walkthrough',
    videoDesc: 'Everything you need to know about your first days in the agency',
    color: 'var(--neon-cyan)',
    checkpoints: [
      'Meet your agency contact',
      'Review the live streaming schedule',
      'Set up WhatsApp for ongoing support',
      'Explore OBS setup if needed',
    ],
  },
  {
    id: '03',
    title: 'Go Live & Build Your Brand',
    description:
      'Time to hit that LIVE button. We ask for at least 1.5 hours per session, minimum 5 days per week. Our team is monitoring, cheering you on, and ready to step in if anything goes wrong.',
    videoTitle: 'Your First Live Stream',
    videoDesc: 'Tips for a confident, engaging first live session',
    color: 'var(--neon-purple)',
    checkpoints: [
      'Schedule your first live',
      'Let us know your go-live time',
      'We\'re on standby for violations or issues',
      'Consistency is everything — enjoy it!',
    ],
  },
  {
    id: '04',
    title: 'Unlock Rewards & Benefits',
    description:
      'As you grow, so do your benefits. Hit Tier B with over 10,000 diamonds per month and your website becomes completely free. We reward loyalty and hard work — always.',
    videoTitle: 'Agency Tiers Explained',
    videoDesc: 'How diamond tiers and creator benefits work',
    color: '#FFE600',
    checkpoints: [
      'Track your diamond earnings',
      'Unlock free website at Tier B (10k diamonds)',
      'Access advanced OBS features',
      'Priority support as you level up',
    ],
  },
];

export default function SignupPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-24 pb-32">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(0,242,234,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <PlayCircle size={14} style={{ color: 'var(--neon-cyan)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60" style={{ fontFamily: 'Space Mono, monospace' }}>
              Step by step guide
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            How to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Join Us
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Joining Online Today is easy. Follow these four steps and you&apos;ll be live and supported
            in no time. No experience required — just a passion for creating.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 rounded-2xl p-6 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,0,80,0.15), rgba(0,242,234,0.08))',
            border: '1px solid rgba(255,0,80,0.2)',
          }}
        >
          <p className="text-white/70 mb-4">
            Ready to skip the guide and jump straight in?
          </p>
          <a
            href="https://www.tiktok.com/t/ZSx8bM74C/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Zap size={16} />
            Join Now on TikTok
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              {/* Step header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shrink-0"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    background: `${step.color}20`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                  }}
                >
                  {step.id}
                </div>
                <h2
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {step.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-0 lg:ml-16">
                {/* Description + checkpoints */}
                <div className="glass rounded-2xl p-6">
                  <p className="text-white/60 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.checkpoints.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: step.color }} />
                        <span className="text-white/70 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video placeholder */}
                <div className="video-placeholder">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, transparent)`,
                      }}
                    />
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: `${step.color}20`, border: `2px solid ${step.color}40` }}
                    >
                      <Video size={28} style={{ color: step.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold mb-1"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {step.videoTitle}
                      </h3>
                      <p className="text-white/30 text-sm">{step.videoDesc}</p>
                    </div>
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border"
                      style={{
                        color: step.color,
                        borderColor: `${step.color}30`,
                        fontFamily: 'Space Mono, monospace',
                      }}
                    >
                      <Clock size={12} />
                      Video coming soon
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h2
            className="text-4xl font-black text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Ready to{' '}
            <span className="gradient-text">get started?</span>
          </h2>
          <p className="text-white/50 mb-8">
            Click the link below and your creator journey begins today.
          </p>
          <a
            href="https://www.tiktok.com/t/ZSx8bM74C/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-10 py-5"
          >
            <Zap size={20} />
            Join Online Today on TikTok
          </a>
        </motion.div>
      </div>
    </div>
  );
}
