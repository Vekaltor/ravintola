import { useEffect } from "react";
import { useState } from "react";

import { pathToApi } from "../../../../PathToAPI";

function ListOfNumberPpl({
  amountPeople,
  setAmountPeople,
  focus,
  blur,
  runReservationService,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxNumberOfSeats, setMaxNumberOfSeats] = useState(0);

  const getMaxNumberOfSeats = () => {
    let maxNumberOfSeats = 0;
    fetch(pathToApi + "seattable")
      .then((response) => response.json())
      .then((seatTables) => {
        seatTables.forEach((seatTable) =>
          seatTable.maxSeats > maxNumberOfSeats
            ? (maxNumberOfSeats = seatTable.maxSeats)
            : maxNumberOfSeats
        );
        setMaxNumberOfSeats(maxNumberOfSeats);
      });
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
    runReservationService(e);
    setAmountPeople(e.target.value);
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
