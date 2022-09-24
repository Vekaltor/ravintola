import React from "react";

import FormReservation from "./FormReservation";

import "./Reservation.css";

function Reservation(props) {
  return (
    <div onLoad={props.load()}>
      <div className="reservation-start-view">
        <div>
          <div className="decoration"></div>
          <div className="header-text">
            <h1>rezerwacja</h1>
          </div>
          <div className="decoration"></div>
        </div>
      </div>
      <FormReservation />
    </div>
  );
}

export default Reservation;
