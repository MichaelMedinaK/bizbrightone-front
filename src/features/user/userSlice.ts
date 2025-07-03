import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types/user";

const initialState: UserState = {
  isLoggedIn: false,
  email: undefined,
  name: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; name: string }>) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    // Acción para desloguear
    logout: (state) => {
      state.isLoggedIn = false;
      state.email = undefined;
      state.name = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
