import React, { useState } from "react";
import { useSelector } from "react-redux";
import cartReducer from "../features/cartSlice";

import NavBar from "./NavBar";
import Catalog from "./Catalog";
import Cart from "./Cart";

import "./Hub.css";

const Hub = ({ onGoHome }) => {
  const [view, setView] = useState("catalog");
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = (destino) => {
    if (destino === "home") {
      onGoHome();
    } else {
      setView(destino);
    }
  };

  const links = [
   
    { label: "Itens", target: "catalog" },
    { label: "Minha Lista", target: "cart" },
  ];

  return (
    <>
      <NavBar
        links={links}
        appName={"Seu Mercadão"}
        cartCount={totalItems}
        onNavigate={handleNavigate}
      />

      {view === "catalog" && <Catalog onNavigate={handleNavigate} />}
      {view === "cart" && <Cart onContinueShopping={handleNavigate} />}
    </>
  );
};

export default Hub;
