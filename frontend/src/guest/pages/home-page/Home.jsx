import React from "react";

import Slider from "../../features/slider/Slider";

import Recommends from "./Recommends";
import Comments from "./Comments";
import AboutMenu from "./AboutMenu";
import BannerReservation from "./BannerReservation";
import Article from "./Article";

import BlockImage from "../../components/BlockImage";

import "./Home.css";

function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="home" onLoad={scrollToTop()}>
      <Slider />
      <AboutMenu />
      <Recommends />
      <Comments />
      <BannerReservation />
      <BlockImage />
      <Article />
      <BlockImage />
    </div>
  );
}

export default Home;
