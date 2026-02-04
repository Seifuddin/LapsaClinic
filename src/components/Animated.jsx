"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Stethoscope, HeartPulse, Ambulance } from "lucide-react";

// Counter hook
const AnimatedCounter = ({ from = 0, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      const unsubscribe = count.on("change", (latest) => setValue(Math.floor(latest)));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, to, count]);

  return (
    <span ref={ref} className="text-lg md:text-2xl fontserif font-bold text-yellow-400">
      {value.toLocaleString()}+
    </span>
  );
};

const stats = [
  { icon: Users, label: "Happy Patients", value: 12000, color: "text-yellow-400 00" },
  { icon: Stethoscope, label: "Expert Doctors", value: 85, color: "text-yellow-400 0" },
  { icon: HeartPulse, label: "Successful Surgeries", value: 4500, color: "text-yellow-400 " },
  { icon: Ambulance, label: "Ambulances", value: 15, color: "text-yellow-400 400" },
];

export default function AnimatedCounters() {
  return (
    <section className="relative bg-[#0a2540] text-white px-6 pt-20 pb-10 overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative max-w-7xl mx-auto px4 sm:px6 lg:px12 text-center z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-serif font-extrabold text-white mb-6"
        >
          Our Achievements in Numbers
        </motion.h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>


        <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto mb-10">
          At <span className="font-semibold text-white">Lapsa Family Hospital</span>, we take pride in our dedication to care and excellence.
        </p>

        {/* Stats Grid */}
        <div className="grid gap-4 xs:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-4 xs:p-5 sm:p-6 rounded flex flex-col items-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-2 xs:mb-3">
                  <Icon className={`${stat.color} w-6 h-6`} />
                </div>

                {/* Counter */}
                <AnimatedCounter to={stat.value} />

                {/* Label */}
                <p className="text-white/90 mt-1 font-medium text-xs xs:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
