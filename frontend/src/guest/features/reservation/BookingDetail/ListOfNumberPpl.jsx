import { useContext, useEffect, useState } from "react";

import ReservationContext from "../ReservationContext";

import { fetchAllTables } from "../../../../services/reservations";

function ListOfNumberPpl() {
  const [isOpen, setIsOpen] = useState(false);
  const [maxNumberOfSeats, setMaxNumberOfSeats] = useState(0);

  const { amountPeople, setDataFormState, focus, blur } =
    useContext(ReservationContext);

  const getMaxNumberOfSeats = async () => {
    let maxNumberOfSeats = 0;
    let seattables = await fetchAllTables();

    seattables.forEach((seatTable) =>
      seatTable.maxSeats > maxNumberOfSeats
        ? (maxNumberOfSeats = seatTable.maxSeats)
        : maxNumberOfSeats
    );
    setMaxNumberOfSeats(maxNumberOfSeats);
  };

  const createOptions = () => {
    const options = [];
    for (let i = 1; i <= maxNumberOfSeats; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const removeStyles = (e) => {
    if (isOpen) {
      e.currentTarget.blur();
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    getMaxNumberOfSeats();
  }, []);

  const handleFocus = (e) => {
    if (window.innerWidth < 500 || window.innerHeight < 400) e.target.size = 5;
    focus(e);
  };

  const handleBlur = (e) => {
    if (window.innerWidth < 500 || window.innerHeight < 400) e.target.size = 1;
    blur(e);
  };

  const handleChange = (e) => {
    setDataFormState("amountPeople", e.target.value);
  };

  return (
    <select
      className="select-people"
      data-to-validate
      name="people"
      value={amountPeople}
      onMouseUp={(e) => removeStyles(e)}
      onFocus={(e) => handleFocus(e)}
      onBlur={(e) => handleBlur(e)}
      onChange={(e) => handleChange(e)}
    >
      {createOptions()}
    </select>
  );
}

export default ListOfNumberPpl;
