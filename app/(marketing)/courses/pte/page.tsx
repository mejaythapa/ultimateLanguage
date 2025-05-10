import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Testimonials } from '@/components/home/testimonials';
import { CTA } from '@/components/home/cta';
import { CheckCircle2, Clock, Calendar, Layers, BarChart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PTE Academic Coaching | Ultimate Laguage Academy PTE & NAATI',
  description:
    'Comprehensive PTE Academic coaching with expert instructors. Master all four communicative skills and achieve your target score.',
  openGraph: {
    title: 'PTE Academic Coaching | Ultimate Laguage Academy PTE & NAATI',
    description:
      'Comprehensive PTE Academic coaching with expert instructors. Master all four communicative skills and achieve your target score.',
    images: [
      {
        url: 'https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'PTE Academic Coaching',
      },
    ],
    type: 'website',
  },
};

// Example PTE courses data
// In a real application, this would come from Supabase
const pteCourses = [
  {
    id: 1,
    title: 'PTE Academic Complete Preparation',
    description:
      'Our flagship comprehensive PTE preparation program covering all four communicative skills with personalized feedback and guidance.',
    duration: '8 weeks',
    schedule: 'Weekday evenings or Weekend classes',
    price: 499,
    features: [
      'Complete coverage of all PTE sections',
      'Weekly mock tests with analysis',
      'One-on-one feedback sessions',
      'Small batch sizes (max 10 students)',
      'Extended access to online resources',
      '24/7 doubt resolution support',
    ],
    highlight: true,
  },
  {
    id: 2,
    title: 'PTE Express Course',
    description:
      'Accelerated preparation designed for busy professionals who need to achieve their target score quickly.',
    duration: '4 weeks',
    schedule: 'Intensive weekend sessions',
    price: 299,
    features: [
      'Focused strategies for all sections',
      'Score improvement techniques',
      'Practice tests with feedback',
      'Target score achievement plan',
      'Exam day preparation guide',
    ],
  },
  {
    id: 3,
    title: 'PTE Speaking & Writing Mastery',
    description:
      'Specialized course focusing on the speaking and writing sections of the PTE Academic test.',
    duration: '6 weeks',
    schedule: 'Twice weekly sessions',
    price: 349,
    features: [
      'In-depth speaking practice sessions',
      'Writing templates and strategies',
      'Pronunciation and fluency training',
      'Grammar and vocabulary enhancement',
      'Individual feedback on recorded responses',
    ],
  },
];

export default function PTEPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                PTE Academic Coaching
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Master the PTE Academic Test
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive preparation for all sections of the PTE Academic
                test with expert instructors and proven strategies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">4-8 Weeks</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <BarChart className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">95% Success Rate</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Layers className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">All 4 Skills</span>
                </div>
                <div className="flex items-center bg-card px-4 py-2 rounded-lg border border-border">
                  <Calendar className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm">Flexible Schedule</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/booking">Book a Free Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#courses">View Courses</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="PTE Academic Coaching"
                className="rounded-xl shadow-xl object-cover w-full aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-card shadow-lg rounded-lg p-4 border border-border">
                <p className="font-bold text-2xl">79+</p>
                <p className="text-muted-foreground">Average score</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            title="What is PTE Academic?"
            subtitle="The Pearson Test of English Academic is a computer-based English language test for international education and immigration"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Test Format</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Speaking & Writing</strong> - Tests your ability to
                    speak English and write responses to given tasks
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Reading</strong> - Assesses your reading and
                    comprehension skills through various tasks
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Listening</strong> - Evaluates your ability to
                    understand spoken English in various contexts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Duration:</strong> Approximately 2-3 hours
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Why PTE Academic?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fast Results</strong> - Typically available within
                    48 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Widely Accepted</strong> - Recognized by thousands
                    of institutions worldwide
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Computer-Based</strong> - Objective scoring with AI
                    technology
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                  <span>
                    <strong>Flexible Scheduling</strong> - Tests available
                    throughout the year
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
            title="Our PTE Academic Courses"
            subtitle="Choose the right course to match your preparation needs and schedule"
            centered
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {pteCourses.map((course) => (
              <div
                key={course.id}
                className={`bg-card border ${
                  course.highlight ? 'border-primary' : 'border-border'
                } rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full ${
                  course.highlight
                    ? 'shadow-lg ring-1 ring-primary/20'
                    : 'shadow-sm'
                }`}
              >
                {course.highlight && (
                  <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
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
                      <Clock className="h-4 w-4 text-primary mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-2" />
                      <span>{course.schedule}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
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
                      <Button asChild>
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
