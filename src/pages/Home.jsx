import React from "react";
import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/HeroSlider";
import Reviews from "../Components/Reviews";
import PopularDishes from "../Components/PopularDishes";
import PopularRestaurantsTable from "../Components/PopularResturants";

const Home = () => {
  return (
    <>
      <div className="banner">
        <HeroSlider></HeroSlider>
      </div>
      <section className="featured reviews">
        <Reviews></Reviews>
      </section>
      <section className="popularResturants">
        <PopularRestaurantsTable></PopularRestaurantsTable>
      </section>
      <section className="popular-recepies">
        <PopularDishes></PopularDishes>
      </section>
    </>
  );
};

export default Home;
