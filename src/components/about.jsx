"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Microscope,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    text: "Honest communication and dependable care.",
  },
  {
    icon: Microscope,
    title: "Innovation",
    text: "Modern technology supporting better outcomes.",
  },
  {
    icon: HeartPulse,
    title: "Compassion",
    text: "Respectful care for every patient.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-50/70 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-50/70 blur-3xl" />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          {/* =================================================
              IMAGE COMPOSITION
              ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/muslimadoctorr2.jpg"
                alt="Doctor providing compassionate care at Lapsa Family Hospital"
                width={700}
                height={600}
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B52]/30 via-transparent to-transparent" />

              {/* Teal accent */}
              <div className="absolute bottom-0 left-0 h-1 w-28 bg-teal-400" />
            </div>

            {/* Floating care statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                absolute
                -bottom-6
                left-5
                max-w-[270px]
                rounded-xl
                border
                border-white/70
                bg-white/95
                p-5
                shadow-xl
                shadow-slate-900/10
                backdrop-blur
                sm:left-8
              "
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50">
                  <HeartPulse className="h-4 w-4 text-teal-600" />
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-600">
                  Our Philosophy
                </span>
              </div>

              <p className="text-sm font-semibold leading-6 text-slate-800">
                Healthcare built around people, not just conditions.
              </p>
            </motion.div>

            {/* Decorative number */}
            <div className="absolute -right-4 -top-5 hidden h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-white text-xs font-bold text-blue-700 shadow-sm sm:flex">
              CARE
            </div>
          </motion.div>

          {/* =================================================
              CONTENT
              ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pt-4 lg:pt-0"
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-500" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                About Lapsa Family Hospital
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Healthcare that puts{" "}
              <span className="text-blue-700">people first.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              At{" "}
              <span className="font-semibold text-slate-800">
                Lapsa Family Hospital
              </span>
              , we are committed to providing compassionate, high-quality
              medical services designed around the needs of every patient.
              Our approach combines professional expertise, modern healthcare
              practices and genuine human care.
            </p>

            {/* Small divider */}
            <div className="my-8 h-px w-full max-w-xl bg-slate-100" />

            {/* =================================================
                VALUES
                ================================================= */}
            <div className="space-y-5">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + index * 0.1,
                    }}
                    className="group flex items-start gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-teal-50">
                      <Icon className="h-5 w-5 text-blue-700 transition-colors duration-300 group-hover:text-teal-600" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 border-b border-slate-100 pb-5">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                          {value.title}
                        </h3>

                        <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-500" />
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                CLOSING STATEMENT
                ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <div className="h-10 w-1 rounded-full bg-teal-500" />

              <p className="max-w-lg text-sm font-medium leading-6 text-slate-600">
                Your health is our priority — together, we build a healthier
                tomorrow.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
