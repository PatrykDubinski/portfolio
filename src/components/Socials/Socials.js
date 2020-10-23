import React from "react";
import "./Socials.css";

import bg from "../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg";

const Socials = () => {
  return (
    <footer className="socials">
      <img src={bg} alt="Background" />
      <div className="socials__wrapper">
        <div className="socials__wrapper-box">
          <a
            href="https://pl-pl.facebook.com/people/Patryk-Dubi%C5%84ski/100003542379310"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div className="socials__wrapper-box">
          <a
            href="https://github.com/PatrykDubinski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div className="socials__wrapper-box">
          <a
            href="https://www.linkedin.com/in/patryk-dubi%C5%84ski-6154331b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Socials;
