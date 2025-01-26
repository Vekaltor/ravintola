import React from "react";
import SlideVideo from "./SlideVideo";

export default function Slide({ data: { src, title, text } }) {
  return (
    <div className="slide">
      <SlideVideo src={src} title={title} text={text} />
    </div>
  );
}
