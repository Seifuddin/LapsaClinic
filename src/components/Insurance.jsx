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
    <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-cyan-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Icon + Heading */}
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-14 h-14 text-blue-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
          Insurance Coverage
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
          💳 We accept{" "}
          <span className="font-semibold text-white">SHA</span> and all major
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
