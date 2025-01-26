import React from "react";

export default function SlideVideo({ src, title, text }) {
  return (
    <section>
      <video loop autoPlay muted className="slide-video">
        <source src={src} /> Your browser does not support the video tag. I
        suggest you upgrade your browser.
      </video>
      <div className="slide-contentText">
        <h2>{title}</h2>
        <span>{text}</span>
      </div>
    </section>
  );
}
