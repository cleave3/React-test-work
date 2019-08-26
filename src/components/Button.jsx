import React, { Component } from "react";

class Button extends Component {
  state = {
    text: "ON"
  };
  handleClick = () => {
    let text;
    text = this.state.text === "ON" ? "OFF" : "ON";
    this.setState({ text: text });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.text}</button>
      </div>
    );
  }
}

export default Button;
