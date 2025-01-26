import { Link } from "react-router-dom";
import PulseDots from "./PulseDots";

const InfoCard = (props) => {
  const bar = props;

  const globalStyle = { "--clr": bar.color, "--num": bar.percentage };
  const barValue = bar.value ? bar.value : <PulseDots />;
  const animationStyle = bar.value ? "icon-block animate" : "icon-block";
  return (
    <div className="card">
      <div className="back-details">
        <div className="details" style={globalStyle}>
          <span className="title">{bar.title}</span>
          <span className="value">{barValue}</span>
          <div className={animationStyle}>
            <span className="icon">{bar.icon}</span>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
          </div>

          <span className="link">
            <Link to={bar.link}>{bar.textForLink}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
