"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, cubicBezier, easeOut } from "framer-motion";

const products = [
  { id: 1, name: "Crimson Elegance", category: "Lipsticks", price: 19.99, image: "/images/lipstick.jpg" },
  { id: 2, name: "Scarlet Pout", category: "Lipsticks", price: 21.5, image: "/images/mascara.jpg" },
  { id: 3, name: "Amazonian Clay Foundation", category: "Foundations", price: 38, image: "/images/blush.jpg" },
  { id: 4, name: "Natural Glow Base", category: "Foundations", price: 45, image: "/images/powder.jpg" },
];

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // -----------------------
  // ✨ Fixed Framer Motion Variants (No Type Errors)
  // -----------------------

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.1, 0.25, 1),
      },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen py-12">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-6xl mx-auto px-4"
      >
        <h1 className="text-3xl font-semibold text-[#D8B4E2] font-serif">
          Shop Our Collection
        </h1>

        <p className="text-gray-600 mt-2 max-w-2xl">
          Discover our premium range of cosmetics designed to enhance your natural beauty.
          From everyday essentials to statement pieces, find your perfect match.
        </p>
      </motion.div>

      {/* FILTERS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-end"
      >
        <div className="grid grid-col-1 md:grid-cols-3 gap-4">
          
          {/* CATEGORY */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Categories</option>
              <option value="Lipsticks">Lipsticks</option>
              <option value="Foundations">Foundations</option>
              <option value="Skincare">Skincare</option>
              <option value="Eyes">Eyes</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* MIN PRICE */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Min Price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>

          {/* MAX PRICE */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700">Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="100"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* APPLY FILTERS BUTTON */}
        <div className="flex justify-start md:justify-end">
          <button className="bg-[#D8B4E2] hover:bg-[#c693d8] text-white text-sm font-medium px-5 py-2 rounded-md">
            Apply Filters
          </button>
        </div>
      </motion.div>

      {/* PRODUCT GRID */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20"
      >
        {products.map((p) => (
          <motion.div
            key={p.id}
            variants={cardItem}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
              transition: { duration: 0.25 },
            }}
            className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"
          >
            <Image
              src={p.image}
              width={500}
              height={400}
              className="w-full h-48 object-cover rounded-md"
              alt={p.name}
            />

            <h3 className="mt-4 text-lg text-gray-900 font-serif">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.category}</p>

            <p className="mt-2 text-md text-gray-900 font-semibold">${p.price}</p>

            <button className="mt-4 w-full bg-[#D8B4E2] hover:bg-[#c693d8] text-white text-sm py-2 rounded-md">
              Add to Cart
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
