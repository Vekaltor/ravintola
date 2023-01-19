import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Menu from "./pages/MenuPage/Menu";
import Reservation from "./pages/ReservationPage/Reservation";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";

import "./index.css";

class Main extends Component {
  state = {};

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Navigate to={"/error"} />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
