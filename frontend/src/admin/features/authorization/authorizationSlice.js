import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchLogin, logoutHandle} from "../../../services/auth";

export const loginAsync = createAsyncThunk(
    "authorization/login",
    async (data, thunkAPI) => {
      try {
        const {token} = await fetchLogin(data);
          sessionStorage.setItem("jwtToken", token);
        return true;
      } catch (error) {
        return thunkAPI.rejectWithValue("Niepoprawny login lub hasło");
      }
    }
);

function getValueAuthFromSessionStorage() {
  const token = sessionStorage.getItem("jwtToken");
  return !!token;
}

const initialState = {
  auth: getValueAuthFromSessionStorage(),
  error: null,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      logoutHandle();
      state.auth = false;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginAsync.fulfilled, (state) => {
          state.auth = true;
          state.error = null;
        })
        .addCase(loginAsync.rejected, (state, action) => {
          state.auth = false;
          state.error = action.payload;
        });
  },
});

export const { logout } = authorizationSlice.actions;

export default authorizationSlice.reducer;
