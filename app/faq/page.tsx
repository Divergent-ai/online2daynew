'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Zap, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need 50 followers to join?',
    a: "No — not at all. Our agency works with creators at all stages of their journey. We've helped people who were brand new to TikTok and had zero followers. What we ask for is consistency. Show up, go live, and give it everything you've got.",
    category: 'Getting Started',
  },
  {
    q: 'Is it free to join the agency?',
    a: "Yes, joining Online Today is completely free. There are no upfront costs, no joining fees, and no hidden charges. We invest in you because we believe in building long-term relationships with creators who are serious about growing.",
    category: 'Getting Started',
  },
  {
    q: 'What happens if I get a violation or banned?',
    a: "We've got your back. Getting a violation or temporary ban on TikTok Live can be stressful, especially for new creators. Our team knows TikTok's policies inside out and will work with you to address the issue, submit appeals where appropriate, and help you understand what went wrong so it doesn't happen again.",
    category: 'Support',
  },
  {
    q: 'Do I have to go live every single day?',
    a: "We ask for a minimum of 5 days per week with each session lasting at least 1.5 hours. That said, life happens — and we're realistic. If something comes up, just communicate with us. What we can't work with is creators who disappear without notice. Consistency is our core ask.",
    category: 'Requirements',
  },
  {
    q: 'What is OBS, and do I need it?',
    a: "OBS (Open Broadcaster Software) is a free, professional-grade streaming tool that can dramatically improve your live stream quality — adding overlays, sound, scenes, and more. You don't need it to join, but many of our most successful creators use it. If you choose to go the OBS route, we'll help you set it up from scratch.",
    category: 'Streaming',
  },
  {
    q: 'Can I still post regular TikTok content while with the agency?',
    a: "Absolutely — and we actually encourage it! Regular short-form content and LIVE streaming work hand in hand. Growing your follower count through posts means more viewers coming to your lives. We can help you think about a content strategy that supports both.",
    category: 'Content',
  },
  {
    q: 'Can I be part of another TikTok agency at the same time?',
    a: "No. Our agreement with creators is exclusive. Being in two agencies simultaneously creates conflicts of interest, can cause technical issues with your account, and usually leads to poor experiences all round. We ask for your full commitment — and we give you ours in return.",
    category: 'Policy',
  },
  {
    q: 'What do I need to get started — do I need special equipment?',
    a: "Your smartphone is all you need to begin. Many successful creators have built thousands of followers using nothing more than their phone and a decent ring light. As you grow, you can invest in better equipment — and we'll advise you on what's actually worth buying versus what's just nice to have.",
    category: 'Getting Started',
  },
  {
    q: 'How long does it take to see real results?',
    a: "There's no single answer to this — every creator's journey is different. Some creators see rapid growth in their first few weeks; others take a few months to find their rhythm. What we can promise is that consistent creators who engage genuinely with their audience always see progress. Trust the process, be patient, and we'll be right there with you.",
    category: 'Growth',
  },
  {
    q: 'How does the notice period work when leaving the agency?',
    a: "There's a 15-day cooling off period when you first join — this gives both of us a chance to make sure we're the right fit. After those 15 days, if you ever decide to leave, we require 60 days written notice. In some circumstances, the owner may agree to reduce this to 30 days at their discretion.",
    category: 'Policy',
  },
  {
    q: 'How does the website offer work for creators?',
    a: "All creators who join the agency are eligible for a professional personal website for just £59.99 per year, plus domain registration costs (between £2.99 and £11.99 per year). For context, the normal price for this kind of site would be well over £439.99. Creators who are in Tier B or higher and earning 10,000+ diamonds per month receive their website entirely free of charge — provided they're outside the 15-day cooling off period.",
    category: 'Benefits',
  },
  {
    q: 'Is there a WhatsApp support line?',
    a: "Yes! We know that questions don't always arise during business hours. Reach out to us on WhatsApp and a real member of our team will get back to you. We pride ourselves on actually being available — not hiding behind automated responses or ticket systems.",
    category: 'Support',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map((f) => f.category)))];

const categoryColors: Record<string, string> = {
  'Getting Started': 'var(--neon-cyan)',
  Support: 'var(--neon-pink)',
  Requirements: 'var(--neon-purple)',
  Streaming: '#FFE600',
  Content: 'var(--neon-green)',
  Policy: '#FF6B35',
  Growth: 'var(--neon-cyan)',
  Benefits: '#FFE600',
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden pt-24 pb-32">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(155,93,229,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <HelpCircle size={14} style={{ color: 'var(--neon-purple)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60" style={{ fontFamily: 'Space Mono, monospace' }}>
              Got questions?
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Frequently{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-pink))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Asked
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Everything you need to know about joining Online Today. Can&apos;t find your answer? Just ask us on WhatsApp.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'glass text-white/50 hover:text-white'
              }`}
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <motion.div layout className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((faq, i) => {
              const realIndex = faqs.indexOf(faq);
              const isOpen = openIndex === realIndex;
              const color = categoryColors[faq.category] || 'var(--neon-pink)';

              return (
                <motion.div
                  key={faq.q}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ delay: i * 0.04 }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border border-white/10' : 'glass'
                  }`}
                  style={
                    isOpen
                      ? {
                          background: `linear-gradient(135deg, ${color}10, rgba(10,10,16,0.9))`,
                          border: `1px solid ${color}30`,
                        }
                      : {}
                  }
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : realIndex)}
                    className="w-full flex items-center gap-4 p-5 text-left group"
                  >
                    {/* Category dot */}
                    <span
                      className="w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-125"
                      style={{ background: color }}
                    />
                    <span
                      className="flex-1 font-bold text-white/90 group-hover:text-white text-base transition-colors"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {faq.q}
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className="hidden sm:block text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: `${color}15`,
                          color: color,
                          border: `1px solid ${color}25`,
                          fontFamily: 'Space Mono, monospace',
                        }}
                      >
                        {faq.category}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="text-white/30" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 ml-6">
                          <div
                            className="h-px mb-4"
                            style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }}
                          />
                          <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl p-8 text-center glass"
        >
          <MessageCircle size={32} className="mx-auto mb-4" style={{ color: '#25D366' }} />
          <h3
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Still not sure?
          </h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto">
            Our team is on WhatsApp and happy to answer any question — no matter how small.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="https://www.tiktok.com/t/ZSx8bM74C/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Zap size={16} />
              Join Anyway
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
