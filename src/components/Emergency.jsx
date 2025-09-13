"use client";

import { PhoneCall } from "lucide-react";

export default function EmergencyCall() {
  return (
    <section
      className="relative bg-black py-16 bg-[url('/images/ambulance7.webp')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100">
          <PhoneCall className="w-10 h-10 text-blue-900" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          24/7 Emergency Hotline
        </h2>
        <p className="text-lg text-blue-100 max-w-xl mx-auto mb-6">
          In case of any medical emergency, call us immediately. Our emergency
          team is ready to assist you any time, day or night.
        </p>

        {/* Call Button */}
        <a
          href="tel:+254111608331"
          className="inline-block bg-white text-blue-900 font-serif font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Call Now: +254 111 608 331
        </a>
      </div>
    </section>
  );
}
