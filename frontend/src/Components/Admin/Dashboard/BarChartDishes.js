import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes, clearDishes } from "../../../actions/adminActions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { translatedCategories } from "../data/categoryMeals";

const BarChartDishes = ({ dishes, width, height, color, title }) => {
  // const { dishes } = useSelector((state) => state.admin);
  // const dispatch = useDispatch();

  const getNonDuplicatedCategories = (dishes) => {
    let categories = [];
    dishes.forEach((dish) => {
      if (!categories.includes(dish.mealCategory))
        categories.push(dish.mealCategory);
    });
    return categories;
  };

  const translateNameCategory = (category, translatedCategories) => {
    return translatedCategories.find(
      (translatedCategory) => category === translatedCategory.original
    ).polish;
  };

  const countDishesByCategory = (dishes, category) => {
    let counter = 0;
    dishes.forEach((dish) =>
      dish.mealCategory === category ? counter++ : null
    );
    return counter;
  };

  const dataToChart = () => {
    let data = [];
    const categoriesMeal = getNonDuplicatedCategories(dishes);
    categoriesMeal.forEach((categoryMeal) => {
      let categoryName = categoryMeal;
      let amountDishesOfCategory = countDishesByCategory(dishes, categoryName);
      let polishName = translateNameCategory(
        categoryName,
        translatedCategories
      );
      data.push({
        name: polishName,
        amount: amountDishesOfCategory,
      });
    });
    return data;
  };

  // const loadDishes = () => {
  //   dispatch(fetchDishes());
  // };

  // const disconnectDishes = () => {
  //   dispatch(clearDishes());
  // };

  // useEffect(() => {
  //   loadDishes();
  //   return () => {
  //     disconnectDishes();
  //   };
  // }, []);

  const dishesDataChart = dataToChart();

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={dishesDataChart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="ilość" dataKey="amount" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDishes;
