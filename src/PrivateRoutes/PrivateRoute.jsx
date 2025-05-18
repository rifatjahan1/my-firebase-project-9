import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location =useLocation()
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;