import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    // Retrieve the checkout session from Stripe using the session ID
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Check the payment status
    if (session.payment_status === 'paid') {
      // Payment successful, handle the success logic here
      return NextResponse.json({ success: true });
    } else {
      // Payment not successful, handle the failure logic here
      return NextResponse.json({ success: false, error: 'Payment not successful' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json({ error: 'Failed to verify payment' }, { status: 500 });
  }
}
