import ListOfNumberPpl from "./ListOfNumberPpl";
import IconForInput from "../IconForInput";

import { BsFillPeopleFill } from "react-icons/bs";

function PepopleAmountInput() {
  return (
    <>
      <label>
        <span>Liczba osób</span>
        <div>
          <IconForInput icon={<BsFillPeopleFill />} />
          <ListOfNumberPpl />
        </div>
      </label>
    </>
  );
}

export default PepopleAmountInput;
