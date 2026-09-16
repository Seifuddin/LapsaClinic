"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 px-6 py-20"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl lg:grid-cols-2 lg:gap-14 lg:px-12">

       

        {/* Main Contact Area */}
        <div className="relative md:grid-cols-2 mx-auto grid max-w-7xl items-center gap-10">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
             {/* Heading */}
        <div className="mb-14 grid gap-3 lg:grid-cols-[1fr_1fr]lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
                Contact Us
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-blue-900 md:text-4xl">
              Let’s make your next healthcare visit easier.
            </h2>
          </motion.div>

          <p className="text-base leading-7 text-blue-900 lgjustify-self-end">
            We’re here to help and answer any questions you might have.
            Whether you want to book an appointment, ask about our services,
            or simply say hello, feel free to reach out.
          </p>
        </div>
            {/* Contact Details */}
            <div className="border-t border-slate-200">

              {/* Phone */}
              <a
                href="tel:+254111608331"
                className="group flex items-center rounded justify-between border-b border-slate-200 py-3 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-slate-200 rounded-md bg-[#E8F8F5] text-teal-600 transition group-hover:bg-blue-950 group-hover:text-white">
                    <Phone size={14} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-semibold text-blue-900">
                      +254 111 608 331
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-300 transition group-hover:text-teal-500"
                />
              </a>

              {/* Email */}
              <a
                href="mailto:info@hospital.com"
                className="group flex items-center rounded justify-between border-b border-slate-200 py-3 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-slate-200 rounded-md bg-[#E8F8F5] text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                    <Mail size={14} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-blue-900">
                      lapsatechnologies@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-300 transition group-hover:text-teal-500"
                />
              </a>

              {/* Location */}
              <div className="flex items-center justify-between rounded border-b border-slate-200 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center border border-slate-200 rounded-md bg-[#E8F8F5] text-teal-600">
                    <MapPin size={14} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-blue-900">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254111608331"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center rounded justify-between border-b border-slate-200 py-3 transition"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center border border-slate-200 rounded-md bg-[#E8F8F5] text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                    <MessageSquare size={14} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-semibold text-blue-900">
                      Chat with our team
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-300 transition group-hover:text-teal-500"
                />
              </a>
            </div>

            {/* Map */}
            <div className="hidden mt-8overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.394849225982!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f9db8f2a17%3A0x401a3f3c5e0a5a0!2sNairobi!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-xl bg-blue-950 p-6 shadow-xl sm:p-8"
            >
              {/* Form Background Detail */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-800/40 blur-3xl" />

              <div className="relative">
                <div className="mb-8">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                      Send a Message
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    How can we help?
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-blue-100/60">
                    Send us a message and our team will get back to you.
                  </p>
                </div>

                {/* Name */}
                <div className="mb-5">
                  <label className="mb-2 block text-xs font-semibold text-blue-100/80">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-blue-100/30 outline-none transition focus:border-teal-400/60 focus:bg-white/[0.09]"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="mb-2 block text-xs font-semibold text-blue-100/80">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-blue-100/30 outline-none transition focus:border-teal-400/60 focus:bg-white/[0.09]"
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="mb-2 block text-xs font-semibold text-blue-100/80">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows="5"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-blue-100/30 outline-none transition focus:border-teal-400/60 focus:bg-white/[0.09]"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded bg-teal-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-900/20"
                >
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>Send Message</span>
                </button>

                {/* Feedback */}
                <AnimatePresence mode="wait">
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-4 text-center text-xs font-medium text-red-300"
                    >
                      Please fill in all fields before submitting.
                    </motion.p>
                  )}

                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="mt-4 text-center text-xs font-medium text-teal-300"
                    >
                      ✓ Your message has been sent successfully!
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}