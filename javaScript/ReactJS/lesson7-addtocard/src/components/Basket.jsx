import React from "react";
import { useCart } from "react-use-cart";

const Basket = () => {
  const {
    isEmpty,

    cartTotal,
  
  } = useCart();

  if(isEmpty) return <h1 className="text-center">Your Basket is Empty</h1>

  return (
   <section className="py-4 container">
      <h2>Total Preice: {cartTotal}</h2>
   </section>
  );
};

export default Basket;
