"use client";

import { motion } from "framer-motion";
import { PhoneCall, ArrowUpRight, ShieldAlert } from "lucide-react";

export default function EmergencyCall() {
  return (
    <section className="relative overflow-hidden bg-[#082B52] text-white ">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid min-h-[360px] items-stretch lg:grid-cols-[1.05fr_0.95fr] py-12">

          {/* LEFT — Emergency information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center py-12 pr-0 lg:py-14 lg:pr-16"
          >
            {/* Emergency label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-teal-400/40 text-teal-300">
                <ShieldAlert className="h-4 w-4" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                Emergency Support · 24/7
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl text-white font-bold tracking-tight md:text-4xl lg:text-4xl">
              When every second{" "}
              <span className="text-white">matters.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              If you are experiencing a medical emergency, contact our
              emergency team immediately. We are ready to respond day or night.
            </p>

            {/* Emergency number */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+254111608331"
                className="group inline-flex w-fit items-center gap-4 bg-teal-500 px-5 py-3.5 text-[#06263F] rounded-md transition-colors hover:bg-teal-400"
              >
                <span className="flex h-9 w-9 items-center justify-center bg-white/20 rounded">
                  <PhoneCall className="h-4 w-4" />
                </span>

                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.15em] opacity-70">
                    Emergency Hotline
                  </span>

                  <span className="mt-0.5 block text-lg font-bold tracking-wide">
                    0111 608 331
                  </span>
                </span>

                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <span className="text-xs text-white/40">
                Tap to call immediately
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Ambulance image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[280px] overflow-hidden lg:min-h-0"
          >
            <img
              src="/images/ambulance7.webp"
              alt="Emergency ambulance service"
              className="absolute inset-0 h-full w-full object-cover rounded-md"
            />

            {/* Image fade */}
            <div className="absolute inset-0 bg-[#082B52]/15" />

            {/* Left fade into section */}
            <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-[#082B52] to-transparent lg:block" />

            {/* Bottom information */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:left-7 sm:right-7">
              <div className="border-l-2 border-teal-400 pl-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-white">
                  Emergency Response
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Ready when you need us
                </p>
              </div>

              <div className="flex h-9 w-9 items-center rounded justify-center bg-[#082B52]/80 text-teal-300 backdrop-blur-sm">
                <PhoneCall className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-1 w-full bg-teal-500" />
    </section>
  );
}
