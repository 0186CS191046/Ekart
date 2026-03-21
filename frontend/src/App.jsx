import React from "react";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profiles";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import AdminSales from "./pages/admin/AdminSales";
import AdminProducts from "./pages/admin/AdminProduct";
import AddProduct from "./pages/admin/AddProduct";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import ShowUserOrders from "./pages/admin/ShowUserOrders";
import UserInfo from "./pages/admin/UserInfo";
import ProtectedRoutes from "./components/ProtectedRoutes";
import SingleProduct from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /> <Home /><Features /><Footer /></>
  },
  {
    path: "/signup",
    element: <><Signup /></>
  },
  {
    path: "/login",
    element: <><Signin /></>
  },
  {
    path: "/verify",
    element: <><Verify /></>
  },
  {
    path: "/verify/:token",
    element: <><VerifyEmail /></>
  },
  {
    path: "/profile/:id",
    element: <><ProtectedRoutes ><Navbar /><Profile /></ProtectedRoutes></>
  },
  {
    path: "/products",
    element: <><Navbar /><Products /></>
  },
    {
    path: "/products/:id",
    element: <><Navbar /><SingleProduct /></>
  },
  {
    path: "/cart",
    element: <><ProtectedRoutes><Navbar /><Cart /></ProtectedRoutes></>
  }, {
    path: "/dashboard",
    element: <><ProtectedRoutes adminOnly={true}><Navbar /><Dashboard /></ProtectedRoutes></>,
    children: [
      {
        path: "sales",
        element: <><AdminSales /></>
      },
      {
        path: "add-product",
        element: <><AddProduct /></>
      },
       {
        path: "products",
        element: <><AdminProducts /></>
      },
       {
        path: "orders",
        element: <><AdminOrders /></>
      },
       {
        path: "users",
        element: <><AdminUsers /></>
      },
       {
        path: "users/:id",
        element: <><UserInfo /></>
      },
       {
        path: "users/orders/:userId",
        element: <><ShowUserOrders /></>
      }
    ]


  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;