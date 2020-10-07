import React, { useEffect } from "react";
import "./ProjectInfo.css";

import { useHistory } from "react-router-dom";

import { ReactComponent as ArrowUp } from "../../assets/images/up-arrow-svgrepo-com.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/down-arrow-svgrepo-com.svg";

const ProjectInfo = () => {
  const history = useHistory();
  const { images, title, descriptions } = history.location.state;
  console.log(history);
  console.log(descriptions);

  let counter = 1;

  useEffect(() => {
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const slideImages = document.querySelectorAll(
      ".projectInfo__wrapper-slide img"
    );
    const size = slide.offsetHeight;
    slide.style.transform = "translateY(" + -size * counter + "px)";
    slide.addEventListener("transitionend", () => {
      if (slideImages[counter].id === "lastClone") {
        slide.style.transition = "none";
        counter = slideImages.length - 2;
        slide.style.transform = "translateY(" + -size * counter + "px)";
      }
      if (slideImages[counter].id === "firstClone") {
        slide.style.transition = "none";
        counter = slideImages.length - counter;
        slide.style.transform = "translateY(" + -size * counter + "px)";
      }
    });
  }, []);

  useEffect(() => {
    const desc = document.querySelector(".projectInfo__desc");
    desc.innerHTML = descriptions[0];
    setTimeout(() => {
      desc.style.transform = "translateY(-100px)";
      desc.style.opacity = "0";
      setTimeout(() => {
        desc.style.transform = "translateY(0)";
        desc.style.opacity = "1";
        desc.innerHTML = descriptions[1];
      }, 1000);
    }, 10000);
    setTimeout(() => {
      desc.style.transform = "translateY(-100px)";
      desc.style.opacity = "0";
      setTimeout(() => {
        desc.style.transform = "translateY(0)";
        desc.style.opacity = "1";
        desc.innerHTML = descriptions[2];
      }, 1000);
    }, 20000);
    setTimeout(() => {
      desc.style.transform = "translateY(-100px)";
      desc.style.opacity = "0";
      setTimeout(() => {
        desc.style.transform = "translateY(0)";
        desc.style.opacity = "1";
        desc.innerHTML = descriptions[3];
      }, 1000);
    }, 30000);
    setInterval(() => {
      desc.innerHTML = descriptions[0];
      setTimeout(() => {
        desc.style.transform = "translateY(-100px)";
        desc.style.opacity = "0";
        setTimeout(() => {
          desc.style.transform = "translateY(0)";
          desc.style.opacity = "1";
          desc.innerHTML = descriptions[1];
        }, 1000);
      }, 10000);
      setTimeout(() => {
        desc.style.transform = "translateY(-100px)";
        desc.style.opacity = "0";
        setTimeout(() => {
          desc.style.transform = "translateY(0)";
          desc.style.opacity = "1";
          desc.innerHTML = descriptions[2];
        }, 1000);
      }, 20000);
      setTimeout(() => {
        desc.style.transform = "translateY(-100px)";
        desc.style.opacity = "0";
        setTimeout(() => {
          desc.style.transform = "translateY(0)";
          desc.style.opacity = "1";
          desc.innerHTML = descriptions[3];
        }, 1000);
      }, 30000);
    }, 40000);
  }, []);

  let desc;

  const nextImage = () => {
    const slideImages = document.querySelectorAll(
      ".projectInfo__wrapper-slide img"
    );
    if (counter >= slideImages.length - 1) return;
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const size = slide.offsetHeight;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateY(" + -size * counter + "px)";
  };

  const prevImage = () => {
    if (counter <= 0) return;
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const size = slide.offsetHeight;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateY(" + -size * counter + "px)";
  };

  return (
    <div className="projectInfo">
      <h2>{title}</h2>
      <div className="wrapper">
        <div className="projectInfo__wrapper">
          <div onClick={prevImage} className="arrowUp">
            <ArrowUp />
          </div>
          <div onClick={nextImage} className="arrowDown">
            <ArrowDown />
          </div>
          <div className="projectInfo__wrapper-slide">
            <img src={images[3]} alt="hulu" id="lastClone" />
            <img src={images[0]} alt="Facebook" />
            <img src={images[1]} alt="Whatsapp" />
            <img src={images[2]} alt="airbnb" />
            <img src={images[3]} alt="hulu" />
            <img src={images[0]} alt="Facebook" id="firstClone" />
          </div>
        </div>
        <div className="projectInfo__desc"></div>
      </div>
    </div>
  );
};

export default ProjectInfo;
