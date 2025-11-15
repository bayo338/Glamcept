import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Placeholder logic (e.g., send to admin email or save to DB)
  console.log('New Contact Message:', { name, email, message });

  return NextResponse.json({ message: 'Message received. Thank you!' });
}
