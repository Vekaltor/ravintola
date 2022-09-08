import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Reservation from "./pages/Reservation/Reservation";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error404 from "./pages/Error404/Error404";

import "./Main.css";

class Main extends Component {
  state = {};

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home load={this.scrollToTop} />}
          ></Route>
          <Route
            path="/reservation"
            element={<Reservation load={this.scrollToTop} />}
          ></Route>
          <Route
            path="/menu"
            element={<Menu load={this.scrollToTop} />}
          ></Route>
          <Route
            path="/about"
            element={<About load={this.scrollToTop} />}
          ></Route>
          <Route
            path="/contact"
            element={<Contact load={this.scrollToTop} />}
          ></Route>
          <Route path="*" element={<Navigate to={"/error"} />} />
          <Route path="/error" element={<Error404 />}></Route>
        </Routes>
      </main>
    );
  }
}

export default Main;
