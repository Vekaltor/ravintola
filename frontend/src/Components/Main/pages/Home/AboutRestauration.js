import React, { useEffect } from "react";

function AboutRestauration(props) {
  let scrollsTop = [];
  let scrollsElements = [];

  const getScrollsTop = () => {
    let elements = [...document.querySelectorAll(".element")];
    elements.push(document.querySelector(".leftSide > img"));

    if (elements.length > 1) {
      elements.forEach((element) => {
        scrollsTop.push(element.getBoundingClientRect());
        scrollsElements.push(element);
      });
    }
  };

  const handleScroll = function () {
    getScrollsTop();
    scrollsTop.forEach((item, index) => {
      if (index === scrollsTop.length - 1 && window.innerWidth > 700) {
        if (item.y < 700) {
          scrollsElements[index].classList.add("scrolled");
        }
      } else {
        if (item.y < 600) {
          scrollsElements[index].classList.add("scrolled");
        }
      }
    });
    scrollsTop = [];
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      {props.data.map((item) => {
        return <Element key={item.id} item={item} />;
      })}
    </>
  );
}

function Element(props) {
  return (
    <>
      <div className="element">
        <div className={`image ${props.item.id % 2 === 0 ? "right" : "left"}`}>
          <img src={props.item.imageSrc} alt={props.item.title} />
        </div>
        <div className="text">
          <h1>{props.item.title}</h1>
          <span>{props.item.description}</span>
        </div>
      </div>
    </>
  );
}

export default AboutRestauration;
