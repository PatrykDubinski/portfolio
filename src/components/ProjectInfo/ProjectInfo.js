import React, { useEffect } from "react";
import "./ProjectInfo.css";

import { useHistory } from "react-router-dom";

import { ReactComponent as ArrowUp } from "../../assets/images/up-arrow-svgrepo-com.svg";
import { ReactComponent as ArrowDown } from "../../assets/images/down-arrow-svgrepo-com.svg";

const ProjectInfo = () => {
  const history = useHistory();
  const {
    images,
    title,
    photo_1_desc,
    photo_2_desc,
    photo_3_desc,
    photo_4_desc,
  } = history.location.state;
  return (
    <div className="projectInfo">
      <h2>{title}</h2>
      <div className="projectInfo__wrapper">
        <div className="projectInfo__wrapper-slider">
          <div className="arrowUp">
            <ArrowUp />
          </div>
          <div className="arrowDown">
            <ArrowDown />
          </div>
          <div className="slide">
            <img src={images[0]} alt="Facebook" />
          </div>
          <div className="slide">
            <img src={images[1]} alt="Whatsapp" />
          </div>
          <div className="slide">
            <img src={images[2]} alt="airbnb" />
          </div>
          <div className="slide">
            <img src={images[3]} alt="hulu" />
          </div>
        </div>
        <div className="projectInfo__wrapper-desc"></div>
      </div>
    </div>
  );
};

export default ProjectInfo;
