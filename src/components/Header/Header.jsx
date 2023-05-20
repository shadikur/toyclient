import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { FaRegHeart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import Swal from 'sweetalert2'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { user, logOut } = useContext(AppContext);

    const handleLogout = () => {
        logOut().then(result => {
            Swal.fire(
                {
                    icon: 'success',
                    text: 'Successfully logged out!',
                }
            )
        }).catch(error => {
            console.log(error);
        })
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div>
            <div className="bg-purple-950">
                <header className="sticky inset-x-0 top-0 z-10 w-full">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16 lg:h-20">
                            <div className="flex-shrink-0 mr-3">
                                <Link to={`/`} title="" className="flex">
                                    <img
                                        className="w-auto h-8"
                                        src="https://res.cloudinary.com/ddez9nchs/image/upload/v1684518608/Robotoys/white.png"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                                <Link
                                    to={`/`}
                                    title=""
                                    className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                >
                                    Home
                                </Link>
                                <Link
                                    to={`/alltoys`}
                                    title=""
                                    className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                >
                                    All toys
                                </Link>
                                <Link
                                    to={`/standard/blog`}
                                    title=""
                                    className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                >
                                    Blog
                                </Link>
                                <Link
                                    to={`/standard/about`}
                                    title=""
                                    className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                >
                                    About us
                                </Link>
                                {

                                    user ? <>
                                        <Link
                                            to={`/standard/addtoys`}
                                            title=""
                                            className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                        >
                                            Add Toys
                                        </Link>
                                        <Link
                                            to={`/standard/mytoys`}
                                            title=""
                                            className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                                        >
                                            My Toys
                                        </Link>
                                    </> : ''
                                }
                            </div>
                            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                                {
                                    user ?
                                        <div className="flex justify-center items-center space-x-4">
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle">
                                                    <div className="indicator">
                                                        <FaRegHeart className='text-white text-3xl'></FaRegHeart>
                                                        <span className="badge badge-sm indicator-item">{0}</span>
                                                    </div>
                                                </label>
                                                <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                                    <div className="card-body">
                                                        <span className="font-bold text-lg">{0} Items</span>
                                                        <div className="card-actions">
                                                            <button className="btn btn-primary btn-block">Wish List</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex text-white items-center justify-items-center">
                                                    <div className="w-10 rounded-full">
                                                        {
                                                            user?.photoURL ?
                                                                <img src={user?.photoURL} /> : (<CgProfile className='text-white text-3xl mt-1'></CgProfile>)

                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            user?.displayName ?
                                                                <h2>{user?.displayName.split(" ")[0]}</h2> : <h2>User</h2>
                                                        }
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <Link to={`/dashboard/updateprofile`} className="justify-between">
                                                            Profile
                                                        </Link>
                                                    </li>
                                                    <li><Link to={`/dashboard`}>Dasboard</Link></li>
                                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        :
                                        <div className='space-x-3'>
                                            <Link
                                                to={`/standard/signin`}
                                                title=""
                                                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
                                            >
                                                Sign In
                                            </Link>
                                            <Link
                                                to={`/standard/signup`}
                                                title=""
                                                className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                                                role="button"
                                            >
                                                Join
                                            </Link>
                                        </div>
                                }

                            </div>
                            <button
                                type="button"
                                className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-purple-700 hover:bg-purple-700"
                                onClick={toggleMenu}
                            >
                                {/* Menu open: "hidden", Menu closed: "block" */}
                                <svg
                                    className={`block w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                                {/* Menu open: "block", Menu closed: "hidden" */}
                                <svg
                                    className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
                        <Link href="#" title="" className="block text-gray-800 py-2 px-4 hover:bg-gray-200">
                            Features
                        </Link>
                        <Link href="#" title="" className="block text-gray-800 py-2 px-4 hover:bg-gray-200">
                            Solutions
                        </Link>
                        <Link href="#" title="" className="block text-gray-800 py-2 px-4 hover:bg-gray-200">
                            Resources
                        </Link>
                        <Link href="#" title="" className="block text-gray-800 py-2 px-4 hover:bg-gray-200">
                            Pricing
                        </Link>
                    </div>
                </header>
            </div>

        </div>
    );
};

export default Header;