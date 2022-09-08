import React, { useEffect, useState, createContext } from "react";
import { movies } from "./DataSlider";

import Arrows from "./Arrows";
import Dots from "./Dots";

import SlidesList from "./SlideList";

export const SliderContext = createContext();

const Slider = function ({ autoPlay, autoPlayTime }) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const images = await movies;
      setItems(images);
    };
    loadData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  });

  const object = (
    <div className="slider">
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );

  return <>{window.innerWidth > 500 ? object : <></>}</>;
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 7000,
};

export default Slider;
