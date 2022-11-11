/* eslint-disable array-callback-return */
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateFilterDishes } from "../../../actions/adminActions";

import FiltrCategory from "./FiltrCategory";
import FiltrRecommended from "./FiltrRecommended";

import { BiSearch } from "react-icons/bi";

const FilterDishes = ({ applyFilters }) => {
  const [phrase, setPhrase] = useState("");
  const [category, setCategory] = useState("");
  const [recommended, setRecommended] = useState("");

  const dispatch = useDispatch();
  const { dishes } = useSelector((state) => state.admin);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    applyFilters(filterDishes(phrase, category, recommended));
    dispatch(updateFilterDishes(createObjectFiltersDishes()));
  };

  const handleInputPhrase = (e) => {
    const phrase = e.target.value;
    setPhrase(phrase);
    //Real-time search of dish phrases
    applyFilters(filterDishes(phrase, category, recommended));
    dispatch(updateFilterDishes(createObjectFiltersDishes()));
  };

  const handleSelectCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleSelectRecommended = (e) => {
    const recommended = e.target.value;
    setRecommended(recommended);
  };

  const createObjectFiltersDishes = () => {
    return {
      category: category,
      phrase: phrase,
      recommended: recommended,
    };
  };

  const filterDishes = (phrase, category, recommended) => {
    let filteredDishes = dishes;
    let isWithoutFilters = true;

    if (phrase && phrase.length > 0) {
      filteredDishes = filterByPhrase(filteredDishes, phrase);
      isWithoutFilters = false;
    }

    if (category && category.length > 0) {
      filteredDishes = filterByCategory(filteredDishes, category);
      isWithoutFilters = false;
    }

    if (recommended && recommended.length > 0) {
      filteredDishes = filterByRecommended(filteredDishes, recommended);
      isWithoutFilters = false;
    }

    if (isWithoutFilters) return dishes;
    return filteredDishes;
  };

  const filterByRecommended = (dishes, recommended) => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => {
      if (recommended === "all") return dish;
      if (recommended === "true" && dish.recommended) return dish;
      if (recommended === "false" && !dish.recommended) return dish;
    });
    return filteredDishes;
  };

  const filterByPhrase = (dishes, phrase) => {
    let filteredDishes = [];
    let phraseLower = phrase.toLowerCase();
    filteredDishes = dishes.filter((dish) => {
      let dishNameLower = dish.name.toLowerCase();
      if (dishNameLower.includes(phraseLower)) return dish;
    });
    return filteredDishes;
  };

  const filterByCategory = (dishes, category) => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => dish.mealCategory === category);
    return filteredDishes;
  };

  return (
    <div className="dishes-search">
      <form onSubmit={handleSubmit}>
        <input
          value={phrase}
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

const mapStateToProps = (state) => ({
  filtersDishes: state.admin.filtersDishes,
});

const mapDispatchToProps = {
  updateFilterDishes,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDishes);
