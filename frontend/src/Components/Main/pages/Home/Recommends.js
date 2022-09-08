import { GiClick } from "react-icons/gi";
import { MdAdsClick } from "react-icons/md";

import { recommendedFoods } from "./DataHome";

function Recommends() {
  return (
    <>
      <div className="recommends">
        <div className="recommends-header">
          <h1>
            <span>Rekomendacje</span> <span>szefa</span>
            <span>kuchni</span>
          </h1>
        </div>
        <div className="recommended">
          {recommendedFoods.map((item) => {
            return (
              <div key={item.id} className="option">
                <div className="animation-block"></div>
                <div className="click-to-show">
                  {window.innerWidth > 500 ? <MdAdsClick /> : <GiClick />}
                </div>
                <span className="animation-text">
                  <h3>{item.name}</h3>
                  <span>{item.description}</span>
                </span>
                <img src={item.srcImage} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Recommends;
