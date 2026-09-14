"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            {/* Hospital Mark */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-950 text-xl font-bold text-white shadow-sm transition duration-300 group-hover:bg-blue-800">
              +
            </div>

            {/* Hospital Name */}
            <div className="leading-none">
              <div className="text-[15px] font-extrabold tracking-tight text-blue-950 sm:text-base">
                Lapsa
              </div>

              <div className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 sm:text-xs">
                Family Hospital
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-950"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Appointment Button */}
            <Link
              href="#appointment"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-blue-950 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
            >
              Book Appointment
              <span className="text-base text-teal-300">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-blue-950 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 focus:outline-none"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white shadow-lg md:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">

            {/* Mobile Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-blue-950"
                >
                  <span>{link.name}</span>

                  <span className="text-slate-300">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Appointment */}
            <Link
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
            >
              Book Appointment
              <span className="text-teal-300">→</span>
            </Link>

            {/* Mobile Contact */}
            <div className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
              <Phone size={14} className="text-teal-600" />
              <span>24/7 Patient Support</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}