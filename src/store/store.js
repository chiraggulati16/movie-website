import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import homeReducer from "./slices/home"


const store = configureStore({
    reducer: {
        authReducer: authReducer,
        homeReducer: homeReducer
    },
})

export default store;