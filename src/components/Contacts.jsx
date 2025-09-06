"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-r from-blue-50 to-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center"
        >
          Contact Us
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg">
              Reach out to <span className="font-semibold">Lapsa Family Hospital</span> for appointments,
              inquiries, or any health-related questions. Our team is here to assist you.
            </p>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="tel:+254111608331"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl shadow transition transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>

              <a
                href="https://wa.me/+254111608331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow transition transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="flex items-center gap-4 mt-6">
              <Mail className="w-6 h-6 text-blue-900" />
              <span className="text-gray-700 font-medium">lapsatechnologies@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-900" />
              <span className="text-gray-700 font-medium">
                Nairobi, Kenya
              </span>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mt-6">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.000000!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMSDCsDI1JzMwLjAiTiAzNsKwNDknNDYuMCJF!5e0!3m2!1sen!2ske!4v1234567890"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
            ></textarea>

            <button
              type="submit"
              className="mt-2 bg-blue-900 text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
