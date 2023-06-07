import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const navigate = useNavigate();
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.table(isLoading, isLoggedIn, user);
  if (!isLoggedIn) {

    return <Navigate to={"/login"} />;

  }
  if (isLoggedIn) {
    return children;
  }
};

export default ProtectedRoute;
