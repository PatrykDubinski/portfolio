// Libraries import
import React, { useEffect } from "react";
import "./Header.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

// Tools imports
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import bgImg from "../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg";

// Components imports
import Nav from "../Nav/Nav";

const Header = () => {
  const contactHandler = () => {
    const el = document.getElementById("contact");
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="header" id="head">
      <img src={bgImg} alt="Coding" className="header__background" />
      <Nav />
      <div className="header__content">
        <ScrollAnimation animateIn="animate__fadeInDown" duration={2}>
          <h1 className="header__content-welcomeText">
            Hello, I'm <span className="welcomeText__changing">Patryk</span>
            <p className="under">Frontend Developer</p>
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeIn" duration={2} delay={1000}>
          <div className="header__content-socials__wrapper">
            <a
              href="https://pl-pl.facebook.com/people/Patryk-Dubi%C5%84ski/100003542379310"
              alt="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://github.com/PatrykDubinski"
              alt="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/patryk-dubi%C5%84ski-6154331b9/"
              alt="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIcon />
            </a>
          </div>
        </ScrollAnimation>
        <div className="header__content-buttons__wrapper">
          <ScrollAnimation animateIn="animate__bounceInLeft" delay={2000}>
            <button className="contactBtn" onClick={contactHandler}>
              Contact me
            </button>
          </ScrollAnimation>
          <ScrollAnimation animateIn="animate__bounceInRight" delay={2000}>
            <button className="transparentBtn">
              <a
                href="https://github.com/PatrykDubinski/CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </ScrollAnimation>
        </div>
      </div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#48dbdf"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Header;
