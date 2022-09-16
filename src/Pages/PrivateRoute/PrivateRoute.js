import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Utilities/Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  let location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="/subscription" state={{ from: location }} />;
    }
  }, [isAuthenticated]);

  return children;
};

export default PrivateRoute;
