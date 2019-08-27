import React, { Component } from "react";
import HocListComponent from "../HocListComponent";
import { Consumer } from "../../components/Context";

class ListPage extends Component {
  render() {
    return (
      <Consumer>
        {data => {
          const { user } = data;
          if (user.lemgth < 1) {
            return <h3>List is Empty</h3>;
          } else {
            return (
              <React.Fragment>
                <ol>
                  {user.map(user => {
                    return <li key={user.id}>{user.name}</li>;
                  })}
                </ol>
                <p>Refresh page to see HOC change text colors</p>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
// hoc change list item colors.
export default HocListComponent(ListPage);
