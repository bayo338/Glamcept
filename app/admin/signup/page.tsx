'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark transparent overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-8">
        <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center text-[#4B1D3F] mb-6">
          Join Glamcept
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 
              focus:ring-2 focus:ring-[#D8B4E2] focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 
              focus:ring-2 focus:ring-[#D8B4E2] focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 rounded-md border border-gray-300 
              focus:ring-2 focus:ring-[#D8B4E2] focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D8B4E2] hover:bg-[#c693d8] text-white py-2 rounded-md transition font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/admin/login"
            className="text-[#4B1D3F] font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
