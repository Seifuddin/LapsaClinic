"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "General Consultation",
    description:
      "Comprehensive medical check-ups and professional advice for your health needs.",
    image: "/images/consult.jpg",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response and life-saving care.",
    image: "/images/emergency.png",
  },
  {
    title: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents in a family-friendly environment.",
    image: "/images/pediatrichospitalist.jpg",
  },
  {
    title: "Pharmacy",
    description:
      "Fully stocked in-house pharmacy with quality and affordable medicines.",
    image: "/images/Pharmacy.jpg",
  },
  {
    title: "Cardiology",
    description:
      "Expert heart care including diagnostics, monitoring, and treatment.",
    image: "/images/Cardiology.png",
  },
  {
    title: "Laboratory & Diagnostics",
    description:
      "Modern labs for accurate and fast medical tests and results.",
    image: "/images/laboratory.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-6"
        >
          Our Services
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
        >
          At <span className="font-semibold text-blue-900">Lapsa Family Hospital</span>, we
          provide a wide range of healthcare services tailored to meet the needs
          of every family member with excellence and compassion.
        </motion.p>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col border border-gray-200 bg-white rounded-md shadow-xl hover:shadow-2xl transition overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-serif font-semibold text-blue-900 text-left mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-left flex-1">
                  {service.description}
                </p>

                {/* Button */}
                <button className="mt-6 font-serif w-full py-2 bg-blue-900 text-white rounded-lg hover:bg-red-700 transition self-start">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
