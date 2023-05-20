import React, { useContext } from 'react';
import { AppContext } from '../context/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner'

const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useContext(AppContext);
    const currentLocation = useLocation();
    if (loading) {
        return (
            <div className='mx-auto p-4 w-[10vw]'>
                <Circles
                    height="80"
                    width="80"
                    color="#b950ed"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: currentLocation }} to={`/standard/signin`} replace></Navigate>
    )
};

export default ProtectedRoutes;