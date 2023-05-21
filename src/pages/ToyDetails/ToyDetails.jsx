import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyData = useLoaderData();
    console.log(toyData);
    return (
        <div>

        </div>
    );
};

export default ToyDetails;