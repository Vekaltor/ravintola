import { Link } from "react-router-dom";

import { pathToApi } from "../../PathToAPI";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish, dishes, setDishes }) => {
  const { id } = dish;

  const handleDeleteDish = () => {
    const idDish = id;
    deleteDish(idDish);
  };

  const deleteDish = (idDishToDelete) => {
    const newListDishes = dishes.filter((dish) => dish.id !== idDishToDelete);
    setDishes(newListDishes);
    fetch(pathToApi + `api/menu/${idDishToDelete}`, {
      method: "DELETE",
    }).catch((error) => console.log(error));
  };

  return (
    <div className="settings">
      <Link to={`danie:${id}}`}>
        <span className="more-info">
          <BsBoxArrowInUpRight />
        </span>
      </Link>
      <span className="delete" onClick={handleDeleteDish}>
        <RiDeleteBin5Fill />
      </span>
    </div>
  );
};

export default SettingsDish;
