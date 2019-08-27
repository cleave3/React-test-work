import React, { Component } from "react";

class TwoBox extends Component {
  state = {
    red: "block",
    green: "block"
  };
  handleChange = e => {
    if (e.target.value === "green") {
      this.setState({ red: "none" });
    } else if (e.target.value === "red") {
      this.setState({ green: "none" });
    } else {
      this.setState({ red: "block", green: "block" });
    }
  };

  render() {
    return (
      <div className="box-page">
        <div
          style={{
            display: this.state.red,
            width: "50px",
            height: "50px",
            backgroundColor: "red",
            margin: "40px auto"
          }}
          className="box"></div>
        <div
          style={{
            display: this.state.green,
            width: "50px",
            height: "50px",
            backgroundColor: "green",
            margin: "40px auto"
          }}
          className="box"></div>
        <input onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default TwoBox;
