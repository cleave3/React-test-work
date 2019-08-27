import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/box">
        Box Page
      </NavLink>
      <NavLink className="navlink" to="/list">
        List Page
      </NavLink>
      <NavLink className="navlink" to="/form">
        Form Page
      </NavLink>
      <NavLink className="navlink" to="/twobox">
        Twobox Page
      </NavLink>
    </nav>
  );
};

export default Navbar;
