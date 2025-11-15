import { NextResponse } from 'next/server';

export async function GET() {
  const res = NextResponse.redirect('/login');
  res.cookies.set('token', '', { maxAge: 0 });
  return res;
}
