import React from "react";

import { description } from "./DataHome";
import imageChef from "../../../../img/chef_1280x1266.png";

import Recommends from "./Recommends";
import BlockImage from "./BlockImage";
import Slider from "./Slider/Slider";
import Comments from "./Comments";
import AboutRestauration from "./AboutRestauration";
import AboutMenu from "./AboutMenu";
import ButtonReservation from "./ButtonReservation";

import "./Home.css";

function Home(props) {
  return (
    <div className="home" onLoad={props.load()}>
      <section>
        <Slider />
      </section>

      <section>
        <AboutMenu />
      </section>

      <section>
        <Recommends />
      </section>

      <section>
        <Comments />
      </section>

      <section>
        <div className="sectionReservation">
          <div className="leftSide">
            <img src={imageChef} alt="imageChef" />
          </div>
          <div className="rightSide">
            <div className="btnToReservation">
              <ButtonReservation text="rezerwacja" />
            </div>
          </div>
        </div>
      </section>

      <BlockImage />

      <article>
        <div className="about-restauration">
          <span>
            <h1>Sekrety naszej kuchni </h1>
          </span>

          <div>
            <AboutRestauration data={description} />
          </div>
        </div>
      </article>

      <BlockImage />
    </div>
  );
}

export default Home;
