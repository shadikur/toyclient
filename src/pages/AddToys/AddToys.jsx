import React, { useContext } from 'react';
import { AppContext } from '../../context/ContextProvider';
import { FaEbay, FaAmazon } from 'react-icons/fa'
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import Swal from 'sweetalert2'


const AddToys = () => {
    const { user } = useContext(AppContext);
    const handleAddToys = (event) => {
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const email = form.email.value;
        const toyname = form.toyname.value;
        const price = form.price.value;
        const toyphoto = form.toyphoto.value;
        const category = form.category.value;
        const stock = form.stock.value;
        const rating = form.rating.value;
        const amazon = form.amazon.value;
        const ebay = form.ebay.value;
        const description = form.description.value;

        const toydata = {
            seller,
            email,
            toyname,
            price,
            toyphoto,
            category,
            stock,
            rating,
            amazon,
            ebay,
            description
        }
        fetch('https://toyserver.vercel.app/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toydata)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Item added successfully',
                        text: 'Awesome, your item has been listed on our marketplace',
                    })
                }
            });
    }
    return (
        <div>
            <DynamicTitle
                subtitle={`Add toys - The best robot toys marketplace in the world`}>
            </DynamicTitle>
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Add toys
                        </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                            You can start making money by listing your robot toys in our marketplace. You can also enter your listing directly from Amazon or eBay in our marketplace so, our buyers can also purchase your item from your AWS / eBay store.
                        </p>
                        <div className='flex justify-center items-center space-x-5 text-3xl mt-4 bg-purple-950 text-white p-5 rounded-2xl'>
                            <h2>Direct Sell Support:</h2>
                            <FaAmazon></FaAmazon>
                            <FaEbay></FaEbay>
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                        <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">


                        </div>
                        <div className="mt-6 overflow-hidden bg-white rounded-xl">
                            <div className="px-6 py-12 sm:p-12">
                                <form onSubmit={handleAddToys} className="mt-14">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Your name
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="seller"
                                                    id="seller"
                                                    defaultValue={user?.displayName}
                                                    placeholder="Seller name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Email address (Can not be changed!)
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    defaultValue={user?.email}
                                                    placeholder="Seller's email"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Toy Name
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="toyname"
                                                    id="toyname"
                                                    placeholder="Enter toy name"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Price
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="price"
                                                    id="price"
                                                    placeholder="Enter the price of toy"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Photo URL
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="toyphoto"
                                                    id="toyphoto"
                                                    placeholder="Enter the photo url of a toy"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Select the category
                                            </label>
                                            <div className="mt-2.5 ">
                                                <select name='category' className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600">
                                                    <option value={`ttb`}>Tin Toy Robots</option>
                                                    <option value={`rob`}>R.O.B</option>
                                                    <option value={`armtron`}>Armtron</option>
                                                    <option value={`cubelets`}>Cubelets</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Stock Quantity
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="tel"
                                                    name="stock"
                                                    id="stock"
                                                    placeholder="Enter the quanity available in stock"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Rating (Between 0 to 5)
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="rating"
                                                    id="rating"
                                                    placeholder="Enter the public rating"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Amazon Listing (Optional)
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="amazon"
                                                    id="amazon"
                                                    placeholder="Enter url from Amazon"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                eBay Listing (Optional)
                                            </label>
                                            <div className="mt-2.5 ">
                                                <input
                                                    type="text"
                                                    name="ebay"
                                                    id="eBay"
                                                    placeholder="Enter the url from ebay"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor=""
                                                className="text-base font-medium text-gray-900"
                                            >
                                                Description
                                            </label>
                                            <div className="mt-2.5 ">
                                                <textarea
                                                    name="description"
                                                    id="description"
                                                    placeholder="Enter a brief description of your item"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows={4}
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <button
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                                            >
                                                Add Toy
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AddToys;