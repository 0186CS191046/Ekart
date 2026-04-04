import ImageUpload from "@/components/ImageUpload";
import ProductDesc from "@/components/ProductDesc";
import { CardContent, CardFooter, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { setProducts } from "@/redux/productSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        productName: "", productDesc: "", price: 0, category: "", brand: "", productImg: []
    });
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prev) => ({ ...prev, [name]: value }))
    };

    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.product);

    const submitHandler = async (e) => {       
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("productName", productData.productName);
        formdata.append("productDesc", productData.productDesc);
        formdata.append("price", productData.price);
        formdata.append("category", productData.category);
        formdata.append("brand", productData.brand);
        if (productData.productImg.length == 0) {
            toast.error("Please select at leat one image!")
            return
        }
        productData.productImg.forEach((img) => {
            formdata.append("files", img)
        })

        try {
            setLoading(true)
            const res = await axios.post("http://localhost:8090/api/v1/product", formdata, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (res.data.success) {
                dispatch(setProducts([...products, res.data.product]));
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log("Error in submit handler :",error.message);
            toast.error("Failed to add Product!")
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex-1 flex justify-center items-start pt-5 px-6">
            <Card className="w-full my-20">
                <CardHeader>
                    <CardTitle>Add Product</CardTitle>
                    <p>Enter product details below:</p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="grid gap-2">
                            <Label>Product Name</Label>
                            <Input type="text" value={productData.productName} onChange={handleChange} placeholder="Ex-Iphone" name="productName" required />
                        </div>
                        <div className="grid gap-2 mt-2">
                            <Label>Price</Label>
                            <Input type="number" value={productData.price} onChange={handleChange} placeholder="Ex-5000" name="price" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="grid gap-2">
                                <Label>Brand</Label>
                                <Input type="text" value={productData.brand} onChange={handleChange} placeholder="Ex-Apple" name="brand" required />
                            </div>
                            <div className="grid gap-2">
                                <Label>Category</Label>
                                <Input type="text" value={productData.category} onChange={handleChange} placeholder="Ex-Phone" name="category" required />
                            </div>
                        </div>
                        <div className="grid gap-2 mt-2">
                            <div className="flex items-center">
                                <Label>Product Description</Label>
                            </div>
                            <Textarea name="productDesc" value={productData.productDesc} onChange={handleChange} placeholder="Enter brief description about product"></Textarea>
                        </div>
                        <ImageUpload productData={productData} setProductData={setProductData} />
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button disabled={loading} onClick={submitHandler} className="w-full bg-green-600 cursor-pointer mt-4" type="submit">
                        {loading ? <span className="flex gap-1 items-center"><Loader2 className="animate-spin" />Please Wait...</span> : "Add Product"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
};

export default AddProduct;