import { Link } from "react-router-dom";

const AboutMenuDescription = () => {
  return (
    <div className="aboutMenu-content">
      <div>
        <span className="header">
          <h1>Ravintola</h1>
          <span>Menu</span>
        </span>
        <span className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          repudiandae eaque quisquam reiciendis id, quibusdam adipisci, eos in
          incidunt distinctio ab laudantium aspernatur molestiae sequi expedita
          dolorem laborum blanditiis qui?
        </span>
        <span className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          repudiandae eaque quisquam reiciendis id, quibusdam adipisci, eos in
          incidunt distinctio ab laudantium aspernatur molestiae sequi expedita
          dolorem laborum blanditiis qui?
        </span>

        <div className="href-to-menu">
          <Link to="/menu">
            <span>Sprawdż oferty</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMenuDescription;
