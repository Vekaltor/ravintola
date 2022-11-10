import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { loggingAdmin } from "../../../actions/rootActions";
import { useDispatch, useSelector } from "react-redux";

import LoginForm from "./LoginForm";
import ImageLoginForm from "./ImageLoginForm";

// TESTED VARIOUBLES
const data = { login: "admin", pass: "admin" };

function Login() {
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.root);

  function handleClick(login, password) {
    if (data.login === login && data.pass === password) waitingTime();
    else setError("Niepoprawny login lub hasło.");
  }

  function waitingTime() {
    setIsLogging(true);
    //In the future get data(login pass) from API => loading time)
    setTimeout(() => {
      dispatch(loggingAdmin());
      navigate("/admin");
    }, 2000);
  }

  useEffect(() => {
    if (auth) navigate("/admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elementLoading = (
    <div className="loading-login">
      <span className="loader"></span>
      <span className="title">
        Logowanie <span className="dots"></span>
      </span>
    </div>
  );

  return (
    <div className="login">
      {isLogging ? elementLoading : null}
      <div>
        <LoginForm click={handleClick} error={error} setError={setError} />
        <ImageLoginForm />
      </div>
    </div>
  );
}

export default Login;
