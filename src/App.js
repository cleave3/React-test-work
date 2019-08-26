import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-section">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
