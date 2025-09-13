"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah W.",
    role: "Patient",
    feedback:
      "The doctors and staff were so caring and attentive. I felt truly supported throughout my treatment. Highly recommend this hospital!",
    image: "/images/aidoctor.jpg",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Patient's Relative",
    feedback:
      "Excellent facilities and very professional staff. They treated my father with great care and compassion.",
    image: "/images/aidoctor.jpg",
    rating: 4,
  },
  {
    name: "Grace M.",
    role: "Patient",
    feedback:
      "The emergency team responded so quickly and saved my life. I’m forever grateful for their expertise and kindness.",
    image: "/images/aidoctor.jpg",
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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900">
            What Our <span className="text-blue-800">Patients Say</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We value the trust our patients place in us. Here are some of their stories and experiences.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                className="bg-blue-50 border border-purple-200 rounded-md shadow-md p-6 hover:shadow-xl transition flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mt-3 mb-4"
                />
                <h3 className="text-xl font-serif font-semibold text-blue-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-blue-800 mb-2">{testimonial.role}</p>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">
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
