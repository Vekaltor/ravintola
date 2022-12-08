import React, { Component } from "react";

import BookingDetails from "./BookingDetail/BookingDetails";
import PersonalData from "./PersonelData/PersonalData";
import Announcement from "./Announcement";

import ReservationDataValidator from "./ReservationDataValidator";
import ReservationService from "./ReservationService";
import ReservationContext from "./ReservationContext";

class FormReservation extends Component {
  state = {
    date: this.formatDate(new Date()),
    time: "",
    amountPeople: 2,
    name: "",
    surname: "",
    email: "",
    phone: "",
    availableTablesByHour: [],
    submitReservation: false,
  };

  validator = new ReservationDataValidator(".form-reservation > form");

  handleClick() {
    this.validator.validateForm();
    if (this.validator.isValidate) this.submitReservation();
  }

  handleSubmitForm(e) {
    e.preventDefault();
  }

  handleFocus = (e) => {
    for (const element of e.target.parentElement.children) {
      if (element.className === "icon") element.className = "icon active";
    }
  };

  handleBlur = (e) => {
    for (const element of e.target.parentElement.children) {
      if (element.className === "icon active") element.className = "icon";
    }
  };

  submitReservation() {
    const service = new ReservationService();
    const response = service.makeReservation(this.state);

    this.setDataFormState("submitReservation", response);
    this.clearData();
  }

  setDataFormState(name, newValue) {
    if (name === "amountPeople") newValue = parseInt(newValue);
    this.setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  }

  clearData = () => {
    this.setState((prevState) => ({
      ...prevState,
      date: this.formatDate(new Date()),
      time: "",
      amountPeople: 2,
      name: "",
      surname: "",
      email: "",
      phone: "",
    }));
  };

  padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  formatDate(date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  render() {
    const announcementComponent = this.state.submitReservation ? (
      <Announcement />
    ) : null;

    return (
      <ReservationContext.Provider
        value={{
          date: this.state.date,
          time: this.state.time,
          amountPeople: this.state.amountPeople,
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          phone: this.state.phone,
          setDataFormState: this.setDataFormState.bind(this),
          formatDate: this.formatDate.bind(this),
          padTo2Digits: this.padTo2Digits.bind(this),
          focus: this.handleFocus.bind(this),
          blur: this.handleBlur.bind(this),
        }}
      >
        <div className="form-reservation">
          <h1>Zarezerwuj stolik</h1>
          <form method="POST" onSubmit={(e) => this.handleSubmitForm(e)}>
            <BookingDetails />
            <PersonalData />
            <input
              className="inputSubmit"
              type="submit"
              value="poproś o rezerwację"
              onClick={this.handleClick.bind(this)}
            />
            {announcementComponent}
          </form>
        </div>
      </ReservationContext.Provider>
    );
  }
}

export default FormReservation;
