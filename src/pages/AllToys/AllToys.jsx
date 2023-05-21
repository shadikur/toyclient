
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { useLoaderData } from 'react-router-dom';
import SingleToy from '../../components/SingleToy/SingleToy';

const AllToys = () => {
    const loadedToys = useLoaderData();
    console.log(loadedToys);
    return (
        <div>
            <DynamicTitle subtitle={`All Toys - Get your kids found of robots`}></DynamicTitle>
            <div className='text-white bg-purple-950 rounded-2xl p-5 mt-3 mb-3 w-[30vw] mx-auto text-center font-bold'>
                We have total of {loadedToys.length} {(loadedToys.length > 1) ? 'items' : 'item'}
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
                        loadedToys.map(toy =>
                            <SingleToy key={toy._id} toy={toy}></SingleToy>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;