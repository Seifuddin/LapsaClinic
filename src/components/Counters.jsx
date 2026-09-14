"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Counters() {
  return (
    <section className="relative overflow-hidden bg-[#082B52] text-white">
      {/* Subtle background detail */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-teal-400/10" />
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-teal-400/10" />

        <div className="absolute left-0 bottom-0 h-px w-1/3 bg-teal-400/40" />
        <div className="absolute right-0 top-0 h-px w-1/4 bg-teal-400/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                Patient Support
              </span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
              <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Need medical assistance?
              </h2>

              <span className="mb-1 flex w-fit items-center gap-2 border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                Available to help
              </span>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Our doctors and support team are ready to assist you.
              Contact us to book an appointment, ask a question, or learn
              more about our services.
            </p>
          </motion.div>

          {/* Contact actions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col border-t border-white/15 lg:min-w-[390px] lg:border-l lg:border-t-0 lg:pl-8"
          >
            {/* Phone */}
            <a
              href="tel:0111608331"
              className="group flex items-center justify-between border-b border-white/15 py-4 transition-colors hover:bg-white/[0.03] lg:px-3"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-teal-400/30 text-teal-300">
                  <Phone className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Call us
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    0111 608 331
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254111608331"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/15 py-4 transition-colors hover:bg-white/[0.03] lg:px-3"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-teal-400/30 text-teal-300">
                  <MessageCircle className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    WhatsApp
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    Chat with our team
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
            </a>

            {/* Email */}
            <a
              href="mailto:info@lapsafamilyhospital.com"
              className="group flex items-center justify-between py-4 transition-colors hover:bg-white/[0.03] lg:px-3"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-teal-400/30 text-teal-300">
                  <Mail className="h-4 w-4" />
                </span>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    info@lapsafamilyhospital.com
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-4 w-4 text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
