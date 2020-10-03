import React from "react";
import "./Tech.css";

import {
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaWindows,
  FaNode,
} from "react-icons/fa";
import { SiJavascript, SiVisualstudiocode } from "react-icons/si";

import SingleTech from "./SingleTech/SingleTech";

const Tech = () => {
  return (
    <section className="tech" id="tech">
      <h2>Technologies I'm Using</h2>
      <div className="tech__wrapper">
        <SingleTech tech="git" img={<FaGitAlt />} />
        <SingleTech tech="html" img={<FaHtml5 />} />
        <SingleTech tech="css" img={<FaCss3Alt />} />
        <SingleTech tech="javascript" img={<SiJavascript />} />
        <SingleTech tech="react" img={<FaReact />} />
        <SingleTech tech="figma" img={<FaFigma />} />
        <SingleTech tech="vs code" img={<SiVisualstudiocode />} />
        <SingleTech tech="windows" img={<FaWindows />} />
        <SingleTech tech="nodejs" img={<FaNode />} />
      </div>
    </section>
  );
};

export default Tech;
