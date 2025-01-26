import LabelTextInput from "./LabelTextInput";

import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GiSmartphone } from "react-icons/gi";

function Form() {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-form">
      <h3>Szczegóły kontaktu</h3>
      <form>
        <LabelTextInput title={"Imię"} icon={<BsFillPersonFill />} />
        <LabelTextInput title={"Email"} icon={<AiOutlineMail />} />
        <LabelTextInput title={"Numer telefonu"} icon={<GiSmartphone />} />
        <label>
          Wiadomość
          <textarea />
        </label>

        <input type="submit" value="Wyślij wiadomość" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Form;
