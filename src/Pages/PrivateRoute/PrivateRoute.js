import React from "react";
import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import useAuth from "../../Utilities/Hooks/useAuth";

const PrivateRoute = ({
  children,
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  let location = useLocation();

  // useEffect(() => {
  //   console.log("here, inside");
  //   if (!isAuthenticated) {
  //     return <Navigate to={`/subscription`} />;
  //   } else {
  //     return children;
  //   }
  // }, [isAuthenticated]);

  // console.log(!isAuthenticated, !loading);
  if (!isAuthenticated && !loading) {
    console.log(!isAuthenticated, !loading, "in");
    return <Navigate to="/subscription" state={{ from: location }} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
