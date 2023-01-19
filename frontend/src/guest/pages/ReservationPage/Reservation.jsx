import React from "react";

import FormReservation from "../../features/reservation/FormReservation";
import InitialView from "../../components/InitialView";

import "./Reservation.css";

function Reservation() {
  return (
    <div>
      <InitialView className="reservation-start-view" title="rezerwacja" />
      <FormReservation />
    </div>
  );
}

export default Reservation;
