import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Implement Stripe Checkout session creation
  return NextResponse.json({ message: 'Checkout endpoint' });
}
