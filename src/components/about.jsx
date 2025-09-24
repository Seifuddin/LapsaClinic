"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeartPulse, ShieldCheck, Microscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 border-y-2 border-y-blue-200">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/Pharmacy.jpg"
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
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-left text-blue-900 mb-8">
            Who we are <span className="text-blue-800"></span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            We are committed to delivering exceptional
            healthcare services with compassion, professionalism, and integrity. 
            
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 shadow-md p-3">
              {/* Features <ShieldCheck className="text-blue-800 w-8 h-8" /> */}
              <div>
                <h3 className="font-serif mb-2 font-md font-bold text-red-700">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm">
                  Our mission is to provide affordable, patient-centered care backed by 
            modern medical technology and a team of highly qualified specialists.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 shadow-md p-3">
              {/* <Microscope className="text-blue-800 w-8 h-8" /> */}
              <div>
                <h3 className="font-serif mb-2 font-semibold text-red-700">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm">
                  Our mission is to provide affordable, patient-centered care backed by 
            modern medical technology and a team of highly qualified specialists.
                </p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <HeartPulse className="text-blue-800 w-8 h-8" />
              <div>
                <h3 className="font-serif font-semibold text-blue-900">
                  Compassionate Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Our dedicated doctors and nurses go beyond treatment to provide 
                  care with empathy.
                </p>
              </div>
            </div>
            */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
