import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import KeenSlider from '../components/KeenSlider/KeenSlider';

const AllToysLayout = () => {
    return (
        <div>
            <Header></Header>
            <KeenSlider subtitle={'All Toys'}></KeenSlider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AllToysLayout;