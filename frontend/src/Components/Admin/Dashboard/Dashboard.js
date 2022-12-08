import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes, clearDishes } from "../../../actions/adminActions";

import ProgressBars from "./ProgressBars";
import MonotonicChart from "./MonotonicChart";
import BarChartDishes from "./BarChartDishes";
import RecentUpdates from "./RecentUpdates";

import { reservationsDataChart } from "../data/charts";
import { pathToApi } from "../../PathToAPI";

import "./dashboard.css";
import BarChartReservations from "./BarChartReservations";
import { useState } from "react";

const Dashboard = () => {
  const { dishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const loadData = () => {
    dispatch(fetchDishes());
  };

  //TEMPORARY GET RESERVATIONS FOR CHARTS
  // ========================================
  const [reservations, setReservations] = useState([]);
  const getAllReservations = () => {
    let listReservations = [];
    fetch(pathToApi + "reservation")
      .then((response) => {
        if (response.ok) return response.json();
        throw Error(response.status);
      })
      .then((reservations) => {
        reservations.forEach((reservation) => {
          listReservations.push(reservation);
        });
      })
      .catch((error) => console.log(error));
    setReservations(listReservations);
  };
  // ========================================

  const disconnectData = () => {
    dispatch(clearDishes());
  };

  useEffect(() => {
    loadData();
    getAllReservations();
    return () => {
      disconnectData();
    };
  }, []);
  return (
    <div className="dashboard">
      <div className="header">Panel</div>
      <ProgressBars dishes={dishes} reservations={reservations} />
      <div className="row">
        <BarChartDishes
          dishes={dishes}
          width="100%"
          height={400}
          color="#f89235"
          title="Wykres dań"
        />
        <RecentUpdates />
      </div>
      <div className="row">
        <div className="chart"></div>
        <BarChartReservations
          reservations={reservations}
          width="100%"
          height={400}
          color="#8884d8"
          title="Rezerwacje (bieżący tydzień)"
        />
      </div>
      <MonotonicChart
        dataChart={reservationsDataChart}
        width="100%"
        height={400}
        color="#afe950"
        title="Odwiedzający (bieżący tydzień)"
      />
    </div>
  );
};

export default Dashboard;
