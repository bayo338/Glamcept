"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBox, FaShoppingCart, FaDollarSign, FaUsers } from "react-icons/fa";

export default function AdminDashboard() {
  const [stats] = useState([
    { title: "Total Sales", value: "₦1,200,000", icon: <FaDollarSign />, color: "bg-purple-200" },
    { title: "Orders", value: "230", icon: <FaShoppingCart />, color: "bg-purple-300" },
    { title: "Products", value: "58", icon: <FaBox />, color: "bg-purple-400" },
    { title: "Customers", value: "180", icon: <FaUsers />, color: "bg-purple-500" },
  ]);

  const [recentOrders] = useState([
    { id: "#001", customer: "Jane Doe", date: "2025-08-08", status: "Paid", amount: "₦20,000" },
    { id: "#002", customer: "John Smith", date: "2025-08-07", status: "Pending", amount: "₦15,000" },
    { id: "#003", customer: "Mary Johnson", date: "2025-08-06", status: "Paid", amount: "₦25,000" },
  ]);

  return (
    <div className="min-h-screen bg-[#F8F5FA] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Glamcept Admin</h1>
        <nav className="space-y-4">
          {["Dashboard", "Orders", "Products", "Settings", "Logout"].map((item, idx) => (
            <button
              key={idx}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Page Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-purple-800 mb-8"
        >
          Dashboard Overview
        </motion.h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl shadow-lg flex items-center gap-4 ${stat.color}`}
            >
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <p className="text-lg font-medium">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Recent Orders</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-purple-100 text-purple-800">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">Customer</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="border-b hover:bg-purple-50 transition">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.date}</td>
                  <td className={`py-3 px-4 font-semibold ${order.status === "Paid" ? "text-green-600" : "text-yellow-600"}`}>
                    {order.status}
                  </td>
                  <td className="py-3 px-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
