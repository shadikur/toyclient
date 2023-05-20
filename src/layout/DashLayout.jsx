import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Sticky from 'react-stickynode';

const DashLayout = () => {
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

export default DashLayout;