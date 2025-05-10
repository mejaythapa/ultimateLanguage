import { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { Features } from '@/components/home/features';
import { Courses } from '@/components/home/courses';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';

export const metadata: Metadata = {
  title:
    'Ultimate Laguage Academy PTE & NAATI Coaching | Expert Language Certification Training',
  description:
    'Expert coaching for PTE Academic and NAATI CCL tests. Achieve your target scores with our proven methodologies and experienced instructors.',
  openGraph: {
    title:
      'Ultimate Laguage Academy PTE & NAATI Coaching | Expert Language Certification Training',
    description:
      'Expert coaching for PTE Academic and NAATI CCL tests. Achieve your target scores with our proven methodologies and experienced instructors.',
    images: [
      {
        url: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'Ultimate Laguage Academy PTE & NAATI Coaching',
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <CTA />
    </main>
  );
}
