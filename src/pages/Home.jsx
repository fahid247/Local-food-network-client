import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSlider from '../Components/HeroSlider';
import Reviews from '../Components/Reviews';

const Home = () => {
    return (
        <>
            <div className="banner">
                <HeroSlider></HeroSlider>
            </div>
            <section className='featured reviews'>
                <Reviews></Reviews>
            </section>
        </>
    );
};

export default Home;