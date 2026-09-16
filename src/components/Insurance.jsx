"use client";

import { ShieldCheck, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const insuranceProviders = [
  { name: "SHA", logo: "/images/sha.png" },
  { name: "NHIF", logo: "/images/nhif.png" },
  { name: "Jubilee", logo: "/images/jubilee.png" },
  { name: "AAR", logo: "/images/aar.png" },
  { name: "Britam", logo: "/images/britam.png" },
];

export default function InsuranceCoverage() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200 bg-blue-50">
      {/* Subtle background geometry */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-teal-500/10" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-blue-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-14">

        {/* Intro */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Insurance & Coverage
              </span>
            </div>

            <h2 className="max-w-md text-2xl font-bold tracking-tight text-blue-950 md:text-4xl">
              Care that works with your{" "}
              <span className="text-blue-950">coverage.</span>
            </h2>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-4 lg:justify-end"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#E8F8F5] text-teal-600">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div className="max-w-lg">
              <p className="text-base leading-7 text-blue-900 sm:text-base">
                We work with SHA and a range of insurance providers to help
                make quality healthcare more accessible and convenient for
                our patients.
              </p>

              <a
                href="/contact"
                className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F5BBD]"
              >
                Ask about your coverage

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Provider rail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 border-t border-slate-200 pt-6"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Selected healthcare partners
            </span>

            <span className="hidden text-xs text-slate-400 sm:block">
              Coverage may vary by service
            </span>
          </div>

          {/* Scrolling logos */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#F7FAFC] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#F7FAFC] to-transparent" />

            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
            >
              {[...insuranceProviders, ...insuranceProviders].map(
                (provider, index) => (
                  <div
                    key={`${provider.name}-${index}`}
                    className="flex h-20 w-36 shrink-0 items-center justify-center border border-slate-300 bg-white px-5 transition-colors duration-300 hover:border-teal-400"
                  >
                    <Image
                      src={provider.logo}
                      alt={`${provider.name} insurance provider`}
                      width={120}
                      height={60}
                      className="h-12 w-auto max-w-[105px] object-contain"
                    />
                  </div>
                )
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom reassurance */}
        <div className="mt-7 flex flex-col gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Have questions about your insurance or coverage?
          </p>

          <a
            href="/contact"
            className="text-xs font-semibold text-[#0F5BBD] transition-colors hover:text-teal-600"
          >
            Speak with our team →
          </a>
        </div>
      </div>

      {/* Teal accent */}
      <div className="h-1 w-full bg-teal-500" />
    </section>
  );
}
