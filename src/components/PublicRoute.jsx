import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route {...rest} render={(props) => !currentUser ? <Component /> : <Redirect to="/dashboard" />} />
    )
}

export default PublicRoute;