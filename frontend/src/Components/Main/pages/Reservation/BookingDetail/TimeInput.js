import { useState } from "react";

import IconForInput from "../IconForInput";
import ListOfHours from "./ListOfHours/ListOfHours";

import ReservationDataValidator from "../ReservationDataValidator";

import { MdOutlineAccessTime } from "react-icons/md";

function TimeInput({
  time,
  listHours,
  setTime,
  runReservationService,
  focusIconStyle,
  blurIconStyle,
}) {
  const [isActive, setIsActive] = useState(false);

  const validator = new ReservationDataValidator(".form-reservation > form");

  const handleClick = (e) => {
    const listOfHours = document.querySelector(".list-of-hours");
    listOfHours.scrollTo(0, 0);
    disableScroll();

    removeStyleFromPrevSelected();
    validator.removeInvalidStyles(e);

    runReservationService(e);
    setIsActive(true);
  };

  const addStyleToSelectedTarget = (target) => {
    target.classList.add("selected");
    enableScroll();
  };

  const removeStyleFromPrevSelected = () => {
    if (!document.querySelector(".list-of-hours span.selected")) return;
    const prevSelected = document.querySelector(".list-of-hours span.selected");
    prevSelected.classList.remove("selected");
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
            onFocus={focusIconStyle}
            onBlur={blurIconStyle}
            onClick={(e) => handleClick(e)}
          />
        </div>
      </label>
      <ListOfHours
        listHours={listHours}
        active={isActive}
        setActive={setIsActive}
        setTime={setTime}
        removeStyleFromPrevSelected={removeStyleFromPrevSelected}
        addStyleToSelectedTarget={addStyleToSelectedTarget}
        closeList={closeList}
      />
    </>
  );
}

export default TimeInput;
