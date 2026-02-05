"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  { id: 1, logo: "/images/who.png", alt: "World Health Organization" },
  { id: 2, logo: "/images/nhif.png", alt: "NHIF" },
  { id: 3, logo: "/images/redcross.png", alt: "Red Cross" },
  { id: 4, logo: "/images/unicef.png", alt: "UNICEF" },
  { id: 5, logo: "/images/aar.png", alt: "AAR Insurance" },
  { id: 6, logo: "/images/britam.png", alt: "Britam Insurance" },
];

export default function TrustLogos() {
  return (
    <section className="bg-gray-300 gradient-to-b from-blue-50 via-white to-blue-50 shadow-sm border-y border-gray-200 px-6">
      <div className="max-w-7xl mx-auto text-center py-10">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-gray-900 mb-3">
          Trusted by Leading Organizations
        </h2>
        <div className="w-24 h-1 bg-blue-800 mx-auto rounded-full mb-6"></div>


        {/* Intro Statement */}
        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          We collaborate with world-renowned health institutions and insurance
          providers to ensure the highest level of care and accessibility.
        </p>

        {/* Logo Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex justify-center items-center h-20">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 object-contain graycale hover:grayscale-0 hover:scale-105 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
