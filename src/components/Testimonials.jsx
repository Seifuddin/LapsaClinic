"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "E. M. Nguru.",
    role: "Patient's Friend",
    feedback:
      "The doctors and staff were so caring and attentive. I felt truly supported throughout my treatment. Highly recommend this hospital!",
    image: "/images/Screenshot_20221028-204325.png",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Patient's Relative",
    feedback:
      "Excellent facilities and very professional staff. They treated my father with great care and compassion.",
    image: "/images/IMG_20221028_140830_410.jpg",
    rating: 4,
  },
  {
    name: "Ali B.",
    role: "Patient",
    feedback:
      "The emergency team responded so quickly and saved my life. I’m forever grateful for their expertise and kindness.",
    image: "/images/Screenshot_20221028-204325.png",
    rating: 5,
  },
  {
    name: "David L.",
    role: "Patient",
    feedback:
      "Modern equipment and very efficient service. I felt safe and cared for throughout my surgery.",
    image: "/images/aidoctor.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Tagline */}
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-center font-semibold text-blue-800 tracking-wider uppercase mb-3 inline-block"
                >
                  Client Testimonials
                </motion.span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
            What Our <span className="text-gray-900">Patients Say</span>
          </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
            We value the trust our patients place in us. Here are some of their
            stories and experiences.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition transform flex flex-col items-center text-center relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent hover:before:border-blue-200 before:transition"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 shadow-md mt-3 mb-4"
                />
                <h3 className="text-base md:text-lg font-serif font-bold text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                  "{testimonial.feedback}"
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
