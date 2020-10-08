import React, { useEffect, useState } from "react";
import "./Nav.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const menuToggler = () => {
    setMenu(!menu);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".nav").classList.add("sticky");
    } else {
      document.querySelector(".nav").classList.remove("sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav">
      <ScrollAnimation
        animateIn="animate__slideInDown"
        duration={2}
        delay={4000}
        style={{
          opacity: 1,
          display: "flex",
          animationName: "slideInDown",
        }}
      >
        <ul className="nav__navItems">
          <NavItem itemName="about">About</NavItem>
          <NavItem itemName="work">My work</NavItem>
          <NavItem itemName="tech">Technologies</NavItem>
          <NavItem itemName="contact">Contact me</NavItem>
          <li className="li">
            <a
              href="https://github.com/PatrykDubinski/CV"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get my CV
            </a>
          </li>
        </ul>
      </ScrollAnimation>
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
