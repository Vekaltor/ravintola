import React, { useContext } from "react";
import Slide from "./Slide";
import { SliderContext } from "./Slider";

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  const SlideComponents = items.map((slide, index) => (
    <Slide key={index} data={slide} />
  ));

  return (
    <aside>
      <div
        className="slide-list"
        style={{ transform: `translateX(-${slideNumber * 100}%)` }}
      >
        {SlideComponents}
      </div>
    </aside>
  );
}
