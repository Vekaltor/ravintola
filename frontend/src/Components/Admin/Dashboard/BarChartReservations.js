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
    let date = new Date();
    let indexCurrentDayOfWeek = getIndexOfCurrentWeekday(date);
    let stringDate = date.toLocaleDateString("en-GB");

    let dateFirstDayOfWeek = getDateFirstDayOfWeek(
      stringDate,
      indexCurrentDayOfWeek
    );

    return setDatesOfCurrentWeek(dateFirstDayOfWeek);
  };

  const setDatesOfCurrentWeek = (dateFirstDayOfWeek) => {
    let dates = [];
    let [day, month, year] = getDayMonthYear(dateFirstDayOfWeek);
    let daysInCurrentMonth = new Date(year, month, 0).getDate();

    for (let i = 1; i <= 7; i++, day++) {
      if (day > daysInCurrentMonth) {
        day = 1;
        month++;
        if (month > 12) {
          month = 1;
          year++;
        }
      }
      let date = day + "/" + month + "/" + year;

      dates.push(formatDate(date));
    }

    return dates;
  };

  const getIndexOfCurrentWeekday = (date) => {
    let index = date.getDay();
    if (index === 0) index = 7;
    return index;
  };

  const getDateFirstDayOfWeek = (todayDate, indexCurrentDayOfWeek) => {
    let [day, month, year] = getDayMonthYear(todayDate);
    let dateFirstDayOfWeek = todayDate;

    for (let i = 1; i < indexCurrentDayOfWeek; i++) {
      day--;
      if (day === 0) {
        month--;
        if (month === 0) {
          month = 12;
          year--;
        }
        let daysInCurrentMonth = new Date(year, month, 0).getDate();
        day = daysInCurrentMonth;
      }
      dateFirstDayOfWeek = day + "/" + month + "/" + year;
    }

    return formatDate(dateFirstDayOfWeek);
  };

  const getNameWeekday = (date) => {
    const [dd, mm, yyyy] = date.split("/");
    return new Date(yyyy, mm - 1, dd).toLocaleDateString("pl-PL", {
      weekday: "long",
    });
  };

  const formatDate = (date) => {
    let [day, month, year] = getDayMonthYear(date);
    if (day <= 9) day = prefixZero(day);
    if (month <= 9) month = prefixZero(month);
    return day + "/" + month + "/" + year;
  };

  const getDayMonthYear = (date) => {
    let reversedDate = date.split("/").reverse().join(",");
    date = new Date(reversedDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return [day, month, year];
  };

  const prefixZero = (number) => {
    return "0" + number;
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
      let day = getNameWeekday(date);
      let objectDataChart = {
        day: day,
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
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
