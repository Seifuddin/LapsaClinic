"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "E. M. Nguru.",
    role: "Patient's Friend",
    feedback:
      "The doctors and staff were so caring and attentive. I felt truly supported throughout my treatment. Highly recommend this hospital!",
    image: "/images/edited-photo.png",
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
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-blue-50 py-16 sm:py-20lg:py-24">
      {/* Background geometry */}
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full border border-teal-500/10" />
      <div className="pointer-events-none absolute -right-10 top-14 h-48 w-48 rounded-full border border-blue-500/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-teal-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
                Patient Stories
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-blue-950">
              Care that people{" "}
              <span className="text-blue-950">remember.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-md text-base leading-6 text-blue-900"
          >
            Every patient has a different story. These are a few experiences
            shared by people who have trusted our team with their care.
          </motion.p>
        </div>

        {/* Testimonial slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={setSwiper}
            onSlideChange={(instance) =>
              setActiveIndex(instance.realIndex)
            }
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.name}>
                <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                  {/* Patient image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative mx-auto w-full max-w-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full rounded-md object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#082B52]/30 to-transparent" />
                    </div>

                    {/* Quote marker */}
                    <div className="absolute -bottom-5 right-5 flex h-14 w-14 items-center justify-center bg-teal-500 text-[#06263F] shadow-lg">
                      <Quote className="h-6 w-6" />
                    </div>
                  </motion.div>

                  {/* Testimonial content */}
                  <motion.div
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="relative"
                  >
                    {/* Rating */}
                    <div className="mb-5 flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-4 w-4 fill-current text-teal-500"
                          />
                        )
                      )}

                      <span className="ml-2 text-xs font-medium text-slate-400">
                        {testimonial.rating}.0 / 5
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="max-w-3xl text-lg italic font-medium leading-[1.45] tracking-tight text-blue-950 sm:text-xl lg:text-2xl">
                      “{testimonial.feedback}”
                    </blockquote>

                    {/* Patient */}
                    <div className="mt-7 flex items-center gap-4">
                      <div className="h-px w-8 bg-teal-500" />

                      <div>
                        <p className="text-sm font-bold text-[#082B52]">
                          {testimonial.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-5">

            {/* Progress */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#082B52]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-20 bg-slate-200">
                <motion.div
                  className="h-px bg-teal-500"
                  animate={{
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <span className="text-xs text-slate-400">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => swiper?.slidePrev()}
                className="flex h-10 w-10 items-center justify-center border border-slate-300 text-[#082B52] transition hover:border-teal-500 hover:bg-[#E8F8F5] hover:text-teal-600"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => swiper?.slideNext()}
                className="flex h-10 w-10 items-center justify-center border border-slate-300 text-[#082B52] transition hover:border-teal-500 hover:bg-[#E8F8F5] hover:text-teal-600"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
