import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer/Footer';
import Sticky from 'react-stickynode';

const LandingPages = () => {
    return (
        <div>
            <Sticky top="#header" bottomBoundary="#content">
                <Header></Header>
            </Sticky>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LandingPages;