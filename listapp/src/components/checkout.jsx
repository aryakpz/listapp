import React from "react";
import { useCart } from "./CartContext";

export const Checkout=()=>{
  const {checkOutMessage}=useCart()
    return(
    <>
      <button onClick={()=>checkOutMessage()}>Check Out</button>
    </>
    )
}


