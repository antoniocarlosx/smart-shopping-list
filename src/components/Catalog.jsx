import React from "react";
import "./Catalog.css";

import ProductCard from "./ProductCard";
import GoCartBtn from "./GoCartBtn";
import GoHomeBtn from "./GoHomeBtn";
import { addItem } from "../features/cartSlice";
import catalogItems from "../data/items.json";
import { useDispatch, useSelector } from "react-redux";

const Catalog = ({ onNavigate }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  const grupedByCategory = catalogItems.reduce((groups, item) => {
    const productCategory = item.category;

    if (!groups[productCategory]) {
      groups[productCategory] = [];
    }
    groups[productCategory].push(item);
    return groups;
  }, {});

  const handleCartClick = () => {
    onNavigate("cart");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <h2 className="page-title">Catalogo de Produtos</h2>
      <main className="main-container">
        {Object.entries(grupedByCategory).map(([category, itemsCategory]) => {
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

        <div className="fixed-btns">
          <GoHomeBtn onClick={handleScrollToTop} />
          <GoCartBtn onAction={handleCartClick} inCart={cartItems.length} />
        </div>
      </main>
    </>
  );
};

export default Catalog;
