import React from "react";
import { useCart } from "./CartContext";
import '../pages/cart.css'

export const Checkout = () => {
  const { checkOutMessage } = useCart()
  return (
    <>
      <button onClick={() => checkOutMessage()} className="checkout">Check Out</button>
    </>
  )
}


