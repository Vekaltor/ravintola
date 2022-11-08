import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deleteDish } from "../../../actions/adminActions";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish }) => {
  const { id, name } = dish;
  const { dishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const nameDishURL = name.toLowerCase();

  const handleDeleteDish = () => {
    let idDishToDelete = id;
    const dishToDelete = dishes.find((dish) => dish.id === idDishToDelete);
    dispatch(deleteDish(dishes, dishToDelete));
  };

  const goToDish = () => {
    const extraParams = {
      state: {
        dish,
      },
    };
    navigate(`${nameDishURL}`, extraParams);
  };

  return (
    <div className="settings">
      <span className="more-info" onClick={goToDish}>
        <BsBoxArrowInUpRight />
      </span>
      <span className="delete" onClick={handleDeleteDish}>
        <RiDeleteBin5Fill />
      </span>
    </div>
  );
};

export default SettingsDish;
