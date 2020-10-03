import React, { useState } from "react";
import "./Nav.css";

import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const menuToggler = () => {
    setMenu(!menu);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  });

  return (
    <nav className="nav">
      <ul className="nav__navItems">
        <NavItem itemName="about">About</NavItem>
        <NavItem itemName="work">My work</NavItem>
        <NavItem itemName="tech">Technologies</NavItem>
        <NavItem itemName="contact">Contact me</NavItem>
        <NavItem>Get my CV</NavItem>
      </ul>
      <div
        onClick={menuToggler}
        className={`menuToggler ${menu ? "open" : null}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`smallNav ${menu ? "active" : null}`}>
        <ul className="smallNav__navItems">
          <NavItem itemName="about">About</NavItem>
          <NavItem itemName="work">My work</NavItem>
          <NavItem itemName="tech">Technologies</NavItem>
          <NavItem itemName="contact">Contact me</NavItem>
          <NavItem>Get my CV</NavItem>
        </ul>
      </nav>
    </nav>
  );
};

export default Nav;
