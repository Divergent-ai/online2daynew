# Online Today — TikTok Creator Agency Website

**Online2day Ltd** · Trading as Online Today · [online2day.com](https://online2day.com)

A full-stack Next.js website for the Online Today TikTok Creator Agency. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or unzip the project
cd online2day

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📦 Deploying to Vercel

This project is pre-configured for Vercel deployment.

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub:**
   - Push the project to a GitHub repository
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repo
   - Vercel auto-detects Next.js — click **Deploy**

3. **Custom Domain:**
   - In Vercel Dashboard → Settings → Domains
   - Add `online2day.com` and `www.online2day.com`
   - Update DNS records at your domain registrar as directed by Vercel

---

## 🗂️ Project Structure

```
online2day/
├── app/
│   ├── layout.tsx          # Root layout, fonts, navbar, footer
│   ├── globals.css         # Global styles, CSS variables, animations
│   ├── page.tsx            # Home page (hero, features, CTA)
│   ├── signup/
│   │   └── page.tsx        # How to join / step-by-step guide
│   ├── faq/
│   │   └── page.tsx        # FAQ accordion (12 questions)
│   ├── social/
│   │   └── page.tsx        # Social media platform cards
│   └── terms/
│       └── page.tsx        # Terms & Conditions
├── components/
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── Logo.tsx            # SVG logo component (icon + full variants)
│   └── PageTransition.tsx  # Page loading screen + animation
├── public/                 # Static assets (favicons, OG images)
├── tailwind.config.js      # Tailwind theme with custom colours
├── next.config.js          # Next.js config
└── README.md               # This file
```

---

## 🎨 Design System

### Colour Palette

| Name       | Hex       | Usage                          |
|------------|-----------|--------------------------------|
| Neon Pink  | `#FF0050` | Primary CTA, accents, glow     |
| Neon Cyan  | `#00F2EA` | Secondary, highlights          |
| Neon Purple| `#9B5DE5` | Tertiary, varied sections      |
| Neon Yellow| `#FFE600` | Premium tiers, starred content |
| Neon Green | `#00FF88` | Community / positive indicators|
| Dark 900   | `#050508` | Page background                |
| Dark 800   | `#0A0A10` | Card backgrounds               |

### Fonts

- **Display:** Syne (headings, nav, labels)
- **Body:** DM Sans (paragraphs, descriptions)
- **Mono:** Space Mono (tags, categories, captions)

---

## ✅ Current Features

- [x] Responsive navigation with mobile full-screen menu
- [x] Animated page loading screens between routes
- [x] Framer Motion page transitions
- [x] Home page with hero, feature grid, how-it-works, website offer CTA
- [x] Signup / How to Join page with video placeholders
- [x] FAQ accordion with 12 questions and category filtering
- [x] Social media platform cards
- [x] Full Terms & Conditions with anchor navigation
- [x] Footer with sitemap, WhatsApp CTA, and legal info
- [x] Custom SVG logo
- [x] Mobile-first responsive design
- [x] Neon glow visual effects, glassmorphism, noise overlay
- [x] Scroll animations (Framer Motion + whileInView)
- [x] Animated marquee ticker

---

## 📋 Future Actions / TODO

### 🎬 VIDEO INTEGRATION (Priority: High)
**Location:** `app/signup/page.tsx` — each step has a `video-placeholder` component.

**To implement:**
1. Record/produce 4 tutorial videos:
   - "How to Join via TikTok Link"
   - "Onboarding Walkthrough"
   - "Your First Live Stream"
   - "Agency Tiers Explained"

2. Upload videos to **Supabase Storage**:
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Create a storage bucket called `creator-videos` (set to public)
   - Upload your `.mp4` files
   - Note each video's public URL

3. Install Supabase client:
   ```bash
   npm install @supabase/supabase-js
   ```

4. Create `lib/supabase.ts`:
   ```typescript
   import { createClient } from '@supabase/supabase-js';
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL!,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
   );
   ```

5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

6. In `app/signup/page.tsx`, replace video placeholders with:
   ```tsx
   <video
     controls
     className="w-full rounded-2xl"
     poster="/thumbnails/step-1.jpg"
   >
     <source src="your-supabase-video-url" type="video/mp4" />
   </video>
   ```

---

### 🔗 SOCIAL MEDIA LINKS (Priority: High)
**Location:** `app/social/page.tsx` — `platforms` array, `href` property + `comingSoon: true` flags.

**To add links:**
1. Open `app/social/page.tsx`
2. Find the `platforms` array at the top of the file
3. For each platform, change `comingSoon: true` to `comingSoon: false`
4. Add the correct URL to the `href` property:
   ```typescript
   {
     name: 'TikTok',
     href: 'https://www.tiktok.com/@your-handle',
     comingSoon: false,
     // ... rest of config
   }
   ```

**Platforms to add links for:**
- [ ] TikTok — profile URL
- [ ] Instagram — profile URL
- [ ] YouTube — channel URL
- [ ] X (Twitter) — profile URL
- [ ] Facebook — page URL

---

### 📱 WHATSAPP CONTACT LINK (Priority: High)
**Location:** Multiple files — `components/Footer.tsx`, `app/faq/page.tsx`, `app/terms/page.tsx`

**To add:**
- Replace `https://wa.me/` with your full WhatsApp link:
  `https://wa.me/447XXXXXXXXX` (international format, no spaces or dashes)
- Or use a WhatsApp Business link if applicable

---

### 🖼️ FAVICON & OG IMAGE (Priority: Medium)
**Location:** `public/` directory

**To add:**
1. Create a 512×512 PNG version of the logo → `public/icon.png`
2. Create a 1200×630 PNG for social sharing → `public/og-image.png`
3. Add to `app/layout.tsx` metadata:
   ```typescript
   icons: { icon: '/icon.png', apple: '/apple-icon.png' },
   openGraph: { images: [{ url: '/og-image.png', width: 1200, height: 630 }] }
   ```

---

### 📊 ANALYTICS (Priority: Medium)
Consider adding:
- [Vercel Analytics](https://vercel.com/analytics) — 1-line setup, free tier
- Google Analytics 4 — via `@next/third-parties`
- Plausible — privacy-first alternative

---

### 📧 SUPABASE CONTACT/NEWSLETTER FORM (Priority: Low)
If you want a contact form or email sign-up:
1. Create a `contacts` table in Supabase
2. Add a form component using the Supabase client
3. Insert rows on form submit

---

### 💬 CREATOR TESTIMONIALS (Priority: Low)
**Location:** `app/page.tsx` — add a testimonials section above the final CTA.
Collect 3–5 creator quotes and add a carousel or grid component.

---

### 🔒 ENVIRONMENT VARIABLES FOR VERCEL

When deploying, add these in **Vercel Dashboard → Settings → Environment Variables:**

```
NEXT_PUBLIC_SUPABASE_URL        = (your Supabase project URL)
NEXT_PUBLIC_SUPABASE_ANON_KEY   = (your Supabase anon key)
```

---

## 📄 Legal

© Online2day Ltd. All rights reserved. Registered in England and Wales. Trading as Online Today.

Website built for internal use. All creator agreements are subject to the Terms & Conditions published on this site.
