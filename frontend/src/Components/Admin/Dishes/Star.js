import { AiFillStar } from "react-icons/ai";

const Star = ({ recommended }) => {
  const className = recommended ? "star recommended" : "star";

  return (
    <div className={className}>
      <span>
        <AiFillStar />
      </span>
    </div>
  );
};

export default Star;
