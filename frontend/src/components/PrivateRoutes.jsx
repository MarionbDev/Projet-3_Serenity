import React from "react";
import PropTypes from "prop-types";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

function PrivateRoutes({ authorizedRoles }) {
  const { role } = useUserContext();

  if (!authorizedRoles.find((item) => item === role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

PrivateRoutes.propTypes = {
  authorizedRoles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default PrivateRoutes;
