"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Baby,
  Tooth,
  Brain,
  Stethoscope,
  X,
} from "lucide-react";

const clinics = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    description: "Advanced heart care and diagnostic services for all ages.",
    details:
      "Our Cardiology Clinic offers state-of-the-art facilities for ECG, echocardiography, and cardiac stress testing. Our team provides treatment for hypertension, heart disease, and preventive heart health programs.",
  },
  {
    name: "Pediatrics",
    icon: Baby, // ✅ confirmed name
    description:
      "Specialized healthcare services for infants, children, and teens.",
    details:
      "Our Pediatric Clinic is dedicated to the health and well-being of children. We provide routine check-ups, vaccinations, growth monitoring, and management of childhood illnesses.",
  },
  {
    name: "Dental Clinic",
    icon: Tooth,
    description: "Comprehensive dental care, from cleaning to oral surgery.",
    details:
      "Our Dental Clinic covers preventive, restorative, and cosmetic dentistry. Services include cleaning, fillings, extractions, orthodontics, and oral surgery.",
  },
  {
    name: "Neurology",
    icon: Brain,
    description:
      "Expert treatment for brain, spine, and nervous system conditions.",
    details:
      "Our Neurology Clinic specializes in diagnosing and managing epilepsy, stroke, migraines, Parkinson’s disease, and other nervous system disorders.",
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    description: "Primary care and general medical consultations.",
    details:
      "Our General Medicine Clinic offers outpatient consultations, preventive health checks, chronic disease management, and wellness programs for all ages.",
  },
];

export default function Clinics() {
  const [selectedClinic, setSelectedClinic] = useState(null);

  return (
    <section id="clinics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our <span className="text-blue-700">Clinics</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide specialized care through our dedicated clinics,
            ensuring every patient receives the right treatment.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {clinics.map((clinic, index) => {
            const Icon = clinic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                onClick={() => setSelectedClinic(clinic)}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center cursor-pointer"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {clinic.name}
                </h3>
                <p className="text-gray-600">{clinic.description}</p>
                <span className="mt-4 text-blue-700 font-medium hover:underline">
                  Learn More →
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="#appointment"
            className="px-6 py-3 bg-blue-900 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedClinic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-lg w-full p-6 rounded-2xl shadow-lg relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedClinic(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                {(() => {
                  const Icon = selectedClinic.icon;
                  return <Icon className="w-12 h-12 text-blue-600" />;
                })()}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {selectedClinic.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {selectedClinic.details}
              </p>

              <div className="mt-6">
                <a
                  href="#appointment"
                  className="px-5 py-2 bg-blue-900 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
