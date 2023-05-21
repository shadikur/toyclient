import React, { useContext, useEffect, useState } from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { AppContext } from '../../context/ContextProvider';
import SingleToy from '../../components/SingleToy/SingleToy';

const MyToys = () => {
    const { user } = useContext(AppContext)
    const [listedToys, setListedToys] = useState([]);

    useEffect(
        () => {
            fetch(`https://toyserver.vercel.app/sellerlist/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    setListedToys(data);
                    console.log(data);
                })
        }
        , [user?.email])
    return (
        <div>
            <DynamicTitle
                subtitle={`My Toys - All your listed items`}>
            </DynamicTitle>

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
                        listedToys.map(toy =>
                            <SingleToy key={toy._id} toy={toy}></SingleToy>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;