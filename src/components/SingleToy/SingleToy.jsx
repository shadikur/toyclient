import React from 'react';
import './SingleToy.css'
import { Link } from 'react-router-dom';

const SingleToy = ({ toy }) => {

    const parseCategory = (shortCode) => {
        switch (shortCode) {
            case 'ttb':
                return 'Tin Toy Robots';
            case 'rob':
                return 'R.O.B';
            case 'cubelets':
                return 'Cubelets';
            case 'armtron':
                return 'Armtron';
            default:
                return '';
        }
    }
    return (

        <tr>
            <td>
                <img src={toy.toyphoto} className='h-16 w-16' alt={toy.toyname} />
            </td>
            <td>
                <div className="font-bold">{toy.toyname}</div>
            </td>
            <td>
                <div className="text-sm  ">{parseCategory(toy.category)}</div>
            </td>
            <td>
                <div className="text-sm  ">$ {toy.price}</div>
            </td>
            <td>
                <div className="text-sm ">{toy.stock}</div>
            </td>
            <td>
                <Link to={`/standard/details/${toy._id}`} className='btn btn-active btn-secondary'>View Details</Link>
            </td>
        </tr>
    );
};

export default SingleToy;