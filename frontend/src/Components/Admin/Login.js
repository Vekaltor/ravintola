import { useNavigate } from "react-router-dom";

import { loggingAdmin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import ImageLoginForm from "./ImageLoginForm";

// TESTED VARIOUBLES
const data = { login: "admin", pass: "admin" };

function Login() {
  const [isLogging, setIsLogging] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.admin);

  function handleClick(login, pass) {
    if (data.login === login && data.pass === pass) waitingTime();
  }

  function waitingTime() {
    setIsLogging(true);
    setTimeout(() => {
      dispatch(loggingAdmin());
      navigate("/admin");
    }, 3000);
  }

  useEffect(() => {
    if (auth) navigate("/admin");
  }, []);

  const elementLoading = (
    <div className="loading-login">
      <span className="loader"></span>
      <span className="title">Logowanie ...</span>
    </div>
  );

  return (
    <div className="login">
      {isLogging ? elementLoading : null}

      <div>
        <LoginForm click={handleClick} />
        <ImageLoginForm />
      </div>
    </div>
  );
}

export default Login;
