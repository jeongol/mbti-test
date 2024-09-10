import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  const Nav = useNavigate();
  if (!user) {
    return <Nav to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
