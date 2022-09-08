import HeaderCategory from "./HeaderCategory";
import FirstDish from "./FirstDish";
import OtherDishes from "./OtherDishes";

function BoxCategoryMeal({ category, dishes }) {
  let seperatedDishes = [];

  const filterDishes = () => {
    seperatedDishes = dishes.filter((dish) =>
      isCorrectlyCategory(dish.mealCategory)
    );
  };

  const isCorrectlyCategory = (categoryOfDish) => {
    return category.categoryName === categoryOfDish;
  };

  return (
    <>
      <div className="category" onLoad={filterDishes()}>
        <HeaderCategory {...category} />
        <FirstDish key={0} {...seperatedDishes[0]} />
        <OtherDishes
          dishes={seperatedDishes.slice(1, seperatedDishes.length)}
        />
      </div>
    </>
  );
}

export default BoxCategoryMeal;
