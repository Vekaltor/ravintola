import { useState } from "react";
import IconForInput from "../IconForInput";
import ReservationDataValidator from "../ReservationDataValidator";

function Input({
  title,
  name,
  type,
  value,
  icon: Icon,
  setState,
  focusIconStyle,
  blurIconStyle,
  input,
}) {
  const [keyCode, setKeyCode] = useState();
  const validator = new ReservationDataValidator(".form-reservation > form");

  const getKeyCode = (e) => {
    setKeyCode(e.keyCode);
  };

  const handleFocus = (e) => {
    validator.removeInvalidStyles(e);
    focusIconStyle(e);
  };

  return (
    <label>
      <span>{title}</span>
      <div>
        <IconForInput icon={Icon} />
        <input
          data-to-validate
          name={name}
          value={value}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => blurIconStyle(e)}
          type={type}
          onInput={(e) => {
            if (name === "phone") input(e, keyCode);
            setState(e.target.value);
          }}
          onKeyDown={name === "phone" ? (e) => getKeyCode(e) : null}
        />
      </div>
    </label>
  );
}

export default Input;
