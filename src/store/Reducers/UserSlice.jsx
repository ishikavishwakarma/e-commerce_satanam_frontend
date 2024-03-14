import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },

    removeUser: (state, action) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
