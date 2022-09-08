import React, { Component } from "react";

import Arrows from "./Arrows";

import CalendarContent from "./CalendarContent";
import InteractiveButtons from "./InteractiveButtons";

import "./Calendar.css";

class Calendar extends Component {
  state = {
    year: 0,
    month: 0,
    day: 0,
    currentDate: this.props.date,
  };

  handleChangeMonth = (event) => {
    const direction = event.target.dataset.direction * 1;
    if (this.state.month + direction < 0) {
      this.setState((prevState) => ({
        month: 11,
        year: prevState.year - 1,
      }));
    } else if (this.state.month + direction > 11) {
      this.setState((prevState) => ({
        month: 0,
        year: prevState.year + 1,
      }));
    } else {
      this.setState((prevState) => ({
        month: prevState.month + direction,
      }));
    }
  };

  handleChangeOption(e) {
    this.props.runReservationService(e);
    this.deleteStyleFromSelected();
    this.props.setDate(e.target.dataset.key);
    e.target.classList.add("selected");
    this.setState({
      currentDate: e.target.dataset.key,
    });
  }

  goToCurrentDate() {
    this.deleteStyleFromSelected();
    const currentDate = this.props.formatDate(new Date());
    this.props.setDate(currentDate);
    this.setState({
      currentDate: currentDate,
    });
    this.getDate();
  }

  deleteStyleFromSelected() {
    document
      .querySelectorAll(".day")
      .forEach((element) => element.classList.remove("selected"));
  }

  closeCalendar(e, className) {
    if (!e.target.classList.contains(className)) return;
    this.props.setActive(false);
  }

  dateStringToNumber(date, start, howMuch) {
    return parseInt(date.slice(start, howMuch));
  }

  getDate() {
    this.setState((prevState) => ({
      year: this.dateStringToNumber(prevState.currentDate, 6, 10),
      month: this.dateStringToNumber(prevState.currentDate, 3, 5) - 1,
      day: this.dateStringToNumber(prevState.currentDate, 0, 2),
    }));
  }

  componentDidMount() {
    this.getDate();
  }

  render() {
    return (
      <div
        className={this.props.active ? "back-calendar active" : "back-calendar"}
        onClick={(e) => this.closeCalendar(e, "back-calendar")}
      >
        <div className={this.props.active ? "calendar active" : "calendar"}>
          <CalendarContent
            year={this.state.year}
            month={this.state.month}
            currentSelectedDate={this.state.currentDate}
            click={this.handleChangeOption.bind(this)}
            formatter={this.props.formatterOfNumbers}
          />
          <InteractiveButtons
            closeCalendar={this.closeCalendar.bind(this)}
            goToCurrentDate={this.goToCurrentDate.bind(this)}
          />
          <Arrows changeMonth={this.handleChangeMonth} />
        </div>
      </div>
    );
  }
}

export default Calendar;
