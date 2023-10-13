import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginState",
  initialState: { value: false },
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export const kakaoSlice = createSlice({
  name: "kakaoState",
  initialState: { value: false },
  reducers: {
    kakaologin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const kakaoAccess = createSlice({
  name: "kakaoAccess",
  initialState: { value: "" },
  reducers: {
    getToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const placeName = createSlice({
  name: "placeName",
  initialState: { value: "" },
  reducers: {
    getplace: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export const { kakaologin } = kakaoSlice.actions;

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    kakao: kakaoSlice.reducer,
    kakaoAccess: kakaoAccess.reducer,
    place: placeName.reducer,
  },
});
