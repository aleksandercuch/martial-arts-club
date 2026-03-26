"use client";

import { useEffect, useState } from "react";
import { translations } from "@/messages/translations";
import { useLanguage } from "@/context/LanguageContext";

const slidesMobile = [
  "/mobile-carousel-1.png",
  "/mobile-carousel-2.png",
  "/mobile-carousel-3.png",
  "/mobile-carousel-4.png",
  "/mobile-carousel-5.png",
  "/mobile-carousel-6.png",
];

const slidesDesktop = ["/desktop-carousel-2.png", "/desktop-carousel-3.png"];

export const Carousel = () => {
  const { lang } = useLanguage();
  const t = translations[lang as "pl" | "en"];

  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);
  const [currentSlideDesktop, setCurrentSlideDesktop] = useState(0);

  // Mobile autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideMobile((prev) => (prev + 1) % slidesMobile.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Desktop autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideDesktop((prev) => (prev + 1) % slidesDesktop.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = (isMobile: boolean) => {
    if (isMobile) {
      setCurrentSlideMobile((prev) =>
        prev === 0 ? slidesMobile.length - 1 : prev - 1,
      );
    } else {
      setCurrentSlideDesktop((prev) =>
        prev === 0 ? slidesDesktop.length - 1 : prev - 1,
      );
    }
  };

  const nextSlide = (isMobile: boolean) => {
    if (isMobile) {
      setCurrentSlideMobile((prev) => (prev + 1) % slidesMobile.length);
    } else {
      setCurrentSlideDesktop((prev) => (prev + 1) % slidesDesktop.length);
    }
  };

  return (
    <>
      {/* Mobile carousel */}
      <div className="relative w-full block md:hidden min-h-[60svh] max-h-[85svh] mt-28 overflow-hidden">
        {slidesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlideMobile === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <h1 className="font-trajan text-white text-center tracking-wide px-6 text-xl md:text-5xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] bg-black/40 rounded-xl p-5 relative top-36">
            {t.HomePage.title}
          </h1>
        </div>
      </div>

      {/* Desktop carousel */}
      <div className="relative w-full hidden md:block mt-28 overflow-hidden rounded-lg h-[calc(100vh-112px)] max-h-[900px] md:h-[calc(70vh-112px)] lg:h-[calc(100vh-112px)]">
        {slidesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center duration-700 ease-in-out ${
              currentSlideDesktop === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <h1 className="font-trajan text-white text-center tracking-wide px-6 text-3xl md:text-5xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] bg-black/40 rounded-xl p-5 relative top-36">
            {t.HomePage.title}
          </h1>
        </div>

        <button
          onClick={() => prevSlide(false)}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition">
            ‹
          </span>
        </button>

        <button
          onClick={() => nextSlide(false)}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition">
            ›
          </span>
        </button>
      </div>
    </>
  );
};
