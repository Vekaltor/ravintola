import { Link } from "react-router-dom";

import image from "../../../../img/food2_1920x1280.jpg";

function AboutMenu() {
  return (
    <>
      <div className="aboutMenu">
        <div className="aboutMenu-content">
          <div>
            <span className="header">
              <h1>Ravintola</h1>
              <span>Menu</span>
            </span>
            <span className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              repudiandae eaque quisquam reiciendis id, quibusdam adipisci, eos
              in incidunt distinctio ab laudantium aspernatur molestiae sequi
              expedita dolorem laborum blanditiis qui?
            </span>
            <span className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              repudiandae eaque quisquam reiciendis id, quibusdam adipisci, eos
              in incidunt distinctio ab laudantium aspernatur molestiae sequi
              expedita dolorem laborum blanditiis qui?
            </span>

            <div className="href-to-menu">
              <Link to="/menu">
                <span>Sprawdż oferty</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="aboutMenu-image">
          <img src={image} alt="food" />
        </div>
      </div>
    </>
  );
}

export default AboutMenu;
