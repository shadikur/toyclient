import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ItemsByCategory = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto text-center">
                        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                            <p className="text-xs font-semibold tracking-widest text-white uppercase">
                                More than 12000 listed globally
                            </p>
                        </div>
                        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Explore products by category
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div className="mt-10 text-purple-950 text-center text-3xl ">

                        <Tabs>
                            <TabList className={`font-bold`}>
                                <Tab>Tin Toy Robots</Tab>
                                <Tab>R.O.B</Tab>
                                <Tab>Armtron</Tab>
                                <Tab>Cubelets</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>Any content 1</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 2</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 3</h2>
                            </TabPanel>
                            <TabPanel>
                                <h2>Any content 4</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ItemsByCategory;