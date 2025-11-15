'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeUpDelay = (delay) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', delay } },
});

const products = [
  {
    id: 1,
    name: 'Rose Gold Lipstick',
    category: 'Lipsticks',
    price: '$24.99',
    image: '/images/redpearls.jpg',
  },
  {
    id: 2,
    name: 'Glow Foundation',
    category: 'Foundation',
    price: '$29.99',
    image: '/images/nivea.jpg',
  },
  {
    id: 3,
    name: 'Peach Blush Kit',
    category: 'Blush',
    price: '$18.00',
    image: '/images/brush.jpg',
  },
  {
    id: 4,
    name: 'Flawless Finish Powder',
    category: 'Powders',
    price: '$21.50',
    image: '/images/kit.jpg',
  },
];

export default function TopSellers() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-4xl font-bold uppercase text-[#4B1D3F] relative inline-block">
            <span className="absolute top-0 left-0 w-[70%] h-2 bg-[#4B1D3F] -translate-y-3 rounded-sm"></span>
            Featured Products
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-4xl font-serif text-[#4B1D3F] mb-2">Top Sellers</h3>
          <p className="text-gray-500 font-sans">Our most loved picks — selected by you!</p>
        </motion.div>

        {/* Mobile Swiper */}
        <div className="block md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.2} pagination={{ clickable: true }}>
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <motion.div
                  variants={fadeUpDelay(index * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col bg-white"
                >
                  {/* Animated Image */}
                  <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative w-full h-56 overflow-hidden rounded-2xl shadow-sm bg-[#f7f0fa]"
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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUpDelay(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition p-4 flex flex-col bg-white"
            >
              <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-56 overflow-hidden rounded-2xl shadow-sm bg-[#f7f0fa]"
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
