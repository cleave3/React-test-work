import React, { Component } from "react";
import HocListComponent from "../HocListComponent";

class ListPage extends Component {
  state = {
    list: [
      { id: 1, item: "stuff 1" },
      { id: 2, item: "stuff 2" },
      { id: 3, item: "stuff 3" },
      { id: 4, item: "stuff 4" }
    ]
  };
  render() {
    const items = this.state.list.map(item => {
      return <li key={item.id}>{item.item}</li>;
    });
    return (
      <div>
        {items}
        <p>Refresh to observer HOC effect</p>
      </div>
    );
  }
}
// hoc change list item colors.
export default HocListComponent(ListPage);
