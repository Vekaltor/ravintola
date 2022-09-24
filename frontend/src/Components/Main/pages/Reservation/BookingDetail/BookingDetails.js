import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import ReservationService from "../ReservationService";

import DayInput from "./DayInput";
import PepopleAmountInput from "./PeopleAmountInput";
import TimeInput from "./TimeInput";

function BookingDetails({
  date,
  time,
  amountPeople,
  setFormState,
  formatDate,
  padTo2Digits,
  ...props
}) {
  const hours = [
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const [listReservations, setListReservations] = useState([]);
  const [listTables, setListTables] = useState([]);
  const [listHours, setListHours] = useState(hours);

  const service = new ReservationService();

  const runReservationService = (e) => {
    if (!time) {
      setFormState("isValidate", false);
      setFormState("submitReservation", false);
    }
    if (e.target.name === "people" || e.target.className.includes("day"))
      setFormState("time", "");
    fetchData();
    initializeReservationService();
  };

  function initializeReservationService() {
    let filteredReservations = service.filterReservationsByDate(
      listReservations,
      date
    );
    let filteredTables = service.filterTablesByAmountPeople(
      listTables,
      amountPeople
    );
    let listHours = service.getListOfAvailableHours(
      filteredReservations,
      filteredTables,
      hours
    );
    setFormState("availableTablesByHour", service.availableTables);
    setListHours(listHours);
  }

  async function fetchData() {
    const tables = await service.getAllTables();
    const reservations = await service.getAllReservations();
    setListTables(tables);
    setListReservations(reservations);
  }

  useEffect(() => {
    fetchData();
  }, [date, amountPeople]);

  return (
    <div>
      <DayInput
        date={date}
        setDate={setFormState}
        formatDate={formatDate}
        padTo2Digits={padTo2Digits}
        runReservationService={runReservationService}
        {...props}
      />
      <TimeInput
        time={time}
        listHours={listHours}
        selectedDate={date}
        selectedAmountPeople={amountPeople}
        setTime={setFormState}
        runReservationService={runReservationService}
        {...props}
      />
      <PepopleAmountInput
        amountPeople={amountPeople}
        setAmountPeople={setFormState}
        runReservationService={runReservationService}
        {...props}
      />
    </div>
  );
}

export default BookingDetails;
