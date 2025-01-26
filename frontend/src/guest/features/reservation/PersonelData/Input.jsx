import { useState } from "react";

import ReservationDataValidator from "../ReservationDataValidator";

import IconForInput from "../IconForInput";

function Input(props) {
  const {
    title,
    name,
    type,
    value,
    icon: Icon,
    setDataFormState,
    focus,
    blur,
    input,
  } = props;

  const [keyCode, setKeyCode] = useState();
  const validator = new ReservationDataValidator(".form-reservation > form");

  const getKeyCode = (e) => {
    setKeyCode(e.keyCode);
  };

  const handleFocus = (e) => {
    validator.removeInvalidStyles(e.target);
    focus(e);
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
          onBlur={(e) => blur(e)}
          type={type}
          onInput={(e) => {
            if (name === "phone") input(e, keyCode);
            setDataFormState(e.target.name, e.target.value);
          }}
          onKeyDown={name === "phone" ? (e) => getKeyCode(e) : null}
        />
      </div>
    </label>
  );
}

export default Input;
