import React from "react";
import Button from "../Button";

const Main = ({ content, time }) => {
  return (
    <div className="main">
      <h3>Main Section</h3>
      <p>{content.text}</p>
      <Button />
    </div>
  );
};

export default Main;
