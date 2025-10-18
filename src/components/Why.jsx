"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

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
    <section className="relative py-20 bg-gray-50 dient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative SVGs */}
      <svg
        aria-hidden="true"
        className="absolute top-10 left-0 w-32 h-32 text-blue-200 opacity-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 48 48"
      >
        <path d="M4 24h8l4-10 6 20 4-10h18" />
      </svg>

      <svg
        aria-hidden="true"
        className="absolute bottom-10 right-0 w-40 h-40 text-blue-300 opacity-10"
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4"
        >
          Why Choose Us
        </motion.h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          Exceptional healthcare built on trust, innovation, and compassion.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-800 w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                  <div>
                    <h3 className="md:text-lg font-serif font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md rounded-2xl shadow-xl overflow-hidden"
            >
              <Image
                src="/images/whychooseus.webp"
                alt="Medical Team"
                width={500}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons 
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="/appointment"
            className="px-8 py-3 bg-blue-800 text-white font-serif font-semibold rounded-lg shadow 
              hover:bg-blue-900 transition"
          >
            Book an Appointment
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border-2 border-blue-800 text-blue-800 font-serif font-semibold rounded-lg 
              hover:bg-blue-50 transition"
          >
            Contact Us
          </a>
        </div>
        */}
      </div>
    </section>
  );
}
