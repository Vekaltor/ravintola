import ButtonReservation from "../../pages/home-page/ButtonReservation";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";

function MiddleBar() {
  return (
    <div>
      <div className="footer-btnReservation">
        <ButtonReservation text="rezerwacja online" />
      </div>
      <div>
        <h2>follow</h2>
        <div>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitterSquare />
          </span>
          <span>
            <FaSnapchatSquare />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MiddleBar;
