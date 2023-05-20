import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ItemsByCategory = () => {
    const [active, setActive] = useState(0);
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
                    <div className="mt-10 text-purple-950 text-3xl ">

                        <Tabs className={`flex flex-col items-center`}>
                            <TabList className="tabs">
                                <Tab className={`tab tab-bordered ${active === 1 ? 'tab-active' : ''}`} onClick={() => setActive(1)}>Tin Toy Robots</Tab>
                                <Tab className={`tab tab-bordered ${active === 2 ? 'tab-active' : ''}`} onClick={() => setActive(2)}>R.O.B</Tab>
                                <Tab className={`tab tab-bordered ${active === 3 ? 'tab-active' : ''}`} onClick={() => setActive(3)}>Armtron</Tab>
                                <Tab className={`tab tab-bordered ${active === 4 ? 'tab-active' : ''}`} onClick={() => setActive(4)}>Cubelets</Tab>
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