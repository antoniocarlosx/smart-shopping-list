import React from "react";
import "./Catalog.css";

import ProductCard from "./ProductCard";

import { addItem } from "../features/cartSlice";
import catalogItems from "../data/items.json";
import { useDispatch, useSelector } from "react-redux";

const Catalog = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const groupedByCategory = catalogItems.reduce((groups, item) => {
    const productCategory = item.category;

    if (!groups[productCategory]) {
      groups[productCategory] = [];
    }
    groups[productCategory].push(item);
    return groups;
  }, {});

  return (
    <>
      <h2 className="page-title">Catalogo de Produtos</h2>
      <main className="main-container">
        {Object.entries(groupedByCategory).map(([category, itemsCategory]) => {
          const sectionId = category.toLowerCase().replace(/\s+/g, "-");

          return (
            <section
              key={category}
              id={sectionId}
              className="section-container"
            >
              <h2>{category}</h2>
              <div className="product-list">
                {itemsCategory.map((item) => (
                  <ProductCard
                    key={item.name}
                    item={item}
                    isAdded={cartItems.some(
                      (product) => product.name === item.name,
                    )}
                    onAddToCart={() => handleAddToCart(item)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
};

export default Catalog;
