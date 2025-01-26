import { useEffect, useState, useContext } from "react";

import ReservationContext from "./ReservationContext";

import { MdOutlineClose } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const animationDuration = 1.5;
const animationDelay = 3;

function Announcement() {
  const { setDataFormState } = useContext(ReservationContext);
  const [componentLifetime, setComponentLifetime] = useState(
    animationDuration + animationDelay
  );

  const style = {
    "--duration": animationDuration / 2 + "s",
    "--delay": animationDelay + "s",
  };

  const handleClick = () => {
    setComponentLifetime(0);
  };

  useEffect(() => {
    setTimeout(() => {
      return setDataFormState("submitReservation", false);
    }, componentLifetime * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentLifetime]);

  return (
    <div className="announcement" style={style}>
      <div className="icon">
        <FaCheckCircle />
      </div>
      <div className="message">Dziękujemy za rezerwacje</div>
      <div className="exit" onClick={handleClick}>
        <MdOutlineClose />
      </div>
    </div>
  );
}

export default Announcement;
