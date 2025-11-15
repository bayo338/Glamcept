import { NextResponse } from 'next/server';

let mockProducts = [
  {
    id: 1,
    name: 'Rose Gold Lipstick',
    category: 'Lipsticks',
    price: 24.99,
    image: '/images/lipstick.jpg',
  },
  {
    id: 2,
    name: 'Glow Foundation',
    category: 'Foundation',
    price: 29.99,
    image: '/images/foundation.jpg',
  },
];

export async function GET() {
  return NextResponse.json({ products: mockProducts });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.price || !body.category) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const newProduct = {
    id: Date.now(),
    ...body,
  };

  mockProducts.push(newProduct);

  return NextResponse.json({ message: 'Product added', product: newProduct });
}
