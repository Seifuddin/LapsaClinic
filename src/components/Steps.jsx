"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  Stethoscope,
  Pill,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Your Visit",
    description:
      "Choose a convenient time and schedule your appointment with our team.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Meet Your Doctor",
    description:
      "Receive a professional consultation focused on understanding your needs.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Begin Treatment",
    description:
      "Get personalized treatment and medical care designed around you.",
    icon: Pill,
  },
  {
    number: "04",
    title: "Stay Well",
    description:
      "Continue receiving support, follow-ups and guidance for lasting wellness.",
    icon: HeartHandshake,
  },
];

export default function PatientJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">

      {/* =========================================================
          BACKGROUND IMAGE
          ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          hidden
          w-[65%]
          bg-[url('/images/patient-journey-bg.png')]
          bg-contain
          bg-right
          bg-no-repeat
          opacity-[0.07]
          lg:block
        "
      />

      {/* Soft white fade over the background image */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-white
          via-white/95
          to-white/70
        "
      />

      {/* =========================================================
          CONTENT
          ========================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="grid gap-6 border-b border-slate-100 pb-10 lg:grid-cols-2 lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
              Your Care Journey
            </p>

            <h2 className="max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
              Healthcare that moves{" "}
              <span className="text-blue-700">with you.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-slate-500 lg:ml-auto lg:text-base"
          >
            From the moment you reach out to us, our team is committed to
            making your healthcare experience simple, personal and
            comfortable.
          </motion.p>
        </div>

        {/* =========================================================
            JOURNEY
            ========================================================= */}
        <div className="mt-12">

          {/* Desktop journey line */}
          <div className="relative hidden lg:block">

            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-[30px] h-px bg-slate-200" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                    className="group relative"
                  >

                    {/* Number */}
                    <div className="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-extrabold text-blue-700 transition-all duration-300 group-hover:border-teal-500 group-hover:bg-teal-50 group-hover:text-teal-700">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="mt-8">

                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-teal-50">
                        <Icon className="h-5 w-5 text-blue-700 transition-colors duration-300 group-hover:text-teal-600" />
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[250px] text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              MOBILE / TABLET
              ========================================================= */}
          <div className="grid gap-10 md:grid-cols-2 lg:hidden">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex gap-5"
                >

                  {/* Number */}
                  <div className="relative shrink-0">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-extrabold text-blue-700 shadow-sm transition-all group-hover:border-teal-400 group-hover:text-teal-600">
                      {step.number}
                    </div>

                    {/* Vertical connector */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-1/2 top-14 h-10 w-px -translate-x-1/2 bg-slate-200" />
                    )}
                  </div>

                  {/* Content */}
                  <div>

                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                      <Icon className="h-5 w-5 text-blue-700" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA STRIP */} <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl bg-slate-900 px-6 py-6 sm:flex-row sm:px-8" > <div> <p className="text-sm font-bold text-white"> Ready to take the next step? </p> <p className="mt-1 text-xs text-slate-400"> Book your appointment and let our team take care of the rest. </p> </div> <a href="#appointment" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-teal-600" > Book Appointment <ArrowRight className="h-4 w-4" /> </a> </motion.div> </div> </section> ); }