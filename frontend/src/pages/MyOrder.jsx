import OrderCard from "@/components/Ordercard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const MyOrder = () => {
    const [userOrder, setUserOrder] = useState([]);
    const token = localStorage.getItem("token")
    const getuserOrders = async () => {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/orders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.data.success) {
            setUserOrder(res.data.orders)
        }
    }

    useEffect(() => {
        getuserOrders()
    }, [])
    return (
        <OrderCard userOrder={userOrder}/>
    )
}

export default MyOrder;