import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ itemName, children }) => {
  const handleNav = () => {
    if (itemName) {
      const el = document.getElementById(itemName);
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <NavLink to={`/${itemName}`} className="li">
      <li onClick={handleNav}>{children}</li>
    </NavLink>
  );
};

export default NavItem;
