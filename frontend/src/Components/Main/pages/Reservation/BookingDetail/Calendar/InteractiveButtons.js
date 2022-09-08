import { AiFillCloseCircle } from "react-icons/ai";
import { IoTodayOutline } from "react-icons/io5";

function InteractiveButtons({ closeCalendar, goToCurrentDate }) {
  return (
    <div className="interactive-buttons">
      <div onClick={() => goToCurrentDate()}>
        <IoTodayOutline />
        Dzisiaj
      </div>
      <div className="exit" onClick={(e) => closeCalendar(e, "exit")}>
        <AiFillCloseCircle className="exit" />
        Zamknij
      </div>
    </div>
  );
}

export default InteractiveButtons;
