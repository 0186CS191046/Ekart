import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {toast} from "sonner";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCart } from "@/redux/productSlice";

const ProductDesc = ({ product }) => {

    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const addToCart = async (productId) => {
        try {
            const res = await axios.post(`http://localhost:8090/api/v1/cart`, { "productId": productId }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (res.data.success) {
                toast.success(res.data.message)
                dispatch(setCart(res.data.cart))
            }
        } catch (error) {
            console.log("Error in addTocart :",error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-4xl text-gray-800">
                {product.productName}
            </h1>
            <p className="text-gray-800">{product.category} | {product.brand}</p>
            <h2 className="text-green-500 font-bold text-2xl">₹{product.price}</h2>
            <p className="line-clamp-12">{product.productDesc}</p>
            <div className="flex gap-2 items-center w-[300px]">
                <p className="text-gray-800 font-semibold">Quantity :</p>
                <Input type="number" className="w-14" defaultValue = {1}/>
            </div>
            <Button onClick={()=>addToCart(product._id)} className="bg-green-600 w-max cursor-pointer ">Add to cart</Button>
        </div>
    )
};

export default ProductDesc;