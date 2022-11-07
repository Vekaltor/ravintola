import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteDish } from "../../../actions/adminActions";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish }) => {
  const { id, name } = dish;
  const nameDishToUrl = name.toLowerCase();
  const { dishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const handleDeleteDish = () => {
    let idDishToDelete = id;
    const dishToDelete = dishes.find((dish) => dish.id === idDishToDelete);
    dispatch(deleteDish(dishes, dishToDelete));
  };

  return (
    <div className="settings">
      <Link to={`:${nameDishToUrl}}`}>
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
