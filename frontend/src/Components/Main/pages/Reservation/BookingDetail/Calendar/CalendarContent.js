/* eslint-disable eqeqeq */
import React from "react";

import MonthName from "./MonthName";
import TagDays from "./TagDays";

function CalendarContent({
  year,
  month,
  currentSelectedDate,
  click,
  formatter,
}) {
  const days = [];

  function addDayToArray(day, month, year, click, className) {
    days.push(
      <div
        data-key={setDateCorrectly(day, month + 2, year)}
        key={setDateCorrectly(day, month + 2, year)}
        className={className}
        onClick={click}
        onTouchStart={click}
      >
        {day}
      </div>
    );
  }

  function prevMonthDays(firstDayIndex, prevLastDay) {
    for (let day = firstDayIndex; day > 0; day--) {
      addDayToArray(prevLastDay - day + 1, month - 2, year, click, "day");
    }
  }

  function currentMonthDays(lastDay) {
    for (let day = 1; day <= lastDay; day++) {
      if (
        day === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear()
      ) {
        addDayToArray(day, month - 1, year, click, "day current-month today");
      } else if (isSelectedElement(day, month, year)) {
        addDayToArray(
          day,
          month - 1,
          year,
          click,
          "day current-month selected"
        );
      } else {
        addDayToArray(day, month - 1, year, click, "day current-month");
      }
    }
  }

  function nextMonthDays() {
    let nextDays = 42 - days.length;
    for (let day = 1; day <= nextDays; day++) {
      addDayToArray(day, month, year, click, "day");
    }
  }

  function createDays() {
    const lastDay = new Date(year, month + 1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    let firstDayIndex = new Date(year, month, 1).getDay() - 1;

    //Fixing incorrectly display Sunday as Last day in week
    if (firstDayIndex === -1) firstDayIndex = 6;

    prevMonthDays(firstDayIndex, prevLastDay);
    currentMonthDays(lastDay);
    nextMonthDays();
  }

  function setDateCorrectly(day, month, year) {
    day = formatter(day);
    month = formatter(month);
    if (month == 13) {
      month = "01";
      year++;
      return day + "/" + month + "/" + year;
    } else if (month == 0) {
      month = "12";
      year--;
      return day + "/" + month + "/" + year;
    } else return day + "/" + month + "/" + year;
  }

  function isSelectedElement(day, month, year) {
    const dayCurrentSelectedDate = currentSelectedDate.slice(0, 2);
    const monthCurrentSelectedDate = currentSelectedDate.slice(3, 5) - 1;
    const yearCurrentSelectedDate = currentSelectedDate.slice(6, 10);
    if (
      day == dayCurrentSelectedDate &&
      month == monthCurrentSelectedDate &&
      year == yearCurrentSelectedDate
    )
      return true;
    return false;
  }

  return (
    <div className="content">
      <MonthName month={month} year={year} />
      <TagDays />
      <div className="days" key={"cos"}>
        {createDays()}
        {days}
      </div>
    </div>
  );
}

export default CalendarContent;
