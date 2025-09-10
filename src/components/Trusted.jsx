"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  { id: 1, logo: "/images/government-of-kenya-removebg-preview.png", alt: "World Health Organization" },
  { id: 2, logo: "/images/government-of-kenya-removebg-preview.png", alt: "NHIF" },
  { id: 3, logo: "/images/government-of-kenya-removebg-preview.png", alt: "Red Cross" },
  { id: 4, logo: "/images/government-of-kenya-removebg-preview.png", alt: "UNICEF" },
  { id: 5, logo: "/images/government-of-kenya-removebg-preview.png", alt: "Insurance Partner 1" },
  { id: 6, logo: "/images/government-of-kenya-removebg-preview.png", alt: "Insurance Partner 2" },
];

export default function TrustLogos() {
  return (
    <section className="py-12 border-y-blue-400 border-y bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          Trusted by Leading Health Organizations
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
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
                  className="max-h-16 object-contain grayscal hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
