import { useState } from "react";

import ErrorLogin from "./ErrorLogin";
import Validator from "./LoginValidator";

import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ error, setError, click }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  function handleValidator(login, password) {
    const validator = new Validator(login, password);
    validator.validate();
    if (!validator.getIsValidate()) {
      let error = validator.getMessage();
      setError(error);
      return false;
    }
    return true;
  }

  function handleChangeLogin(target) {
    setLogin(target.value);
  }

  function handleChangePass(target) {
    setPass(target.value);
  }

  function addActiveStyles(target) {
    const parent = target.parentNode;
    parent.classList.add("active");
  }

  function removeActiveStyles(target) {
    const parent = target.parentNode;
    parent.classList.remove("active");
  }

  function handleClick() {
    setError("");
    if (!handleValidator(login, pass) === false) click(login, pass);
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFocus(target) {
    addActiveStyles(target);
  }

  function handleBlur(target) {
    removeActiveStyles(target);
  }

  function clearData() {
    setPass("");
    setLogin("");
  }

  const errorComponent = error !== "" ? <ErrorLogin message={error} /> : null;

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <div>
        <span className="info">
          <h3>Logowanie</h3>
          <span>Logowanie do panelu administracyjnego</span>
        </span>
        <label>
          <span className="icon">
            <FaUser />
          </span>
          <input
            type="text"
            placeholder="login"
            value={login}
            onChange={(e) => handleChangeLogin(e.target)}
            onFocus={(e) => handleFocus(e.target)}
            onBlur={(e) => handleBlur(e.target)}
          />
        </label>

        <label>
          <span className="icon">
            <FaLock />
          </span>
          <input
            type="password"
            placeholder="hasło"
            value={pass}
            onChange={(e) => handleChangePass(e.target)}
            onFocus={(e) => handleFocus(e.target)}
            onBlur={(e) => handleBlur(e.target)}
          />
        </label>
      </div>
      {errorComponent}
      <div className="button-login">
        <button onClick={handleClick}>Logowanie</button>
      </div>
    </form>
  );
};

export default LoginForm;
