import { useState } from "react";

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

  function handleClick() {
    props.click(login, pass);
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFocus() {
    setIncorrectData(false);
  }

  function clearData() {
    setPass("");
    setLogin("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="">
      <div className="">
        <label className="" htmlFor="login">
          nazwa:
        </label>
        <div className="">
          <input
            type="text"
            className=""
            id="login"
            value={login}
            onChange={(e) => handleChangeLogin(e.target)}
            onFocus={handleFocus}
          />
        </div>
      </div>
      <div className="">
        <label className="" htmlFor="pass">
          hasło:
        </label>
        <div className="">
          <input
            type="password"
            className=""
            id="pass"
            value={pass}
            onChange={(e) => handleChangePass(e.target)}
            onFocus={handleFocus}
          />
        </div>
      </div>
      <button className="" onClick={handleClick}>
        Zaloguj
      </button>
    </form>
  );
};

export default LoginForm;
