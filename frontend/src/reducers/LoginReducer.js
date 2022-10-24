const initialState = {
  auth: {
    token: false,
  },
};

export const actions = {
  loggingAdmin: "LOGGING_ADMIN",
  logoutAdmin: "LOGOUT_ADMIN",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.loggingAdmin:
      return { auth: { token: true } };
    case actions.logoutAdmin:
      return { auth: { token: false } };
    default:
      throw new Error();
  }
}
