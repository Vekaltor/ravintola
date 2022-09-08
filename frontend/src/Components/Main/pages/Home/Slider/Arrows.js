import React, { useContext } from "react";
import { SliderContext } from "./Slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.css";

const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)}>
        <FaChevronLeft />
      </div>
      <div className="arrow right" onClick={() => changeSlide(1)}>
        <FaChevronRight />
      </div>
    </div>
  );
};

export default Arrows;
