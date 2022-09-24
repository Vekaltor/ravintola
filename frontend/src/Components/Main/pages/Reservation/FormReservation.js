import React, { Component } from "react";

import BookingDetails from "./BookingDetail/BookingDetails";
import PersonalData from "./PersonelData/PersonalData";
import Announcement from "./Announcement";

import ReservationDataValidator from "./ReservationDataValidator";
import ReservationService from "./ReservationService";

class FormReservation extends Component {
  state = {
    isValidate: false,
    submitReservation: false,
    date: this.formatDate(new Date()),
    time: "",
    amountPeople: 2,
    name: "",
    surname: "",
    email: "",
    phone: "",
    availableTablesByHour: [],
  };

  validator = new ReservationDataValidator(".form-reservation > form");

  handleClick(e) {
    e.preventDefault();
    if (this.state.time === "") this.setSubmitReservation(false);
    this.validator.validateForm();
    if (this.validator.isValidate) {
      this.handleSubmitReservation();
    } else this.setIsValidate(false);
  }

  handleSubmitReservation() {
    const service = new ReservationService();
    const response = service.makeReservation(this.state);
    this.clearData();
    this.setFormState("submitReservation", response);
  }

  setFormState(name, newValue) {
    if (name === "amountPeople") newValue = parseInt(newValue);
    this.setState({
      [name]: newValue,
    });
  }

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

  clearData = () => {
    this.setState({
      isValidate: true,
      date: this.formatDate(new Date()),
      time: "",
      amountPeople: 2,
      name: "",
      surname: "",
      email: "",
      phone: "",
    });
  };

  render() {
    return (
      <div className="form-reservation">
        <h1>Zarezerwuj stolik</h1>
        <form method="POST">
          <BookingDetails
            date={this.state.date}
            time={this.state.time}
            amountPeople={this.state.amountPeople}
            setFormState={this.setFormState.bind(this)}
            formatDate={this.formatDate.bind(this)}
            padTo2Digits={this.padTo2Digits.bind(this)}
            focusIconStyle={this.handleFocus.bind(this)}
            blurIconStyle={this.handleBlur.bind(this)}
          />
          <PersonalData
            name={this.state.name}
            surname={this.state.surname}
            email={this.state.email}
            phone={this.state.phone}
            setFormState={this.setFormState.bind(this)}
            focusIconStyle={this.handleFocus.bind(this)}
            blurIconStyle={this.handleBlur.bind(this)}
          />
          <input
            className="inputSubmit"
            type="submit"
            value="poproś o rezerwację"
            onClick={(e) => this.handleClick(e)}
          />
          {this.state.submitReservation ? (
            <Announcement submitReservation={this.state.submitReservation} />
          ) : null}
        </form>
      </div>
    );
  }
}

export default FormReservation;
