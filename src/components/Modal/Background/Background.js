import React from "react";
import "./Background.css";

const Background = ({ children, closeModal }) => {
  return (
    <div className="background" onClick={() => closeModal(false)}>
      {children}
    </div>
  );
};

export default Background;
