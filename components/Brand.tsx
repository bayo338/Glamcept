// components/Brand.tsx

import React from 'react';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });


const Brand = () => {
  return (
    <section className={`bg-pink-200 py-20 px-4 rounded-md text-center ${inter.className}`}>
      <div className="max-w-2xl mx-auto">
        <h2 className={`${playfair.className} text-2xl md:text-3xl font-semibold text-gray-800 mb-4`}>
          Empowering Beauty, One Glow at a Time
        </h2>
        <p className= "text-sm text-gray-700 mb-6 leading-relaxed" >
          At Glamcept, we believe that beauty is not about conforming to standards—
          it’s about celebrating your unique radiance. Our premium cosmetics are thoughtfully
          crafted to enhance your natural features while giving you the confidence to shine authentically.
        </p>
        <button className="bg-white text-gray-800 px-6 py-2 rounded shadow hover:bg-gray-100 transition">
          Learn More About Us
        </button>
      </div>
    </section>
  );
};

export default Brand;
