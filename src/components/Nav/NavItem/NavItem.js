import React from "react";

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
  return <li onClick={handleNav}>{children}</li>;
};

export default NavItem;
