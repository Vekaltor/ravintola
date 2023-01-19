import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

function Arrows({ changeMonth }) {
  return (
    <div className="arrows">
      <span data-direction="-1" onClick={changeMonth}>
        <BsArrowLeftSquareFill />
      </span>
      <span data-direction="1" onClick={changeMonth}>
        <BsArrowRightSquareFill />
      </span>
    </div>
  );
}

export default Arrows;
