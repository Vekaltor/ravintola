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
    const response = service.makeReservation(
      this.state.date,
      this.state.time,
      this.state.amountPeople,
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.phone,
      this.state.availableTablesByHour
    );
    this.clearData();
    this.setSubmitReservation(response);
  }

  setDate(newValue) {
    this.setState({
      date: newValue,
    });
  }

  setTime(newValue) {
    this.setState({
      time: newValue,
    });
  }

  setAmountPeople(newValue) {
    this.setState({
      amountPeople: parseInt(newValue),
    });
  }

  setName(newValue) {
    this.setState({
      name: newValue,
    });
  }
  setSurname(newValue) {
    this.setState({
      surname: newValue,
    });
  }
  setEmail(newValue) {
    this.setState({
      email: newValue,
    });
  }
  setPhone(newValue) {
    this.setState({
      phone: newValue,
    });
  }

  setIsValidate(newValue) {
    this.setState({
      isValidate: newValue,
    });
  }

  setSubmitReservation(newValue) {
    this.setState({
      submitReservation: newValue,
    });
  }

  setAvailableTablesByHour(newValue) {
    this.setState({
      availableTablesByHour: newValue,
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
            setDate={this.setDate.bind(this)}
            setTime={this.setTime.bind(this)}
            setAmountPeople={this.setAmountPeople.bind(this)}
            setAvailableTablesByHour={this.setAvailableTablesByHour.bind(this)}
            setIsValidate={this.setIsValidate.bind(this)}
            setSubmitReservation={this.setSubmitReservation.bind(this)}
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
            setName={this.setName.bind(this)}
            setSurname={this.setSurname.bind(this)}
            setEmail={this.setEmail.bind(this)}
            setPhone={this.setPhone.bind(this)}
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
