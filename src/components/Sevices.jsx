"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  X,
  Clock3,
  ShieldCheck,
} from "lucide-react";

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

// =========================================================
// SERVICE MODAL
// =========================================================
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close service details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md transition hover:bg-teal-500 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative h-56 sm:h-72">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#082B52]/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                  Lapsa Family Hospital
                </p>

                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {service.details}
              </p>

              <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-teal-500" />
                  Professional patient-focused care
                </div>

                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800"
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

// =========================================================
// SERVICES
// =========================================================
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}
      <div className="hidden pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-3xl" />

      <div className="hidden pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-100/40 blur-3xl" />

      {/* =====================================================
          ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* =================================================
            HEADER
            ================================================= */}
        <div className="grid gap-6 border-b border-slate-200 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                Medical Services
              </span>
            </div>

            <h2 className="max-w-xl text-2xl font-extrabold leading-[1.1] tracking-tight text-blue-950 md:text-3xl lg:text-4xl">
              Care for every{" "}
              <span className="text-blue-950">stage of life.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl lg:ml-auto"
          >
            <p className="leading-7 text-blue-900 text-base">
              From everyday consultations to specialized treatment, our
              services are designed to make quality healthcare accessible,
              personal and dependable.
            </p>

            <div className="mt-4 flex items-center gap-5 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-teal-500" />
                Emergency care available 24/7
              </span>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            FEATURED SERVICE
            ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10"
        >
          <div className="group grid overflow-hidden rounded -2xl bg-[#082B52] lg:grid-cols-[1.15fr_0.85fr]">

            {/* Image */}
            <div className="relative min-h-[280px] overflow-hidden sm:min-h-[350px]">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#082B52]/20 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:left-7 sm:top-7">
                Featured service
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-4 sm:p-7 lg:p-9">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                Start with your health
              </p>

              <h3 className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
                {services[0].title}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-7 text-blue-100/70">
                {services[0].description}
              </p>

              <button
                onClick={() => setSelectedService(services[0])}
                className="mt-4 inline-flex w-fit items-center gap-2 border-b border-teal-300 pb-1 text-xs font-semibold text-white transition hover:text-teal-300"
              >
                Explore service
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            OTHER SERVICES
            ================================================= */}
        <div className="mt-8 grid gap-0 border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-5">

          {services.slice(1).map((service, index) => (
            <motion.button
              key={service.title}
              type="button"
              onClick={() => setSelectedService(service)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                border-b
                border-slate-200
                bg-white
                p-3
                text-left
                transition-all
                duration-300
                hover:bg-teal-50/40
                sm:p-2
                lg:border-b-0
                lg:border-r
                lg:last:border-r-0
              "
            >

              {/* Number */}
              <span className="text-[10px] font-bold tracking-[0.15em] text-slate-300 transition-colors group-hover:text-teal-500">
                0{index + 2}
              </span>

              {/* Image */}
              <div className="relative mt-2 h-40 overflow-hidden rounded">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#082B52]/10 transition group-hover:bg-[#082B52]/0" />
              </div>

              {/* Title */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-base font-bold leading-5 text-blue-950">
                  {service.title}
                </h3>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-500" />
              </div>

              <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-500">
                {service.description}
              </p>

              <span className="mt-4 inline-block text-[11px] font-bold text-blue-700">
                View service
              </span>
            </motion.button>
          ))}
        </div>

        {/* =================================================
            BOTTOM CTA
            ================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-slate-500">
            Not sure which service you need?
          </p>

          <a
            href="#appointment"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-teal-600"
          >
            Talk to our team
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          MODAL
          ===================================================== */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
