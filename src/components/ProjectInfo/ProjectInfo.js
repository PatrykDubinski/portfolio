import React, { useEffect, useRef } from "react";
import "./ProjectInfo.css";

import { useHistory } from "react-router-dom";
import { TimelineMax } from "gsap";

import { ReactComponent as ArrowUp } from "../../assets/images/up-arrow-svgrepo-com.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/down-arrow-svgrepo-com.svg";

const ProjectInfo = () => {
  const myRefBG = useRef(null);
  const myRefSlides = useRef(null);
  const myRefBackBtn = useRef(null);

  const history = useHistory();
  const { images, title, descriptions } = history.location.state;

  let counter = 1;

  useEffect(() => {
    const animation = new TimelineMax();
    animation
      .fromTo(myRefBG.current, 1, { x: "-100vw" }, { x: "0" })
      .fromTo(
        myRefBackBtn.current,
        1,
        { y: "-100", opacity: "0", delay: 2 },
        { y: "0", opacity: "1" }
      )
      .fromTo(
        myRefSlides.current,
        1,
        { y: "100%", opacity: "0", delay: 1 },
        { y: "0", opacity: "1" }
      );
  }, []);

  useEffect(() => {
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const slideImages = document.querySelectorAll(
      ".projectInfo__wrapper-slide img"
    );
    console.log(slideImages);
    console.log(counter);
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

  const nextImage = () => {
    const slideImages = document.querySelectorAll(
      ".projectInfo__wrapper-slide img"
    );
    console.log(slideImages);
    console.log(counter);
    if (counter >= slideImages.length - 1) return;
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const size = slide.offsetHeight;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = "translateY(" + -size * counter + "px)";
  };

  const prevImage = () => {
    console.log(counter);
    if (counter <= 0) return;
    const slide = document.querySelector(".projectInfo__wrapper-slide");
    const size = slide.offsetHeight;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = "translateY(" + -size * counter + "px)";
  };

  return (
    <div className="projectInfo" ref={myRefBG}>
      <h2
        ref={myRefBackBtn}
        className="go_back"
        onClick={() => history.push("/")}
      >
        Go back
      </h2>
      <h2>{title}</h2>
      <div className="wrapper" ref={myRefSlides}>
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
