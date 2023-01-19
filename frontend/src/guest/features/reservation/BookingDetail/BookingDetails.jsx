import React, { useContext, useEffect, useState } from "react";

import ReservationContext from "../ReservationContext";
import ReservationService from "../ReservationService";

import DayInput from "./DayInput";
import PepopleAmountInput from "./PeopleAmountInput";
import TimeInput from "./TimeInput";

import { hours } from "../../../../data/hours";

function BookingDetails() {
  const [listReservations, setListReservations] = useState([]);
  const [listTables, setListTables] = useState([]);
  const [listHours, setListHours] = useState(hours);

  const { date, amountPeople, setDataFormState } =
    useContext(ReservationContext);

  const service = new ReservationService();

  const runReservationService = async () => {
    await fetchData();
    if (listReservations.length) {
      setDataFormState("time", "");
      initializeReservationService();
    }
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
    runReservationService();
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
