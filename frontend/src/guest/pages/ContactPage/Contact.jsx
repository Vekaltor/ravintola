import React from "react";

import Form from "./Form";
import ContactIcons from "./ContactIcons";
import InitialView from "../../components/InitialView";

import "./Contact.css";

function Contact() {
  return (
    <div>
      <InitialView className="contact-start-view" title="kontakt" />
      <ContactIcons />
      <Form />
    </div>
  );
}

export default Contact;
