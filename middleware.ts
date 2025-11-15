import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow unauthenticated access to login and signup routes
  if (pathname === '/admin/login' || pathname === '/admin/signup') {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const isAdmin = (decoded as any).role === 'admin';

    if (!isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Protect all /admin routes
};
