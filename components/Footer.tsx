import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '700'] });
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] })

const Footer = () => {
  return (
    <footer className={`${lato.className} bg-[#f7f2f5] text-gray-700 text-sm px-10 md:px-20 py-10 w-full`}>
      <div className="mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div>
          <h3 className={`${playfair.className} text-lg font-semibold text-[#4B1D3F] mb-2`}>Glamcept</h3>
          <p className="mb-4">
            Empowering beauty through premium cosmetics that celebrate your unique glow.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-900">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
            {/* Shop Links */}
            <div>
                <h4 className="font-semibold text-[#4B1D3F] mb-2">Shop</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">All Products</a></li>
                        <li><a href="#" className="hover:underline">Lipsticks</a></li>
                        <li><a href="#" className="hover:underline">Foundations</a></li>
                        <li><a href="#" className="hover:underline">Skincare</a></li>
                        <li><a href="#" className="hover:underline">Eyes</a></li>
                    </ul>
            </div>

            {/* Support Links */}
            <div>
                <h4 className="font-semibold text-[#4B1D3F] mb-2">Support</h4>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Shipping Info</a></li>
                        <li><a href="#" className="hover:underline">Returns</a></li>
                    </ul>
            </div>
        </div>
        
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2025 Glamcept. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
