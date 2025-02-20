import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/appTheme/darkModeSlice"

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer
    }
})

export default store;