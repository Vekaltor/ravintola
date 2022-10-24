import { useState } from "react";

import { useLocation } from "react-router-dom";

import { loggingAdmin, logoutAdmin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";

const data = { login: "admin", pass: "admin" };

function Login() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  let location = useLocation();
  // const [incorrectData, setIncorrectData] = useState(false);

  const dispatch = useDispatch();
  // const { admin } = useSelector((state) => state.admin);

  function handleChangeLogin(target) {
    setLogin(target.value);
  }

  function handleChangePass(target) {
    setPass(target.value);
  }

  function handleClick() {
    if (data.login === login && data.pass === pass) {
      dispatch(loggingAdmin());
    } else {
      clearData();
      // setIncorrectData(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleFocus() {
    // setIncorrectData(false);
  }

  function clearData() {
    setPass("");
    setLogin("");
  }

  return (
    <div className="row m-auto login">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="d-flex flex-wrap justify-content-center"
      >
        <div className="mb-3 row w-100">
          <label className="col-sm-4 col-form-label text-start" htmlFor="login">
            nazwa:
          </label>
          <div className="col-sm">
            <input
              type="text"
              className="form-control form-control-sm"
              id="login"
              value={login}
              onChange={(e) => handleChangeLogin(e.target)}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <div className="mb-5 row w-100">
          <label className="col-sm-4 col-form-label text-start" htmlFor="pass">
            hasło:
          </label>
          <div className="col-sm">
            <input
              type="password"
              className="form-control form-control-sm"
              id="pass"
              value={pass}
              onChange={(e) => handleChangePass(e.target)}
              onFocus={handleFocus}
            />
          </div>
        </div>
        <button className="btn btn-dark px-4 py-2" onClick={handleClick}>
          Zaloguj
        </button>
      </form>
    </div>
  );
}

export default Login;
