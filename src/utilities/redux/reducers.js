import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "name",
    initialState: {
        tokenData: '',
        userData: '',
        isLogin: false,
    },
    reducers: {
        setTokenData: ((state, action) => {
            state.tokenData = action.payload;
        }),
        setUserData: ((state, action) => {
            state.userData = action.payload;
        }),
        setIsLogin: ((state, action) => {
            state.isLogin = action.payload;
        }),
    },
});
export const { setTokenData, setUserData, setIsLogin } = userSlice.actions;
export const userReducer = userSlice.reducer;