"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Stethoscope, Pill, HeartHandshake } from "lucide-react";

const steps = [
  {
    title: "Book Appointment",
    description:
      "Schedule your visit easily online or by phone at a convenient time.",
    icon: CalendarCheck,
  },
  {
    title: "Get Consultation",
    description:
      "Meet our expert doctors for personalized advice and accurate diagnosis.",
    icon: Stethoscope,
  },
  {
    title: "Receive Treatment",
    description:
      "Access advanced medical care and treatments tailored to your needs.",
    icon: Pill,
  },
  {
    title: "Ongoing Care",
    description:
      "Benefit from continuous support and follow-ups for lasting wellness.",
    icon: HeartHandshake,
  },
];

export default function PatientJourney() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-1 text-center">
        {/* Semi Title */}
        <p className="text-sm uppercase tracking-wide font-semibold text-blue-800 mb-2">
          Step-by-Step Care
        </p>

        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
          Your Journey to Better Health
        </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>


        {/* Intro Text */}
        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          We guide you through every stage of your health journey — from the
          first appointment to long-term wellness.
        </p>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded shadow-md hover:shadow-xl transition-all border border-gray-200"
                >
                  {/* Mobile vertical connector (except last card) */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[2px] h-[40px] bg-gradient-to-b from-blue-700 to-blue-900"></div>
                  )}

                  {/* Desktop horizontal connector (except last card) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 right-[-32px] w-[64px] h-[2px] bg-gradient-to-r from-blue-700 to-blue-900"></div>
                  )}

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-2 rounded -full shadow-md">
                      <Icon className="w-6 h-6 text-yellow-500" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="md:text-lg fontserif font-bold text-gray-800 mb-2">
                    {index + 1}. {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
