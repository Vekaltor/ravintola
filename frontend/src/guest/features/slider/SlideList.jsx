import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

import "./Slider.css";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  const SlideComponents = items.map((slide, index) => (
    <Slide key={index} data={slide} />
  ));

  return (
    <div
      className="slide-list"
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {SlideComponents}
    </div>
  );
}
