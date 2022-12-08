import ProductButtons from "./ProductButtons";

const ProductInfo = ({ dish }) => {
  const { price, mealCategory, recommended, weight, id } = dish;

  return (
    <div className="dish-info">
      <div className="header">Informacje</div>
      <div className="list">
        <span>
          <span>Cena</span>
          <span>{price} zł</span>
        </span>
        <span>
          <span>Kategoria dania</span>
          <span>{mealCategory}</span>
        </span>
        <span>
          <span>Polecane</span>
          <span className="recommended-block">
            {recommended ? "tak" : "nie"}
          </span>
        </span>
        <span>
          <span>Gramatura</span> <span>{weight} g</span>
        </span>
        <span>
          <span>Identyfikator</span>
          <span>{id}</span>
        </span>
      </div>
      <ProductButtons dish={dish} />
    </div>
  );
};

export default ProductInfo;
