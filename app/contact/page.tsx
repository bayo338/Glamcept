/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Gradient Header */}
      <div className="w-full text-center py-16 bg-gradient-to-b from-purple-300 to-white">
        <h1 className="text-3xl font-bold text-purple-800 font-serif">Get in Touch</h1>
        <p className="mt-2 text-gray-700">
          We'd love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {/* Form + Boxes Container (Left-Aligned) */}
      <div className="px-36 py-12">
        <div className="max-w-lg space-y-10">

          {/* Form Section */}
          <div className="w-full bg-white shadow-md rounded-lg px-5 py-4 border border-purple-200">
            <h2 className="text-2xl font-semibold font-serif text-gray-800 mb-6">Send us a message</h2>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-purple-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-purple-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring focus:ring-purple-300"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-purple-400 hover:bg-purple-500 text-white py-3 rounded-md font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Box */}
          <div className="border rounded-lg p-6 shadow-sm bg-white max-w-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-700">

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="text-purple-500 mt-1" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">hello@glamcept.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="text-purple-500 mt-1" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm">+1 (555) 012-3456</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-500 mt-1" size={20} />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm">
                    123 Beauty Boulevard <br />
                    Los Angeles, CA 90210
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Business Hours Box */}
          <div className="border rounded-lg p-6 shadow-sm bg-white max-w-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Business Hours
            </h3>

            <div className="text-gray-700 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Saturday - Sunday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Follow Us Box */}
          <div className="border rounded-lg p-6 shadow-sm bg-white max-w-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>

            <div className="flex space-x-6 text-gray-700 text-sm">
              <span className="cursor-pointer hover:text-purple-600">📷 Instagram</span>
              <span className="cursor-pointer hover:text-purple-600">👍 Facebook</span>
              <span className="cursor-pointer hover:text-purple-600">🎵 TikTok</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
