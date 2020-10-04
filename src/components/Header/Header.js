// Libraries import
import React from "react";
import "./Header.css";

// Tools imports
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedIcon from "@material-ui/icons/LinkedIn";
import bgImg from "../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg";
import Nav from "../Nav/Nav";

// Components imports

const Header = () => {
  // Typing name function
  let i = 0;
  const typeName = () => {
    const changingText = document.querySelector(".welcomeText__changing");
    const underText = document.querySelector(".under");
    const text = "Patryk Frontend Developer";
    if (i < 6) {
      changingText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeName, 300);
    } else {
      underText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeName, 200);
    }
  };

  window.addEventListener("load", typeName);
  // End of typing name function

  const contactHandler = () => {
    const el = document.getElementById("contact");
    el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="header" id="head">
      <img src={bgImg} alt="Coding" className="header__background" />
      <Nav />
      <div className="header__content">
        <h1 className="header__content-welcomeText">
          Hello, I'm <span className="welcomeText__changing"></span>
          <p className="under"></p>
        </h1>
        <div className="header__content-socials__wrapper">
          <a
            href="https://pl-pl.facebook.com/people/Patryk-Dubi%C5%84ski/100003542379310"
            alt="facebook"
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://github.com/PatrykDubinski"
            alt="github"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a href="https://pl.linkedin.com/" alt="linkedin" target="_blank">
            <LinkedIcon />
          </a>
        </div>
        <div className="header__content-buttons__wrapper">
          <button onClick={contactHandler}>Contact me</button>
          <button>Download CV</button>
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
