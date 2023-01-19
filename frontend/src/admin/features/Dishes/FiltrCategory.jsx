import { RiArrowDropDownLine } from "react-icons/ri";

import { categoryMeals } from "../../../data/categoryMeals";

const FiltrCategory = ({ select }) => {
  const categories = (
    <>
      <option selected hidden value="">
        Kategorie
      </option>
      <option value="">Wszystkie</option>
      {categoryMeals.map((category, index) => (
        <option key={index} value={category.originalName}>
          {category.polishName}
        </option>
      ))}
    </>
  );

  return (
    <div className="select-wrapper">
      <select
        defaultValue=""
        className="categories"
        onChange={(e) => select(e)}
      >
        {categories}
      </select>
      <span className="arrow">
        <RiArrowDropDownLine />
      </span>
    </div>
  );
};

export default FiltrCategory;
