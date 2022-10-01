import React, { useState, useRef } from "react";

import IconForInput from "../IconForInput";
import ListOfHours from "./ListOfHours/ListOfHours";

import ReservationDataValidator from "../ReservationDataValidator";

import { MdOutlineAccessTime } from "react-icons/md";
import ReservationContext from "../ReservationContext";

function TimeInput({ listHours }) {
  const [isActive, setIsActive] = useState(false);

  const validator = new ReservationDataValidator(".form-reservation > form");

  const elementListOfHoursRef = useRef();

  const handleClick = (e) => {
    disableScroll();
    elementListOfHoursRef.current.scrollTo(0, 0);
    validator.removeInvalidStyles(e.target);
    setIsActive(true);
  };

  const closeList = (className, e) => {
    enableScroll();
    if (!e.target.classList.contains(className)) return;
    setIsActive(false);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <ReservationContext.Consumer>
      {({ time, focus, blur, setDataFormState }) => (
        <>
          <label>
            <span>Godzina</span>
            <div>
              <IconForInput icon={<MdOutlineAccessTime />} />
              <input
                data-to-validate
                name="time"
                type="text"
                value={time}
                readOnly
                onFocus={focus}
                onBlur={blur}
                onClick={(e) => handleClick(e)}
              />
            </div>
          </label>
          <ListOfHours
            listHours={listHours}
            active={isActive}
            setActive={setIsActive}
            setDataFormState={setDataFormState}
            closeList={closeList}
            elementListOfHoursRef={elementListOfHoursRef}
          />
        </>
      )}
    </ReservationContext.Consumer>
  );
}

export default TimeInput;
