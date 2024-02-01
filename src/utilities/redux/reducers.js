import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "name",
    initialState: {
        tokenData: '',
        userData: '',
        loginData: '',
        isLogin: false,
    },
    reducers: {
        setTokenData: ((state, action) => {
            state.tokenData = action.payload;
        }),
        setUserData: ((state, action) => {
            state.userData = action.payload;
        }),
        setLoginData: ((state, action) => {
            state.loginData = action.payload;
        }),
        setIsLogin: ((state, action) => {
            state.isLogin = action.payload;
        }),
    },
});
export const { setTokenData, setUserData, setLoginData, setIsLogin} = userSlice.actions;
export const userReducer = userSlice.reducer;