import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes, clearDishes } from "../../../actions/adminActions";

import ProgressBars from "./ProgressBars";
import MonotonicChart from "./MonotonicChart";
import BarChartDishes from "./BarChartDishes";
import RecentUpdates from "./RecentUpdates";

import "./dashboard.css";

const Dashboard = () => {
  const { dishes } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  const loadDishes = () => {
    dispatch(fetchDishes());
  };

  const disconnectDishes = () => {
    dispatch(clearDishes());
  };

  useEffect(() => {
    loadDishes();
    return () => {
      disconnectDishes();
    };
  }, []);
  return (
    <div className="dashboard">
      <div className="header">Panel</div>
      <ProgressBars dishes={dishes} />
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

      <MonotonicChart
        width="100%"
        height={400}
        color="#8884d8"
        title="Rezerwacje (bieżący tydzień)"
      />
    </div>
  );
};

export default Dashboard;
