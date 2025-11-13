import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSlider from '../Components/HeroSlider';

const Home = () => {
    return (
        <>
            <div className="banner">
                <HeroSlider></HeroSlider>
            </div>
            <section className='featured reviews'>

            </section>
        </>
    );
};

export default Home;