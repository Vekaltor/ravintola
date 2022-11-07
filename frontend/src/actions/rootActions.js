import { LOGGING_ADMIN, LOGOUT_ADMIN } from "./types";

export const loggingAdmin = () => {
  sessionStorage.setItem("auth", true);
  return {
    type: LOGGING_ADMIN,
    payload: true,
  };
};

export const logoutAdmin = () => {
  sessionStorage.setItem("auth", false);
  return {
    type: LOGOUT_ADMIN,
    payload: false,
  };
};
