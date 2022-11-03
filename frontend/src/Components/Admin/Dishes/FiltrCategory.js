import { RiArrowDropDownLine } from "react-icons/ri";

import { categoryOrder } from "../../Main/pages/Menu/Data";

const FiltrCategory = ({ select }) => {
  const jsxOptions = (
    <>
      <option selected hidden>
        Kategorie
      </option>
      <option value="">Wszystkie</option>
      {categoryOrder.map((category) => (
        <option value={category.categoryName}>{category.polishTitle}</option>
      ))}
    </>
  );

  return (
    <div className="select-wrapper">
      <select className="categories" onChange={(e) => select(e)}>
        {jsxOptions}
      </select>
      <span className="arrow">
        <RiArrowDropDownLine />
      </span>
    </div>
  );
};

export default FiltrCategory;
