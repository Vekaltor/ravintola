import { LOGGING_ADMIN, LOGOUT_ADMIN } from "./types";

export const loggingAdmin = () => {
  return {
    type: LOGGING_ADMIN,
    payload: true,
  };
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT_ADMIN,
    payload: false,
  };
};
