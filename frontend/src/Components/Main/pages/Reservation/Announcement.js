import { MdOutlineClose } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Announcement() {
  return (
    <div className="announcement">
      <div className="icon">
        <FaCheckCircle />
      </div>
      <div className="message">Dziękujemy za rezerwacje</div>
      <div className="exit">
        <MdOutlineClose />
      </div>
    </div>
  );
}

export default Announcement;
