import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Online Today | TikTok Creator Agency',
  description:
    'Join Online Today — the TikTok Creator Agency that works with creators at every stage of their journey. Get trained, supported, and go live with confidence.',
  keywords: ['TikTok', 'creator agency', 'live streaming', 'TikTok agency', 'Online Today', 'Online2day'],
  metadataBase: new URL('https://online2day.com'),
  openGraph: {
    title: 'Online Today | TikTok Creator Agency',
    description: 'Join the agency that grows with you. TikTok creator support, training, and community.',
    url: 'https://online2day.com',
    siteName: 'Online Today',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Today | TikTok Creator Agency',
    description: 'Join the agency that grows with you.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
