import React from "react";
import Button from "../Button";
import BoxPage from "./BoxPage";

const Main = ({ content, time }) => {
  return (
    <div className="main">
      <h3>Main Section</h3>
      <p>{content.text}</p>
      <Button />
      <BoxPage />
    </div>
  );
};

export default Main;
