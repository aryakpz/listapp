
import React, { useState } from "react";
import './navbar.css'
import logo from '../asset/cart-shopping-solid.svg'
import { useCart } from "./CartContext";
import { Checkout } from "./checkout";


export const Navbar = ({ onSearch }) => {

    const {cart}=useCart()

    const handleInputChange = (event) => {
        onSearch(event.target.value);
    };

    const handlecart =()=>{
        const c=document.querySelector('.cartdisplay')
        console.log(c)
        c.classList.toggle('scart')
    }
    return (
        <div className="navbar">
            <div className="subnavbar">
            <h3>MyShop</h3>
                <input
                    type="text"
                    placeholder="Search for products..."
                    onChange={handleInputChange}
                />
             <span onClick={handlecart} className="cartlogo"><img src={logo}/><h4>cart</h4> <p className="count">{cart.length}</p></span>
            </div>
        </div>
    );
};

