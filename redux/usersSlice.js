import { createSlice } from "@reduxjs/toolkit";
import api from "../api";

const userSlice = createSlice({
  name: "USERS",
  initialState: {
    isLoggedIn: false,
    token: null,
    userId: null,
  },
  reducers: {
    restoreToken(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
      state.userId = null;
    },
  },
});

const { logIn, logOut } = userSlice.actions;

export const userLogin = (form) => async (dispatch) => {
  try {
    console.log("form: ", form);
    const {
      data: { token, userId },
    } = await api.logIn(form);
    if (userId !== null && token) {
      console.log("token, userId: ", token, userId);
      dispatch(logIn({ token, userId }));
    } else {
      dispatch(logOut());
    }
  } catch (error) {
    alert("잘못된 유저/패스워드 입니다.");
  }
};

export const userReducerName = userSlice.name;
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions; //{logIN, logOut} 가져다 다른곳에 쓰기
