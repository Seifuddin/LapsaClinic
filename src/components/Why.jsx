"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    number: "01",
    title: "Expert Medical Team",
    desc: "Highly trained doctors and nurses across multiple specialties.",
  },
  {
    number: "02",
    title: "Advanced Technology",
    desc: "Modern medical equipment supporting accurate diagnosis and effective treatment.",
  },
  {
    number: "03",
    title: "24/7 Emergency Care",
    desc: "Rapid-response emergency services when every second matters.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Subtle background details */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full border border-teal-500/10" />
      <div className="pointer-events-none absolute right-16 top-16 h-52 w-52 rounded-full border border-blue-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-lg">
              {/* Image */}
              <div className="relative overflow-hidden rounded-md">
                <Image
                  src="/images/whychooseus.webp"
                  alt="Lapsa Family Hospital medical team"
                  width={700}
                  height={560}
                  className="h-[360px] w-full rounded-md object-cover sm:h-[430px] lg:h-[500px]"
                />

                {/* Subtle image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B52]/35 via-transparent to-transparent" />
              </div>

              {/* Teal accent */}
              <div className="absolute -bottom-3 left-6 h-1 w-24 bg-teal-500" />

              {/* Floating trust marker */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white px-4 py-3 shadow-xl sm:left-8 rounded-md">
                <div className="border border-slate-200 rounded-md bg-[#E8F8F5] text-teal-600 flex h-9 w-9 items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#082B52]">
                    Trusted Care
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Built around our patients
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-2 flex items-center gap-2"
            >
              <span className="h-px w-9 bg-teal-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Why Lapsa Family Hospital
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl text-3xl font-bold tracking-tight text-blue-900 md:text-4xl lg:text-4xl"
            >
              Healthcare built around{" "}
              <span className="text-blue-900">you.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 max-w-xl text-base leading-7 text-blue-900 sm:text-base"
            >
              We combine experienced professionals, modern medical technology
              and compassionate care to create a healthcare experience you can
              trust — from your first consultation through recovery.
            </motion.p>

            {/* Reasons */}
            <div className="mt-5 border-t border-slate-200">
              {reasons.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="group flex gap-2 border-b border-slate-200 rounded-md py-3 sm:gap-3"
                >
                  {/* Number */}
                  <span className="w-8 shrink-0 pt-1 text-xs font-semibold tracking-wider text-teal-600">
                    {item.number}
                  </span>

                  {/* Check */}
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-slate-200 rounded bg-[#E8F8F5] text-teal-600 transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-blue-900 sm:text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-lg text-sm leading-6 text-slate-500">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight className="mt-1 hidden h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-500 sm:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
