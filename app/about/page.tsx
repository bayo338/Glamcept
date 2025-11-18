"use client";

import { motion } from "framer-motion";
import { easeOut } from "framer-motion";
import Image from 'next/image';


export default function About() {
  // -----------------------
  // Luxury Framer Motion Variants
  // -----------------------
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};


  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.1 },
    },
  };

  const softReveal = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: easeOut
 },
    },
  };

  return (
    <div className="w-full bg-[#fdfcfd]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="bg-purple-500 text-white text-center py-24 px-6"
      >
        <h1 className="text-sm md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
          Discover the passion and vision behind Glamcept, where beauty meets innovation
          and every product is crafted with love.
        </h1>
      </motion.section>

      {/* Beauty That Empowers Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="w-full bg-[#fdfcfd] py-12 space-y-20"
      >
        {/* SECTION 1 */}
        <motion.div
          variants={fadeUp}
          className="max-w-lg mx-8 md:mx-40 space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold text-purple-800 mb-6 font-serif"
          >
            Beauty That Empowers
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4 text-sm">
            Founded in 2020, Glamcept was born from a simple belief: every woman deserves
            to feel confident and beautiful in her own skin. We started with a vision to
            create premium cosmetics that don’t just enhance your natural beauty, but
            celebrate it.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4 text-sm">
            Our journey began when our founder, frustrated by the lack of inclusive,
            high-quality cosmetics that truly understood diverse beauty needs, decided to
            create something different. Something that would make every woman feel seen,
            valued, and beautiful.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-8 text-sm">
            Today, Glamcept is more than just a cosmetics brand. We&apos;re a community of
            confident women who believe that beauty comes from within, and the right
            products can help you express that inner glow to the world.
          </motion.p>

          <motion.div
            variants={softReveal}
            whileHover={{ scale: 1.02 }}
            className="flex justify-start"
          >

            <Image
                src="/images/beauty-empowers.jpg"
                alt="Beauty That Empowers"
                width={800}   // adjust as needed
                height={600}  // adjust as needed
                className="rounded-xl shadow-md object-cover w-full"
            />
          </motion.div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          variants={fadeUp}
          className="max-w-lg mx-8 md:mx-40 space-y-6"
        >
          <motion.div
            variants={softReveal}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <Image
                src="/images/our-mission.jpg"
                alt="Our Mission"
                width={800}   // adjust as needed
                height={600}  // adjust as needed
                className="rounded-xl shadow-md object-cover w-full"
                />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold text-purple-800 mb-6 font-serif"
          >
            Our Mission
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4 text-sm">
            At Glamcept, we’re committed to creating cosmetics that are not only beautiful
            but also responsible. Every product is carefully formulated with premium
            ingredients that are kind to your skin and the environment.
          </motion.p>

          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed text-sm">
            We believe in transparency, sustainability, and inclusivity. Our mission goes
            beyond cosmetics – we’re here to empower women to feel confident, express
            their individuality, and embrace their unique beauty every single day.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-pink-200 py-4 px-14 rounded-lg mx-8 md:mx-40 mb-12"
      >
        <motion.h2
          variants={fadeUp}
          className="text-1xl md:text-2xl font-semibold text-gray-800 mb-10 font-serif text-center"
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={softReveal}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-purple-400 rounded-full p-5 flex items-center justify-center">
                <span className="text-white text-2xl">🌿</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 font-serif">
                {i === 1
                  ? "Quality First"
                  : i === 2
                  ? "Inclusive Beauty"
                  : "Sustainability"}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                {i === 1 &&
                  "We use only the finest ingredients and rigorous testing to ensure every product meets our high standards."}
                {i === 2 &&
                  "Beauty has no boundaries. Our products are designed to celebrate and enhance every woman’s unique features."}
                {i === 3 &&
                  "We&apos;re committed to responsible practices that protect our planet for future generations."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={softReveal}
        className="bg-white rounded-lg mx-8 md:mx-40 my-12"
      >
        <div className="text-center border border-gray-200 rounded-xl shadow-sm p-10 bg-white">
          <motion.h1
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 font-serif"
          >
            A message from Our Founder
          </motion.h1>

          <motion.div
            variants={softReveal}
            whileHover={{ scale: 1.08 }}
            className="flex justify-center mb-6"
          >
            <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={80}   // corresponds to w-20 (20 * 4px)
                height={80}  // corresponds to h-20
                className="rounded-full object-cover border-2 border-purple-400 shadow-md"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-700 leading-relaxed max-w-3xl mx-auto italic mb-6"
          >
            &quot;When I started Glamcept, I had one simple goal: to create products that would
            make every woman feel as beautiful on the outside as she is on the inside...&quot;
          </motion.p>

          <motion.div variants={fadeUp} className="text-gray-800 mt-4">
            <p className="font-semibold">Odogwu Precious</p>
            <p className="text-sm text-gray-500">Founder & CEO</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
