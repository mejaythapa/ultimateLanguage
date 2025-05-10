import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentCancelPage() {
  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-red-100 p-4">
                <XCircle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 font-serif">
              Payment Cancelled
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Your payment was cancelled. No charges have been made to your account.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="font-semibold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you're experiencing any issues with the payment process or have questions about our courses, our support team is here to help.
              </p>
              <ul className="text-left space-y-2 mb-4">
                <li>• Contact our support team</li>
                <li>• Review our payment FAQ</li>
                <li>• Schedule a consultation call</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/payment">Try Again</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}