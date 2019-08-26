import React, { Component } from "react";

class BoxPage extends Component {
  state = {
    display: "block"
  };
  handleClick = () => {
    let display;
    display = this.state.display === "block" ? "none" : "block";
    this.setState({ display: display });
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: this.state.display,
            width: "200px",
            height: "200px",
            backgroundColor: "blue"
          }}
          className="box"></div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default BoxPage;
