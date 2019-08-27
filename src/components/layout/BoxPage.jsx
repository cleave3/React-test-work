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
      <div className="box-page">
        <div
          style={{
            display: this.state.display,
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            margin: "40px auto"
          }}
          className="box"></div>
        <div className="btn-container">
          <button onClick={this.handleClick}>Click Me</button>
        </div>
      </div>
    );
  }
}

export default BoxPage;
