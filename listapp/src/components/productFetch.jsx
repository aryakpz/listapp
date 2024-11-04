import axios from "axios";
import { useState, useEffect } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => setProducts(response.data))
    });

    return { products };
};
