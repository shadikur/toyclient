import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);


    return (
        <div className='flex justify-items-center items-center gap-9 flex-col p-5'>
            <img src='https://studio.uxpincdn.com/studio/wp-content/uploads/2021/06/10-error-404-page-examples-for-UX-design.png.webp' className='rounded-3xl w-[70vw]'></img>
            <div className='text-center'>
                <h2>Opps!</h2>
                <p className='text-4xl font-bold'>
                    {error.statusText || error.message}
                </p>
                <Link to={`/`} className='btn btn-secondary'>Go back to home</Link>
            </div>

        </div >
    );
};

export default ErrorPage;