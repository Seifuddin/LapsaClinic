"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Clinics", href: "#clinics" },
    { name: "About", href: "#about" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <nav className="fixed px-6 top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px4 py-2 md:py-3sm:px-6lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-serif font-bold text-blue-900">
            Lapsa <span className="text-white md:text-blue-900">Family Hospital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="#appointment"
              className="ml-4 px-4 py-2 bg-blue-900 text-yellow-400 rounded-full hover:bg-red-700 transition"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-blue-900 text-white rounded-full text-center hover:bg-red-700 transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
