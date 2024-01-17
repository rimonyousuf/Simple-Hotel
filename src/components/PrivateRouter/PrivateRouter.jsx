import React, { useContext } from 'react';
import './PrivateRouter.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h1 className='loading'>Loading</h1>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRouter;