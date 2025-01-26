import image from "../../../assets/img/food2_1200x795.jpg";
import AboutMenuDescription from "./AboutMenuDescription";

function AboutMenu() {
  return (
    <section>
      <div className="aboutMenu">
        <AboutMenuDescription />
        <div className="aboutMenu-image">
          <img src={image} alt="food" />
        </div>
      </div>
    </section>
  );
}

export default AboutMenu;
