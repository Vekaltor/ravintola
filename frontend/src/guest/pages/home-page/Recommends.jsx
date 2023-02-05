import { GiClick } from "react-icons/gi";
import { MdAdsClick } from "react-icons/md";

import { recommendedFoods } from "../../../data/recommendedFoods";
import RecommendedFood from "./RecommendedFood";

function Recommends() {
  const Icon = window.innerWidth > 500 ? <MdAdsClick /> : <GiClick />;

  const RecommendedFoodComponents = recommendedFoods.map((item) => (
    <RecommendedFood
      key={item.id}
      name={item.name}
      description={item.description}
      src={item.srcImage}
      Icon={Icon}
    />
  ));

  return (
    <section>
      <div className="recommends">
        <div className="recommends-header">
          <h1>
            <span>Rekomendacje</span> <span>szefa</span>
            <span>kuchni</span>
          </h1>
        </div>
        <div className="recommended">{RecommendedFoodComponents}</div>
      </div>
    </section>
  );
}

export default Recommends;
