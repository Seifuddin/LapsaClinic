"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Microscope, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 border-y-2 border-y-blue-100"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/campus-Riverside-Ottawa-The-Hospital-Ont.webp"
            alt="Lapsa Family Hospital"
            width={550}
            height={450}
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Semi Title */}
          <p className="text-sm uppercase tracking-widest text-red-700 mb-2 font-semibold">
            About Us
          </p>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-blue-900 mb-4">
            Who We Are
          </h2>

          {/* Intro */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At <span className="font-semibold text-blue-800">Lapsa Family Hospital</span>, 
            we are committed to delivering exceptional healthcare services with 
            compassion, professionalism, and integrity.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 shadow-md"
            >
              <ShieldCheck className="text-red-700 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-red-700 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To provide affordable, patient-centered care backed by 
                  modern medical technology and a team of highly qualified specialists.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 shadow-md"
            >
              <Microscope className="text-red-700 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-red-700 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be a leading healthcare institution recognized for 
                  innovation, compassion, and excellence in patient outcomes.
                </p>
              </div>
            </motion.div>

            {/* Motto */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-amber-50 rounded-xl p-5 shadow-md sm:col-span-2"
            >
              <HeartPulse className="text-red-700 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-red-700 mb-2">
                  Our Motto
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  “Compassion in care, excellence in service, integrity in all we do.”
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
