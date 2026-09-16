"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Stethoscope,
  HeartPulse,
  Ambulance,
  ArrowUpRight,
} from "lucide-react";

// =========================================================
// Animated Counter
// =========================================================
const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = count.on("change", (latest) => {
      setValue(Math.floor(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, to, count]);

  return (
    <span
      ref={ref}
      className="text-lg font-extrabold tracking-tight text-white md:text-xl"
    >
      {value.toLocaleString()}+
    </span>
  );
};

// =========================================================
// Statistics
// =========================================================
const stats = [
  {
    icon: Users,
    label: "Patients Served",
    value: 12000,
  },
  {
    icon: Stethoscope,
    label: "Expert Doctors",
    value: 85,
  },
  {
    icon: HeartPulse,
    label: "Successful Surgeries",
    value: 4500,
  },
  {
    icon: Ambulance,
    label: "Ambulances",
    value: 15,
  },
];

// =========================================================
// Component
// =========================================================
export default function AnimatedCounters() {
  return (
    <section className="relative overflow-hidden bg-[#082B52] py-12 sm:py-14">

      {/* =====================================================
          BACKGROUND DESIGN
          ===================================================== */}

      {/* Soft light bloom */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

      {/* Large decorative circle */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/[0.06]" />

      <div className="pointer-events-none absolute -right-4 -top-16 h-72 w-72 rounded-full border border-teal-300/[0.05]" />

      {/* Subtle medical cross pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Teal accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-teal-500" />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-7 bg-teal-400" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-teal-300">
                Our Impact
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Care you can measure.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex max-w-md items-center gap-3"
          >
            <p className="text-xs leading-6 text-blue-100/70 sm:text-sm">
              Trusted by thousands of patients, with a commitment to
              professional and compassionate healthcare.
            </p>

            <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-teal-300 sm:block" />
          </motion.div>
        </div>

        {/* =====================================================
            STATS
            ===================================================== */}
        <div className="grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  px-4
                  py-5
                  transition-all
                  duration-300
                  sm:px-6
                  sm:py-6
                  lg:px-7
                  ${
                    index < 2
                      ? "border-b border-white/10 lg:border-b-0"
                      : ""
                  }
                  ${
                    index % 2 === 0
                      ? "border-r border-white/10 lg:border-r-0"
                      : ""
                  }
                  ${
                    index !== 0
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  }
                `}
              >

                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white/[0.07] ring-1 ring-white/10 transition-all duration-300 group-hover:bg-teal-400/10 group-hover:ring-teal-300/20">
                  <Icon className="h-5 w-5 text-teal-300 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Number + Label */}
                <div className="min-w-0">
                  <AnimatedCounter to={stat.value} />

                  <p className="mt-0.5 truncate text-xs font-medium text-blue-100/60 sm:text-sm">
                    {stat.label}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}