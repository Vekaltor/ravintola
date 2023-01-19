import React from "react";
import InitialView from "../../components/InitialView";

import "./About.css";
import Content from "./Content";

function About() {
  return (
    <div>
      <InitialView className="about-start-view" title="o nas" />
      <section>
        <Content />
      </section>
    </div>
  );
}

export default About;
