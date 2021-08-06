import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ component: Component, ...rest }) => {
    const { currentUser, validateRole } = useAuth();
    const role = validateRole();
    return (
        <Route {...rest} render={(props) => (currentUser && role === "admin") ? <Component /> : <Redirect to="/dashboard" />} />
    )
}

export default AdminRoute;