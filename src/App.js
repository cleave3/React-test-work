import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="main-section">
      <Sidebar/>
      <Main/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
