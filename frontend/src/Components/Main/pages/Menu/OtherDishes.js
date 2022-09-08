import Dish from "./Dish";

function OtherDishes({ dishes }) {
  return (
    <div className="other-options">
      {dishes.map((dish, index) => (
        <Dish key={index + 1} {...dish} />
      ))}
    </div>
  );
}

export default OtherDishes;
