import "./ProductCard.css";

const ProductCard = ({ item, isAdded, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="title-container">
        <p className="product-title">{item.name}</p>
        <p className="product-unity">{item.unity}</p>
      </div>
      <p className="product-cost">
        R$ {item.cost.toFixed(2).replace(".", ",")}
      </p>
      <div className="button-container">
        {isAdded ? (
          <button className="btn-warning btn-disabled">Adicionado</button>
        ) : (
          <button className="product-button" onClick={() => onAddToCart(item)}>
            Adicionar
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
