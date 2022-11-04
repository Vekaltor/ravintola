import { Link } from "react-router-dom";

import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const SettingsDish = ({ dish, deleteDish }) => {
  const { id } = dish;

  const handleDeleteDish = () => {
    const idDish = id;

    deleteDish(idDish);
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
