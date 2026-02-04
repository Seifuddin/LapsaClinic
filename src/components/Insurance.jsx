"use client";

import { ShieldCheck } from "lucide-react";
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
    <section className="relative bg-[#0a2540] text-white pt-20 pb-10 p overflow-hidden">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>
      <div className="relative max-w-7xl mx-auto px6 text-center">
        {/* Icon + Heading */}
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-yellow-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
          Insurance Coverage
        </h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>

        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
          💳 We accept{" "}
          <span className="font-semibold text-yellow-400">SHA</span> and all major
          insurance providers for easy and affordable access to care.
        </p>

        {/* Auto-scrolling carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...insuranceProviders, ...insuranceProviders].map(
              (provider, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white rounded-xl px- py- shadow-md min-w-[180px]"
                >
                  <Image
                    src={provider.logo}
                    alt={provider.name}
                    width={120}
                    height={60}
                    className="object-contain w-20 h-full"
                  />
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
