import React, { useContext } from 'react';
import './SingleToy.css'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';
import Swal from 'sweetalert2'


const SingleToy = ({ toy }) => {
    const { parseCategory, user } = useContext(AppContext);
    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toyserver.vercel.app/toys/${toy._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        window.location.reload();
                    })

            }
        })

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
                <br />
                {
                    (toy.email == user?.email) ? <button className='btn btn-warning' onClick={handleDelete}>Delete (Your listing)</button> : ''
                }
            </td>
        </tr>
    );
};

export default SingleToy;