import React from "react";
import "./Socials.css";

import bg from "../../assets/images/safar-safarov-MSN8TFhJ0is-unsplash.jpg";

const Socials = () => {
  return (
    <footer className="socials">
      <img src={bg} alt="Background" />
      <div className="socials__wrapper">
        <div className="socials__wrapper-box">
          <a href="/fb-link" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </div>
        <div className="socials__wrapper-box">
          <a href="/github-link" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div className="socials__wrapper-box">
          <a href="/linked-link" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Socials;
