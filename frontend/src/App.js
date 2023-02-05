import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./guest/index";
import Admin from "./admin/index";

import Header from "./guest/layouts/header/Header";
import Footer from "./guest/layouts/footer/Footer";
import Nav from "./guest/layouts/nav/Nav";

import "./App.css";

function App() {
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
          <Route path="/admin/*" element={<Admin />} />
          {/* <Route path="/error" exact element={<Error404 props />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
