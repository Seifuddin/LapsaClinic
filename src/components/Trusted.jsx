"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";

const partners = [
  {
    id: 1,
    logo: "/images/who.png",
    alt: "World Health Organization",
  },
  {
    id: 2,
    logo: "/images/nhif.png",
    alt: "NHIF",
  },
  {
    id: 3,
    logo: "/images/redcross.png",
    alt: "Red Cross",
  },
  {
    id: 4,
    logo: "/images/unicef.png",
    alt: "UNICEF",
  },
  {
    id: 5,
    logo: "/images/aar.png",
    alt: "AAR Insurance",
  },
  {
    id: 6,
    logo: "/images/britam.png",
    alt: "Britam Insurance",
  },
];

export default function TrustLogos() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-white">

      {/* =====================================================
          SUBTLE BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] bg-teal-50/40" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-teal-100/60" />

      <div className="pointer-events-none absolute -right-20 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full border border-blue-100/50" />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-10">

        <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          {/* =================================================
              INTRO
              ================================================= */}
          <div className="relative">

            <div className="flex items-start gap-4">

              {/* Vertical accent */}
              <div className="mt-1 h-14 w-1 shrink-0 rounded-full bg-teal-500" />

              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600">
                  Our Network
                </p>

                <h2 className="max-w-sm text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl">
                  Connected to trusted healthcare partners.
                </h2>

                <p className="mt-3 max-w-md text-xs leading-6 text-slate-500 sm:text-sm">
                  Working alongside established healthcare, insurance and
                  humanitarian organizations to support accessible care.
                </p>
              </div>

            </div>

            {/* Small detail */}
            <div className="mt-5 ml-5 flex items-center gap-2 text-xs font-semibold text-blue-700">
              <span>Our healthcare ecosystem</span>

              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* =================================================
              LOGO AREA
              ================================================= */}
          <div className="relative min-w-0">

            {/* Top label */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Organizations & Partners
              </span>

              <div className="h-px flex-1 ml-4 bg-slate-100" />
            </div>

            {/* Logo rail */}
            <div className="overflow-hidden">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={2}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  480: {
                    slidesPerView: 2.5,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3.5,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4.5,
                  },
                }}
              >
                {partners.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <div className="group flex h-24 items-center justify-center border border-slate-100 bg-white px-5 transition-all duration-300 hover:border-teal-100 hover:bg-teal-50/30">

                      <img
                        src={partner.logo}
                        alt={partner.alt}
                        className="
                          max-h-12
                          max-w-[130px]
                          object-contain
                          opacity-60
                          grayscale
                          transition-all
                          duration-300
                          group-hover:scale-105
                          group-hover:opacity-100
                          group-hover:grayscale-0
                        "
                      />

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Bottom rail */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-1 w-8 rounded-full bg-blue-700" />
              <div className="h-px flex-1 bg-slate-100" />
              <div className="h-1 w-3 rounded-full bg-teal-500" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
