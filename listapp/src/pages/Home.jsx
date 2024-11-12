
import React, { useState, useEffect } from "react";
import { Navbar } from "../components/navbar";
import { useCart } from "../components/CartContext";
import { useProducts } from "../components/productFetch";
import { Cart } from "./Cart";
import './home.css';

export const Home = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="productlist">
            <Navbar onSearch={handleSearch} />
            <div className="subproductlist">
                <div className="product">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="singleproduct">
                                <h2>{product.title}</h2>
                                <img src={product.image} alt={product.title} />
                                <p>Price: ${product.price}</p>
                                <button onClick={() => addToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No item Matches...!</p>
                    )}
                </div>
                <div className="cartdisplay">
                    <Cart />
                </div>
            </div>
        </div>
    );
};

