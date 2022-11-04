import { BiSearch } from "react-icons/bi";
import FiltrCategory from "./FiltrCategory";
import FiltrRecommended from "./FiltrRecommended";

import "./select";

const FilterDishes = ({
  dishes,
  phrase,
  category,
  recommended,
  setPhrase,
  setCategory,
  setRecommended,
  applyFilters,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    applyFilters(filterDishes(phrase, category, recommended));
  };

  const handleInputPhrase = (e) => {
    const phrase = e.target.value;
    setPhrase(phrase);
    //Real-time search of dish phrases
    applyFilters(filterDishes(phrase, category, recommended));
  };

  const handleSelectCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleSelectRecommended = (e) => {
    const recommended = e.target.value;
    setRecommended(recommended);
  };

  const intersection = (arrA, arrB) => {
    return arrA.filter((x) => arrB.includes(x));
  };

  const filterDishes = (phrase, category, recommended) => {
    let filteredDishes = dishes;
    let isEmpty = true;
    if (phrase && phrase.length !== 0) {
      let temporaryArray = filterByPhrase(phrase);
      filteredDishes = intersection(filteredDishes, temporaryArray);
      isEmpty = false;
    }

    if (category) {
      let temporaryArray = filterByCategory(category);
      filteredDishes = intersection(filteredDishes, temporaryArray);
      isEmpty = false;
    }

    if (recommended) {
      let temporaryArray = filterByRecommended(recommended);
      filteredDishes = intersection(filteredDishes, temporaryArray);
      isEmpty = false;
    }

    if (isEmpty) return dishes;
    return filteredDishes;
  };

  const filterByRecommended = (recommended) => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => {
      if (recommended === "all") return dish;
      if (recommended === "true" && dish.recommended) return dish;
      if (recommended === "false" && !dish.recommended) return dish;
    });
    return filteredDishes;
  };

  const filterByPhrase = (phrase) => {
    let filteredDishes = [];
    let phraseLower = phrase.toLowerCase();
    filteredDishes = dishes.filter((dish) => {
      let dishNameLower = dish.name.toLowerCase();
      if (dishNameLower.includes(phraseLower)) return dish;
    });
    return filteredDishes;
  };

  const filterByCategory = (category) => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => dish.mealCategory === category);
    return filteredDishes;
  };

  return (
    <div className="dishes-search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Wyszukaj danie"
          onInput={handleInputPhrase}
        />
        <FiltrCategory dishes={dishes} select={handleSelectCategory} />
        <FiltrRecommended select={handleSelectRecommended} />
        <button type="submit" className="button-search" onClick={handleSearch}>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default FilterDishes;
