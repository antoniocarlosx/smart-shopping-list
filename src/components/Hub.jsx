import React, { useState } from "react";
import NavBar from "./NavBar";
import "./Hub.css";
import { useSelector } from "react-redux";

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
    </>
  );
};

export default Hub;
