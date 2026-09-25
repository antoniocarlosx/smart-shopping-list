import React from "react";
import "./Cart.css";

const Cart = ({onContinueShopping}) => {
  return (
    <>
      <h2 onClick={onContinueShopping}>Itens no Carrinho</h2>
    </>
  );
};

export default Cart;
