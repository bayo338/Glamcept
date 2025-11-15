'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerParent = {
  show: { transition: { staggerChildren: 0.15 } },
};

const bestsellers = [
  {
    id: 1,
    name: 'Velvet Matte Lip Crayon',
    category: 'Lipsticks',
    price: '$19.99',
    image: '/images/lipcrayon.jpg',
  },
  {
    id: 2,
    name: 'Silky Highlight Duo',
    category: 'Highlighters',
    price: '$26.00',
    image: '/images/highlighter.jpg',
  },
  {
    id: 3,
    name: 'Ultra Volume Mascara',
    category: 'Mascara',
    price: '$22.50',
    image: '/images/mascara.jpg',
  },
  {
    id: 4,
    name: 'Dream Skin Primer',
    category: 'Primers',
    price: '$25.99',
    image: '/images/primer.jpg',
  },
];

export default function Bestsellers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-serif text-[#4B1D3F] mb-2">Bestsellers</h2>
          <p className="text-gray-500 font-sans">
            Handpicked customer favorites that never go out of style.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.2}>
            {bestsellers.map((product) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-48"
                  />
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
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {bestsellers.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <h3 className="mt-4 text-lg font-serif text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-md font-semibold text-gray-800 mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-[#D8B4E2] text-white text-sm py-2 rounded-md hover:bg-[#c693d8] transition">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
