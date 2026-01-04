import React from "react";
import "animate.css";
import { FaUsers, FaStar, FaMapMarkerAlt, FaRegLightbulb } from "react-icons/fa";
import img from "../assets/delicious-lobster-gourmet-seafood.jpg"
import profile from "../assets/WhatsApp_Image_2025-06-29_at_11.51.00_PM-removebg-preview.png"
import profile2 from "../assets/606033414_4352180225102064_2074986202582333543_n.jpg"


const AboutUs = () => {
  return (
    <section className="bg-base-200 min-h-screen py-20 px-6">
      <div className="container mx-auto">

        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-20">
          <div className="lg:w-1/2 animate__animated animate__fadeInLeft">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-base-content mb-6">
              About Food🕸Net
            </h1>
            <p className="text-base-content/70 mb-4 text-lg">
              Food🕸Net is a community-driven platform where food lovers
              can share reviews, discover top restaurants, and explore
              recipes from across Bangladesh. Our mission is to connect
              people through the love of food.
            </p>
            <p className="text-base-content/70 text-lg">
              Whether you're looking for a hidden gem or want to share your
              latest food adventure, Food🕸Net makes it easy and fun!
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center animate__animated animate__fadeInRight">
            <img
              src={img}
              alt="Foodie Illustration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp">
            <FaUsers className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-base-content/70">
              Share and discover authentic food reviews from fellow foodies.
            </p>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp animate__delay-1s">
            <FaStar className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Top-Rated Dishes</h3>
            <p className="text-base-content/70">
              See the most loved dishes from our community and restaurants.
            </p>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp animate__delay-2s">
            <FaMapMarkerAlt className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Local Discoveries</h3>
            <p className="text-base-content/70">
              Explore hidden gems and local favorites all around Bangladesh.
            </p>
          </div>
          <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp animate__delay-3s">
            <FaRegLightbulb className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Recipe Ideas</h3>
            <p className="text-base-content/70">
              Learn to cook popular dishes and share your own recipes.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 animate__animated animate__fadeInDown">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Example team member */}
            <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp">
              <img
                src={profile}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">Fahid Aqundow</h3>
              <p className="text-base-content/70">Full Stack Developer</p>
            </div>
            <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp animate__delay-1s">
              <img
                src={profile2}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">Fahid Aqundow</h3>
              <p className="text-base-content/70">UI/UX Designer</p>
            </div>
            <div className="bg-base-100 rounded-xl shadow-md p-6 text-center animate__animated animate__fadeInUp animate__delay-2s">
              <img
                src={profile}
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
              />
              <h3 className="text-xl font-bold">Fahid Aqundow</h3>
              <p className="text-base-content/70">Backend Developer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate__animated animate__fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Join Our Foodie Community
          </h2>
          <p className="text-base-content/70 mb-6">
            Share your reviews, discover new dishes, and be part of our growing community.
          </p>
          <a href="/allReviews" className="btn btn-primary btn-lg">
            Explore Reviews
          </a>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
