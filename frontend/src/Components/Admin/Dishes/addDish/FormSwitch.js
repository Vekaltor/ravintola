import { useRef } from "react";

const FormSwitch = ({ name, changeDetail }) => {
  const switchRef = useRef();

  let orginalName = name[0];
  let polishName = name[1];

  const existsRef = switchRef.current ? switchRef.current.checked : false;
  const getValue = !existsRef ? true : false;

  return (
    <div className="other-settings">
      <span>{polishName}</span>
      <label className="switch">
        <input
          ref={switchRef}
          type="checkbox"
          name={orginalName}
          value={getValue}
          onChange={changeDetail}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default FormSwitch;
