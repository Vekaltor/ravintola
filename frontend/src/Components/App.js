import React, { Component } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

import Error404 from "./Main/pages/Error404/Error404";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

class App extends Component {
  state = {};

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Nav />
                  <Main />
                  <Footer />
                </>
              }
            ></Route>
            <Route path="/admin/*" exact></Route>
            <Route path="/error" exact element={<Error404 props />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
