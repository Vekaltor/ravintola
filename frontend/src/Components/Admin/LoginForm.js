import { useState } from "react";

import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [incorrectData, setIncorrectData] = useState(false);

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
    props.click(login, pass);
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFocus(target) {
    addActiveStyles(target);
    setIncorrectData(false);
  }

  function handleBlur(target) {
    removeActiveStyles(target);
  }

  function clearData() {
    setPass("");
    setLogin("");
  }

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
      <div>
        <button className="" onClick={handleClick}>
          Logowanie
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
