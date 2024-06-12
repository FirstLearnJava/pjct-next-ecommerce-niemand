import { NextRequest, NextResponse } from 'next/server';
import { stripeClient } from '../../utils/stripe';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await stripeClient.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    line_items: body.products.map(
      (product: { price: string; quantity: number }) => ({
        price: product.price,
        quantity: product.quantity,
      }),
    ),
    mode: 'payment',
  });
  return NextResponse.json({ sessions: session });
}
