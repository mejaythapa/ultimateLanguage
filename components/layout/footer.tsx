import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui/container';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  courses: [
    { name: 'PTE Coaching', href: '/courses/pte' },
    { name: 'NAATI CCL', href: '/courses/naati' },
    { name: 'Online Classes', href: '#' },
    { name: 'Study Materials', href: '#' },
    { name: 'Mock Tests', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Free Resources', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Student Success Stories', href: '#' },
    { name: 'Book a Free Consultation', href: '/booking' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold font-serif">Ultimate<span className="text-accent">Language</span></h2>
            </Link>
            <p className="mt-4 text-primary-foreground/90 max-w-md">
              Empowering students to achieve their language goals with expert coaching and personalized preparation for PTE and NAATI examinations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 shrink-0" />
                <span>+61 123 456 789</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 shrink-0" />
                <span>info@ultimatelanguage.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 shrink-0" />
                <span>123 Education Street, Sydney, NSW 2000, Australia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Ultimate Language Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-primary-foreground/70">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}