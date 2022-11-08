import { useState } from "react";

import DescriptionDish from "./DescriptionDish";
import EditDescriptionDish from "./EditDescriptionDish";

import { BiExit } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { AiTwotoneEdit } from "react-icons/ai";
import { BsCheckSquareFill } from "react-icons/bs";

const ProductMore = ({ dish, goToBack }) => {
  const [action, setAction] = useState(false);
  const { description } = dish;

  const descriptionDish = description ? (
    action ? (
      <EditDescriptionDish
        icon={<BsCheckSquareFill />}
        description={description}
        setAction={setAction}
      />
    ) : (
      <DescriptionDish
        icon={<AiTwotoneEdit />}
        description={description}
        setAction={setAction}
      />
    )
  ) : action ? (
    <EditDescriptionDish
      icon={<BsCheckSquareFill />}
      description="dodaj opis"
      setAction={setAction}
    />
  ) : (
    <DescriptionDish
      icon={<IoIosAddCircle />}
      description="dodaj opis"
      setAction={setAction}
    />
  );

  return (
    <div className="dish-more-info">
      <div className="header">Opis</div>
      <div className="description">{descriptionDish}</div>
      <div className="button">
        <span onClick={goToBack}>
          <BiExit />
          Cofnij
        </span>
      </div>
    </div>
  );
};

export default ProductMore;
