import React from 'react';
import { Link } from 'react-router-dom';

const TabContent = ({ toy }) => {
    return (
        <div className='mt-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={toy.toyphoto} className='h-32' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'>
                        {toy.toyname}
                    </h2>
                    <p className='text-xl'>Price: ${toy.price}  - Rating: {toy.rating}</p>
                    <p className='text-xl'>{toy.description.substr(0, 50)} ..</p>
                    <div className="card-actions justify-end">
                        <Link className="badge badge-outline" to={`/standard/details/${toy._id}`}>View details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabContent;