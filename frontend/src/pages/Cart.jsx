import { CardHeader, Card, CardContent, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userLogo from "../assets/default.jpg"
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setCart } from "@/redux/productSlice";
import { toast } from "sonner";

const apiURL = "http://localhost:8090/api/v1";

const Cart = () => {
    const { cart } = useSelector(store => store.product);
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    const subtotal = cart?.totalPrice;
    const shipping = subtotal > 299 ? 0 : 10
    const tax = subtotal * 0.05  //5%
    const total = subtotal + shipping + tax;

    const loadCart = async()=>{
        try {
            const res = await axios.get(`${apiURL}/cart`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            if(res.data.success){
                dispatch(setCart(res.data.cart))
                toast.success("Cart fetched successfully!")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleQuantity = async (productId, type) => {
        try {
            const resp = await axios.put(`${apiURL}/cart`, {
                productId, type
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (resp.data.success) {
                dispatch(setCart(resp.data.cart))
            }
        } catch (error) {
            console.log(error);

        }
    }

    const removeFromCart = async (productId) => {
        try {
            const res = await axios.delete(`${apiURL}/cart`, { data: { productId } ,
             headers: {
                    Authorization: `Bearer ${token}`
                }})
            if (res.data.success) {
                dispatch(setCart(res.data.cart))
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadCart()
    },[dispatch])
    return (
        <div className="pt-20 bg-gray-50 min-h-screen">
            {
                cart?.items?.length > 0 ?
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-2xl font-bold text-gray-800 mb-7">
                            Shopping Cart
                        </h1>
                        <div className="max-w-7xl mx-auto flex gap-7">
                            <div className="flex flex-col gap-5 flex-1">
                                {
                                    cart?.items?.map((product, index) => {
                                        return <Card key={index} >
                                            <div className="flex justify-between items-center pr-7">
                                                <div className="flex items-center w-[350px]">
                                                    <img src={product?.productId?.productImg?.[0]?.url || userLogo} alt="" className="w-25 h-25" />
                                                    <div className="w-[280px] m-2">
                                                        <h1 className="font-semibold truncate">{product?.productId?.productName}</h1>
                                                        <p>₹{product?.productId?.price}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 items-center">
                                                    <Button onClick={() => handleQuantity(product?.productId?._id, "decrease")} variant="outline" className="cursor-pointer">-</Button>
                                                    <span>{product?.quantity || 0}</span>
                                                    <Button onClick={() => handleQuantity(product?.productId?._id, "increase")} variant="outline" className="cursor-pointer">+</Button>
                                                </div>
                                                <p>{(product?.price) * (product?.quantity)}</p>
                                                <p className="flex text-red-500 items-center gap-1 cursor-pointer">
                                                    <Trash2 className="w-4 h-4" onClick={() => removeFromCart(product?.productId?._id)} />Remove
                                                </p>
                                            </div>
                                        </Card>
                                    })
                                }
                            </div>
                            <div>
                                <Card className="w-[400px]">
                                    <CardHeader>
                                        <CardTitle>
                                            Order Summary
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between">
                                            <span>Subtotal ({cart.items.length} items)</span>
                                            <span>₹{cart.totalPrice.toLocaleString("en-IN")}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Shipping</span>
                                            <span>₹{subtotal}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Tax (5%)</span>
                                            <span>₹{tax}</span>
                                        </div>
                                        <Separator />
                                        <div className="flex justify-between font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹ {total}</span>
                                        </div>
                                        <div className="space-y-3 pt-4">
                                            <div className="flex space-x-2">
                                                <Input type="text" placeholder="Promo Code" />
                                                <Button variant="outline" className="cursor-pointer">Apply</Button>
                                            </div>
                                            <Button className="w-full bg-green-600 cursor-pointer">PLACE ORDER</Button>
                                            <Button variant="otline" className="w-full bg-transparent">
                                                <Link to="/products">Continue Shopping</Link></Button>
                                        </div>
                                        <div className="text-sm text-muted-foreground pt-4">
                                            <p>* Free Shipping on orders above 299</p>
                                            <p>* 30 day return policy</p>
                                            <p>* Secure checkout with SSL encryption</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div> :
                    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text center">
                        {/* icon */}
                        <div className="bg-green-100 p-6 rounded-full">
                            <ShoppingCart className="w-16 h-16 text-green-600" />
                        </div>
                        {/* title */}
                        <h2 className="mt-6 text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
                        <p className="mt-2 text-gray-600 ">Looks like you haven't added anything to your cart yet</p>
                        <Button onClick={() => navigate("/products")} className="mt-6 cursor-pointer py-3 px-3 bg-green-600 text-white rounded-xl hover:bg-green-700">Start Shopping</Button>
                    </div>
            }
        </div>
    )
}

export default Cart;