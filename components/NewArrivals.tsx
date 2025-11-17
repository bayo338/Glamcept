'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PaginationOptions } from 'swiper/types';
import { motion, Variants } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const fadeUpDelay = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  },
});

const newArrivals: Product[] = [
  { id: 5, name: 'Velvet Matte Lip Tint', category: 'Lipstick', price: '$22.00', image: '/images/liptint.jpg' },
  { id: 6, name: 'Silk Touch Concealer', category: 'Concealer', price: '$19.99', image: '/images/concealer.jpg' },
  { id: 7, name: 'Luminous Liquid Highlighter', category: 'Highlighter', price: '$27.50', image: '/images/highlighter.jpg' },
  { id: 8, name: 'Velour Eyeshadow Palette', category: 'Eyeshadow', price: '$34.00', image: '/images/eyeshadow.jpg' },
];

export default function NewArrivals() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        {/* Section Header */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-4xl font-serif text-[#4B1D3F] mb-2"
        >
          New Arrivals
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-gray-500 font-sans mb-12"
        >
          Discover the latest beauty essentials, just in!
        </motion.p>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            pagination={{ clickable: true } as PaginationOptions}
          >
            {newArrivals.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  variants={fadeUpDelay(index * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
                >
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1.06 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative w-full h-48 overflow-hidden rounded-xl"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 hover:scale-110"
                    />
                  </motion.div>

                  <h3 className="mt-4 text-lg font-serif text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-md font-semibold text-gray-800 mt-1">{product.price}</p>

                  <button className="mt-4 w-full bg-[#D8B4E2] text-white text-sm py-2 rounded-md hover:bg-[#c693d8] transition">
                    Add to Cart
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUpDelay(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative w-full h-48 overflow-hidden rounded-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </motion.div>

              <h3 className="mt-4 text-lg font-serif text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-md font-semibold text-gray-800 mt-1">{product.price}</p>

              <button className="mt-4 w-full bg-[#D8B4E2] text-white text-sm py-2 rounded-md hover:bg-[#c693d8] transition">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
