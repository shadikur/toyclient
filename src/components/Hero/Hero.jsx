import React from 'react';
import { FaTeamspeak } from 'react-icons/fa';
import { MdOutlineLocalPostOffice } from 'react-icons/md'
import { TbMoneybag } from 'react-icons/tb'
import './Hero.css'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-800'>
            <section className="lg:min-h-[80vh] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 custom-image">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 z-20">
                    <div className="max-w-xl mx-auto text-center">
                        <h1 className="text-4xl font-bold sm:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                                {" "}
                                Simplified credit cards for students{" "}
                            </span>
                        </h1>
                        <p className="mt-5 text-base text-white sm:text-xl">
                            No more hassle taking loans and making payments. Try Postcrats credit
                            card, make your life simple.
                        </p>
                        <Link
                            to={`/alltoys`}
                            title=""
                            className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                        >
                            Get all of it
                            <svg
                                className="w-6 h-6 ml-8 -mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </Link>
                        <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0  bg-white rounded-2xl p-5 lg:text-white md:bg-transparent ">
                            <div className="flex items-center">
                                <FaTeamspeak className='text-5xl'></FaTeamspeak>
                                <p className="ml-3 text-sm ">
                                    24/7 Customer Support
                                </p>
                            </div>
                            <div className="flex items-center">
                                <MdOutlineLocalPostOffice className='text-5xl'></MdOutlineLocalPostOffice>
                                <p className="ml-3 text-sm ">
                                    Free shipping on all orders
                                </p>
                            </div>
                            <div className="flex items-center">
                                <TbMoneybag className='text-5xl'></TbMoneybag>
                                <p className="ml-3 text-sm">
                                    30 days moneyback guarantee
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;