"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const services = [
  {
    title: "General Consultation",
    description:
      "Comprehensive medical check-ups and professional advice for your health needs.",
    details:
      "Our consultations include thorough physical exams, personalized health advice, preventive screenings, and follow-up care plans tailored to your needs.",
    image: "/images/consult.jpg",
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response and life-saving care.",
    details:
      "Our emergency unit is staffed with experienced doctors and nurses, equipped to handle trauma, critical conditions, and urgent interventions around the clock.",
    image: "/images/emergency.png",
  },
  {
    title: "Pediatrics",
    description:
      "Specialized care for infants, children, and adolescents in a family-friendly environment.",
    details:
      "We provide child-focused healthcare, including immunizations, developmental monitoring, pediatric nutrition, and compassionate care for children of all ages.",
    image: "/images/pediatrichospitalist.jpg",
  },
  {
    title: "Pharmacy",
    description:
      "Fully stocked in-house pharmacy with quality and affordable medicines.",
    details:
      "Our pharmacy ensures access to trusted medicines, professional prescription guidance, and patient education for safe and effective use.",
    image: "/images/Pharmacy.jpg",
  },
  {
    title: "Cardiology",
    description:
      "Expert heart care including diagnostics, monitoring, and treatment.",
    details:
      "We offer advanced cardiac care, including ECG, echocardiography, blood pressure monitoring, and treatment plans for heart-related conditions.",
    image: "/images/Cardiology.png",
  },
  {
    title: "Laboratory & Diagnostics",
    description:
      "Modern labs for accurate and fast medical tests and results.",
    details:
      "Our diagnostics department provides blood tests, imaging, screenings, and reliable results to support effective medical decision-making.",
    image: "/images/laboratory.jpg",
  },
];

// Modal Component
function Modal({ service, onClose }) {
  // close on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-serif font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.details}
              </p>
              <button
                onClick={onClose}
                className="mt-2 font-serif text-sm font-bold w-full py-2 bg-blue-900 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="relative px-6 py-20 bg-gray-50 dient-to-b from-blue-50 via-white to-blue-50 text-gray-800"
    >
      <div className="max-w-7xl mx-auto lg:px8 text-center">
        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-blue-800 tracking-wider uppercase mb-3 inline-block"
        >
          Caring for Every Family
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif font-bold text-gray-800 mb-4"
        >
          Our Services
        </motion.h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>


        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto"
        >
          At{" "}
          <span className="font-semibold text-black">
            Lapsa Family Hospital
          </span>
          , we provide a wide range of healthcare services tailored to meet the
          needs of every family member with excellence and compassion.
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
              className="group flex flex-col border border-gray-200 bg-white rounded shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className="md:text-lg fontserif font-bold text-gray-800 text-left mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-left flex-1">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 fontserif text-sm font-semibold w-full py-2 bg-blue-900 text-white rounded hover:bg-red-600 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
