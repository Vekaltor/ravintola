import { LOGGING_ADMIN, LOGOUT_ADMIN } from "../actions/types";

const initialState = {
  auth: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGGING_ADMIN:
      return { auth: true };
    case LOGOUT_ADMIN:
      return { auth: false };
    default:
      return state;
  }
}
