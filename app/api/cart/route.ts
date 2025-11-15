// /app/api/cart/add/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET cart items
export async function GET(req: Request) {
  const userId = "123"; // TODO: Replace with token-based userId from middleware
  const cart = await prisma.cartItem.findMany({ where: { userId } });
  return NextResponse.json(cart);
}

// POST - add to cart
export async function POST(req: Request) {
  const { productId, quantity } = await req.json();
  const userId = "123"; // Replace with token-based

  const item = await prisma.cartItem.create({
    data: { userId, productId, quantity }
  });

  return NextResponse.json(item);
}

// DELETE - remove from cart
export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.cartItem.delete({ where: { id } });
  return NextResponse.json({ message: "Item removed" });
}

