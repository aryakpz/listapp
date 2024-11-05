import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (!cart.some(item => item.id === product.id)) {
            setCart(prevCart => [...prevCart, product]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const checkOutMessage = () => {
        {
            cart.length > 0 ?
                (
                    alert("Orderd SuccessFully !")
                ) :
                (
                    alert("Select a Product ")
                )
        }
        window.location.reload()
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, checkOutMessage }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {   
    return useContext(CartContext);
};
