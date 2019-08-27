import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

class Home extends Component {
  state = {
    content: {
      text:
        "orem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum! Repellat, fugit sunt laboriosam eaque fugiat veniam? Natus possimus maxime veniam dolores tenetur reprehenderit deleniti tempora, id voluptatem impedit aspernatur."
    }
  };
  render() {
    return (
      <div>
        <div className="main-section">
          <Sidebar />
          <Main content={this.state.content} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
