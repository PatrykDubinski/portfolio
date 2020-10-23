import React from "react";
import "./BackToTop.css";

import { CSSTransition } from "react-transition-group";

const BackToTop = ({ visible }) => {
  const handleBack = () => {
    const el = document.getElementById("head");
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <CSSTransition in={visible} unmountOnExit timeout={500} classNames="arrow">
      <div onClick={handleBack} className="backToTop">
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </CSSTransition>
  );
};

export default BackToTop;
