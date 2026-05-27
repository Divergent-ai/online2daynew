'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Calendar, Wifi, BookOpen, Globe, MessageCircle, Zap, ChevronRight, AlertTriangle } from 'lucide-react';

const sections = [
  {
    id: 'cooling-off',
    icon: Clock,
    color: 'var(--neon-cyan)',
    title: '15-Day Cooling Off Period',
    subtitle: 'Your right to decide',
    content: [
      {
        heading: 'When does it start?',
        text: 'Your 15-day cooling off period begins on the date your agency membership is activated — that is, the day you accept our TikTok agency invitation.',
      },
      {
        heading: 'What is it for?',
        text: "This period exists to give you the opportunity to fully experience the agency and decide whether we are the right fit for you. There is absolutely no pressure — this is your time to explore, ask questions, attend sessions, and make an informed decision about your future with Online Today.",
      },
      {
        heading: 'Leaving during the cooling off period',
        text: 'During the 15-day period, you may leave the agency at any time without needing to provide a notice period. Simply inform us of your decision in writing (via WhatsApp or email) and we will process your departure promptly.',
      },
      {
        heading: 'Important note',
        text: "The free website benefit for Tier B+ creators (10,000+ diamonds per month) is not available until after your cooling off period has concluded. Standard creator website pricing applies during this time.",
      },
    ],
  },
  {
    id: 'notice-period',
    icon: Calendar,
    color: 'var(--neon-pink)',
    title: 'Notice Period',
    subtitle: 'How to leave the agency',
    content: [
      {
        heading: 'Standard notice',
        text: 'After the 15-day cooling off period, creators who wish to leave Online Today are required to provide 60 days\' written notice. This notice must be submitted in writing — either via WhatsApp message or email — to an authorised representative of the agency.',
      },
      {
        heading: 'Reduced notice',
        text: "In certain circumstances, the agency owner may agree to reduce the notice period from 60 days to 30 days. This is entirely at the owner's discretion and is considered on a case-by-case basis. Requests for a reduced notice period should be made in writing and include a clear reason.",
      },
      {
        heading: 'During the notice period',
        text: 'Creators are expected to continue meeting their live streaming commitments during the notice period. Failure to do so may affect any outstanding settlements, payments, or benefits owed.',
      },
    ],
  },
  {
    id: 'live-commitments',
    icon: Wifi,
    color: 'var(--neon-purple)',
    title: 'Live Streaming Commitments',
    subtitle: 'What we ask of you',
    content: [
      {
        heading: 'Minimum requirements',
        text: "By joining Online Today, you agree to go live on TikTok for a minimum of 1.5 hours per day, on a minimum of 5 days per week. These sessions should be genuine, engaging live streams — not automated, idle, or disconnected streams.",
      },
      {
        heading: 'Why consistency matters',
        text: 'The TikTok algorithm rewards consistency above almost everything else. Regular live sessions at predictable times build an audience, improve your position in TikTok\'s discovery systems, and increase your earning potential through diamonds and brand opportunities.',
      },
      {
        heading: 'Communication',
        text: "Life happens. If you're unwell, have a family emergency, or need to take time off, we simply ask that you communicate with the agency in advance. Repeated unexplained absences may be treated as a breach of your agreement.",
      },
      {
        heading: 'Content standards',
        text: "All live sessions must comply with TikTok's Community Guidelines. Content that violates TikTok's rules — including but not limited to nudity, hate speech, dangerous activities, or misleading content — is strictly prohibited and may result in immediate termination of your agency agreement.",
      },
    ],
  },
  {
    id: 'training',
    icon: BookOpen,
    color: '#FFE600',
    title: 'Training & Development',
    subtitle: 'What we promise you',
    content: [
      {
        heading: 'Our commitment to you',
        text: "Online Today is committed to helping every creator become the best version of themselves. When you join, we invest time, knowledge, and resources into your growth. This includes onboarding, ongoing coaching, and access to agency resources.",
      },
      {
        heading: 'Violation and ban support',
        text: "If you receive a violation during a live session, or if your account is temporarily restricted or banned, our team will step in. We'll work with TikTok on your behalf, guide you through the appeals process, and help you understand what led to the issue so you can avoid it in future. This kind of support is especially valuable for newer creators still learning the platform.",
      },
      {
        heading: 'OBS streaming support',
        text: "If you choose to stream using OBS (Open Broadcaster Software), the agency will assist you with installation, setup, scene configuration, and troubleshooting. This is an optional but powerful upgrade to your live setup that we're happy to support.",
      },
      {
        heading: 'Ongoing feedback',
        text: "We provide regular feedback on your live sessions, engagement patterns, and growth metrics. Our goal is to give you actionable insight — not just numbers — so you can make smarter decisions about your content.",
      },
    ],
  },
  {
    id: 'website',
    icon: Globe,
    color: 'var(--neon-cyan)',
    title: 'Creator Website Benefit',
    subtitle: 'Your online presence, sorted',
    content: [
      {
        heading: 'Standard creator pricing',
        text: "All creators who join Online Today are entitled to a professionally built personal website for as little as £59.99 per year (exclusive of domain registration costs). Domain costs typically range between £2.99 and £11.99 per year depending on the extension chosen. For context, equivalent websites in the market typically cost in excess of £439.99.",
      },
      {
        heading: 'Free website for top creators',
        text: "Creators who are in Tier B or higher on TikTok and earning a minimum of 10,000 diamonds per month will receive their website at no charge — provided they are outside of the 15-day cooling off period. This benefit continues for as long as the creator maintains Tier B or higher and remains an active member of the agency.",
      },
      {
        heading: 'What\'s included',
        text: "Creator websites are professionally designed and include all the essentials: a personal bio, social media links, contact form, streaming schedule, and any other pages the creator requires. The site is hosted, maintained, and updated by the Online Today team.",
      },
      {
        heading: 'Domain ownership',
        text: "Domain costs are passed directly to the creator at cost, with no markup. Domains are registered in the creator's name and remain the creator's property. If a creator leaves the agency, they retain ownership of their domain.",
      },
    ],
  },
  {
    id: 'conduct',
    icon: Shield,
    color: 'var(--neon-pink)',
    title: 'Conduct & Behaviour',
    subtitle: 'Our community standards',
    content: [
      {
        heading: 'Representation of the agency',
        text: "As a creator with Online Today, your public conduct reflects on the agency and on the wider creator community. We ask that all creators represent themselves and the agency with professionalism, honesty, and respect.",
      },
      {
        heading: 'Respect for the community',
        text: "All creators must treat fellow agency members, viewers, and staff with respect. Harassment, bullying, or targeted abuse of any individual — online or offline — may result in immediate termination of the creator agreement.",
      },
      {
        heading: 'Exclusivity',
        text: "By joining Online Today, creators agree that their TikTok LIVE activity will be managed exclusively through this agency. Joining a competing TikTok agency simultaneously constitutes a breach of this agreement and may result in immediate termination without notice.",
      },
      {
        heading: 'Confidentiality',
        text: "Creators agree to keep all agency strategies, internal communications, revenue data, and operational information confidential. This obligation continues for 12 months after leaving the agency.",
      },
    ],
  },
  {
    id: 'payments',
    icon: Zap,
    color: 'var(--neon-green)',
    title: 'Payments & Earnings',
    subtitle: 'Transparency matters',
    content: [
      {
        heading: 'Diamond earnings',
        text: "TikTok diamonds are earned directly by creators through gifts received during live sessions. The agency does not take a cut of diamonds. Any specific revenue-sharing arrangements will be communicated clearly in your individual creator agreement.",
      },
      {
        heading: 'Agency fees and costs',
        text: "There is no joining fee to become a creator with Online Today. Any services that carry a cost — such as the website package — are clearly communicated before any agreement is made. No fees will ever be taken without your explicit written consent.",
      },
      {
        heading: 'Third-party deals',
        text: "If the agency facilitates sponsorships, brand deals, or third-party collaborations on your behalf, the terms of any such arrangement — including revenue splits — will be agreed in writing before any deal is confirmed.",
      },
    ],
  },
  {
    id: 'termination',
    icon: AlertTriangle,
    color: '#FF6B35',
    title: 'Termination',
    subtitle: 'When agreements end',
    content: [
      {
        heading: 'Voluntary departure',
        text: "Creators who wish to leave the agency may do so freely during the 15-day cooling off period. After this period, a 60-day written notice period applies (reducible to 30 days at the owner's discretion).",
      },
      {
        heading: 'Termination by the agency',
        text: "Online Today reserves the right to terminate a creator agreement immediately and without notice in cases of: serious breach of TikTok's Community Guidelines, harassment or abuse of agency staff or other creators, misrepresentation or fraudulent activity, repeated failure to meet live streaming commitments without communication, or joining a competing agency.",
      },
      {
        heading: 'What happens on termination',
        text: "On termination of the creator agreement — whether voluntary or otherwise — any active agency-provided tools (e.g. website package) will be deactivated in line with the billing cycle. Domains registered in the creator's name remain their property.",
      },
      {
        heading: 'Disputes',
        text: "We hope we never need to discuss this, but: any disputes arising from this agreement will first be subject to good-faith mediation between both parties. If a resolution cannot be reached, the matter will be governed by the laws of England and Wales.",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-24 pb-32">
      {/* Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(155,93,229,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <Shield size={14} style={{ color: 'var(--neon-purple)' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60" style={{ fontFamily: 'Space Mono, monospace' }}>
              Creator Agreement
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Terms &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--neon-purple), var(--neon-cyan))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Conditions
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-4">
            We believe in complete transparency. Read through our terms so you know exactly what to expect
            when you join — and what we promise in return.
          </p>
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · Online2day Ltd · England & Wales
          </p>
        </motion.div>

        {/* Quick nav */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-5 mb-12"
        >
          <p className="text-white/30 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
            Quick navigation
          </p>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 text-white/40 hover:text-white border border-white/5 hover:border-white/15"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: section.color }}
                />
                {section.title}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Opening statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(255,0,80,0.08), rgba(0,242,234,0.05))',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <h2
            className="text-xl font-black text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Before You Sign Up
          </h2>
          <p className="text-white/60 leading-relaxed text-sm mb-3">
            These Terms and Conditions form the agreement between Online2day Ltd (trading as &quot;Online Today&quot;) and any creator who joins the agency. By accepting our TikTok agency invitation, you confirm that you have read, understood, and agree to these terms.
          </p>
          <p className="text-white/60 leading-relaxed text-sm">
            We have written these terms in plain English because we believe clarity matters. If anything is unclear, please reach out to us on WhatsApp before joining — we&apos;re always happy to explain.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid ${section.color}20`,
              }}
            >
              {/* Section header */}
              <div
                className="p-6 flex items-start gap-4"
                style={{ borderBottom: `1px solid ${section.color}15` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `${section.color}15`, border: `1px solid ${section.color}30` }}
                >
                  <section.icon size={18} style={{ color: section.color }} />
                </div>
                <div>
                  <h2
                    className="text-xl font-black text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-white/30 text-sm">{section.subtitle}</p>
                </div>
              </div>

              {/* Section content */}
              <div className="p-6 space-y-6">
                {section.content.map((item, j) => (
                  <div key={j} className="flex gap-4">
                    <div className="mt-1.5 shrink-0">
                      <ChevronRight size={14} style={{ color: section.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-white font-bold mb-2 text-sm"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {item.heading}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact & sign off */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl p-8 glass text-center"
        >
          <MessageCircle size={32} className="mx-auto mb-4" style={{ color: '#25D366' }} />
          <h3
            className="text-2xl font-black text-white mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Questions about the T&Cs?
          </h3>
          <p className="text-white/50 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            We understand that legal language can sometimes feel daunting. If you have any questions at all about these terms before or after signing up, please reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={16} />
              Ask us on WhatsApp
            </a>
            <a
              href="https://www.tiktok.com/t/ZSx8bM74C/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Zap size={16} />
              Ready to join
            </a>
          </div>
          <p className="text-white/20 text-xs mt-8" style={{ fontFamily: 'Space Mono, monospace' }}>
            Online2day Ltd · Registered in England & Wales · Trading as Online Today · online2day.com
          </p>
        </motion.div>
      </div>
    </div>
  );
}
