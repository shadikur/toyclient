import React from 'react';
import Hero from '../../components/Hero/Hero';
import HomeSecOne from '../../components/Sections/HomeSecOne';
import Pricing from '../../components/Sections/Pricing';
import TrustedBy from '../../components/Sections/TrustedBy';
import ShopyByCategory from '../../components/Sections/ShopyByCategory';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ShopyByCategory></ShopyByCategory>
            <HomeSecOne></HomeSecOne>
            <Pricing></Pricing>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;