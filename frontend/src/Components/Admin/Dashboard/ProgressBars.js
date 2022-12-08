import InfoCard from "./InfoCard";

import { progressBars } from "../data/progressBars";

const ProgressBars = ({ dishes }) => {
  const amountDishes = dishes.length;
  const createProgressBars = () => {
    return progressBars.map((bar, index) => {
      // temporary way to dynamically add statistics to bar progress in one item (dishes)
      if (bar.link.includes("dishes")) bar.value = amountDishes;
      return <InfoCard key={index} bar={bar} />;
    });
  };

  const ProgressBarsJSX = createProgressBars();

  return <div className="info-cards">{ProgressBarsJSX}</div>;
};

export default ProgressBars;
