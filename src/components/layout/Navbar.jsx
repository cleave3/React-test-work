import React from "react";

const Navbar = ({ time }) => {
  return (
    <nav className="navbar">
      <h3>{time.toLocaleString()}</h3>
    </nav>
  );
};

export default Navbar;
