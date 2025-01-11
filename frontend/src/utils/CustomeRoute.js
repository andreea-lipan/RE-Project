import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const CustomRoute = ({  roles }) => {
    const isLoggedIn = true
    const currentUser = {name:"Ana",role:'ROLE_STUDENT'}

    // Check if the user is logged in and has the required role
    const hasRequiredRole = isLoggedIn && roles.some((role) => currentUser.role===role);

    return hasRequiredRole ? <Outlet/> : <Navigate to="/"/>;
};