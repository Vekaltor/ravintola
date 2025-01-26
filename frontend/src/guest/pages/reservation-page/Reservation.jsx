import React, { lazy, Suspense } from "react";

import InitialView from "../../components/InitialView";
import LoadingComponent from "../../../common/components/LoadingComponent"

import "./Reservation.css";

const FormReservation = lazy(() => import("../../features/reservation/FormReservation"))

function Reservation() {
  return (
    <div>
      <InitialView className="reservation-start-view" title="rezerwacja" />
      <Suspense fallback={<LoadingComponent />}>
        <FormReservation />
      </Suspense>
    </div>
  );
}

export default Reservation;
