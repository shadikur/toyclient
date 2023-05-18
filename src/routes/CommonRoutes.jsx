import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from 'react-router-dom';
import LandingPages from '../layout/LandingPages';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import Dashboard from '../pages/Dashboard/Dashboard';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import MyToys from '../pages/MyToys/MyToys';
import AddToys from '../pages/AddToys/AddToys';
import ManageListing from '../pages/ManageListing/ManageListing';


const CommonRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPages></LandingPages>,
        errorElement: <p>Error Page </p>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "/addtoys",
                element: <AddToys></AddToys>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        errorElement: <p>Error Page</p>,
        children: [
            {
                path: "/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/managelisting",
                element: <ManageListing></ManageListing>
            }
        ]

    }
])

export default CommonRoutes;