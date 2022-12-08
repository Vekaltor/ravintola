import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartReservations = (props) => {
  const { reservations, width, height, color, title } = props;

  const getDatesOfCurrentWeek = () => {
    let dates = [];
    let indexCurrentDayOfWeek = new Date().getDay();
    let todayDate = changePatternDate(
      new Date().toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "numeric",
        year: "numeric",
      })
    );
    let monthAndYear = todayDate.slice(2, todayDate.length);
    let firstDayOfWeek = getFirstDayOfWeek(todayDate, indexCurrentDayOfWeek);

    let day = firstDayOfWeek;
    for (let i = 1; i <= 7; i++) {
      if (day < 9) day = "0" + day;
      let date = day + monthAndYear;
      dates.push(date);
      day++;
    }
    return dates;
  };

  const getFirstDayOfWeek = (todayDate, indexCurrentDayOfWeek) => {
    let indexCurrentDayOfMonth = todayDate.slice(1, 2);
    let indexFirstDayOfWeek =
      indexCurrentDayOfMonth - indexCurrentDayOfWeek + 1;
    return indexFirstDayOfWeek;
  };

  const changePatternDate = (date) => {
    return date.replaceAll(".", "/");
  };

  const countReservationsByDate = (date, reservations) => {
    let counter = 0;
    reservations.forEach((reservation) => {
      if (reservation.dateTime.includes(date)) counter++;
    });
    return counter;
  };

  const createDataToChart = (reservations) => {
    let dataToChart = [];
    const datesOfWeek = getDatesOfCurrentWeek();

    datesOfWeek.forEach((date) => {
      let objectDataChart = {
        date: date,
        reservations: countReservationsByDate(date, reservations),
      };
      dataToChart.push(objectDataChart);
    });
    return dataToChart;
  };

  const dataToChart = () => {
    return createDataToChart(reservations);
  };

  const reservationsDataChart = dataToChart();

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width={width} height={height}>
        <BarChart data={reservationsDataChart}>
          {console.log(reservationsDataChart)}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="liczba rezerwacji" dataKey="reservations" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartReservations;
