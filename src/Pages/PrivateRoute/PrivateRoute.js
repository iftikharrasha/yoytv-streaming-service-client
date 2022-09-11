import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Utilities/Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
	const { loggedInUser } = useAuth();
	
    let location = useLocation();

	if (!loggedInUser?.isSignedIn) {
		return <Navigate to="/subscription" state={{ from: location }} />;
	}
	
	return children;
};

export default PrivateRoute;