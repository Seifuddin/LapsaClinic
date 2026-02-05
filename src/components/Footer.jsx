"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

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
            <form className="flex border border-white/50 rounded-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-lg text-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 border-l border-white/40 px-4 py-2 rounded-r-lg fontserif fontsemibold hover:bg-yellow-500 transition text-yellow-400"
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
          className="relative mt-12 border-t border-gray-500 pt-6 text-center text-sm text-gray-400 z-10 space-y-2"
        >
          {/* Social Media */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.facebook.com/profile.php?id=61570201295782" className="hover:text-yellow-300 transition"><Facebook /></a>
            <a href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09" className="hover:text-yellow-300 transition"><Twitter /></a>
            <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48" className="hover:text-yellow-300 transition"><Instagram /></a>
            <a href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-yellow-300 transition"><Linkedin /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Lapsa Family Hospital. All rights reserved.
          </p>

           <p className="text-gray-300">
          Designed & Powered by{" "}
          <Link
            href="https://lapsa.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-blue-400 font-semibold transition-all duration-300 
                       after:content-[''] after:absolute after:left-0 after:-bottom-1 
                       after:w-0 after:h-[2px] after:bg-blue-400 
                       hover:after:w-full after:transition-all after:duration-300"
          >
            Lapsa Web and Graphics
          </Link>
        </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
