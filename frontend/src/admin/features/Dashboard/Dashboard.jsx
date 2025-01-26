import { useEffect, useState } from "react";

import ProgressBars from "./ProgressBars";
import MonotonicChart from "./MonotonicChart";
import BarChartDishes from "./BarChartDishes";
import BarChartReservations from "./BarChartReservations";
import RecentUpdates from "./RecentUpdates";

import { fetchAllReservations } from "../../../services/reservations";
import { fetchAllDishes } from "../../../services/dishes";

import { reservationsDataChart } from "../../../data/charts";

import "./dashboard.css";

const Dashboard = () => {
  const loadData = () => {
    getAllReservations();
    getAllDishes();
  };

  const [reservations, setReservations] = useState([]);
  const getAllReservations = async () => {
    const listReservations = await fetchAllReservations();
    await new Promise((resolve) => setTimeout(resolve, 700));
    setReservations(listReservations);
  };

  const [dishes, setDishes] = useState([]);
  const getAllDishes = async () => {
    const listDishes = await fetchAllDishes();
    await new Promise((resolve) => setTimeout(resolve, 700));
    setDishes(listDishes);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        id="visitors"
      />
    </div>
  );
};

export default Dashboard;
