
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const loadedToys = useLoaderData();
    return (
        <div>
            <DynamicTitle subtitle={`All Toys - Get your kids found of robots`}></DynamicTitle>
            <div className='text-white bg-purple-950 rounded-2xl p-5 mt-3 w-[30vw] mx-auto text-center font-bold'>
                We have total of {loadedToys.length} {(loadedToys.length > 1) ? 'items' : 'item'}
            </div>
            <table className=" w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">

                                    <img src="" alt="Avatar Tailwind CSS Component" />
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;