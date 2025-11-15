// app/api/admin/signup/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const existingAdmin = await prisma.admin.findUnique({ where: { email } });
  if (existingAdmin) {
    return NextResponse.json({ error: 'Admin already exists' }, { status: 400 });
  }

  const hashedPassword = await hashPassword(password);
  const newAdmin = await prisma.admin.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ success: true, adminId: newAdmin.id });
}
