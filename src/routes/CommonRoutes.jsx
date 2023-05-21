import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPages from '../layout/LandingPages';
import AllToys from '../pages/AllToys/AllToys';
import Blog from '../pages/Blog/Blog';
import Dashboard from '../pages/Dashboard/Dashboard';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import MyToys from '../pages/MyToys/MyToys';
import AddToys from '../pages/AddToys/AddToys';
import ManageListing from '../pages/ManageListing/ManageListing';
import StandardPages from '../layout/StandardPages';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import DashLayout from '../layout/DashLayout';
import About from '../pages/About/About';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp';
import AllToysLayout from '../layout/AllToysLayout';
import Home from '../pages/Home/Home';
import ForgetPass from '../pages/ForgetPass/ForgetPass';
import ProtectedRoutes from './ProtectedRoutes';
import ToyDetails from '../pages/ToyDetails/ToyDetails';


const CommonRoutes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPages></LandingPages>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/standard",
        element: <StandardPages></StandardPages>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/standard/blog",
                element: <Blog></Blog>
            },
            {
                path: "/standard/mytoys",
                element: <ProtectedRoutes><MyToys></MyToys></ProtectedRoutes>
            },
            {
                path: "/standard/addtoys",
                element: <ProtectedRoutes><AddToys></AddToys></ProtectedRoutes>
            },
            {
                path: "/standard/details/:id",
                element: <ProtectedRoutes>
                    <ToyDetails></ToyDetails>
                </ProtectedRoutes>,
                loader: ({ params }) => fetch(`http://localhost:4750/toys/${params.id}`)
            },
            {
                path: "/standard/about",
                element: <About></About>
            },
            {
                path: "/standard/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/standard/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/standard/forget-pass",
                element: <ForgetPass></ForgetPass>
            }
        ]
    },
    {
        path: "/alltoys",
        element: <AllToysLayout></AllToysLayout>,
        errorElement: < ErrorPage></ErrorPage>,
        children: [
            {
                path: "/alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:4750/toys")
            },
        ]

    },
    {
        path: "/dashboard",
        element: <ProtectedRoutes><DashLayout></DashLayout></ProtectedRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            },
            {
                path: "/dashboard/updateprofile",
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: "/dashboard/managelisting",
                element: <ManageListing></ManageListing>
            }
        ]

    }
])

export default CommonRoutes;