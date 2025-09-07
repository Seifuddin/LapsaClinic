"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Clock, Users } from "lucide-react";

const reasons = [
  {
    icon: <HeartPulse className="w-12 h-12 text-blue-800" />,
    title: "Expert Medical Team",
    desc: "Our doctors and nurses are highly trained with years of experience in multiple specialties.",
  },
  {
    icon: <Stethoscope className="w-12 h-12 text-blue-800" />,
    title: "Advanced Technology",
    desc: "We use state-of-the-art medical equipment to ensure accurate diagnosis and effective treatment.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-800" />,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency services with fast response to save lives when every second matters.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-800" />,
    title: "Patient-Centered Approach",
    desc: "We prioritize your comfort, privacy, and well-being throughout your care journey.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gray-50"></div>

      {/* Decorative floating SVGs */}
      <svg
        className="absolute top-10 left-0 w-48 h-48 text-blue-200 opacity-20 animate-pulse"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M4 24h8l4-10 6 20 4-10h18" />
      </svg>

      <svg
        className="absolute bottom-10 right-0 w-56 h-56 text-blue-100 opacity-20 animate-bounce"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="20" />
        <path d="M24 12v24M12 24h24" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          At our hospital, we are dedicated to providing exceptional healthcare services 
          built on trust, innovation, and compassion.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white backdrop-blur-md border border-blue-200 shadow-md rounded-2xl p-8 text-center 
                         hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-5">{item.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary CTA */}
          <a
            href="/appointment" // Change this to your actual appointment page
            className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-full 
                       shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
          >
            Book an Appointment
          </a>

          {/* Secondary CTA */}
          <a
            href="/contact" // Change this to your actual contact page
            className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-semibold rounded-full 
                       hover:bg-blue-50 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
