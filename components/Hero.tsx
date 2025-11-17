'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const slides = [
  {
    image: '/images/hero1.jpg',
    title: 'Discover Your Perfect Glow',
    subtitle: 'Premium cosmetics crafted to enhance your natural beauty and boost your confidence.',
  },
  {
    image: '/images/hero2.jpg',
    title: 'Elegance in Every Shade',
    subtitle: 'Flawless finishes for every skin tone and every occasion.',
  },
  {
    image: '/images/hero3.jpg',
    title: 'Beauty That Empowers',
    subtitle: 'Unleash your inner glow with Glamcept’s iconic range.',
  },
];

// typed variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className="h-[80vh] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/50" />

              {/* Animated content */}
              <motion.div
                className="relative z-10 text-center text-white max-w-2xl px-4"
                variants={staggerChildren}
                initial="hidden"
                animate="show"
              >
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-serif mb-4 text-[#F3E1F5]"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-base md:text-lg font-sans mb-6 text-white/90"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div variants={fadeUp}>
                  <Link
                    href="/shop"
                    className="inline-block bg-[#D8B4E2] text-white px-6 py-2 rounded-full hover:bg-pink-400 transition"
                  >
                    Explore Our Collection
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
