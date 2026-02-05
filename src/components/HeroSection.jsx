"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-950 px-6 pt-14 via-indigo-800 to-blue-600 text-white overflow-hidden"
    >
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px4 md:px- lg:px14 py-24 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-yellow-400 font-extrabold leading-tight mb-4">
            Caring for Your{" "}
            <span className="text-white">Family’s Health</span>
          </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto md:mx-0 rounded-full mb-6"></div>


          <p className="mt-6 text-base md:text-xl text-gray-200">
            Welcome to <span className="font-semibold">Lapsa Family Hospital</span>, 
            where compassionate care meets modern medicine. We are dedicated to 
            serving you and your loved ones with excellence and integrity.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="#appointment"
              className="px-6 py-2 fontserif bg-yellow-400 text-indigo-900 rounded-md shadow-md fontsemibold hover:bg-yellow-500 transition"
            >
              Book Appointment
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 fontserif border border-white text-gray-100 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/aidoctor.jpg"
            alt="Hospital illustration"
            className="w-full rounded max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
