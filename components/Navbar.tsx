'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Cart', path: '/cart' },
  ];

  return (
    <nav className="bg-white text-[#D8B4E2] font-sans shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
    <Link href="/" className="flex items-center font-bold gap-2 text-3xl font-serif tracking-wide text-[#D8B4E2]">
      <Image
        src="/logo.png" // Place logo.png in your /public folder
        alt="Glamcept logo"
        width={48}
        height={48}
        priority
      />
      <span>Glamcept</span>
    </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="hover:text-pink-400 transition duration-200"
            >
              {item.name}
            </Link>
          ))}

          {/* Auth Buttons */}
          <Link
            href="/admin/login"
            className="border border-[#D8B4E2] text-[#D8B4E2] hover:bg-[#D8B4E2] hover:text-white transition px-4 py-2 rounded-md"
          >
            Login
          </Link>
          <Link
            href="/admin/signup"
            className="bg-[#D8B4E2] text-white hover:bg-pink-400 transition px-4 py-2 rounded-md"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#D8B4E2]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
    <div className="fixed inset-0 z-40 bg-white p-6 animate-slide-in flex flex-col">
        {/* Close Button */}
        <button
        onClick={() => setMobileMenuOpen(false)}
        className="absolute top-4 right-4 text-[#D8B4E2]"
        >
        <X size={28} />
        </button>

        {/* Logo + Brand */}
        <Link
        href="/"
        onClick={() => setMobileMenuOpen(false)}
        className="flex items-center gap-2 text-2xl font-serif text-[#D8B4E2] mb-6"
        >
        <Image
            src="/logo.png"
            alt="Glamcept logo"
            width={40}
            height={40}
            priority
        />
        <span>Glamcept</span>
        </Link>

        {/* Nav Links */}
        <div className="flex flex-col gap-4 mt-2">
        {[...navItems, { name: 'Login', path: '/login' }, { name: 'Sign Up', path: '/register' }].map((item) => (
            <Link
            key={item.name}
            href={item.path}
            className={`text-lg font-medium text-[#D8B4E2] hover:text-pink-500 transition ${
                item.name === 'Sign Up'
                ? 'font-semibold bg-[#D8B4E2] text-white px-4 py-2 rounded-full'
                : item.name === 'Login'
                ? 'border border-[#D8B4E2] px-4 py-2 rounded-full'
                : ''
            }`}
            onClick={() => setMobileMenuOpen(false)}
            >
            {item.name}
            </Link>
        ))}
        </div>
    </div>
    )}
    </nav>
  );
}
