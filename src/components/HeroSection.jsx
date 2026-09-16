"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-blue-950 py-24"
    >
      {/* Premium Blue Background */}
      <div className="absolute inset-0">
        {/* Soft blue/teal light */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-700/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />

        {/* Subtle large circles */}
        <div className="absolute right-[15%] top-[20%] h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute right-[18%] top-[24%] h-56 w-56 rounded-full border border-white/5" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:px-10 md:py-14 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          {/* Small label */}
          <div className="border border-teal-300/30 mb-4 inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-3.5 py-1.5 text-xs font-semibold text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Trusted Family Healthcare
          </div>

          {/* Main heading */}
          <h1 className="text-2xl md:text-3xl font-black leading-[1.1] tracking-tight text-white sm:textl md:text-5xl">
            Caring for Your Family’s Health{" "}
            <span className="text-blue-300">
              
            </span>
          </h1>

          {/* Accent line */}
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-teal-400 lg:mx-0" />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-blue-100/80 sm:text-base lg:mx-0">
            Welcome to{" "}
            <span className="font-semibold text-white">
              Lapsa Family Hospital
            </span>
            , where compassionate care meets modern medicine. We are dedicated
            to serving you and your loved ones with excellence and integrity.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="#appointment"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-1.5 text-xs font-bold text-blue-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-50 hover:shadow-xl"
            >
              Book an Appointment
              <span className="ml-2 text-lg">→</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-2 text-xs font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/50 hover:bg-teal-400/10 hover:text-teal-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-7 grid grid-cols-3 border-t border-white/10 pt-5 text-center lg:text-left">
            <div>
              <p className="text-sm font-extrabold text-white">24/7</p>
              <p className="mt-0.5 text-[9px] text-blue-100/60 sm:text-xs">
                Patient Care
              </p>
            </div>

            <div className="border-x border-white/10">
              <p className="text-sm font-extrabold text-teal-300">Expert</p>
              <p className="mt-0.5 text-[9px] text-blue-100/60 sm:text-xs">
                Medical Team
              </p>
            </div>

            <div>
              <p className="text-sm font-extrabold text-white">Modern</p>
              <p className="mt-0.5 text-[9px] text-blue-100/60 sm:text-xs">
                Healthcare
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Teal image frame */}
          <div className="absolute -inset-2.5 rounded-[1.5rem] bg-teal-400/30" />

          {/* Main image */}
          <div className="relative overflow-hidden rounded-[1.35rem] bg-slate-100 shadow-2xl">
            <img
              src="/images/aidoctor.jpg"
              alt="Doctor providing healthcare services at Lapsa Family Hospital"
              className="h-[400px] w-full object-cover object-center sm:h-[430px] lg:h-[480px]"
            />

            {/* Subtle image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-4 left-4 rounded-xl border border-white/70 bg-white px-4 py-3 shadow-xl sm:left-6"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-lg font-bold text-teal-700">
                +
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Quality Healthcare
                </p>
                <p className="text-[10px] text-slate-500">
                  Care you can trust
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}