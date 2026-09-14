"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden bg-[#061F3D] px-6 pt-16 pb-8 text-white"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">

          {/* Hospital Info */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-xl font-bold text-white">
                +
              </div>

              <div>
                <h2 className="text-lg font-bold tracking-tight">
                  Lapsa Family Hospital
                </h2>

                <div className="mt-1 h-0.5 w-10 bg-teal-400" />
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-blue-100/70">
              Providing compassionate healthcare with modern facilities,
              experienced doctors, and 24/7 emergency services to keep
              your family safe and healthy.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-blue-100/60">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              Available for your care, 24/7
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Navigation
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="group flex items-center gap-2 text-blue-100/70 transition hover:text-white"
                >
                  Home
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="group flex items-center gap-2 text-blue-100/70 transition hover:text-white"
                >
                  Services
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#clinics"
                  className="group flex items-center gap-2 text-blue-100/70 transition hover:text-white"
                >
                  Clinics
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="group flex items-center gap-2 text-blue-100/70 transition hover:text-white"
                >
                  About
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#contacts"
                  className="group flex items-center gap-2 text-blue-100/70 transition hover:text-white"
                >
                  Contacts
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Contact
            </p>

            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-400"
                />

                <span className="text-blue-100/70">
                  Nairobi, Kenya
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-400"
                />

                <a
                  href="tel:+254111608331"
                  className="text-blue-100/70 transition hover:text-white"
                >
                  +254 111 608 331
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-400"
                />

                <a
                  href="mailto:info@lapsahospital.com"
                  className="break-all text-blue-100/70 transition hover:text-white"
                >
                  info@lapsahospital.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
              Stay Connected
            </p>

            <h3 className="mb-2 text-lg font-bold">
              Health updates, delivered.
            </h3>

            <p className="mb-5 text-sm leading-6 text-blue-100/60">
              Subscribe to get health tips and hospital updates.
            </p>

            <form className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-blue-100/40 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-teal-500 px-4 py-3 text-xs font-bold text-white transition hover:bg-teal-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-14 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            {/* Copyright */}
            <p className="text-center text-xs text-blue-100/50 md:text-left">
              © {new Date().getFullYear()} Lapsa Family Hospital.
              All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/profile.php?id=61570201295782"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-blue-100/60 transition hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <Facebook size={16} />
              </a>

              <a
                href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-blue-100/60 transition hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <Twitter size={16} />
              </a>

              <a
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-blue-100/60 transition hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-blue-100/60 transition hover:border-teal-400/40 hover:bg-teal-400/10 hover:text-teal-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Designed By */}
          <div className="mt-5 text-center text-xs text-blue-100/40">
            Designed & Powered by{" "}
            <Link
              href="https://lapsa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal-400 transition hover:text-teal-300"
            >
              Lapsa Web and Graphics
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}