import { useSelector, useDispatch } from "react-redux"; //
import { togglePickItem } from "../features/cartSlice";
import "./ShoppingMode.css";

const ShoppingMode = ({ onExit }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleTogglePickItem = (item) => {
    dispatch(togglePickItem(item));
  };

  const groupedByCategory = cartItems.reduce((groups, item) => {
    const productCategory = item.category;

    if (!groups[productCategory]) {
      groups[productCategory] = [];
    }
    groups[productCategory].push(item);
    return groups;
  }, {});

  const pickedItems = cartItems.filter((item) => item.picked);

  const totalPickedAmount = pickedItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0,
  );

  const calculateItemTotalCost = (item) => {
    const totalCostItem = item.cost * item.quantity;
    return totalCostItem;
  };

  return (
    <main className="main-container">
      <h2>Modo Compras</h2>

      {pickedItems && pickedItems.length > 0 ? (
        <div className="total-picked-container">
          {" "}
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

      {Object.entries(groupedByCategory).map(([category, itemsCategory]) => {
        const sectionId = category.toLowerCase().replace(/\s+/g, "-");

        return (
          <main className="main-container">
            <section
              key={category}
              id={sectionId}
              className="shopping-section-container"
            >
              <h2>{category}</h2>
              <div className="product-list">
                {itemsCategory.map((item) => (
                  <div
                    className={`product-card-shopping ${item.picked ? "picked" : ""}`}
                    key={item.id}
                    onClick={() => handleTogglePickItem(item.id)}
                  >
                    <input
                      className="input-checkbox"
                      type="checkbox"
                      checked={item.picked || false}
                      readOnly
                    />
                    <div className="details-container">
                      <div className="shopping-controls-row">
                        <div className="unity-container">
                          <span className="label">
                            UND: {item.unity.toUpperCase()}
                          </span>
                          <div className="unity-price">
                            UNITÁRIO: R${" "}
                            {item.cost.toFixed(2).replace(".", ",")}
                          </div>
                        </div>
                        <div className="quantity-container">
                          <span className="label">QTD</span>
                          <div className="quantity-box">
                            <span className="quantity">{item.quantity}</span>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        );
      })}
    </main>
  );
};

export default ShoppingMode;
