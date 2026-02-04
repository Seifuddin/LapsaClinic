"use client";
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <section id="contact" className="py-20 px-6 bg-gray-50 dient-to-r from-white to-blue-50">
      <div className="max-w-7xl mx-auto textcenter">
        {/* Heading + Intro */}
        <div className="text-center mb-14">
          {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm font-semibold text-blue-800 tracking-wider uppercase mb-3 inline-block"
                >
                  Contac Us
                </motion.span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
            Get in Touch With Us
          </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>

          <p className="text-lg font-medium text-gray-600 mb-2">
            We’re here to help and answer any questions you might have.
          </p>
          
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Contact Info & Map */}
         
          <div>
            <div className="space-y-6">
               <p className="text-left text-gray-500 max-w-2xl mx-auto">
            Whether you want to book an appointment, ask about our services, or
            simply say hello, feel free to reach out—we’d love to hear from you.
          </p>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-600 bg-white p-1 shadow-lg rounded" />
                <a
                  href="tel:+254111608331"
                  className="text-md font-medium text-blue-900 hover:text-blue-700 transition"
                >
                  +254 111 608 331
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600 bg-white p-1 shadow-lg rounded" />
                <a
                  href="mailto:info@hospital.com"
                  className="text-md font-medium text-blue-900 hover:text-blue-700 transition"
                >
                  info@hospital.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-600 bg-white p-1 shadow-lg rounded" />
                <span className="text-md font-medium text-blue-900">
                  Nairobi, Kenya
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="text-green-500 bg-white p-1 shadow-lg rounded" />
                <a
                  href="https://wa.me/254111608331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition transform hover:scale-105"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.394849225982!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f9db8f2a17%3A0x401a3f3c5e0a5a0!2sNairobi!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded border border-gray-200 shadow-lg space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="text-gray-600 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="text-gray-600 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="4"
                  className="text-gray-600 w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded font-medium hover:bg-blue-700 transition transform hover:scale-105"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>

              {/* Feedback Messages */}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  Please fill in all fields before submitting.
                </p>
              )}
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
