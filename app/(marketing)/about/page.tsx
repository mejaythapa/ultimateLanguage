import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Mission } from '@/components/about/mission';
import { Team } from '@/components/about/team';
import { Stats } from '@/components/about/stats';
import { CTA } from '@/components/home/cta';

export const metadata: Metadata = {
  title: 'About Us | Ultimate Laguage Academy PTE & NAATI Coaching',
  description:
    'Learn about our story, mission, and the team of expert instructors dedicated to your language certification success.',
  openGraph: {
    title: 'About Us | Ultimate Laguage Academy PTE & NAATI Coaching',
    description:
      'Learn about our story, mission, and the team of expert instructors dedicated to your language certification success.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'About Ultimate Laguage Academy PTE & NAATI Coaching',
      },
    ],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              About Ultimate Laguage Academy PTE & NAATI
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a premier language coaching institute dedicated to helping
              students achieve success in PTE Academic and NAATI CCL
              examinations.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Ultimate Laguage Academy PTE & NAATI was founded in 2016 by a
                group of language education specialists who recognized the need
                for high-quality, specialized coaching for language
                certification exams in Australia.
              </p>
              <p className="text-muted-foreground mb-4">
                What began as a small tutoring service has grown into a
                respected institution with a track record of helping thousands
                of students achieve their language certification goals and, by
                extension, their academic and immigration aspirations.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to build on our foundation of excellence,
                constantly refining our teaching methodologies and expanding our
                offerings to meet the evolving needs of our students.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our Story"
                className="rounded-xl shadow-lg object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-card shadow-lg rounded-lg p-4 border border-border">
                <p className="font-bold text-2xl">Since 2016</p>
                <p className="text-muted-foreground">Empowering students</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Mission />
      <Stats />
      <Team />
      <CTA />
    </main>
  );
}
