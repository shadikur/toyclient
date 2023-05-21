import React from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const About = () => {
    return (
        <div>
            <DynamicTitle
                subtitle={`About us - The company you love`}>
            </DynamicTitle>
            <section className="pt-10 bg-amber-400 2xl:py-24 2xl:bg-white sm:pt-16 md:pt-0">
                <div className="px-4 mx-auto rounded-md bg-amber-400 max-w-7xl sm:px-6 lg:px-8">
                    <div className="2xl:pl-24">
                        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                            <div className="text-center md:py-16 xl:py-24 md:text-left">
                                <blockquote>
                                    <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                                        “It was during my journey of exploring robotics that the idea of RoboToy took shape. I envisioned a platform where children could discover a wide range of robot toys that not only entertained but also educated and sparked their curiosity. I wanted to create a space where they could unleash their creativity, problem-solving skills, and ignite their imagination.”
                                    </p>
                                </blockquote>
                                <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                                    <p className="text-base font-semibold text-gray-900">
                                        Jenny Wilson
                                    </p>
                                    <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                                        CEO, RoboToy
                                    </p>
                                </div>
                                <p className="mt-12 text-base text-gray-900 lg:mt-20">
                                    Want to see Robo Toy in action?
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-white transition-all duration-200 bg-black rounded-md hover:opacity-80 focus:opacity-80"
                                    role="button"
                                >
                                    Contact us
                                </a>
                            </div>
                            <div className="relative">
                                <img
                                    className="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                                    src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 bg-gray-100 sm:pt-16 lg:pt-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                            Real humans are here to help you building your business
                        </h2>
                        <p className="mt-6 text-lg text-gray-900">
                            At RoboToy, we understand the importance of human connection in building a successful business. Our dedicated team of experts is here to provide personalized support and guidance, helping you navigate the world of robot toys and grow your business with confidence. Together, lets bring your vision to life and create an exceptional experience for your customers.
                        </p>
                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700"
                            role="button"
                        >
                            <svg
                                className="w-5 h-5 mr-2 -ml-1"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                            Contact our support
                        </a>
                    </div>
                </div>
                <div className="container mx-auto 2xl:px-12">
                    <img
                        className="w-full mt-6"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png"
                        alt=""
                    />
                </div>
            </section>

        </div>
    );
};

export default About;