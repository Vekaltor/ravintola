import { pathToApi } from "../../../api/pathToAPI";
import {
  fetchAddReservation,
  fetchAllReservations,
  fetchAllTables,
} from "../../../api/reservations";

export default class ReservationService {
  constructor() {
    this.availableTables = [];
  }

  getAllReservations() {
    // let listReservations = [];
    // fetch(pathToApi + "reservation")
    //   .then((response) => {
    //     if (response.ok) return response.json();
    //     throw Error(response.status);
    //   })
    //   .then((reservations) => {
    //     reservations.forEach((reservation) => {
    //       listReservations.push(reservation);
    //     });
    //   })
    //   .catch((error) => console.log(error));
    // return listReservations;
    return fetchAllReservations();
  }

  getAllTables() {
    // let tablesByAmountPeople = [];
    // fetch(pathToApi + "seattable")
    //   .then((response) => {
    //     if (response.ok) return response.json();
    //     throw Error(response.status);
    //   })
    //   .then((tables) => {
    //     tables.forEach((table) => {
    //       tablesByAmountPeople.push(table);
    //     });
    //   })
    //   .catch((error) => console.log(error));
    return fetchAllTables();
  }

  filterReservationsByDate(listReservations, selectedDate) {
    const filteredReservations = [];
    listReservations.forEach((reservation) => {
      if (reservation.dateTime.includes(selectedDate))
        filteredReservations.push(reservation);
    });
    return filteredReservations;
  }

  filterTablesByAmountPeople(listTables, selectedAmountPeople) {
    const filteredTables = [];
    listTables.forEach((table) => {
      if (this.#isCorrectlyScopeSeats(table, selectedAmountPeople))
        filteredTables.push(table);
    });
    return filteredTables;
  }

  #isCorrectlyScopeSeats(table, amountPeople) {
    if (amountPeople)
      return (
        table.minSeats <= amountPeople * 1 && table.maxSeats >= amountPeople * 1
      );
  }

  getListOfAvailableHours(reservations, tables, listHours) {
    let newListHours = listHours;
    reservations = this.#filterReservationsByAmountPeople(reservations, tables);
    newListHours = this.#modifyListHours(reservations, tables, listHours);
    return newListHours;
  }

  #filterReservationsByAmountPeople = (reservations, tables) => {
    let maxSeats = this.#getMaxSeatsFromFilteredTables(tables);
    let minSeats = this.#getMinSeatsFromFilteredTables(tables);
    const filteredReservations = [];
    reservations.forEach((reservation) => {
      if (
        reservation.peopleAmount >= minSeats &&
        reservation.peopleAmount <= maxSeats
      )
        filteredReservations.push(reservation);
    });
    return filteredReservations;
  };

  #getMaxSeatsFromFilteredTables(tables) {
    let maxSeats = tables[0].maxSeats;
    tables.forEach((table) => {
      if (table.maxSeats > maxSeats) maxSeats = table.maxSeats;
    });
    return maxSeats;
  }

  #getMinSeatsFromFilteredTables(tables) {
    let minSeats = tables[0].minSeats;
    tables.forEach((table) => {
      if (table.minSeats < minSeats) minSeats = table.maxSeats;
    });
    return minSeats;
  }

  #modifyListHours(reservations, tables, listHours) {
    let listHoursToModified = listHours;
    listHoursToModified.forEach((hour) => {
      let reservationsThisHour = this.#filterReservationsByHour(
        reservations,
        hour
      );
      if (this.#hourHasAvailableTables(reservationsThisHour, tables)) {
        this.#getAvailableTablesByHour(reservationsThisHour, tables, hour);
        return;
      }
      if (this.#hourWithoutReservations(reservationsThisHour)) return;
      listHoursToModified = this.#deleteHourFromList(listHoursToModified, hour);
    });
    return listHoursToModified;
  }

  #filterReservationsByHour(reservations, hour) {
    return reservations.filter((reservation) =>
      reservation.dateTime.includes(hour)
    );
  }

  #hourWithoutReservations(reservations) {
    return reservations.length < 1 ? true : false;
  }

  #hourHasAvailableTables(reservations, tables) {
    let listTables = [];
    reservations.forEach((reservation) => {
      let busyTable = tables.find((table) => table.id === reservation.tableId);
      if (busyTable) listTables.push(busyTable);
    });
    return listTables.length !== tables.length ? true : false;
  }

  #deleteHourFromList(listhours, hour) {
    let hourToDelete = hour;
    let newListHours = [];
    newListHours = listhours.filter((hour) => hour !== hourToDelete);
    return newListHours;
  }

  #getAvailableTablesByHour(reservations, tables, hour) {
    const availableTablesPerHour = [hour];
    let tablesToCheck = tables;
    if (reservations.length > 0) {
      reservations.forEach((reservation) => {
        tablesToCheck = tablesToCheck.filter(
          (table) => table.id !== reservation.tableId
        );
      });
    }
    availableTablesPerHour.push(tablesToCheck);
    this.availableTables.push(availableTablesPerHour);
  }

  async makeReservation(props) {
    const {
      date,
      time,
      amountPeople,
      name,
      surname,
      email,
      availableTablesByHour,
    } = props;

    let submitReservation = true;
    const dateTime = date + " " + time;

    const tableId = this.#getFirstAvailableTableId(availableTablesByHour, time);

    const reservationObject = {
      id: null,
      name: name,
      surname: surname,
      email: email,
      peopleAmount: amountPeople,
      dateTime: dateTime,
      tableId: tableId,
    };
    await fetchAddReservation(reservationObject).then((err) => {
      if (err) submitReservation = false;
    });
    return submitReservation;
  }

  #getFirstAvailableTableId(hoursAndAvailablesTables, time) {
    let firstAvailableTable = null;
    hoursAndAvailablesTables.forEach((element) => {
      let hour = element[0];
      let listAvailableTables = element[1];
      if (hour === time) {
        firstAvailableTable = listAvailableTables[0].id;
      }
    });
    return firstAvailableTable;
  }
}
