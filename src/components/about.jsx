"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Microscope, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-gray-50 px-6 py-20">
      <div className="container max-w-7xl mx-auto px6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Image */}
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
            className="rounded-2xl shadow-lg object-cover border border-blue-100"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Section Title */}
          <p className="text-sm uppercase tracking-widest text-blue-700 mb-2 font-semibold text-center md:text-left">
            About Us
          </p>

          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-gray-800 mb-4 text-center md:text-left">
            Who We Are
          </h2>

          <div className="w-24 h-1 bg-blue-700 mx-auto md:mx-0 rounded-full mb-6"></div>

          {/* Intro Paragraph */}
          <p className="text-gray-700 text-base md:text-lg mb-6 textcenter text-left leading-relaxed">
            At <span className="font-semibold text-gray-900">Lapsa Family Hospital</span>, 
            we are committed to providing compassionate, high-quality medical services 
            designed to meet the needs of every patient. Our mission is to ensure accessible 
            and reliable healthcare for all, in an environment of trust and care.
          </p>

          {/* Extra info 
          <p className="text-gray-700 text-base md:text-lg mb-10 textcenter text-left leading-relaxed">
            From routine check-ups to specialized treatments, we combine advanced 
            technology, skilled professionals, and personalized care to promote 
            healthy living and lifelong wellness.
          </p>
*/}
          {/* Core Values Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-blue-100 bg-blue-100 hover:bg-blue-50 transition shadow-sm"
            >
              <ShieldCheck className="text-blue-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-1">Trust</h4>
              <p className="text-gray-600 text-sm">Building confidence through honesty and dependable care.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-blue-100 bg-blue-100 hover:bg-blue-50 transition shadow-sm"
            >
              <Microscope className="text-blue-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-1">Innovation</h4>
              <p className="text-gray-600 text-sm">Using advanced technology and research to improve outcomes.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-blue-100 bg-blue-100 hover:bg-blue-50 transition shadow-sm"
            >
              <HeartPulse className="text-blue-600 w-10 h-10 mb-3" />
              <h4 className="font-semibold text-gray-800 mb-1">Compassion</h4>
              <p className="text-gray-600 text-sm">Caring for every patient with empathy, kindness, and respect.</p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <p className="text-blue-700 font-semibold text-center md:text-left mt-10 italic">
            “Your health, our priority — together, we build a healthier tomorrow.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
