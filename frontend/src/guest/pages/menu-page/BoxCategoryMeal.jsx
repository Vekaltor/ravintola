import { useEffect } from "react";

import HeaderCategory from "./HeaderCategory";
import FirstDish from "./FirstDish";
import OtherDishes from "./OtherDishes";
import { useState } from "react";

function BoxCategoryMeal({ category, dishes }) {
  const [firstRecommendedDish, setFirstRecommendedDish] = useState();
  const [otherDishes, setOtherDishes] = useState();

  const separatedOneRecommendedDish = () => {
    const recommendedDish = dishes.find((dish) => dish.isRecommended === true);
    const otherDishes = dishes.filter((dish) => dish !== recommendedDish);
    setFirstRecommendedDish(recommendedDish);
    setOtherDishes(sortByName(otherDishes));
  };

  const compareNameMeals = (a, b) => {
    let firstName = a.name.toLowerCase();
    let secondName = b.name.toLowerCase();
    if (firstName > secondName) return 1;
    else if (firstName < secondName) return -1;
    return 0;
  };

  const sortByName = (dishes) => dishes.sort(compareNameMeals);

  useEffect(() => {
    separatedOneRecommendedDish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!firstRecommendedDish) return null;

  return (
    <div className="category">
      <HeaderCategory {...category} />
      <FirstDish key={0} dish={firstRecommendedDish} />
      <OtherDishes dishes={otherDishes} />
    </div>
  );
}

export default BoxCategoryMeal;
