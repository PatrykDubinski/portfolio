import React from "react";
import "./Projects.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import Slider from "./Slider/Slider";

const Projects = () => {
  return (
    <section className="projects" id="work">
      <h2>My work</h2>
      <ScrollAnimation animateIn="animate__zoomInUp">
        <Slider />
      </ScrollAnimation>
    </section>
  );
};

export default Projects;
