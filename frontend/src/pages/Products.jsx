import ProductCard from "../components/ProductCard";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import FiltersideBar from "../components/FiltersideBar"
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/productSlice";
import { Search } from "lucide-react";

const Products = () => {
    const { products } = useSelector(store => store.product)
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [priceRange, setpricerange] = useState([0, 999999]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [brand, setBrand] = useState("All");
    const [sortOrder, setSortOrder] = useState("")
    const dispatch = useDispatch();
    const getAllProducts = async () => {
        try {
            setLoading(true)
            const res = await axios.get("http://localhost:8090/api/v1/product")
            if (res.data.success) {
                setAllProducts(res.data.products)
                dispatch(setProducts(res.data.products))
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (!allProducts || allProducts.length === 0) {
            dispatch(setProducts([]));
            return;
        }

        let filtered = [...allProducts];

        if (search.trim() !== "") {
            filtered = filtered.filter((p) => p?.productName?.toLowerCase().includes(search.toLowerCase()))
        }

        if (category !== "All") {
            filtered = filtered.filter((p) => p.category === category)
        }
        if (brand !== "All") {
            filtered = filtered.filter((p) => p.brand === brand)
        }

        filtered = filtered.filter((p) =>
            p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        if (sortOrder === "lowToHigh") {
            filtered.sort((a, b) => a.price - b.price)
        } else if (sortOrder === "highToLow") {
            filtered.sort((a, b) => b.price - a.price)
        };

        dispatch(setProducts(filtered))
    }, [search, brand, priceRange, sortOrder, category, allProducts, dispatch])

    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <>
            <div className="pt-20 pb-10">
                <div className="max-w-7xl mx-auto flex gap-7">
                    {/* sidebar */}
                    <FiltersideBar allProducts={allProducts}
                        search={search}
                        setSearch={setSearch}
                        brand={brand}
                        setBrand={setBrand}
                        category={category}
                        setCategory={setCategory}
                        priceRange={priceRange}
                        setpricerange={setpricerange} />
                    {/* main product section */}
                    <div className="flex flex-col flex-1">
                        <div className="flex justify-end mb-4">
                            <Select onValueChange={(value)=> setSortOrder(value)}>
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Sort by Price" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="lowToHigh">Price :Low to High</SelectItem>
                                        <SelectItem value="highToLow">Price :High to Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* product grid */}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
                            {
                                products.map((product) => {
                                    return <ProductCard key={product._id} product={product}
                                        loading={loading} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;