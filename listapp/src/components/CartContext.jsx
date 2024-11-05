import React, { createContext, useContext, useState } from 'react';
import { ThanksPage } from './thankspage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if(!cart.some(item =>item.id === product.id))
        {
            setCart(prevCart => [...prevCart, product]);
        }
     };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };
  
    const checkOutMessage=()=>{
        alert("Orderd SuccessFully !")
        return(
            <div>
            <p>orderd successfully</p>
        </div>
        )
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,checkOutMessage }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
