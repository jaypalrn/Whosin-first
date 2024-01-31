import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import { userReducer } from "./reducers";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const appReducer = combineReducers({
    userSession: userReducer,
})
const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)
