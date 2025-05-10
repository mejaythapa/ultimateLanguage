'use client';

import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface BookingDetails {
  name: string;
  email: string;
  phone: string;
  courseId: string;
  courseName: string;
  coursePrice: number;
  preferredDate: string;
  message: string;
}

export default function PaymentPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  useEffect(() => {
    // Retrieve booking details from session storage
    const storedDetails = sessionStorage.getItem('bookingDetails');
    if (storedDetails) {
      setBookingDetails(JSON.parse(storedDetails));
    } else {
      router.push('/booking');
    }
  }, [router]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              price: `price_${bookingDetails?.courseId}`, // Replace with your actual Stripe price ID
              quantity: 1,
            },
          ],
          bookingDetails,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong with the payment. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (!bookingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Complete Your Booking
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Review your booking details and proceed with secure payment
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Booking Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium">Course</span>
                  <span>{bookingDetails.courseName}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium">Student Name</span>
                  <span>{bookingDetails.name}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium">Email</span>
                  <span>{bookingDetails.email}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium">Preferred Date</span>
                  <span>{new Date(bookingDetails.preferredDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="font-medium">Amount</span>
                  <span className="text-xl font-bold">${bookingDetails.coursePrice}</span>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg mb-8">
                <h3 className="font-semibold mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Your payment is secured by Stripe. We never store your card details.
                </p>
              </div>

              <Button 
                onClick={handlePayment} 
                className="w-full" 
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Pay Now'
                )}
              </Button>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  By proceeding with the payment, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}