"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, ShieldCheck, Microscope } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/campus-Riverside-Ottawa-The-Hospital-Ont.webp"
            alt="Lapsa Family Hospital"
            width={550}
            height={450}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
            About <span className="text-blue-600">Lapsa Family Hospital</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            At Lapsa Family Hospital, we are committed to delivering exceptional
            healthcare services with compassion, professionalism, and integrity. 
            Our mission is to provide affordable, patient-centered care backed by 
            modern medical technology and a team of highly qualified specialists.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-blue-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-blue-900">
                  Trusted Care
                </h3>
                <p className="text-gray-600 text-sm">
                  Decades of experience ensuring safety, trust, and quality care 
                  for every patient.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Microscope className="text-blue-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-blue-900">
                  Modern Facilities
                </h3>
                <p className="text-gray-600 text-sm">
                  Equipped with advanced diagnostic and treatment technologies 
                  for better outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HeartPulse className="text-blue-600 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-blue-900">
                  Compassionate Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Our dedicated doctors and nurses go beyond treatment to provide 
                  care with empathy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
