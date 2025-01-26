import { useContext, useState } from "react";

import Calendar from "../../calendar/Calendar";
import IconForInput from "../../reservation/IconForInput";

import ReservationContext from "../../reservation/ReservationContext";

import { BsCalendarPlus } from "react-icons/bs";

function DayInput() {
  const [isActive, setIsActive] = useState(false);

  const { date, focus, blur, setDataFormState, padTo2Digits, formatDate } =
    useContext(ReservationContext);

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
            onFocus={focus}
            onBlur={blur}
            onClick={() => setIsActive(true)}
          />
        </div>
      </label>
      <Calendar
        date={date}
        setDataFormState={setDataFormState}
        active={isActive}
        setActive={setIsActive}
        formatterOfNumbers={padTo2Digits}
        formatDate={formatDate}
      />
    </>
  );
}

export default DayInput;
