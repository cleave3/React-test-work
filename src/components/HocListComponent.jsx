import React from "react";

const HocListComponent = WrappedComponent => {
  const colours = ["red", "blue", "gray", "pink", "green", "yellow"];
  const randomColours = colours[Math.floor(Math.random() * 5)];
  console.log(randomColours);

  return () => {
    return (
      <div className={randomColours}>
        <WrappedComponent />
      </div>
    );
  };
};

export default HocListComponent;
