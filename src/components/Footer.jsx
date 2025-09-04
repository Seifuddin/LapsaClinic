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
      className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-900 text-white py-12 mt20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Lapsa Family Hospital</h2>
            <p className="text-gray-200 text-sm leading-relaxed">
              Providing compassionate healthcare with modern facilities, 
              experienced doctors, and 24/7 emergency services to keep 
              your family safe and healthy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="#clinics" className="hover:text-yellow-300 transition">Clinics</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin size={18} /> <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} /> <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} /> <span>info@lapsahospital.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4 text-gray-200">
              Subscribe to get health tips and hospital updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-400 px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-500 transition"
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
