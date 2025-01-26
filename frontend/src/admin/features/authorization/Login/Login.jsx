import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginAsync } from "../authorizationSlice";

import LoginForm from "./LoginForm";
import ImageLoginForm from "./ImageLoginForm";

import "./login.css";

function Login() {
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authorization);

  function handleClick(username, password) {
    setIsLogging(true);
    setTimeout(()=>{
      waitingTime(username, password);
    },2000)
  }

  async function waitingTime(username, password) {
    setIsLogging(true);

    try {
      await dispatch(loginAsync({ username, password })).unwrap();
      navigate("/admin");
    } catch (error) {
      setError("Niepoprawny login lub hasło.");
      setIsLogging(false);
    }finally {
      setIsLogging(false)
    }
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
