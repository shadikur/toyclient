import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import KeenSlider from '../components/KeenSlider/KeenSlider';
import SideBar from '../components/SideBar/SideBar';

const AllToysLayout = () => {
    return (
        <div>
            <Header></Header>
            <KeenSlider subtitle={'All Toys'}></KeenSlider>
            <div className="grid grid-cols-12 p-5">
                <div className="sidebar col-span-3 bg-red-800">
                    <SideBar></SideBar>
                </div>
                <div className="shopdata col-span-9">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllToysLayout;