"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  Stethoscope,
  HeartPulse,
  Baby,
  ArrowUpRight,
  ArrowLeft,
  CalendarCheck,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const clinics = [
  {
    name: "General Medicine",
    short: "Complete care for everyday health and long-term wellness.",
    description:
      "Our general medicine clinic provides comprehensive diagnosis, treatment and preventive healthcare for patients of all ages.",
    details:
      "We provide preventive health assessments, chronic disease management, wellness check-ups and treatment for a wide range of common medical conditions. Our approach focuses on understanding the individual patient and creating practical, personalized care plans.",
    icon: Stethoscope,
  },
  {
    name: "Pediatrics",
    short: "Specialized healthcare for children at every stage of growth.",
    description:
      "Compassionate medical care for infants, children and adolescents.",
    details:
      "Our pediatric team supports your child's health from infancy through adolescence, including routine check-ups, immunizations, nutritional guidance, developmental monitoring and treatment of childhood illnesses.",
    icon: Baby,
  },
  {
    name: "Cardiology",
    short: "Focused care for your heart and cardiovascular health.",
    description:
      "Heart-focused consultations, monitoring and personalized treatment.",
    details:
      "Our cardiology services include cardiovascular consultations, ECG, blood pressure monitoring and assessment of heart-related conditions. Each patient receives an individualized approach based on their symptoms, medical history and diagnostic findings.",
    icon: HeartPulse,
  },
  {
    name: "Outpatient",
    short: "Efficient care without the need for hospital admission.",
    description:
      "Convenient consultations and treatments for non-emergency conditions.",
    details:
      "Our outpatient clinic provides accessible consultations for general illnesses, follow-up visits, minor treatments and other conditions that do not require hospital admission.",
    icon: Building2,
  },
];

function ClinicDetails({ clinic, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    if (clinic) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [clinic, onClose]);

  return (
    <AnimatePresence>
      {clinic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#041A30]/75 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden bg-white shadow-2xl"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-teal-500" />

            <div className="p-7 sm:p-10">
              {/* Close */}
              <button
                onClick={onClose}
                aria-label="Close clinic details"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500 transition hover:border-teal-500 hover:text-teal-600"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Icon + label */}
              <div className="flex items-center gap-4 pr-10">
                <div className="flex h-12 w-12 items-center justify-center bg-[#E8F8F5] text-teal-600">
                  <clinic.icon className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-600">
                    Specialized Clinic
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#082B52]">
                    {clinic.name}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 border-l-2 border-teal-500 pl-5">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {clinic.details}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/appointment"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#0F5BBD] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B4A9B]"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book an Appointment
                </a>

                <button
                  onClick={onClose}
                  className="flex-1 border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#082B52] transition hover:border-teal-500 hover:text-teal-600"
                >
                  Close
                </button>
              </div>
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
    <section
      id="clinics"
      className="relative overflow-hidden bg-[#F7FAFC] py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background geometry */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full border border-blue-500/10" />
      <div className="pointer-events-none absolute -left-20 top-32 h-48 w-48 rounded-full border border-teal-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-teal-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Clinical Expertise
              </span>
            </div>

            <h2 className="max-w-lg text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Specialized care,{" "}
              <span className="text-teal-600">close to you.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Our clinics bring together experienced healthcare professionals
              and focused medical services to give every patient the right care
              at the right time.
            </p>

            {/* Small information block */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-500" />

                <div>
                  <p className="text-sm font-semibold text-[#082B52]">
                    Personalized attention
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Every consultation starts with listening, understanding
                    and building a care plan around you.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/appointment"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0F5BBD]"
            >
              Book a consultation

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* CLINIC DIRECTORY */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="border-t border-slate-200"
          >
            {clinics.map((clinic, index) => {
              const Icon = clinic.icon;

              return (
                <motion.button
                  key={clinic.name}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setSelectedClinic(clinic)}
                  className="group flex w-full items-center gap-5 border-b border-slate-200 py-6 text-left transition-colors hover:bg-white sm:py-7 sm:px-4"
                >
                  {/* Number */}
                  <span className="w-7 shrink-0 text-xs font-semibold tracking-wider text-teal-600">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-white text-[#0F5BBD] transition-all duration-300 group-hover:border-teal-400 group-hover:bg-[#E8F8F5] group-hover:text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-[#082B52] sm:text-lg">
                      {clinic.name}
                    </h3>

                    <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
                      {clinic.short}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-teal-400 group-hover:text-teal-600">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Clinic details modal */}
      <ClinicDetails
        clinic={selectedClinic}
        onClose={() => setSelectedClinic(null)}
      />
    </section>
  );
}
