"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Microscope, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 border--2 border--blue-100"
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Semi Title */}
          <p className="text-sm uppercase tracking-widest text-blue-800 mb-2 font-semibold text-center md:text-left">
            About Us
          </p>

          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-gray-800 mb-4 text-center md:text-left">
            Who We Are
          </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto md:mx-0 rounded-full mb-6"></div>


          {/* Intro */}
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto text-center md:text-left">
            At <span className="font-semibold text-black">Lapsa Family Hospital</span>, 
            we are committed to delivering exceptional healthcare services with 
            compassion, professionalism, and integrity.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Motto */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-white rounded p-5 shadow-md sm:col-span-2"
            >
              <HeartPulse className="text-blue-700 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-blue-900 mb-2">
                  Our Motto
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  “Compassion in care, excellence in service, integrity in all we do.”
                </p>
              </div>
            </motion.div>
            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-start gap-4 bg-white rounded p-5 shadow-md"
            >
              <ShieldCheck className="text-blue-800 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-blue-900 mb-2">
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
              className="flex items-start gap-4 bg-white rounded p-5 shadow-md"
            >
              <Microscope className="text-blue-700 w-7 h-7" />
              <div>
                <h3 className="font-serif text-lg font-bold text-blue-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be a leading healthcare institution recognized for 
                  innovation, compassion, and excellence in patient outcomes.
                </p>
              </div>
            </motion.div>

            
          </div>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Image
            src="/images/muslimadoctorr2.jpg"
            alt="Lapsa Family Hospital"
            width={550}
            height={450}
            className="rounded shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
