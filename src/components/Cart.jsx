import React, { useState } from "react";
import "./Cart.css";
import {
  removeItem,
  togglePickItem,
  incrementItem,
  decrementItem,
} from "../features/cartSlice";

import { useDispatch, useSelector } from "react-redux";

const Cart = ({ onContinueShopping }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const pickedItems = cartItems.filter((item) => item.picked);
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleTogglePickItem = (item) => {
    dispatch(togglePickItem(item));
  };

  const handleIncrementItem = (item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrementItem = (item) => {
    dispatch(decrementItem(item));
  };

  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.cost * item.quantity, 0);
  };

  const totalPickedAmount = pickedItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0,
  );

  const calculateItemTotalCost = (item) => {
    const totalCostItem = item.cost * item.quantity;
    return totalCostItem;
  };

  return (
    <>
      <main className="cart-container">
        {cartItems && cartItems.length > 0 ? (
          <div className="cart-header">
            <div className="total-value-container">
              <h2>Valor Total do Carrinho</h2>
              <span className="total-value">
                R${" "}
                {calculateTotalAmount(cartItems).toFixed(2).replace(".", ",")}
              </span>
            </div>

            {pickedItems && pickedItems.length > 0 ? (
              <div className="total-picked-container">
                {" "}
                <div className="divider"></div>
                <div className="picked-itens">
                  <h2>Total dos Itens Pegos</h2>
                  <span className="total-value">
                    R$ {totalPickedAmount.toFixed(2).replace(".", ",")}
                  </span>{" "}
                </div>
              </div>
            ) : (
              <span></span>
            )}
          </div>
        ) : (
          <div className="cart-header">
            <span>Lista Vazia</span>
          </div>
        )}

        <div className="cart-grid">
          {cartItems.map((item) => (
            <div className="cart-item-card" key={item.id}>
              <div className="container-name">
                <p className="cart-item-name">{item.name}</p>
              </div>
              <div className="details-container">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    checked={item.picked || false}
                    onChange={() => handleTogglePickItem(item.id)}
                  />
                </div>
                <div className="controls-row">
                  <div className="unity-container">
                    <span className="label">
                      UND: {item.unity.toUpperCase()}
                    </span>
                    <div className="unity-price">
                      UNITÁRIO: R$ {item.cost.toFixed(2).replace(".", ",")}
                    </div>
                  </div>
                  <div className="quantity-container">
                    <span className="label">QTD</span>
                    <div className="quantity-box">
                      <button
                        onClick={() => handleDecrementItem(item)}
                        className="action-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrementItem(item)}
                        className="action-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="divider"></div>
                  <div className="total-container">
                    <span className="label">VALOR TOTAL</span>
                    <p className="total-value">
                      R${" "}
                      {calculateItemTotalCost(item)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                  </div>
                  <div className="delete-container">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="delete-btn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="continue_shopping_btn">
          <button className="get-started-button">Adicionar Itens</button>
          {cartItems && cartItems.length > 0 ? (
            <button className="shopping-btn">Finalizar Compra</button>
          ) : (
            <span></span>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
