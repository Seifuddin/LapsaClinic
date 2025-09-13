"use client";

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
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-1 text-center">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-blue-900 mb-8">
          Your Journey to Better Health
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          From booking your appointment to ongoing care, we’re with you every
          step of the way.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-md shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-900 p-3 border border-blue-300 rounded-full">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-blue-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
