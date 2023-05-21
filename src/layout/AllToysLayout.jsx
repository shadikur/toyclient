import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import Sticky from 'react-stickynode';

const AllToysLayout = () => {
    return (
        <div>
            <Sticky enabled={true} bottomBoundary={1200}>
                <Header></Header>
            </Sticky>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToysLayout;