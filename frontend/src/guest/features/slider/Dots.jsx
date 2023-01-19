import { useContext } from "react";
import { SliderContext } from "./Slider";

function Dots() {
  const { slidesCount, goToSlide, slideNumber } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(
        <div
          key={i}
          className={`dot ${slideNumber === i ? "active" : ""}`}
          onClick={() => goToSlide(i)}
        />
      );
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}

export default Dots;
