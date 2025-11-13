import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/pexels-abhinavcoca-291528.jpg";
import image2 from "../assets/pexels-chanwalrus-958545.jpg";
import image3 from "../assets/pexels-janetrangdoan-1099680.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div>
      <div className="h-screen bg-black text-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full h-full"
        >
            <SwiperSlide>
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${image2})`}} 
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl animate__animated animate__fadeInUp md:text-6xl font-bold mb-4">
                  Join Our Food Lovers Community
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  Share your creations, connect with others, and celebrate good
                  food.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full transition">
                  Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Fresh & Healthy Ingredients
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  We believe in good food made with fresh, local ingredients.
                </p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Discover Delicious Recipes
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  Explore a world of flavors and cooking inspirations from top
                  chefs.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition">
                  Explore Recipes
                </button>
              </div>
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
