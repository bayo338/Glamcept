"use client";
import { Lock } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#fdfcfd] px-6 py-12">
      <div className="md:mx-32">

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-purple-700 font-serif">Your Cart</h1>
          <p className="text-sm text-gray-600 mt-1">
            Review your items and complete your purchase
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Cart Items Box */}
            <div className="bg-white border rounded-md p-4 shadow-sm">
              <p className="text-gray-800 font-medium font-serif">Cart Items</p>
            </div>

            {/* Payment Information Box */}
            <div className="bg-white border rounded-md p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 font-serif">
                Payment Information
              </h2>

              <div className="space-y-4 text-sm">

                {/* Email Address */}
                <div>
                  <label className="block mb-1 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label className="block mb-1 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block mb-1 text-gray-700">Address</label>
                  <input
                    type="text"
                    placeholder="123 Main St"
                    className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                  />
                </div>

                {/* City + ZIP */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-700">City</label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-700">ZIP Code</label>
                    <input
                      type="text"
                      placeholder="10001"
                      className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Card Number */}
                <div>
                  <label className="block mb-1 text-gray-700">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                  />
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-700">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full bg-[#f8f6fb] rounded-md px-3 py-2 focus:ring-purple-300 focus:outline-none"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column (Order Summary) */}
          <div>
            <div className="bg-white border rounded-md p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-serif">
                Order Summary
              </h3>

              <div className="text-sm text-gray-700 space-y-3">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$67.97</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$5.44</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between font-semibold text-gray-900 font-serif">
                  <span>Total</span>
                  <span>$79.40</span>
                </div>

                {/* Purchase Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 mt-4 rounded-md font-medium transition">
                  Complete Purchase
                </button>

                {/* SSL Row */}
                <div className="flex items-center justify-center text-xs text-gray-600 mt-3 space-x-1">
                  <Lock size={14} />
                  <span>Secure checkout with SSL encryption</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
