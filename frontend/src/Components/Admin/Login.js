import { useNavigate } from "react-router-dom";

import { loggingAdmin } from "../../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { useEffect } from "react";

// TESTED VARIOUBLES
const data = { login: "admin", pass: "admin" };

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.admin);

  function handleClick(login, pass) {
    if (data.login === login && data.pass === pass) {
      dispatch(loggingAdmin());
      navigate("/admin");
    }
  }

  useEffect(() => {
    if (auth) navigate("/admin");
  }, []);

  return (
    <div className="row m-auto login">
      <LoginForm click={handleClick} />
    </div>
  );
}

export default Login;
