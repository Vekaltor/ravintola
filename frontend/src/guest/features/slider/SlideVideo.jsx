import React from "react";

import "./Slider.css";

export default function SlideVideo({ src, title, text }) {
  return (
    <>
      <video loop autoPlay muted className="slide-video">
        <source src={src} /> Your browser does not support the video tag. I
        suggest you upgrade your browser.
      </video>
      <div className="slide-contentText">
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
    </>
  );
}
