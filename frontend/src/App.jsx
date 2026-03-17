import React from "react";
import { Button } from "./components/ui/button";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Verify from "./pages/Verify";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profiles";
import Features from "./pages/Features";
import Footer from "./pages/Footer";

const router =createBrowserRouter([
  {
    path:"/",
    element: <><Navbar/> <Home/><Features/><Footer/></>
  },
  {
    path:"/signup",
    element:<><Signup/></>
  },
   {
    path:"/login",
    element:<><Signin/></>
  },
  {
    path:"/verify",
    element:<><Verify/></>
  },
   {
    path:"/verify/:token",
    element:<><VerifyEmail/></>
  },
  {
    path:"/profile",
    element:<><Navbar/><Profile/></>
  }
])

const App = ()=>{
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;