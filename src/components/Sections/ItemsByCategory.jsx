import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabContent from '../TabContent/TabContent';
import './TabContent.css'

const ItemsByCategory = () => {
    const [active, setActive] = useState(0);
    const [toyData, setToyData] = useState([]);
    const [category, setCategory] = useState('ttb')

    useEffect(() => {
        const fetchToyData = async () => {
            try {
                const response = await fetch(`https://toyserver.vercel.app/category/${category}/?limit=4`);
                const data = await response.json();
                setToyData(data);
            } catch (error) {
                console.error("Error fetching toy data:", error);
            }
        };
        fetchToyData();
    }, [category]);


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
                                <Tab className={`tab tab-bordered ${active === 1 ? 'tab-active' : ''}`} onClick={() => { setActive(1); setCategory('ttb') }}>Tin Toy Robots</Tab>
                                <Tab className={`tab tab-bordered ${active === 2 ? 'tab-active' : ''}`} onClick={() => { setActive(2); setCategory('rob') }}>R.O.B</Tab>
                                <Tab className={`tab tab-bordered ${active === 3 ? 'tab-active' : ''}`} onClick={() => { setActive(3); setCategory('armtron') }}>Armtron</Tab>
                                <Tab className={`tab tab-bordered ${active === 4 ? 'tab-active' : ''}`} onClick={() => { setActive(4); setCategory('cubelets') }}>Cubelets</Tab>
                            </TabList>

                            <TabPanel>
                                <div className='tabcontent'>
                                    {
                                        toyData.map(toy =>
                                            <TabContent key={toyData._id} toy={toy}></TabContent>
                                        )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='tabcontent'>
                                    {
                                        toyData.map(toy =>
                                            <TabContent key={toyData._id} toy={toy}></TabContent>
                                        )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='tabcontent'>
                                    {
                                        toyData.map(toy =>
                                            <TabContent key={toyData._id} toy={toy}></TabContent>
                                        )
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='tabcontent'>
                                    {
                                        toyData.map(toy =>
                                            <TabContent key={toyData._id} toy={toy}></TabContent>
                                        )
                                    }
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default ItemsByCategory;