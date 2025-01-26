import { AiFillStar } from "react-icons/ai";

const Star = ({ isRecommended }) => {
  const className = isRecommended ? "star recommended" : "star";

  return (
    <div className={className}>
      <span>
        <AiFillStar />
      </span>
    </div>
  );
};

export default Star;
