import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

class App extends Component {
  state = {
    content: {
      text:
        "orem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum! Repellat, fugit sunt laboriosam eaque fugiat veniam? Natus possimus maxime veniam dolores tenetur reprehenderit deleniti tempora, id voluptatem impedit aspernatur."
    },
    time: []
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    const { content, time } = this.state;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar time={time} />
          <div className="main-section">
            <Sidebar />
            <Main content={content} />
          </div>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
