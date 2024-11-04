import React from "react";
import { useNavigate } from "react-router-dom";

export const Checkout=()=>{
    const nav=useNavigate();
    const handleclick=()=>{
        nav('.thankspage')
    }
    return(
    <>
      <button onclick={handleclick}>Check Out</button>
    </>
    )
}