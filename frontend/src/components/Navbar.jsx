import { setUser } from "@/redux/userSlice";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const Navbar = () => {
    const { user } = useSelector(store => store.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { cart } = useSelector((store => store.product));
    const admin = user?.role ? true : false;

    const logoutHandler = async () => {
        try {
            const resp = await axios.post(`${import.meta.env.VITE_URL}/api/v1/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resp.data.success) {
                dispatch(setUser(null))
                toast.success(resp.data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log("Error in logouthandler :",error.message);
        }
    }

    return (
        <header className="bg-green-200 fixed top-0 w-full z-50 border-b border-green-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src="/ekart.png"
                        alt="Ekart Logo"
                        className="h-12 object-contain"
                    />
                </div>

                {/* Nav */}
                <nav className="flex gap-8 items-center font-semibold">
                    <ul className="flex gap-6 items-center">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                        {user && <Link to={`/profile/${user._id}`}><li>Hello {user.firstName}</li></Link>}
                        {admin && <Link to={`/dashboard/sales`} onClick={() => Navigate("/dashboard/sales")}><li>Dashboard</li></Link>}
                    </ul>

                    {/* Cart */}
                    <Link to="/cart" className="relative">
                        <ShoppingCart size={24} />
                        <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                            {cart?.items?.length || 0}
                        </span>
                    </Link>

                    {/* Button */}
                    {user ? (
                        <Button onClick={logoutHandler} className="bg-green-600 hover:bg-green-700 cursor-pointer">
                            Logout
                        </Button>
                    ) : (
                        <Button onClick={() => navigate("/login")} className="bg-linear-to-r from-blue-600 to-purple-600 cursor-pointer">
                            Login
                        </Button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
