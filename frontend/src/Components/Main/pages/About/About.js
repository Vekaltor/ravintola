import React from "react";

import "./About.css";
import Content from "./Content";

function About(props) {
  return (
    <div onLoad={props.load()}>
      <div className="about-start-view">
        <div>
          <div className="decoration"></div>
          <div className="header-text">
            <h1>o nas</h1>
          </div>
          <div className="decoration"></div>
        </div>
      </div>
      <section>
        <Content />
      </section>
    </div>
  );
}

export default About;
