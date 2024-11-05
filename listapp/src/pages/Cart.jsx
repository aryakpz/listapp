
import React from "react";
import { useCart } from "../components/CartContext";
import './cart.css'
import { Checkout } from "../components/checkout";

export const Cart = () => {
    const {cart,removeFromCart}=useCart()
    
    return (
        <div className="cart">
            <div className="subcart">

           
            <h2>Cart Items</h2>
            {cart.length === 0 ? (
                <h5>Your cart is empty.</h5>
            ) : (
                <div className="cartproduct">
                    {cart.map((item) => (
                        <div key={item.id} className="singlecart">
                            <h4>{item.title}</h4>
                            {/* <img src={item.image}/> */}
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item.id)}>
                                Remove from Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
         </div>
         <Checkout/>
        </div>
    );
};


