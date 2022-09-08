import { useState } from "react";

import Calendar from "./Calendar/Calendar";

import { BsCalendarPlus } from "react-icons/bs";
import IconForInput from "../IconForInput";

function DayInput({
  date,
  setDate,
  formatDate,
  padTo2Digits,
  runReservationService,
  focusIconStyle,
  blurIconStyle,
}) {
  const [isActive, setIsActive] = useState(false);
  // const [date, setDate] = useState(formatDate(date));

  return (
    <>
      <label>
        <span>Dzień</span>
        <div>
          <IconForInput icon={<BsCalendarPlus />} />
          <input
            data-to-validate
            name="day"
            readOnly
            type="text"
            value={date}
            onFocus={focusIconStyle}
            onBlur={blurIconStyle}
            onClick={() => setIsActive(true)}
          />
        </div>
      </label>
      <Calendar
        date={date}
        setDate={setDate}
        active={isActive}
        setActive={setIsActive}
        formatterOfNumbers={padTo2Digits}
        formatDate={formatDate}
        runReservationService={runReservationService}
      />
    </>
  );
}

export default DayInput;
