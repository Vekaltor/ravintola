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

  const handleScroll = () => {
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

  const SectionComponents = props.data.map((item) => {
    return <Section key={item.id} item={item} />;
  });

  return SectionComponents;
}

function Section(props) {
  const { id, title, imageSrc, description } = props.item;
  return (
    <>
      <div className="element">
        <div className={`image ${id % 2 === 0 ? "right" : "left"}`}>
          <img src={imageSrc} alt={title} />
        </div>
        <div className="text">
          <h1>{title}</h1>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
}

export default AboutRestauration;
