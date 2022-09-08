import React from "react";

import Form from "./Form";
import ContactIcons from "./ContactIcons";

import "./Contact.css";

function Contact(props) {
  return (
    <div onLoad={props.load()}>
      <div className="contact-start-view">
        <div>
          <div className="decoration"></div>
          <div className="header-text">
            <h1>kontakt</h1>
          </div>
          <div className="decoration"></div>
        </div>
      </div>
      <ContactIcons />
      <Form />
    </div>
  );
}

export default Contact;
