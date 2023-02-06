import { MdPersonOutline } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

import src from "../../../assets/img/recommended_food5_400x250.jpg";

const RecentUpdates = () => {
  return (
    <div className="recent-updates">
      <div className="header"> Ostatnie aktualizacje</div>
      <div className="content">
        <div className="information">
          <span>
            <MdPersonOutline /> Admin
          </span>
          <span>
            <IoMdTime /> Grudzień 7, 2022
          </span>
        </div>
        <div className="action">
          <div className="image">
            <img src={process.env.PUBLIC_URL + src} alt="test" />
          </div>
          <span>Dodano nowe danie do menu.</span>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
