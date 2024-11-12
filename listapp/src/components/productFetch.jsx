
import axios from "axios";
import { useState, useEffect } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProducts(response.data);
        }
        fetchProducts();
    }, []);

    return { products };
};