import React, { Component } from "react";

import Arrows from "./Arrows";

import CalendarContent from "./CalendarContent";
import InteractiveButtons from "./InteractiveButtons";

import "./Calendar.css";

class Calendar extends Component {
  state = {
    currentDate: this.props.date,
    year: 0,
    month: 0,
  };

  changeMonth = (event) => {
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

  changeDay(e) {
    this.deleteStyleForSelected();
    this.props.setDataFormState("date", e.target.dataset.key);
    e.target.classList.add("selected");
    this.setState({
      currentDate: e.target.dataset.key,
    });
  }

  goToCurrentDate() {
    this.deleteStyleForSelected();
    const currentDate = this.props.formatDate(new Date());
    this.props.setDataFormState("date", currentDate);
    this.setState({
      currentDate: currentDate,
    });
    this.setYearAndMonth();
  }

  deleteStyleForSelected() {
    document
      .querySelectorAll(".day")
      .forEach((element) => element.classList.remove("selected"));
  }

  closeCalendar(e, className) {
    if (!e.target.classList.contains(className)) return;
    this.props.setActive(false);
  }

  setYearAndMonth() {
    this.setState((prevState) => ({
      year: this.dateStringToNumber(prevState.currentDate, 6, 10),
      month: this.dateStringToNumber(prevState.currentDate, 3, 5) - 1,
    }));
  }

  dateStringToNumber(date, start, howMuch) {
    return parseInt(date.slice(start, howMuch));
  }

  componentDidMount() {
    this.setYearAndMonth();
  }

  render() {
    const classActive = this.props.active ? " active" : null;

    return (
      <div
        className={`back-calendar ${classActive}`}
        onClick={(e) => this.closeCalendar(e, "back-calendar")}
      >
        <div className={`calendar ${classActive}`}>
          <CalendarContent
            year={this.state.year}
            month={this.state.month}
            currentSelectedDate={this.state.currentDate}
            click={this.changeDay.bind(this)}
            formatter={this.props.formatterOfNumbers}
          />
          <InteractiveButtons
            closeCalendar={this.closeCalendar.bind(this)}
            goToCurrentDate={this.goToCurrentDate.bind(this)}
          />
          <Arrows changeMonth={this.changeMonth} />
        </div>
      </div>
    );
  }
}

export default Calendar;
