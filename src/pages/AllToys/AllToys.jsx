
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../../components/SingleToy/SingleToy';
import { useState } from 'react';

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [sortData, setSortData] = useState(loadedToys);

    const handleSorting = (isAscending) => {
        const sortedData = [...sortData].sort((a, b) => {
            if (isAscending) {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        setSortData(sortedData);
    };

    return (
        <div>
            <DynamicTitle subtitle={`All Toys - Get your kids found of robots`}></DynamicTitle>
            <div className='text-white bg-purple-950 rounded-2xl p-5 mt-3 mb-3 w-[30vw] mx-auto text-center font-bold'>
                We have total of {loadedToys.length} {(loadedToys.length > 1) ? 'items' : 'item'}
            </div>

            <div>
                <div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="btn m-1">SORT DATA</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <button onClick={() => handleSorting(true)}>Price Low to High</button>
                        </li>
                        <li>
                            <button onClick={() => handleSorting(false)}>Price High to Low</button>
                        </li>
                    </ul>
                </div>
            </div>

            <table className="w-full m-3">
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortData.map(toy =>
                            <SingleToy key={toy._id} toy={toy}></SingleToy>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;