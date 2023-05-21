import React from 'react';
import Hero from '../../components/Hero/Hero';
import HomeSecOne from '../../components/Sections/HomeSecOne';
import TrustedBy from '../../components/Sections/TrustedBy';
import ItemsByCategory from '../../components/Sections/ItemsByCategory';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    AOS.init();
    return (
        <div>
            <DynamicTitle
                subtitle={`Home - The best robot toys marketplace in the world`}>
            </DynamicTitle>
            <Hero></Hero>
            <div data-aos="fade-up"
                data-aos-duration="3000"><ItemsByCategory></ItemsByCategory></div>
            <div data-aos="fade-up"
                data-aos-duration="3000"><HomeSecOne></HomeSecOne></div>
            <div data-aos="fade-up"
                data-aos-duration="3000"><TrustedBy></TrustedBy></div>
        </div>
    );

};

export default Home;