import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Storage from './Storage';

export const CustomRoute = ({  roles }) => {
    const isLoggedIn = !!Storage.getUserId();
    const currentUserRole = Storage.getUserRole();

    // Check if the user is logged in and has the required role
    const hasRequiredRole = isLoggedIn && roles.some((role) => currentUserRole===role);

    return hasRequiredRole ? <Outlet/> : <Navigate to="/"/>;
};