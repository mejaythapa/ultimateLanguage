import { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/contact/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | Ultimate Laguage Academy PTE & NAATI Coaching',
  description:
    'Get in touch with our team for inquiries about our PTE and NAATI coaching services, or visit us at our training center.',
  openGraph: {
    title: 'Contact Us | Ultimate Laguage Academy PTE & NAATI Coaching',
    description:
      'Get in touch with our team for inquiries about our PTE and NAATI coaching services, or visit us at our training center.',
    images: [
      {
        url: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        width: 1200,
        height: 630,
        alt: 'Contact Ultimate Laguage Academy PTE & NAATI Coaching',
      },
    ],
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about our courses or need assistance? We're here to
              help!
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <ContactForm />
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <SectionHeading
            title="Visit Our Training Center"
            subtitle="Come see our state-of-the-art facilities and meet our instructors"
            centered
          />

          <div className="mt-8 h-96 rounded-xl overflow-hidden shadow-lg">
            {/* In a real implementation, this would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">
                Google Maps Embed would appear here
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">
              Ultimate Laguage Academy PTE & NAATI Coaching Center
            </h3>
            <p className="text-muted-foreground">
              123 Education Street, Sydney, NSW 2000, Australia
            </p>
            <p className="text-muted-foreground mt-2">
              <strong>Opening Hours:</strong> Monday to Friday: 9AM - 6PM |
              Saturday: 10AM - 4PM | Sunday: Closed
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
