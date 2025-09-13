"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Expert Medical Team",
    desc: "Highly trained doctors and nurses across multiple specialties.",
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art equipment ensures accurate diagnoses and effective treatments.",
  },
  {
    title: "24/7 Emergency Care",
    desc: "Rapid response emergency services when every second counts.",
  },
  {
    title: "Patient-Centered Approach",
    desc: "Prioritizing your comfort, privacy, and well-being always.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Decorative SVGs */}
      <svg
        className="absolute top-10 left-0 w-32 h-32 text-blue-100 opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M4 24h8l4-10 6 20 4-10h18" />
      </svg>

      <svg
        className="absolute bottom-10 right-0 w-40 h-40 text-blue-200 opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <circle cx="24" cy="24" r="20" />
        <path d="M24 12v24M12 24h24" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl sm:text-4xl font-serif font-bold text-blue-900 mb-4"
        >
          Why Choose Us
        </motion.h2>
        <p className="text-center text-gray-600 mb-10">
          Exceptional healthcare built on trust, innovation, and compassion.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            {/* Clean Point-form Rows with Checkmarks */}
            <ul className="space-y-6">
              {reasons.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/appointment"
                className="px-6 py-3 bg-blue-800 text-white font-serif font-semibold rounded-md 
                  hover:bg-blue-900 transition"
              >
                Book an Appointment
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border-2 border-blue-800 text-blue-800 font-serif font-semibold rounded-md 
                  hover:bg-blue-50 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/images/whychooseus.webp" // Replace with your actual image path
              alt="Medical Team"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
