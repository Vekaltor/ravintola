import React, { Component } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Header />
          <Nav />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
