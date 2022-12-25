import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const location = useLocation();
    return loggedIn ? (
        <Outlet />
    ) : (
        <Navigate replace to="/login" state={{ from: location }} />
    );
};

export default ProtectedRoute;
