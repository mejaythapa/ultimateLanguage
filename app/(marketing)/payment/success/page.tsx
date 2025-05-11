'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paymentVerified, setPaymentVerified] = useState(false);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
          throw new Error('Payment verification failed');
        }

        const data = await response.json();

        if (data.success) {
          setPaymentVerified(true); // Mark payment as verified
        } else {
          throw new Error(data.error || 'Payment verification failed');
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to verify payment');
        setLoading(false);
      }
    };

    if (sessionId) {
      verifyPayment();
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-muted-foreground mb-6">{error}</p>
            <Button asChild>
              <Link href="/payment">Try Again</Link>
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  if (!paymentVerified) {
    return (
      <Container>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-muted-foreground mb-6">Payment verification failed.</p>
            <Button asChild>
              <Link href="/payment">Try Again</Link>
            </Button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4 font-serif">
              Payment Successful!
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              Thank you for your payment. Your course enrollment is now complete.
            </p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="font-semibold mb-4">What's Next?</h2>
              <ul className="text-left space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Check your email for course access details</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Complete your student profile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 shrink-0" />
                  <span>Join the orientation session</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Need Help?</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
