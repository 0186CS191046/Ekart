import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import {jwtDecode}  from "jwt-decode";


const ProtectedRoutes = ({ adminOnly, children }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log("decodedToken", decodedToken);
            const isExpired = decodedToken.exp * 1000 < Date.now();
            if (isExpired) {
                navigate('/login')
            }
        }
    }, [token, navigate]);

    const { user } = useSelector(store => store.user)

    if (!user) {
        return <Navigate to="/login" />
    }

    if (adminOnly && user.role !== "admin") {
        return <Navigate to="/" />
    }
    return (
        children
    )
};

export default ProtectedRoutes;