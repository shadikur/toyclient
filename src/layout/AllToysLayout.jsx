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

            <div className="grid grid-cols-12 p-5">
                <div className="col-span-3 bg-red-800">
                    <SideBar></SideBar>
                </div>
                <div className="col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToysLayout;