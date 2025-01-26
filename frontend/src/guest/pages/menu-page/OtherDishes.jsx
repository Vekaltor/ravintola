import Dish from "./Dish";

function OtherDishes({ dishes }) {
  const DishComponents = dishes.map((dish, index) => (
    <Dish key={index + 1} {...dish} />
  ));

  return <div className="other-options">{DishComponents}</div>;
}

export default OtherDishes;
