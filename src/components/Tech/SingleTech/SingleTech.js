import React from "react";
import "./SingleTech.css";

const SingleTech = ({ img, tech }) => {
  return (
    <div className="singleTech">
      <div className="singleTech__image">{img}</div>
      <h2>{tech}</h2>
    </div>
  );
};

export default SingleTech;
