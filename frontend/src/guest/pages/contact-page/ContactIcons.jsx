import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhone, FaFacebookF } from "react-icons/fa";

function ContactIcons() {
  return (
    <div className="all-contacts">
      <div>
        <FaPhone />
        <div className="more-info">+48 424 424 424</div>
      </div>
      <div>
        <MdOutlineAlternateEmail />
        <div className="more-info">ravintolabook@gmail.com</div>
      </div>
      <div>
        <FaFacebookF />
        <div className="more-info">www.facebook.com/ravintola</div>
      </div>
    </div>
  );
}

export default ContactIcons;
