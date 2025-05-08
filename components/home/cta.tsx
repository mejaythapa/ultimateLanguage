import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Calendar, PhoneCall } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight font-serif mb-4">
              Ready to Start Your Language Certification Journey?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-lg">
              Book a free consultation with our expert instructors to discuss your goals and find the right coaching program for you.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/booking" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact" className="flex items-center">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-5/12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-1">Get a Free Study Plan</h3>
              <p className="text-primary-foreground/80">
                Enter your details below and we'll create a personalized study plan for you.
              </p>
            </div>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div>
                <select className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none">
                  <option value="" disabled selected className="text-primary-foreground/60">Select Your Goal</option>
                  <option value="pte">PTE Academic</option>
                  <option value="naati">NAATI CCL</option>
                  <option value="both">Both PTE & NAATI</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
                Get My Study Plan
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}