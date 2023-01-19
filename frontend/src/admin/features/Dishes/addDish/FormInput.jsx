import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { name, errorMessage, changeDetail, mark, ...inputProps } = props;

  let orginalName = name[0];
  let polishName = errorMessage ? name[1] + " *" : name[1];

  const handleClick = () => {
    setFocused(true);
  };

  return (
    <div className="element">
      <label htmlFor={orginalName}>{polishName}</label>
      <input
        id={orginalName}
        name={orginalName}
        focused={focused.toString()}
        onBlur={handleClick}
        onInput={changeDetail}
        {...inputProps}
      />
      {mark ? <span className="mark">{mark}</span> : null}
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
