"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Counters() {
  return (
    <section className="relative bg-[#0a2540] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif font-bold mb-4"
        >
          Need Medical Assistance?
        </motion.h2>
        <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>


        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto"
        >
          Our doctors and specialists are available to help you. 
          Contact us today to book an appointment or get more information 
          about our services.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* Phone Call Button */}
          <a
            href="tel:0111608331"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call Us</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+254111608331"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@lapsafamilyhospital.com"
            className="flex items-center gap-2 bg-blue-900 hover:bg-red-700 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
