import React from 'react'
import { useAuth } from '../../contexts/UserContext'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
    return user ? children : <Navigate to="/" />
}

export default PrivateRoute