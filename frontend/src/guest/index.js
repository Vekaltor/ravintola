import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./pages/home-page/Home";
import Menu from "./pages/menu-page/Menu";
import Reservation from "./pages/reservation-page/Reservation";
import About from "./pages/about-page/About";
import Contact from "./pages/contact-page/Contact";

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
