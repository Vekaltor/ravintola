import { LOGGING_ADMIN, LOGOUT_ADMIN } from "../actions/types";

function getValueAuthFromSessionStorage() {
  const value = sessionStorage.getItem("auth");
  if (value === "true") return true;
  else if (value === "false") return false;
  else return undefined;
}
const initialState = {
  auth: getValueAuthFromSessionStorage() || false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_ADMIN:
      return { ...state, auth: action.payload };
    case LOGOUT_ADMIN:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
}
