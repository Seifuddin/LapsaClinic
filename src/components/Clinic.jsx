"use client";

import { Building2, Stethoscope, HeartPulse, Baby } from "lucide-react";
import { motion } from "framer-motion";

const clinics = [
  {
    name: "General Medicine",
    description:
      "Comprehensive diagnosis, treatment, and preventive healthcare for all ages.",
    icon: Stethoscope,
  },
  {
    name: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents with a compassionate touch.",
    icon: Baby,
  },
  {
    name: "Cardiology",
    description:
      "Advanced heart care services including diagnosis, monitoring, and treatments.",
    icon: HeartPulse,
  },
  {
    name: "Outpatient",
    description:
      "Convenient, same-day consultations and treatments for non-emergency conditions.",
    icon: Building2,
  },
];

export default function Clinics() {
  return (
    <section id="clinics" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">
            Our Specialized Clinics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of specialized clinics, each dedicated to
            providing expert medical care and personalized attention.
          </p>
        </div>

        {/* Clinics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clinics.map((clinic, index) => {
            const Icon = clinic.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-between bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 p-8 text-center border border-gray-200"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <h3 className="text-xl font-serif font-semibold text-blue-900 mb-3">
                    {clinic.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {clinic.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-6">
                  <button className="w-full py-2 rounded-md font-serif font-semibold border border-blue-900 text-blue-900 text-sm hover:bg-red-700 transition">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
