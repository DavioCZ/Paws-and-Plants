import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // TODO: Implement Stripe webhook handling
  return NextResponse.json({ message: 'Webhook received' });
}
