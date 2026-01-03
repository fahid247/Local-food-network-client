import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import image1 from "../assets/pexels-abhinavcoca-291528.jpg";
import image2 from "../assets/pexels-chanwalrus-958545.jpg";
import image3 from "../assets/pexels-janetrangdoan-1099680.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";

const HeroSlider = () => {
  const slides = [
    {
      image: image2,
      title: "Join Our Food Lovers Community",
      subtitle: "Share your creations, connect with others, and celebrate good food.",
      buttonPrimary: "Join Now",
      buttonSecondary: "Learn More",
      colorPrimary: "bg-primary hover:bg-accent",
      colorSecondary: "bg-white text-black hover:bg-gray-100",
    },
    {
      image: image3,
      title: "Fresh & Healthy Ingredients",
      subtitle: "We believe in good food made with fresh, local ingredients.",
      buttonPrimary: "Learn More",
      buttonSecondary: "Our Recipes",
      colorPrimary: "bg-primary hover:bg-accent",
      colorSecondary: "bg-white text-black hover:bg-gray-100",
    },
    {
      image: image1,
      title: "Discover Delicious Recipes",
      subtitle: "Explore a world of flavors and cooking inspirations from top chefs.",
      buttonPrimary: "Explore Recipes",
      buttonSecondary: "Join Community",
      colorPrimary: "bg-primary hover:bg-accent",
      colorSecondary: "bg-white text-black hover:bg-gray-100",
    },
  ];

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* DARKER GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/80"></div>

              {/* Inner content */}
              <div className="relative z-10 text-center px-6 sm:px-10 md:px-16 max-w-4xl">
                {/* Accent divider */}
                <div className="w-24 h-1 mx-auto mb-6 bg-primary rounded-full animate__animated animate__fadeInDown"></div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4 animate__animated animate__fadeInDown animate__delay-0_5s">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/90 drop-shadow-md mb-8 animate__animated animate__fadeInUp animate__delay-1s font-bold">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
                  <button
                    className={`px-8 py-3 rounded-full font-semibold text-white transition transform hover:scale-105 ${slide.colorPrimary}`}
                  >
                    {slide.buttonPrimary}
                  </button>
                  <button
                    className={`px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 ${slide.colorSecondary}`}
                  >
                    {slide.buttonSecondary}
                  </button>
                </div>
              </div>

              {/* Subtle zoom effect */}
              <div className="absolute inset-0">
                <div
                  className="w-full h-full bg-cover bg-center scale-105 animate-pulse-slow"
                  style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
