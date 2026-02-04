"use client";

import { useState } from "react";
import { Building2, Stethoscope, HeartPulse, Baby } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clinics = [
  {
    name: "General Medicine",
    description:
      "Comprehensive diagnosis, treatment, and preventive healthcare for all ages.",
    details:
      "Our general medicine clinic offers preventive care, chronic disease management, wellness check-ups, and treatment for a wide variety of conditions to keep you and your family healthy.",
    icon: Stethoscope,
  },
  {
    name: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents with a compassionate touch.",
    details:
      "Our pediatric specialists focus on your child’s growth, immunizations, nutritional needs, and developmental milestones in a warm and family-friendly environment.",
    icon: Baby,
  },
  {
    name: "Cardiology",
    description:
      "Advanced heart care services including diagnosis, monitoring, and treatments.",
    details:
      "We provide heart-focused consultations, ECG, blood pressure monitoring, and expert care for heart conditions with modern technology and personalized treatment plans.",
    icon: HeartPulse,
  },
  {
    name: "Outpatient",
    description:
      "Convenient, same-day consultations and treatments for non-emergency conditions.",
    details:
      "Our outpatient clinic provides quick and effective consultations for general illnesses, follow-up visits, and minor treatments without the need for hospital admission.",
    icon: Building2,
  },
];

// Modal Component
function Modal({ clinic, onClose }) {
  if (!clinic) return null;

  const Icon = clinic.icon;

  return (
    <AnimatePresence>
      {clinic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-serif font-bold text-red-700 mb-4 text-center">
              {clinic.name}
            </h3>

            {/* Details */}
            <p className="text-gray-600 mb-8 text-center leading-relaxed">
              {clinic.details}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-md font-serif font-semibold bg-red-700 text-white hover:bg-red-800 transition"
              >
                Close
              </button>
              <a
                href="/appointment"
                className="w-full py-3 rounded-md font-serif font-semibold border-2 border-red-700 text-red-700 hover:bg-red-50 transition text-center"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Clinics() {
  const [selectedClinic, setSelectedClinic] = useState(null);

  return (
    <section id="clinics" className="py-20 px-6 bg-gray-50 dient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto lg:px8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Specialized Clinics
          </h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Explore our range of specialized clinics, each dedicated to
            providing expert medical care and personalized attention.
          </p>
        </div>

        {/* Clinics Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {clinics.map((clinic, index) => {
            const Icon = clinic.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-between bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300 p-4 text-center border border-gray-200"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-900 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>

                  {/* Title + Description */}
                  <h3 className="md:text-lg font-serif font-bold text-gray-800 mb-3">
                    {clinic.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {clinic.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedClinic(clinic)}
                    className="w-full py-2 rounded fontserif text-sm font-semibold bg-blue-900 text-white hover:bg-red-800 transition"
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <Modal clinic={selectedClinic} onClose={() => setSelectedClinic(null)} />
    </section>
  );
}
