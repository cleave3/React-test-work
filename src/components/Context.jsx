import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const URL = "https://jsonplaceholder.typicode.com/users";

export class Provider extends Component {
  state = {
    user: []
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(data => {
        this.setState({ user: data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
