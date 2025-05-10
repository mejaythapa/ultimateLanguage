import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { poppins, merriweather } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'Ultimate Language Academy | PTE & NAATI Coaching',
    template: '%s | Ultimate Laguage Academy PTE & NAATI',
  },
  description: 'Expert coaching for PTE Academic and NAATI CCL tests. Achieve your target scores with our proven methodologies and experienced instructors.',
  keywords: ['PTE coaching', 'NAATI preparation', 'PTE Academic', 'NAATI CCL', 'language certification', 'English proficiency test', 'Australia immigration', 'language coaching'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(poppins.variable, merriweather.variable)}>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}