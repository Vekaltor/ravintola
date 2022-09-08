function Dish({ name, weight, description, price }) {
  return (
    <div className="option">
      {console.log()}
      <div className="item">
        <span className="name">
          {name}
          <span>({weight} G)</span>
        </span>
        <span className="price"> ${price}.00</span>
      </div>

      <span className="ingredients">{description}</span>
    </div>
  );
}

export default Dish;
