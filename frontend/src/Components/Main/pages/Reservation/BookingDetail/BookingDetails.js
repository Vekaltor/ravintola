import React, { useContext, useEffect, useState } from "react";

import ReservationContext from "../ReservationContext";
import ReservationService from "../ReservationService";

import DayInput from "./DayInput";
import PepopleAmountInput from "./PeopleAmountInput";
import TimeInput from "./TimeInput";

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

function BookingDetails() {
  const [listReservations, setListReservations] = useState([]);
  const [listTables, setListTables] = useState([]);
  const [listHours, setListHours] = useState(hours);

  const { date, time, amountPeople, setDataFormState } =
    useContext(ReservationContext);

  const service = new ReservationService();

  const runReservationService = (e) => {
    console.log("run service");
    fetchData();

    if (!time) {
      setDataFormState("isValidate", false);
      setDataFormState("submitReservation", false);
    } else {
      setDataFormState("time", "");
    }

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
    setDataFormState("availableTablesByHour", service.availableTables);
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
    if (listReservations.length > 0) runReservationService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, amountPeople]);

  return (
    <div>
      <DayInput />
      <TimeInput listHours={listHours} />
      <PepopleAmountInput />
    </div>
  );
}

export default BookingDetails;
