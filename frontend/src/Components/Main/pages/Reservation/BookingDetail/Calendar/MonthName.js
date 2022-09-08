import { monthNames } from "./Data";

function MonthName({ month, year }) {
  return (
    <div className="month-year">
      <span>{monthNames[month]}</span>
      <span>{year}</span>
    </div>
  );
}

export default MonthName;
