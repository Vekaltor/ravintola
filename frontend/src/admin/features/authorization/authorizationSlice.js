import { createSlice } from "@reduxjs/toolkit";

function getValueAuthFromSessionStorage() {
  const value = sessionStorage.getItem("auth");
  if (value === "true") return true;
  else if (value === "false") return false;
  else return undefined;
}

const initialState = {
  auth: getValueAuthFromSessionStorage() || false,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    login: (state) => {
      sessionStorage.setItem("auth", true);
      state.auth = true;
    },
    logout: (state) => {
      sessionStorage.setItem("auth", false);
      state.auth = false;
    },
  },
});

export const { login, logout } = authorizationSlice.actions;

export default authorizationSlice.reducer;
