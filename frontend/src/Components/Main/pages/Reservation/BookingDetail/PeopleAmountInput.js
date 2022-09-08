import ListOfNumberPpl from "./ListOfNumberPpl";
import IconForInput from "../IconForInput";

import { BsFillPeopleFill } from "react-icons/bs";

function PepopleAmountInput({
  amountPeople,
  setAmountPeople,
  runReservationService,
  focusIconStyle,
  blurIconStyle,
}) {
  return (
    <>
      <label>
        <span>Liczba osób</span>
        <div>
          <IconForInput icon={<BsFillPeopleFill />} />
          <ListOfNumberPpl
            amountPeople={amountPeople}
            setAmountPeople={setAmountPeople}
            focus={focusIconStyle}
            blur={blurIconStyle}
            runReservationService={runReservationService}
          />
        </div>
      </label>
    </>
  );
}

export default PepopleAmountInput;
