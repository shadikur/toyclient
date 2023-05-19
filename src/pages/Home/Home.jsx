import React from 'react';
import Hero from '../../components/Hero/Hero';
import HomeSecOne from '../../components/Sections/HomeSecOne';
import Pricing from '../../components/Sections/Pricing';
import TrustedBy from '../../components/Sections/TrustedBy';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';
import ItemsByCategory from '../../components/Sections/ItemsByCategory';

const Home = () => {
    return (
        <div>
            <DynamicTitle
                subtitle={`Test template`}
                description={`Test Description`}>
            </DynamicTitle>
            <Hero></Hero>
            <ItemsByCategory></ItemsByCategory>
            <HomeSecOne></HomeSecOne>
            <Pricing></Pricing>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;