import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    loginUser: false,
    user: null,
    
    allUser:[],
    userError: null,
    error: null,
    ischeckUser: false,
    emailSend: false,
    userProfileError: null,
    setLoginUser: false,
    loadingUser: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.user = action.payload;
      state.loginUser = true;
    },
    getAllUser: (state, action) => {
      state.allUser = action.payload;
    },
    setLoginUser: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.user = action.payload;
      state.loginUser = true;
    },
    setError: (state, action) => {
      state.loadingUser = false;
      state.error = action.payload;
    },
    setUserInfo: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.user = action.payload;
    },
    setIscheckUser: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.ischeckUser = true;
    },
    setLogOut: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.user = null;
      state.loginUser = false;
    },
    setSendEmil: (state, action) => {
      state.loadingUser = false;
      state.error = null;
      state.emailSend = true;
    },
    setUserProfileError: (state, action) => {
      state.loadingUser = false;
      state.userProfileError = action.payload;
    },
    setLoading: (state, action) => {
      state.loadingUser = action.payload;
    },
  },
});

export const {
  setUser,
  setLoginUser,
  setLogOut,
  setError,
  getAllUser,
  setUserInfo,
  setIscheckUser,
  setSendEmil,
  setUserProfileError,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;