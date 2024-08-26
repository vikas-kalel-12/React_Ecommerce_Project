import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthorization from "../../hooks/useAuthorization";

const ProtectedRoute = () => {
  const { isAuthorized } = useAuthorization();

  if (!isAuthorized) {
    return <Navigate to="login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
