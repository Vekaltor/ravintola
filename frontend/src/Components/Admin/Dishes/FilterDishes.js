/* eslint-disable array-callback-return */
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateFilterDishes } from "../../../actions/adminActions";

import FiltrCategory from "./FiltrCategory";
import FiltrRecommended from "./FiltrRecommended";

import { BiSearch, BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import { useRef } from "react";

const FilterDishes = ({ applyFilters }) => {
  const [phrase, setPhrase] = useState("");
  const [category, setCategory] = useState("");
  const [isRecommended, setIsRecommended] = useState("");

  const componentRef = useRef();

  const dispatch = useDispatch();
  const { dishes } = useSelector((state) => state.admin);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = () => {
    applyFilters(filterDishes(phrase, category, isRecommended));
    dispatch(updateFilterDishes(createObjectFiltersDishes()));
    hideComponent();
  };

  const handleInputPhrase = (e) => {
    const phrase = e.target.value;
    setPhrase(phrase);
    //Real-time search of dish phrases
    applyFilters(filterDishes(phrase, category, isRecommended));
    dispatch(updateFilterDishes(createObjectFiltersDishes()));
  };

  const handleSelectCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleSelectRecommended = (e) => {
    const isRecommended = e.target.value;
    setIsRecommended(isRecommended);
  };

  const createObjectFiltersDishes = () => {
    return {
      category: category,
      phrase: phrase,
      isRecommended: isRecommended,
    };
  };

  const filterDishes = (phrase, category, isRecommended) => {
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

    if (isRecommended && isRecommended.length > 0) {
      filteredDishes = filterByRecommended(filteredDishes, isRecommended);
      isWithoutFilters = false;
    }

    if (isWithoutFilters) return dishes;
    return filteredDishes;
  };

  const filterByRecommended = (dishes, isRecommended) => {
    let filteredDishes = [];
    filteredDishes = dishes.filter((dish) => {
      if (isRecommended === "all") return dish;
      if (isRecommended === "true" && dish.isRecommended) return dish;
      if (isRecommended === "false" && !dish.isRecommended) return dish;
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

  const togglePositionComponent = () => {
    componentRef.current.classList.toggle("hidden");
    toggleIconButton();
  };

  const hideComponent = () => {
    componentRef.current.classList.add("hidden");
  };

  const [IconButton, setIconButton] = useState(<BiArrowToTop />);

  const toggleIconButton = () => {
    if (IconButton.type.name === "BiArrowToBottom")
      setIconButton(<BiArrowToTop />);
    else setIconButton(<BiArrowToBottom />);
  };

  return (
    <div className="dishes-search " ref={componentRef}>
      <form onSubmit={handleSubmit}>
        <input
          value={phrase}
          type="search"
          placeholder="Wyszukaj danie"
          onInput={handleInputPhrase}
        />
        <FiltrCategory select={handleSelectCategory} />
        <FiltrRecommended select={handleSelectRecommended} />
        <button type="submit" className="button-search" onClick={handleSearch}>
          <BiSearch />
        </button>
      </form>
      <div className="toggle-btn" onClick={togglePositionComponent}>
        {IconButton}
      </div>
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
