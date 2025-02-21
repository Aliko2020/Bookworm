import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/appTheme/darkModeSlice";
import authReducer from "./features/auth/authSlice";


const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
        auth: authReducer
    }
})

export default store;