"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
     className="relative bg-[#0a2540] text-white pt-20 pb-10 overflow-hidden px-6">
      {/* Background Overlay with Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-[#0a2540]/90 to-blue-800/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 bg-cover bg-center z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-xl font-serif font-bold mb-3">Lapsa Family Hospital</h2>
        <div className="w-24 h-1 bg-yellow-400 mxauto rounded-full mb-4"></div>

            <p className="text-gray-200 text-sm leading-relaxed">
              Providing compassionate healthcare with modern facilities, 
              experienced doctors, and 24/7 emergency services to keep 
              your family safe and healthy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#clinics" className="hover:text-yellow-300 transition">Clinics</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="#contacts" className="hover:text-yellow-300 transition">Contacts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={18} /> <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} /> <span>+254 111 608 331</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} /> <span>info@lapsahospital.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-200">
              Subscribe to get health tips and hospital updates.
            </p>
            <form className="flex border rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-lg text-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-lg font-serif font-semibold hover:bg-yellow-500 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-gray-400 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          {/* Social Media */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-yellow-300 transition"><Facebook /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Twitter /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Instagram /></a>
            <a href="#" className="hover:text-yellow-300 transition"><Linkedin /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-200 text-sm">
            © {new Date().getFullYear()} Lapsa Family Hospital. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
