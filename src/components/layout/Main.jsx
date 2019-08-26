import React from "react";

const Main = ({ content, time }) => {
  return (
    <nav className="main">
      <h3>Main Section</h3>
      <p>{content.text}</p>
    </nav>
  );
};

export default Main;
