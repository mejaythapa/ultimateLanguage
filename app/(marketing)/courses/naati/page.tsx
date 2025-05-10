import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';
import { CheckCircle2, Clock, Calendar, Users2, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NAATI CCL Coaching | Ultimate Laguage Academy PTE & NAATI',
  description:
    'Prepare for the NAATI CCL test with our expert instructors. Master dialogue interpretation techniques and achieve certification.',
  openGraph: {
    title: 'NAATI CCL Coaching | Ultimate Laguage Academy PTE & NAATI',
    description:
      'Prepare for the NAATI CCL test with our expert instructors. Master dialogue interpretation techniques and achieve certification.',
    images: [
      {
        url: 'https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'NAATI CCL Coaching',
      },
    ],
    type: 'website',
  },
};

// Example NAATI courses data
// In a real application, this would come from Supabase
const naatiCourses = [
  {
    id: 1,
    title: 'NAATI CCL Intensive Course',
    description:
      'Comprehensive preparation program for the NAATI Credentialed Community Language test with expert instructors.',
    duration: '6 weeks',
    schedule: 'Weekday evenings or Weekend classes',
    price: 599,
    features: [
      'Dialog practice with instructor feedback',
      'Cultural and ethical context training',
      'Weekly mock tests with analysis',
      'NAATI format familiarity',
      'Vocabulary and terminology building',
      'One-on-one coaching sessions',
    ],
    highlight: true,
  },
  {
    id: 2,
    title: 'Weekend NAATI Workshop',
    description:
      'Focused weekend workshops for professionals preparing for the NAATI CCL test.',
    duration: '4 weekends',
    schedule: 'Saturday and Sunday sessions',
    price: 399,
    features: [
      'Intensive practice over 4 weekends',
      'Targeted dialog exercises',
      'Personalized feedback',
      'Exam strategies and techniques',
      'Practice test simulations',
    ],
  },
  {
    id: 3,
    title: 'NAATI Express Preparation',
    description:
      'Accelerated program for candidates with previous interpreting experience or knowledge.',
    duration: '3 weeks',
    schedule: 'Thrice weekly sessions',
    price: 349,
    features: [
      'Fast-track preparation',
      'Advanced interpreting techniques',
      'Last-minute exam strategies',
      'Mock exam with detailed feedback',
      'Exam day preparation guide',
    ],
  },
];

export default function NaatiPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400 mr-2"></span>
                NAATI CCL Coaching
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Excel in NAATI CCL Test
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive preparation for NAATI Credentialed Community
                Language test with dialogue practice and expert guidance.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Clock className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-sm">3-6 Weeks</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Users2 className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-sm">Small Batch Size</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <BookOpen className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-sm">Dialog Practice</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Calendar className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-sm">Flexible Schedule</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Link href="/booking">Book a Free Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#courses">View Courses</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="NAATI CCL Coaching"
                className="rounded-xl shadow-xl object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-card shadow-lg rounded-lg p-4 border border-border">
                <p className="font-bold text-2xl">91%</p>
                <p className="text-muted-foreground">Pass rate</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="What is NAATI CCL?"
            subtitle="The NAATI Credentialed Community Language (CCL) test assesses basic language transfer skills for community translation needs"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Test Format</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Dialogue Interpretation</strong> - Two dialogues
                    between an English speaker and a LOTE (Language Other Than
                    English) speaker
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Format</strong> - Each dialogue consists of 300-350
                    words divided into segments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Total Duration</strong> - Approximately 30 minutes
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Scoring</strong> - Minimum 29/45 per dialogue to
                    pass
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Why NAATI CCL?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Immigration Points</strong> - Earn 5 additional
                    points for Australian PR
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cultural Recognition</strong> - Demonstrates
                    proficiency in community language
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Professional Development</strong> - First step
                    toward a career in translation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Widely Recognized</strong> - Accepted by the
                    Department of Home Affairs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="courses" className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Our NAATI CCL Courses"
            subtitle="Choose the right course to match your preparation needs and schedule"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {naatiCourses.map((course) => (
              <div
                key={course.id}
                className={`bg-card border ${
                  course.highlight ? 'border-orange-500' : 'border-border'
                } rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full ${
                  course.highlight
                    ? 'shadow-lg ring-1 ring-orange-500/20'
                    : 'shadow-sm'
                }`}
              >
                {course.highlight && (
                  <div className="bg-orange-500 text-white py-2 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-orange-500 mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                      <span>{course.schedule}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 mr-2 mt-1 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-muted-foreground">
                        Starting from
                      </span>
                      <span className="text-2xl font-bold">
                        ${course.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="outline" asChild>
                        <Link href="#" className="text-sm">
                          Learn More
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className={
                          course.highlight
                            ? 'bg-orange-500 hover:bg-orange-600'
                            : ''
                        }
                      >
                        <Link href="/booking" className="text-sm">
                          Enroll Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
}
