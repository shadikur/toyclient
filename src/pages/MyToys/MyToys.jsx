import React, { useContext, useEffect, useState } from 'react';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import { AppContext } from '../../context/ContextProvider';

const MyToys = () => {
    const { user } = useContext(AppContext)
    const [listedToys, setListedToys] = useState([]);

    useEffect(
        () => {
            fetch(`http://localhost:4750/sellerlist/${user?.email}`)
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
            <h2>Total list items by you: {listedToys.length}</h2>
        </div>
    );
};

export default MyToys;