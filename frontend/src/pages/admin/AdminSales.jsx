import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { ResponsiveContainer, XAxis, YAxis, Area, AreaChart, Tooltip } from "recharts"
import Spinner from "@/components/Spinner";

const AdminSales = () => {
    const [states, setStates] = useState({
        totalUsers: 0,
        totalProducts: 0,
        totalOrders: 0,
        totalSales: 0,
        salesByDate: []
    });
    const [loading, setLoading] = useState(true)

    const fetchStates = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${import.meta.env.VITE_URL}/api/v1/orders/sales-data`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.data.success) {
                toast.success(res.data.message);
                setStates(res.data)
            }
        } catch (error) {
            console.log("Error fetching Sales Data...");
            toast.error("Error fetching Sales Data...")
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchStates();
    }, [])

    const sales = [{ date: "2026-04-01", amount: 100 },
    { date: "2026-04-02", amount: 200 }]

    if(loading){
        return(<Spinner/>)
    }else{
    return (
        <div className="bg-gray-100 py-20 mx-auto px-4">
            <div className="p-6 grid gap-6 lg:grid-cols-4">
                {/* States Card */}
                <Card className="bg-green-500 text-white shadow w-50">
                    <CardHeader>
                        <CardTitle>
                            Total Users
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">
                        {states.totalUsers}
                    </CardContent>
                </Card>
                <Card className="bg-green-500 text-white shadow">
                    <CardHeader>
                        <CardTitle>
                            Total Products
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">
                        {states.totalProducts}
                    </CardContent>
                </Card>
                <Card className="bg-green-500 text-white shadow">
                    <CardHeader>
                        <CardTitle>
                            Total Orders
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">
                        {states.totalOrders}
                    </CardContent>
                </Card>
                <Card className="bg-green-500 text-white shadow">
                    <CardHeader>
                        <CardTitle>
                            Total Sales
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-bold">
                        {states.totalSales}
                    </CardContent>
                </Card>

                {/* Sales chart */}
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Sales (last 30 days)</CardTitle>
                    </CardHeader>
                    <CardContent style={{ height: 300 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={sales}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="amount" stroke="#00C950" fill="#00C950" />
                            </AreaChart>

                        </ResponsiveContainer>

                    </CardContent>
                </Card>
            </div>

        </div>
    )
}
};

export default AdminSales;