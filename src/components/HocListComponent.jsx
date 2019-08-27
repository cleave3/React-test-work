import React from "react";
import { Provider } from "./Context";

const HocListComponent = WrappedComponent => {
  const colours = ["red", "blue", "gray", "pink", "green", "yellow"];
  const randomColours = colours[Math.floor(Math.random() * 5)];
  console.log(randomColours);

  return () => {
    return (
      <Provider>
        <div className={randomColours}>
          <WrappedComponent />
        </div>
      </Provider>
    );
  };
};

export default HocListComponent;
