import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { configureStore } from "redux";
import allReducers from "./reducers";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Admin from "./Admin/Admin";
import Error404 from "./Main/pages/Error404/Error404";

import "./App.css";

function App() {
  let store = configureStore(allReducers);

  return (
    <Provider store={store}>
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
            <Route path="/error" exact element={<Error404 props />}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
