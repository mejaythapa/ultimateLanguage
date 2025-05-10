import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BookingForm } from '@/components/booking/booking-form';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Session | Ultimate Laguage Academy PTE & NAATI Coaching',
  description:
    'Schedule a consultation or coaching session with our expert instructors for PTE Academic or NAATI CCL preparation.',
  openGraph: {
    title: 'Book a Session | Ultimate Laguage Academy PTE & NAATI Coaching',
    description:
      'Schedule a consultation or coaching session with our expert instructors for PTE Academic or NAATI CCL preparation.',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'Book a Session with Ultimate Laguage Academy PTE & NAATI Coaching',
      },
    ],
    type: 'website',
  },
};

export default function BookingPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Book Your Session
            </h1>
            <p className="text-xl text-muted-foreground">
              Schedule a consultation or coaching session with our expert
              instructors
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            <div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-xl font-semibold mb-4">
                  Why Book With Us?
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Expert Instructors</h4>
                      <p className="text-sm text-muted-foreground">
                        Learn from experienced coaches with proven success
                        records
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Tailored coaching based on your specific needs and goals
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Flexible Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose from weekday, weekend, or evening sessions
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">First Session Free</h4>
                      <p className="text-sm text-muted-foreground">
                        Try our coaching with a complimentary initial
                        consultation
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Comprehensive Materials</h4>
                      <p className="text-sm text-muted-foreground">
                        Access to high-quality preparation resources and
                        practice tests
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-medium mb-2">Need Assistance?</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you have any questions about booking or our courses, our
                    team is ready to help.
                  </p>
                  <p className="text-sm font-medium">
                    Call us: +61 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
