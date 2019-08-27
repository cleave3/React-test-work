import React, { Component } from "react";

export default class Form extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange("username")}
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            onChange={this.handleChange("password")}
            type="text"
            placeholder="******"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
