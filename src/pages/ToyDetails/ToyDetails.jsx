import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import { FaRegHeart, FaEbay, FaAmazon } from 'react-icons/fa'
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';

const ToyDetails = () => {
    const toyData = useLoaderData();
    const { parseCategory } = useContext(AppContext);
    return (
        <div>
            <DynamicTitle
                subtitle={`Toy Details - ${toyData.name}`}>
            </DynamicTitle>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                        <div className="pr-12 sm:pr-0">
                            <div className="max-w-xs mb-12">
                                <img
                                    className=" rounded-md"
                                    src={toyData.toyphoto}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                                {toyData.toyname}
                            </h2>
                            <p>Price: ${toyData.price}</p>
                            <p>Category: {parseCategory(toyData.category)}</p>
                            <p>Sold by: {toyData.seller}</p>
                            <div className='flex flex-col space-y-3 text-xl'>
                                <button className='btn btn-secondary'><FaRegHeart className='mr-2'></FaRegHeart> Add to wish list</button>
                                <Link className='btn btn-secondary' to={toyData.amazon}><FaAmazon className='mr-2'></FaAmazon> Buy it on Amazon</Link>
                                <Link className='btn btn-secondary' to={toyData.ebay}><FaEbay className='mr-2'></FaEbay> Buy it on eBay</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Description:</h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            {toyData.description}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ToyDetails;